import {useContext, useEffect} from 'react';
import TopBar from './components/Topbar';
import Content from './components/Content';
import axios from 'axios';
import './App.css';
import {PrayerContext} from './components/contexts/PrayerContext';
import image from './assets/image.jpg'
import { BottomNavigation } from './components/bottomNavigation/BottomNavigation';
import { Routes, Route, Outlet} from 'react-router-dom';
import Quran from './components/pages/Quran';


function App() {
  const prayer = useContext(PrayerContext);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        'https://islamicapi.com/api/v1/prayer-time/?lat=30.033333&lon=31.233334&method=5&school=1&api_key=YjryJrovOfvGcz73QzIHsNrDtDEUkr6eFeiCyknsgoAiCsii'
      )
      .then(function (response) {
        // handle success
        return response.data;
      })
      .then((data) => {
        prayer.setPrayer({
          fajr: data.data.times.Fajr,
          sunrise: data.data.times.Sunrise,
          dhuhr: data.data.times.Dhuhr,
          asr: data.data.times.Asr,
          maghrib: data.data.times.Maghrib,
          isha: data.data.times.Isha,
          date: data.data.date.readable,
          date2: data.data.date.gregorian.date,
          day: data.data.date.hijri.weekday.ar,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="app" style={{backgroundImage: `url(${image})`}}>
      <TopBar />
      <Content />
      <BottomNavigation />
    </div>
  );
}

export default App;
