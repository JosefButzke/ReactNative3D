import React from 'react';
import ExpoTHREE, { THREE } from 'expo-three';
import { View as GraphicsView } from 'expo-graphics';

const Graphics: React.FC = () => {
  let scene;
  let camera;
  let renderer;


  const onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
    renderer = new ExpoTHREE.Renderer({
      gl,
      pixelRatio,
      width,
      height,
    });

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75, width / height, 0.1, 1000);

    camera.position.set(1, 1, 1);
    camera.lookAt(0, 0, 0);


    scene.add(new THREE.AmbientLight(0xffffff));

    await loadModel();

  };

  const loadModel = async () => {
    // const obj = {
    //   "hotel.obj": require('../../../static/antena/hotel.obj'),
    //   "hotel.mtl": require('../../../static/antena/hotel.mtl'),
    //   "metal.png": require('../../../static/antena/metal.png'),
    // }



    // const model = await ExpoTHREE.loadAsync(
    //   [obj['hotel.obj'], obj['hotel.mtl']],
    //   null,
    //   obj
    // );


    // const materials = await ExpoTHREE.loadMtlAsync({ asset: require('../../../static/antena/hotel.mtl') })
    // console.log(materials)

    const model = await ExpoTHREE.loadObjAsync({ asset: require('../../../static/antena/hotel.obj'), mtlAsset: require('../../../static/antena/hotel.mtl') });


    ExpoTHREE.utils.scaleLongestSideToSize(model, 1);


    scene.add(model);


  };

  const onRender = () => {
    scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  return (
    <GraphicsView
      style={{ flex: 1, backgroundColor: 'blue' }}
      onContextCreate={onContextCreate}
      onRender={onRender}
    />
  );
}

export default Graphics