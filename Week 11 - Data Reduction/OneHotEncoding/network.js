function simulate(data,svg,images=false)
{
    const width = parseInt(svg.attr("viewBox").split(' ')[2])
    const height = parseInt(svg.attr("viewBox").split(' ')[3])
    const main_group = svg.append("g")
        .attr("transform", "translate(0, 50)")

   //calculate degree of the nodes:
    const node_degree={}; //initiate an object
   d3.map(data.links, d=>
        {
            if(d.source in node_degree)
            {
                node_degree[d.source]++
            }
            else{
                node_degree[d.source]=1
            }
            if(d.target in node_degree)
            {
                node_degree[d.target]++
            }
            else{
                node_degree[d.target]=1
            }
   });

    const scale_radius = d3.scaleLinear()
        .domain(d3.extent(Object.values(node_degree)))
        .range([5,20])
    const scale_link_stroke_width = d3.scaleLinear()
        .domain(d3.extent(data.links,d=> d.weight))
        .range([1,3])


    const link_elements = main_group.append("g")
        .attr('transform',`translate(${width/2},${height/2})`)
        .selectAll(".line")
        .data(data.links)
        .enter()
        .append("line")
        .style("stroke-width", d=>scale_link_stroke_width(d.weight));

    const node_elements = main_group.append("g")
        .attr('transform', `translate(${width / 2},${height / 2})`)
        .selectAll(".items")
        .data(data.nodes)
        .enter()
        .append('g')


    const getCategories = (data, cat) => {
        // Step 1: Get all the categories from the nodes
        const categories = data.nodes.map(d => d[cat])
            .map(d => d.split(","))
            .flat().map(d => d.trim())


        // Step 2: Count the occurrences of each category
        const categoryCount = categories.reduce((count, category) => {
            count[category] = (count[category] || 0) + 1;
            return count;
        }, {});

        // Step 3: Sort the categories by their count (popularity)
        const sortedCategories = Object.entries(categoryCount)
            .sort((a, b) => b[1] - a[1])  // Sort by count, descending
            .map(entry => entry[0]);  // Get the category name

        // Step 4: Return the sorted categories as a set (or as an array, if you prefer)
        return sortedCategories;
    };


    const colorScale=(Genre)=>{
        const Genres= getCategories(data,"Genre");
        const index = Genres.indexOf(Genre)
        if(index<9){
            return d3.schemeTableau10[index]
        }
        else{
            return "gray"
        }

}

    node_elements.append("circle")
        .attr("r", d=> {
            console.log(d)
            return node_degree[d.id]
        })
        .attr("fill",  (d) =>{
            if(d["Genre"].split().length > 0){
               return colorScale(d["Genre"].split(",")[0])
            }
            else{
                return colorScale(d["Genre"])
            }
        })


    node_elements.append("image")
        .attr("class","images")
        .attr("xlink:href", d => d.poster)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("clip-path", "circle(50%)");



    node_elements.append("text")
        .attr("class","label")
        .attr("text-anchor","middle")
        .text(d=>d.title)




    const ForceSimulation = d3.forceSimulation(data.nodes)
        .force("collide",
            d3.forceCollide().radius((d,i)=> scale_radius(node_degree[d.id])*.4))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .force("link",d3.forceLink(data.links)
            .id(d=>d.id)
            .distance(d => d.weight * 0.05)
            .strength(d=>d.weight)
        )
        .force("charge", d3.forceManyBody().strength(-100).distanceMax(80).distanceMin(d=>scale_radius(node_degree[d.id])))
        .on("tick", ticked);

    function ticked()
    {

    node_elements
        .attr('transform', (d)=>`translate(${d.x},${d.y})`)

        link_elements
            .attr("x1",d=>d.source.x)
            .attr("x2",d=>d.target.x)
            .attr("y1",d=>d.source.y)
            .attr("y2",d=>d.target.y)
        }


    svg.call(d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([1, 12])
        .on("zoom", zoomed));
    function zoomed({transform}) {
        main_group.attr("transform", transform);
    }




}
