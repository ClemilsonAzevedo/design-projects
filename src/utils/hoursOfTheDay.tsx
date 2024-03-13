import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useEffect, useState } from 'react';

export function hoursOfTheDay() {

  const [time, setTime] = useState(dayjs())


  useEffect(() => {

    const interval = setInterval(() => {
      setTime(dayjs())
    }, 1000);

    return () => clearInterval(interval)
  }, [])


  return (
    <span className='w-full'>{time.format('HH:mm:ss')}</span>
  )
}