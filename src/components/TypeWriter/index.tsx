import React, { useEffect, useRef } from "react";
import S from "./styles.module.css";
import { Header } from "../Typography";

interface TypeWriterProps {}

const TypeWriter: React.FC = () => {
  const textDisplayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const textDisplay = textDisplayRef.current!;
    if (!textDisplay) {
      return;
    }
    const phrases = [
      " Coding.",
      " Caffeine.",
      " Travel.",
      " Gym.",
      " Dogs.",
      " Food.",
      " Video Games.",
    ];

    let i = 0;
    let j = 0;
    let currentPhrase: string[] = [];
    let isDeleting = false;
    let isEnd = false;

    /* TypeWriter Effect */
    function loop() {
      isEnd = false;
      textDisplay.innerHTML = currentPhrase.join("");

      if (i < phrases.length) {
        if (!isDeleting && j < phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop();
          j--;
        }

        if (j === phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;

          if (i === phrases.length) {
            i = 0;
          }
        }
      }

      const spedUp = Math.random() * (150 - 100) + 100;
      const normalSpeed = Math.random() * (300 - 250) + 250;
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

      setTimeout(loop, time);
    }

    loop();
  }, []);

  return (
    <span>
      <span ref={textDisplayRef}></span>
      <span className={S.inputCursor}> </span>
    </span>
  );
};

export default TypeWriter;
