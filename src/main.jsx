import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


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
