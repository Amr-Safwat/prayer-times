import Container from '@mui/material/Container';
import {Button, Card, CardContent, Divider, Stack, Typography} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {useContext, useEffect, useState} from 'react';
import './content.css';
import {PrayerContext} from './contexts/PrayerContext';

function Content() {
  const [time, setTime] = useState();
  const prayer = useContext(PrayerContext);

  function changeTimeTo12(time) {
    const date = new Date(`${prayer.prayer.date} ${time}`);
    const hour = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: 'numeric',
      hour12: true,
    }).format(date);
    return hour;
  }

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = dateObject.getHours();
      const minute = dateObject.getMinutes();
      let second = dateObject.getSeconds();

      if (second < 10) {
        second = '0' + second;
      } else {
        ('');
      }
      const currentTime = second + ' : ' + minute + ' : ' + hour;
      setTime(currentTime);
    }, 1000);
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: {xs: 'noraml', sm: 'center'},
        justifyContent: 'center',
        height: {xs: 'calc(100vh - 56px)', },
        direction: 'rtl',
        backdropFilter: 'blur(4px)',
        padding: 0,
      }}
      xs={{width: '50%'}}
    >
      <Card sx={{width: 375, borderRadius: {xs: '0', sm: '5px'}}}>
        {!(prayer.prayer.fajr === '20:00') ? (
          <CardContent>
            <Typography variant="h3" sx={{mb: 1}}>
              مواقيت الصلاة
            </Typography>
            <Typography variant='body1' sx={{mb: 2}}>اوقات الصلاة حسب الهيئة العامة المصرية للمساحة</Typography>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: '25px'}}>القاهرة </span>
              <span style={{fontSize: '20px'}}>{prayer.prayer.day}</span>
              <span style={{fontSize: '20px'}}>{prayer.prayer.date2}</span>
            </div>
            <Divider sx={{my: 3}} />
            <div>
              <ul>
                <li>
                  <span style={{fontSize: '20px'}} className="time">
                    الفجر
                  </span>
                  <span className="name">
                    {changeTimeTo12(prayer.prayer.fajr)}
                  </span>
                </li>
                <Divider />
                <li>
                  <span style={{fontSize: '20px'}} className="time">
                    الظهر
                  </span>
                  <span className="name">
                    {changeTimeTo12(prayer.prayer.dhuhr)}
                  </span>
                </li>
                <Divider />
                <li>
                  <span style={{fontSize: '20px'}} className="time">
                    العصر
                  </span>
                  <span className="name">
                    {changeTimeTo12(prayer.prayer.asr)}
                  </span>
                </li>
                <Divider />
                <li>
                  <span style={{fontSize: '20px'}} className="time">
                    المغرب
                  </span>
                  <span className="name">
                    {changeTimeTo12(prayer.prayer.maghrib)}
                  </span>
                </li>
                <Divider />
                <li>
                  <span style={{fontSize: '20px'}} className="time">
                    العشاء
                  </span>
                  <span className="name">
                    {changeTimeTo12(prayer.prayer.isha)}
                  </span>
                </li>
              </ul>
            </div>
            <Divider sx={{my: 3}} />
            <Stack
              direction={'row'}
              gap={1}
              fontSize={20}
              justifyContent={'space-between'}
              alignItems={'center'}
              mt={5}
            >
              <div
                style={{
                  backgroundColor: 'greenyellow',
                  padding: '10px 20px',
                  borderRadius: '4px',
                }}
              >
                <span>الساعة : </span>
                <span id="txt">{time}</span>
              </div>
              <Button
                variant="contained"
                sx={{fontSize: 18, fontWeight: 'bold'}}
              >
                القران الكريم
              </Button>
            </Stack>
          </CardContent>
        ) : (
          <>
            <CardContent sx={{justifyContent: 'center', display: 'flex'}}>
              <CircularProgress />
            </CardContent>
            <Typography
              justifyContent={'center'}
              display={'flex'}
              color="#aaa !important"
              dir="ltr"
            >
              Loading...
            </Typography>
          </>
        )}
      </Card>
    </Container>
  );
}

export default Content;
