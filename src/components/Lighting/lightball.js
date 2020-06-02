import React, {useRef} from 'react';
import {useFrame} from "react-three-fiber";

// const Lightball = () => {
//     const light = useRef()
//     useFrame(() => {
//         light.current.rotation.y += -0.005
//     })
//     return (
//         <group ref={light}>
//             {/*<ambientLight intensity={1.5} />*/}
//             <pointLight args={['rgb(255, 240, 163)' , 1.2, 20]} castShadow position={[2, 1.5, 5]} />
//         </group>
//     );
// };

const Ball = () => {
    return (
        <mesh>
            <sphereBufferGeometry attach='geometry' args={[0.02, 10, 10]}/>
            <meshBasicMaterial attach='material' color='rgb(255, 240, 163)'/>
        </mesh>
    )
}
const Lightball = () => {
    const position = [Math.floor(Math.random() * 8) - 4, Math.floor(Math.random() * 6) - 3, Math.floor(Math.random() * 8) - 4]
    return (
      <group>
          <pointLight position={position} args={['rgb(255, 240, 163)' , 2, 5, 2]} castShadow penumbra={1}>
              <Ball position={position}/>
          </pointLight>
      </group>
    )
};

export default Lightball;
