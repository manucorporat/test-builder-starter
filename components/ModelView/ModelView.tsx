import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export interface ModelViewProps {
  src: string;
}

function GLBModel(props: {src: string}) {
  const { scene } = useLoader(GLTFLoader, props.src) as any
  return <primitive object={scene} />
}

export function ModelView(props: ModelViewProps) {

  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <GLBModel src={props.src} />
      </Suspense>
    </Canvas>
  );
}
