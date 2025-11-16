import { useEffect, useState } from 'react';
import './quran.css'
import axios from 'axios';

export default function Quran() {
  const [quran, setQuran] = useState({})

  useEffect(()=>{
    // Api for get Quran
    axios
      .get('https://api.alquran.cloud/v1/quran/ar.alafasy')
      .then(function (response) {
        // handle success
        return response.data;
      })
      .then((data) => {
        setQuran(data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // Api for get Quran
  }, [])
  return (
    <div className="quran-page">
      <h2 className='quran-title'>القران الكريم</h2>
      <ul>
        {
          quran.surahs !== undefined
            ? quran.surahs.map((surah, index) => {
                return  <li className='surah'>{index+ 1 +' - '  + surah.name}</li>;
              })
            : null
        }
      </ul>
    </div>
  );
}
