import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {PrayerProvider}  from './components/contexts/PrayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <PrayerProvider>
      <App />
    </PrayerProvider>
  </>
);
