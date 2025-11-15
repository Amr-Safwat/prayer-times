import {createContext, useState} from 'react';

const PrayerContext = createContext();

const PrayerProvider = ({children}) => {
  const [prayer, setPrayer] = useState({
    fajr: '00:00',
    sunrise: '00:00',
    dhuhr: '00:00',
    asr: '00:00',
    maghrib: '00:00',
    isha: '00:00',
    date: '29 Oct 2025',
    date2: '',
    day: '',
  });
  return (
    <PrayerContext.Provider value={{prayer: prayer, setPrayer: setPrayer}}>
      {children}
    </PrayerContext.Provider>
  );
};

export {PrayerContext, PrayerProvider};
