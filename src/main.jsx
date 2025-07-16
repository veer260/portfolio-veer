import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App ,
//   },
//   {
//     path:'/spotify',
//     Component: Spotify
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
