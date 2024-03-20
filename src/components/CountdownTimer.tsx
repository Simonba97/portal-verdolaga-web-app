import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            return {
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
            };
        } else {
            return { days: '00', hours: '00', minutes: '00', seconds: '00' };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [targetDate]);

    return (
        <div className="text-3xl grid grid-cols-4 text-center">
            <div className="col-span-1 px-2 sm:px-0">{timeLeft.days}</div>
            <div className="col-span-1 px-2 sm:px-0">{timeLeft.hours}</div>
            <div className="col-span-1 px-2 sm:px-0">{timeLeft.minutes}</div>
            <div className="col-span-1 px-2 sm:px-0">{timeLeft.seconds}</div>

            <div className="col-span-1 text-xs h-min sm:px-1 before:content-['DÍAS'] sm:before:content-['DÍAS']"></div>
            <div className="col-span-1 text-xs h-min sm:px-1 before:content-['HORAS'] sm:before:content-['HORAS']"></div>
            <div className="col-span-1 text-xs h-min sm:px-1 before:content-['MIN'] sm:before:content-['MINUTOS']"></div>
            <div className="col-span-1 text-xs h-min sm:px-1 before:content-['SEG'] sm:before:content-['SEGUNDOS']"></div>
        </div>
    );
};

export default CountdownTimer;