import React, {Fragment, Suspense, useEffect, useState} from 'react';
import {Canvas} from "react-three-fiber";
import {useTransition, a} from "react-spring";
import NameModel from "./3d_name";
import {OrbitControls} from "drei";
import Lightball from "./components/Lighting/lightballs";
import lock from './assets/lock.svg'
import './App.css'
import * as THREE from 'three'

const Loading = () => {
    const [finished, set] = useState(false)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        THREE.DefaultLoadingManager.onLoad = () => set(true)
        THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
            setWidth((itemsLoaded / itemsTotal) * 200)
    }, [])

    const props = useTransition(finished, null, {
        from: { opacity: 1, width: 0 },
        leave: { opacity: 0 },
        update: { width },
    })

    return props.map(
        ({ item: finished, key, props: { opacity, width } }) =>
            !finished && (
                <a.div className="loading" key={key} style={{ opacity }}>
                    <div className="loading-bar-container">
                        <a.div className="loading-bar" style={{ width }} />
                    </div>
                </a.div>
            ),
    )
}

function App() {
    const [isLock, setIsLock] = useState(false)
    return (
      <Fragment>
          <Canvas camera={{fov: 35, position: [0, 0, 8]}}>
              <Suspense fallback={null}>
                  <NameModel/>
              </Suspense>
              <Lightball/>
              <OrbitControls enabled={isLock} enablePan={false}/>
          </Canvas>
          <Loading/>
          <img onClick={() => setIsLock(!isLock)} src={lock} alt="lock"/>
      </Fragment>
    )}

export default App;
