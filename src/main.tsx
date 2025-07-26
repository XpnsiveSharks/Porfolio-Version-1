/**
 * main.tsx
 * ----------
 * This is the entry point for the React application.
 * 
 * 1. Imports:
 *    - StrictMode: A React component that helps highlight potential problems in an application.
 *    - createRoot: A function from 'react-dom/client' used to initialize the React root for rendering.
 *    - './index.css': Imports global CSS styles.
 *    - App: The main application component.
 * 
 * 2. Rendering:
 *    - The createRoot function is called with the DOM element with id 'root'.
 *    - This creates a root for the React application using React 18's concurrent features.
 *    - The render method mounts the <App /> component wrapped in <StrictMode> to the root element.
 * 
 * What does createRoot do?
 * ------------------------
 * - createRoot is part of React 18's new root API.
 * - It enables concurrent rendering, which improves performance and responsiveness.
 * - It replaces the older ReactDOM.render method.
 * - Usage: createRoot(container).render(element)
 *   - 'container' is the DOM node to mount the React app.
 *   - 'element' is the React component tree to render.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // 1. Create a root
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render( // 2. Render some markup to the root
  <StrictMode>
    <App />
  </StrictMode>,
)