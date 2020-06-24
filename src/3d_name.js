import React from 'react'
import {useLoader} from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function NameModel(props) {
  const { nodes, materials } = useLoader(GLTFLoader, '/3d_name.glb')
    // const [isHovered, setIsHovered] = useState(false);
    // const letter = useRef();
    // useFrame( () => {
    //     if (isHovered) {
    //         letter.current.rotation.y += 0.005
    //     }
    // }, [isHovered])
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow
            material={nodes.Text.material}
        geometry={nodes.Text.geometry}
        position={[-3.49, -0.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text001.material}
        geometry={nodes.Text001.geometry}
        position={[-2.83, 0.03, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text002.material}
        geometry={nodes.Text002.geometry}
        position={[-2.19, -0.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text003.material}
        geometry={nodes.Text003.geometry}
        position={[-1.53, -0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text004.material}
        geometry={nodes.Text004.geometry}
        position={[-0.62, 0.03, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text005.material}
        geometry={nodes.Text005.geometry}
        position={[-0.19, -0.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text006.material}
        geometry={nodes.Text006.geometry}
        position={[0.35, 0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text007.material}
        geometry={nodes.Text007.geometry}
        position={[0.91, -0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text008.material}
        geometry={nodes.Text008.geometry}
        position={[1.44, -0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text009.material}
        geometry={nodes.Text009.geometry}
        position={[2.17, -0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text010.material}
        geometry={nodes.Text010.geometry}
        position={[2.71, -0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh receiveShadow
            material={nodes.Text011.material}
        geometry={nodes.Text011.geometry}
        position={[3.28, 0.07, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
