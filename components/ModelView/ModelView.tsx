import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export interface ModelViewProps {
  title: string;
  subtitle: string;
}

function GLBModel() {
  const [url, set] = useState('/Parrot.glb')
  useEffect(() => {
    setTimeout(() => set('/Stork.glb'), 2000)
  }, [])
  const { scene } = useLoader(GLTFLoader, url) as any
  return <primitive object={scene} />
}

export function ModelView(props: ModelViewProps) {

  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <GLBModel />
      </Suspense>
    </Canvas>
  );
}
