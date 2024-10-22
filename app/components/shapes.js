'use client'

import { useRef } from "react";
import {Canvas, useFrame} from "@react-three/fiber"
import * as THREE from "three"


function Box(props){
    const cube = new THREE.BoxGeometry(1, 1, 1);
    const ref = useRef();

    //ref.current.rotation.x += delta/3, ref.current.rotation.y += delta/3

    useFrame(({clock, state}) => {
        ref.current.position.y = -1.5 + Math.sin(clock.getElapsedTime()) * 0.3,
        ref.current.rotation.y += 0.005;
    })

    return(
        <mesh
        {...props}
        ref={ref}
        >
            <lineSegments>
                <edgesGeometry args={[cube]}/>
                <lineBasicMaterial color="red"/>
            </lineSegments>
            <pointLight position={[0, 0, 0]} intensity={0.5}/>
            <ambientLight />
        </mesh>
    )
}


function Pyramid(props){
    const pyramid = new THREE.ConeGeometry(2, 3, 3);
    const ref = useRef();

    useFrame(({clock, state}) => {
        ref.current.position.y = 2.75 + Math.sin(-clock.getElapsedTime()) * 0.3,
        ref.current.rotation.x += 0.005;
    })

    return(
        <mesh
        {...props}
        ref={ref}
        >
            <lineSegments>
                <edgesGeometry args={[pyramid]}/>
                <lineBasicMaterial color="red"/>
            </lineSegments>
        </mesh>
    )
}

function Sphere(props){
    const ref = useRef();
    const sphere = new THREE.SphereGeometry(1, 16, 8);

    useFrame(({clock, state}) => {
        ref.current.position.y = 1 + Math.cos(clock.getElapsedTime()) * 0.3,
        ref.current.rotation.z += 0.005;
    })

    return(
        <mesh
        {...props}
        ref={ref}
        >
            <lineSegments>
                <edgesGeometry args={[sphere]}/>
                <lineBasicMaterial color="red"/>
            </lineSegments>
        </mesh>
    )
}


const MyCanvas = () => {
    return(
        <div className="absolute w-full h-full" style={{aspectRatio: 2/1}}>
        <Canvas>
            <Box position={[-3.5, -1.5, 0]} scale={2}/>
            <Sphere position={[+4, +1, 0]}/>
            <Pyramid position={[-5, +2.75, 0]} scale={0.3}/>
        </Canvas>
        </div>
    )
}

export default MyCanvas