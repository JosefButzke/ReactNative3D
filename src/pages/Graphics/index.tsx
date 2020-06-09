import React from 'react';
import ExpoTHREE, { THREE } from 'expo-three';
import { View as GraphicsView } from 'expo-graphics';

export default class Graphics extends React.Component {
  componentDidMount() {
    THREE.suppressExpoWarnings()
  }

  render() {
    return (
      <GraphicsView
        style={{ flex: 1 }}
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
      />
    );
  }

  onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      pixelRatio,
      width,
      height,
    });

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, width / height, 0.1, 1000);

    this.camera.position.set(1, 1, 1);
    this.camera.lookAt(0, 0, 0);



    this.scene.add(new THREE.AmbientLight(0xffffff));

    await this.loadModel();

  };

  loadModel = async () => {
    const obj = {
      "hotel.obj": require('../../../static/shoe/shoe.obj'),
      "hotel.mtl": require('../../../static/shoe/shoe.mtl'),
    }

    const model = await ExpoTHREE.loadAsync(
      [obj['hotel.obj'], obj['hotel.mtl']],
      null,
      obj
    );

    // this ensures the model will be small enough to be viewed properly
    ExpoTHREE.utils.scaleLongestSideToSize(model, 1);

    this.scene.add(model)

  };

  onRender = () => {
    this.scene.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };
}