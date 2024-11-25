## Example 02 - RGB Color Cubes

In Example 01, you learnt how to set up the scene, add camera, and items. In this example we will 
use the same tools to make the following visualization:
<img src='../images/cube.gif'>

# The code in `js/myThreeJSV001.js`

### 1. `myThreeJSV001()`

To simplify the use ThreeJS, I have made this function that returns all the redundant code for
each ThreeJS based visualization. In every ThreeJS visualization, scene, camera, rendered and controls are needed.

The function parameters are
```js
 const spaceColor="#e5e5e5"
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.z = 10;

```
Which indicate the position of the camera, and create the instances of scene and camera.

Then using the `THREE.OrbitControls` controller instance is created that allows zoom and pan.

```js
    const controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableZoom = true;
```


Finally, the function returns the needed instances.


#### The function Returns
- **`scene`**: The main Three.js `Scene` object.
- **`camera`**: A `PerspectiveCamera` configured with:
    - Field of view: 75 degrees
    - Aspect ratio: Matches the browser window
    - Near and far clipping planes: 0.1 and 1000
    - Default position: `z = 10`
- **`renderer`**: A `WebGLRenderer` with:
    - Antialiasing enabled
    - Background color set to `#e5e5e5`
    - Responsive resizing based on window size
- **`controls`**: Orbit controls for interactive camera rotation and zoom.

### 2. Usage Example in the `index.html` file: 

Using the function ``myThreeJSV001()`` the instances needed are initiated, and then using the ``cube``
 function from ThreeJS the cubes are added to the specified positions. Meanwhile, the d3js function d3.rgb is used to create the colors.

The cube function receives:``cube(scene instance, color, x,y,z )``.

```javascript
        let tools = myThreeJSV001()
        let scene = tools[0];
        let camera = tools[1];
        let renderer = tools[2];

          for(let i= 0; i<=5 ; i+=.40){
                for(let j= 0; j<=5 ; j+=.40){
                    for(let k= 0; k<=5 ; k+=.40){
                        cube(scene,d3.rgb(parseInt(i*50),parseInt(j*50),parseInt(k*50)).hex(),i,j,k)
                    }}}

```

### 3. render()

After the elements are added to the scene, and the renderer instance is used to render the visualization.