import React, {Suspense, useRef} from 'react';
import Lightball from "./lightball";
import {useFrame} from "react-three-fiber";

const Lightballs = () => {
    const group = useRef()
    const nodesBalls = [...new Array(30)]
    useFrame(() => {
        group.current.rotation.y += 0.005;
    });
    return (
        <group ref={group}>
            <Suspense>
                {nodesBalls.map((el , index) => <Lightball key={index}/>)}
            </Suspense>
        </group>
    );
};

export default Lightballs;
