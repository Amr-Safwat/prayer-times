import {createContext, useState} from 'react';

const PrayerContext = createContext();

const PrayerProvider = ({children}) => {
  const [prayer, setPrayer] = useState({
    fajr: '20:00',
    dhuhr: '20:00',
    asr: '20:00',
    maghrib: '20:00',
    isha: '20:00',
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
