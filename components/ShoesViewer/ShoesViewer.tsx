import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Instances,
  Instance,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";

const color = new THREE.Color();

const randomVector = (r: number) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
];
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
];
const randomData = Array.from({ length: 1000 }, (_, r) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}));

function Shoes({ range }: any) {
  const { nodes, materials } = useGLTF("/shoe.glb") as any;
  return (
    <Instances
      range={range}
      material={materials.phong1SG}
      geometry={nodes.Shoe.geometry}
    >
      {randomData.map((props, i) => (
        <Shoe key={i} {...props} />
      ))}
    </Instances>
  );
}

function Shoe({ random, ...props }: any) {
  const ref = useRef<any>()!;
  const [hovered, setHover] = useState(false);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000;
    ref.current!.rotation.set(
      Math.cos(t / 4) / 2,
      Math.sin(t / 4) / 2,
      Math.cos(t / 1.5) / 2
    );
    ref.current!.position.y = Math.sin(t / 1.5) / 2;
    ref.current!.scale.x =
      ref.current!.scale.y =
      ref.current!.scale.z =
        THREE.MathUtils.lerp(ref.current!.scale.z, hovered ? 1.4 : 1, 0.1);
    ref.current!.color!.lerp(
      color.set(hovered ? "red" : "white"),
      hovered ? 1 : 0.1
    );
  });
  return (
    <group {...props}>
      <Instance
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
      />
    </group>
  );
}

export function ShoesViewer({nuShoes}: any) {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 50 }}
      performance={{ min: 0.1 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.3} position={[5, 25, 20]} />
      <Suspense fallback={null}>
        <Shoes range={nuShoes} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
