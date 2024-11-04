# Chapter 11:
## D3.js Scatter Plot Activity Worksheet


### Activity Overview

In this activity, you will enhance and modify a D3.js scatter plot to improve its interactivity and usability, guided by the principles outlined in Chapter 11 of Munzner's textbook. You will explore data visualization techniques and apply your learning about data manipulation, particularly focusing on the concept of selection.

### Selection in Data Manipulation

**Selection** is a fundamental aspect of data manipulation, allowing users to interactively filter and highlight specific data points within a visualization. This technique helps in analyzing subsets of data, facilitating deeper insights into the relationships and patterns within the data.

In the context of the scatter plot, selection can be implemented in various ways:

- **Highlighting Specific Data Points:** When users hover over or click on a data point, it can be visually emphasized (e.g., changing color or size) to draw attention to it. This allows users to focus on particular observations within the larger dataset.

- **Filtering Data:** Users can select categories or ranges of data to be displayed or hidden, enabling comparisons and more focused analysis. This can be done through interactive legends or selection boxes.

- **Displaying Detailed Information:** Upon selection, tooltips or detail panels can show additional information about the selected data point, enriching the context of the analysis.

By utilizing these selection techniques, you can enhance the interactivity and effectiveness of your D3.js visualizations.

### Objectives

- Understand and manipulate a D3.js scatter plot.
- Implement interactive features such as tooltips and dynamic filtering.
- Apply concepts from Chapter 11 to improve data representation.
- Present your findings and modifications to the class.

### Preparation

1. **Access the Code:**
    - Locate the D3.js scatter plot code in the **Week 10** folder of the [Course GitHub repository](insert-link-to-repo).

2. **Dataset:**
    - You may use the dataset provided in the repository or choose another dataset related to your interests (e.g., health statistics, environmental data).

### Activity Steps

#### Step 1: Review the Code (15 minutes)

- Read through the provided D3.js scatter plot code. Pay attention to:
    - Data preparation and mapping for x and y coordinates.
    - Scaling for the axes and circles.
    - Interactivity and rendering of the circles.
    - Legend creation and filtering options.

#### Step 2: Modify the Data (30 minutes)

1. **Change the Dataset:**
    - Modify the `data` parameter in the `scatter_plot` function to visualize a different dataset of your choice.
    - Discuss how changing the dataset affects the visualization.

#### Step 3: Apply Data Manipulation Concepts (30 minutes)

1. **Implement Tooltips:**
    - Add a tooltip feature that displays information about each data point when hovered over. Include details relevant to the dataset (e.g., name, x value, y value).

   Example tooltip implementation:
   ```javascript
   .on("mouseover", (event, d) => {
       const tooltip = d3.select("body").append("div")
           .attr("class", "tooltip")
           .style("position", "absolute")
           .style("background", "lightgrey")
           .style("padding", "5px")
           .style("border-radius", "5px")
           .html(`Name: ${d.name}<br>${xCol}: ${d[xCol]}<br>${yCol}: ${d[yCol]}`)
           .style("left", (event.pageX + 5) + "px")
           .style("top", (event.pageY - 28) + "px");
   })
   .on("mouseout", () => {
       d3.select(".tooltip").remove();
   });
   ```

2. **Enhance the Legend:**
    - Modify the legend functionality to allow filtering of data points based on their categories. Clicking a legend color should toggle the visibility of the corresponding category in the scatter plot.

3. **Explore Data Aggregation and Comparison:**
    - Implement a feature that aggregates data (e.g., calculate averages) and visualize this in a secondary chart (e.g., a bar chart next to the scatter plot) to compare the original data against the aggregated values.

#### Step 4: Reflection and Presentation (20 minutes)

- Prepare a brief presentation (3-5 minutes) to share your modifications and findings with the class. Discuss:
    - What changes you made and the reasoning behind them based on Chapter 11's concepts.
    - How these changes impact user interaction and data understanding.

### Submission

- Submit a link to your modified code on GitHub or share your code with the instructor.
- Be prepared to present your findings during the class discussion.

### Additional Resources

- **Munzner, T. (2014).** Visualization Analysis and Design, Chapter 11: Data Manipulation.
- [D3.js Official Documentation](https://d3js.org/)
- [ObservableHQ D3.js Examples](https://observablehq.com/@d3/)

