import React, {Fragment, Suspense, useRef, useState} from 'react';
import {Canvas, useFrame} from "react-three-fiber";
import NameModel from "./3d_name";
import {OrbitControls} from "drei";
import Lightball from "./components/Lighting/lightballs";
import lock from './assets/lock.svg'
import './App.css'


function App() {
    const [isLock, setIsLock] = useState(false)
    return (
      <Fragment>
          <Canvas camera={{fov: 10, position: [0, 0, 25]}}>
              <Suspense fallback={null}>
                  <NameModel/>
              </Suspense>
              <Lightball/>
              <OrbitControls enabled={isLock} enablePan={false}/>
          </Canvas>
          <img onClick={() => setIsLock(!isLock)} src={lock} alt="lock"/>
      </Fragment>
    )}

export default App;
