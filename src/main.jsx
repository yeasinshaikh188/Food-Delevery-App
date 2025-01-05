import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './StoreContext/StoreContext.JSX'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <StoreContextProvider>
    <App />
    </StoreContextProvider>
  </BrowserRouter>
)
