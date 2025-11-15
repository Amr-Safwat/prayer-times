import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {PrayerProvider} from './components/contexts/PrayerContext.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Quran from './components/pages/Quran';
import Profile from './components/pages/profile.jsx';


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <PrayerProvider>
        <App />
      </PrayerProvider>
      {/* Routes */}
      <Routes>
        <Route path="/prayer-times">
          <Route path="quran" element={<Quran />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* Routes */}
    </BrowserRouter>
  </>
);
