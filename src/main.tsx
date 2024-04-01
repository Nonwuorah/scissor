import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import Homepage from './pages/Homepage';
import App from './App.tsx'
import FirebaseContextProvider from './config/firebase.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </React.StrictMode>,
)
