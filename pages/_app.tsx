import '../styles/globals.css'

import type { AppProps } from "next/app";
import { builder, Builder } from "@builder.io/react";
import { Header } from "../components/Header/Header";
import { ModelView } from '../components/ModelView/ModelView';

// Initialize once builder with the apiKey
builder.init("builder-public-key");

// Register Header component so it's available in the drag-and-drop tool
Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: "title",
      type: "string"
    },
    {
      name: "subtitle",
      type: "string"
    }
  ]
});

// Register ModelView component as dragable component in the builder editor
Builder.registerComponent(ModelView, {
  name: 'Model View',
  inputs: [
    {
      name: 'src',
      type: 'file',
      allowedFileTypes: ['gltf', 'glb'],
      defaultValue: 'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/Avocado/glTF-Binary/Avocado.glb'
    }
  ]
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
