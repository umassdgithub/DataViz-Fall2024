# Major Assignment 2 (Chapter 8)

- Familiarize yourself with different projection methods and their importance in geospatial visualizations.
- Understand color coding with different scales to effectively communicate data insights.
- Work with Topojson and Geojson files, crucial formats for handling geospatial data.
- Process and filter data to prepare it for visualization.
- Create a static webpage using GitHub's server to showcase your visualizations.

## Assignment (100 Points):

1. **Download Codes:** Download or clone the repository provided in the course materials.

2. **Create Geospatial Visualizations (make 3 choropleth maps in vertical ordering):** Modify the data and create three new geospatial visualizations on one horizontally centered page (use flexbox):
  - **Top (MAP A):** Actual Population in 1980 (10 points)
  - **Middle (MAP B):** Population **change** between 1980 and 2010 in each town (10/100 points)
    - Add interaction (mouse enter/mouse leave) and highlight each town on hover of MAP A and MAP B (20/100 points).
  - **Bottom (MAP C):** Color code (Hue Channel) the map by Gini Index for each **county** in 2019 (30/100 points).

3. **Add Tooltip DIV Element:** Add an HTML DIV element to show the Gini index for each year for each county when the mouse enters the **county** on MAP C. (Optional: consider including additional context, such as population statistics)(20/100 points).

4. **Page Styling:** Add a title (H1) for the assignment at the top center of the page and your name below it (H3). Style the page and center the SVG using a div. Consider color schemes, font choices, and layout suggestions for a professional appearance (10/100 points).

5. **GitHub Webpage:** Create a GitHub webpage for the visualization, ensuring it's publicly accessible (10/100 points).

6. **Bonus Point:** Add a temporal line chart for Gini index change on the tooltip of MAP C and style it properly. Specify how the bonus point can be achieved, focusing on data accuracy and visualization clarity.

**Note:** You only need the Topojson and CSV file in the data folder for this assignment. The FIPS code for counties is provided below for your reference:

```json
[
  {"county": "Barnstable County", "fips_code": 25001},
  {"county": "Berkshire County", "fips_code": 25003},
  {"county": "Bristol County", "fips_code": 25005},
  {"county": "Dukes County", "fips_code": 25007},
  {"county": "Essex County", "fips_code": 25009},
  {"county": "Franklin County", "fips_code": 25011},
  {"county": "Hampden County", "fips_code": 25013},
  {"county": "Hampshire County", "fips_code": 25015},
  {"county": "Middlesex County", "fips_code": 25017},
  {"county": "Nantucket County", "fips_code": 25019},
  {"county": "Norfolk County", "fips_code": 25021},
  {"county": "Plymouth County", "fips_code": 25023},
  {"county": "Suffolk County", "fips_code": 25025},
  {"county": "Worcester County", "fips_code": 25027}
]
```

## Submission:
- Submit your assignment by creating a pull request or sharing the link to your GitHub webpage in the course submission portal.
