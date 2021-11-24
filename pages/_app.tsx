import "../styles/globals.css";

import type { AppProps } from "next/app";
import { builder, Builder } from "@builder.io/react";
import { Header } from "../components/Header/Header";
import { ShoesViewer } from "../components/ShoesViewer/ShoesViewer";

// Initialize once builder with the apiKey
builder.init("builder-public-key");

// Register Header component so it's available in the drag-and-drop tool
Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "subtitle",
      type: "string",
    },
  ],
});

// Register ModelView component as dragable component in the builder editor
Builder.registerComponent(ShoesViewer, {
  name: "Shoes",
  inputs: [
    {
      name: 'nuShoes',
      type: 'number',
      friendlyName: 'Number of shoes',
      defaultValue: 100,
    }
  ]
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
