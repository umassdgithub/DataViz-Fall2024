# Geospatial Visualization Using D3JS
 
## DataProcessing

The geospatial data is usually available in three major formats.

- Shapefile: Known as GIS applications format. Consists of multiple files (.shp, .shx, .dbf) that store geometric shapes and their attributes. It supports complex geometries but can be cumbersome due to its multi-file nature.

- GeoJSON: A JSON based format. Encodes geographic data structures like points, lines, and polygons, making it easy to read and manipulate.

- TopoJSON: An extension of GeoJSON that represents geographic features as a set of arcs to reduce file size by eliminating redundancy in geometries. 

In the data processing folder, you will find geoPandas examples, loading and coverting data types.

## Lines
This example shows how to load ```geojson``` files and how to 