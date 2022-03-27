import React from "react";
import { Suspense } from "react";
import "./Model.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Womens_bag from "../Three/Womens_bag";
import { PresentationControls } from '@react-three/drei'
import Background from '../Three/Background'; 

export default function Model() {
 

 
  return (
    <Wrapper className="canvas">
    <Background className="backgroundmodel"/>
      <Canvas >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[-8, 10, 20]} />
        <Suspense fallback={null}>
        <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation-x={Math.PI * 0.5}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <Womens_bag />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}



const Wrapper = styled.div`
  position: relative;
  background: whith;


`;
