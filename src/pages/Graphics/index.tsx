// import React from 'react';
// import ExpoTHREE, { THREE } from 'expo-three';
// import { View as GraphicsView } from 'expo-graphics';

// const Graphics: React.FC = () => {
//   let scene;
//   let camera;
//   let renderer;


//   const onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
//     renderer = new ExpoTHREE.Renderer({
//       gl,
//       pixelRatio,
//       width,
//       height,
//     });

//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(
//       75, width / height, 0.1, 1000);
//     camera.position.set(1, 1, 1);
//     camera.lookAt(0, 0, 0);

//     scene.add(new THREE.AmbientLight(0xffffff));

//     await loadModel();
//   };

//   const loadModel = async () => {


//     // const asset = Asset.fromModule(require('../../../static/space/scene.gltf'))
//     // await asset.downloadAsync()

//     // const uri = asset.localUri;

//     // console.log(asset)

//     // const loader = new GLTFLoader();

//     // const res = await ExpoTHREE.loadArrayBufferAsync({ uri: uri, onProgress: (pro) => console.log(pro) })
//     // console.log(res)

//     // const model = await ExpoTHREE.loadObjAsync({ asset: require('../../../static/shoe/shoescancolormm.obj'), mtlAsset: require('../../../static/shoe/shoescancolormm.mtl') });

//     const model = await ExpoTHREE.loadObjAsync({ asset: require('../../../static/shoe/shoe.obj'), mtlAsset: require('../../../static/shoe/shoe.mtl') });

//     ExpoTHREE.utils.scaleLongestSideToSize(model, 1);
//     ExpoTHREE.utils.alignMesh(model, { x: 0.5, y: 0 });

//     scene.add(model);
//   };

//   const onRender = () => {
//     scene.rotation.y += 0.01;
//     renderer.render(scene, camera);
//   };

//   return (
//     <GraphicsView
//       style={{ flex: 1, backgroundColor: 'blue' }}
//       onContextCreate={onContextCreate}
//       onRender={onRender}
//     />
//   );
// }

// export default Graphics