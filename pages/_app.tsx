import type { AppProps } from "next/app";
import { builder, Builder } from "@builder.io/react";
import { Header } from "../components/Header/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

builder.init("builder-public-key");

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
