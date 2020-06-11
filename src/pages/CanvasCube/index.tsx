import React, { useRef, useState, useEffect } from 'react';
import { YellowBox, ActivityIndicator, View } from 'react-native';
import { a, useSpring } from 'react-spring/three';
import { Canvas, useFrame } from 'react-three-fiber';
import ExpoTHREE from 'expo-three';
import { Asset } from 'expo-asset';

YellowBox.ignoreWarnings([
  'window.performance.clearMeasures is not implemented',
  'window.performance.clearMarks is not implemented',
  'window.performance.measure is not implemented',
  'window.performance.mark is not implemented',
]);

window.performance.clearMeasures = () => { }
window.performance.clearMarks = () => { }
window.performance.measure = () => { }
window.performance.mark = () => { }

const Cube: React.FC = () => {

  const boxRef = useRef()
  const [model, setModel] = useState();
  const [hovered, setHovered] = useState(true)
  const props = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "orange" : 'green',
  })

  useEffect(() => {
    const loadModel = async () => {
      const assetObj = Asset.fromModule(require('../../../static/shoe/shoe.obj'));
      const assetMtl = Asset.fromModule(require('../../../static/shoe/shoe.mtl'));

      await assetObj.downloadAsync();
      await assetMtl.downloadAsync();


      const model = await ExpoTHREE.loadObjAsync({ asset: assetObj.uri, mtlAsset: assetMtl.uri });
      ExpoTHREE.utils.scaleLongestSideToSize(model, 4);
      ExpoTHREE.utils.alignMesh(model, { y: 0.5 });
      setModel(model);
    }
    loadModel()
  }, [])

  useFrame(() => model && (boxRef.current.rotation.y += 0.01))

  return (
    model ? <primitive ref={boxRef} object={model} /> : null
  )
}

{/* <a.mesh
ref={boxRef}
position={[0, 0, 0]}
scale={props.scale}
onClick={() => setHovered(!hovered)}>
<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
<a.meshPhysicalMaterial attach="material" color={props.color} opacity={1} />
</a.mesh> */}

const CanvasCube: React.FC = () => {


  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[0, 10, 10]} intensity={0.6} />
      <Cube />
    </Canvas>
  )
}

export default CanvasCube