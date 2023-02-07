import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/layout/Layout';

function render() {
  const root = createRoot(document.getElementById("root"));
  root.render(<Layout />);
}

render();