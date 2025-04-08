"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "framer-motion";

const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

export function RandomizedTextEffect({ text }) {
  const [animatedText, setAnimatedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // 👈 only animate once

  const getRandomChar = useCallback(
    () =>
      lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    []
  );

  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 100;
    const initialRandomDuration = 500;

    const generateRandomText = () =>
      text
        .split("")
        .map(() => getRandomChar())
        .join("");

    setAnimatedText(generateRandomText());

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split("")
            .map(() => getRandomChar())
            .join("")
      );
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      animateText();
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, animateText]);

  return (
    <div
      ref={ref}
      className="relative inline-block xl:scale-100 lg:scale-90 md:scale-75 scale-50 tracking-[2em]"
    >
      {animatedText}
    </div>
  );
}
