import { useEffect, useState } from 'react';
import { LuCalendarClock } from "react-icons/lu";

const Chronometre = () => {
  const endDate = '2024-05-01T00:00:00'; // Date de fin de la période de parrainage

  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="p-4 rounded shadow-md ">
      <section className="timer-container">
        <section className="flex items-center">
          <span className="text-blue-500 text-4xl mr-2">
            <LuCalendarClock />
          </span>
          <div>
            <h2 className="text-lg font-semibold">Compte à rebours</h2>
            <p className="text-red-500">Fin de la période de parrainage</p>
          </div>
        </section>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-blue-500">{timeLeft.days}</p>
            <p className="text-sm text-gray-500">Jours</p>
          </div>
          <span className="text-4xl text-gray-500">:</span>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-blue-500">{timeLeft.hours}</p>
            <p className="text-sm text-gray-500">Heures</p>
          </div>
          <span className="text-4xl text-gray-500">:</span>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-blue-500">{timeLeft.minutes}</p>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>
          <span className="text-4xl text-gray-500">:</span>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-blue-500">{timeLeft.seconds}</p>
            <p className="text-sm text-gray-500">Secondes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chronometre;