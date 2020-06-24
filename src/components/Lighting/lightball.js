import React from 'react';

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
    const position = [Math.random() * 8 - 4, Math.random() * 2.8 - 1.3, Math.random() * 4 - 2]
    return (
        <pointLight position={position} args={['rgb(255, 240, 163)' , 2, 3.5, 2]} castShadow penumbra={1}>
            <Ball position={position}/>
        </pointLight>
    )
};

export default Lightball;
