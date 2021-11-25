import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { builder, Builder } from '@builder.io/sdk';
import { SourceCodeLink } from './components/SourceCodeLink';
import { ShoesViewer } from './components/ShoesViewer';
import { Header } from './components/Header';

builder.init("builder-public-key");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


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
    },
    {
      name: 'ambientLight',
      type: 'number',
      friendlyName: 'Ambient light intensity',
      defaultValue: 0.5,
    }
  ]
});


// Register ModelView component as dragable component in the builder editor
Builder.registerComponent(SourceCodeLink, {
  name: "SourceCodeLink",
  inputs: [
    {
      name: 'fileName',
      type: 'string',
      required: true,
    },
    {
      name: 'line',
      type: 'number',
    },
    {
      name: 'column',
      type: 'number',
    },
  ]
});
