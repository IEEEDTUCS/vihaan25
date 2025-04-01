"use client";
import React, { useState, useEffect } from "react";
// import '../../app/'; // Importing global CSS

import { motion } from "framer-motion";

const Countdown = () => {
  //const [timeLeft, setTimeLeft] = useState(
  //  targetTime ||
  //    Math.floor((new Date("2025-04-17T00:00:00Z") - new Date()) / 1000)
  //);

  //useEffect(() => {
    // If no target time is provided, default to 8 hours
    //const finalTargetTime = targetTime || 8 * 60 * 60; // 8 hours in seconds

    //const timer = setInterval(() => {
    //  setTimeLeft((prevTime) => {
    //    if (prevTime <= 0) {
    //      clearInterval(timer);
    //      return 0;
    //    }
    //    return prevTime - 1;
    //  });
    //}, 1000);

    //return () => clearInterval(timer);
    //}, [targetTime]);

  // Convert total seconds to hours, minutes, and seconds
  //const hours = Math.floor(timeLeft / 3600);
  //const minutes = Math.floor((timeLeft % 3600) / 60);
  //const seconds = timeLeft % 60;

  //const paddedHours = hours.toString().padStart(2, "0");
  //const paddedMinutes = minutes.toString().padStart(2, "0");
  //const paddedSeconds = seconds.toString().padStart(2, "0");
  //

const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{`${timeLeft.days.toString().padStart(2, "0")}:${timeLeft.hours.toString().padStart(2, "0")}:${timeLeft.minutes.toString().padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default Countdown;
