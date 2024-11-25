# 3D Visualization Using Three.js

This project demonstrates the creation of a simple 3D scene using the Three.js library. The scene includes a single cube (box geometry) rendered in a web browser, with basic interaction using orbit controls.

## Features
- A 3D scene with a camera, renderer, and a cube mesh.
- Adjustable camera view using orbit controls.
- Responsive rendering based on the browser window size.

## Code Breakdown

### 1. Setting Up the Environment
- **Scene Initialization**: A `THREE.Scene` object is created to hold all 3D elements.
- **Camera Configuration**: A `PerspectiveCamera` is set up with a field of view of 75 degrees, an aspect ratio matching the browser window, and near/far clipping planes at 0.1 and 1000 units. The camera's position is set at `z = 10`.
- **Renderer Setup**: A `WebGLRenderer` is created with anti-aliasing enabled and a background color of `#e5e5e5`. The renderer's size dynamically adjusts with the browser window.

### 2. Adding 3D Elements
- **Geometry**: A cube (`BoxGeometry`) with dimensions `1x1x1` is created.
- **Material**: A `MeshBasicMaterial` with a red surface color (`rgb(200, 1, 1)`) is applied.
- **Mesh**: The geometry and material are combined into a mesh. The mesh is positioned at `(1, 1, 1)` with no initial rotation.

### 3. Interaction and Animation
- **Orbit Controls**: Enables camera rotation and zoom using the mouse.
- **Responsive Rendering**: Listens for window resize events to update the renderer and camera's aspect ratio.
- **Animation Loop**: Uses `requestAnimationFrame` for smooth rendering of the scene.

### 4. Visualization
- The cube mesh is added to the scene, and the renderer continuously updates the display to reflect changes in the scene or camera.

## Requirements
- Include the following libraries:
    - [Three.js](https://threejs.org/)
    - OrbitControls script from Three.js examples.

## How to Use
1. Download the necessary scripts (`three.min.js` and `OrbitControls.js`) and place them in the `libs` directory.
2. Open the `index.html` file in a modern web browser.
3. Interact with the 3D scene using the mouse to rotate and zoom.
