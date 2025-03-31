import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
}

const TypeWriter = ({ text, className = "" }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Her harf için 100ms bekle

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  // Yanıp sönen imleç efekti
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // İmleç yanıp sönme hızı

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={className} style={{ whiteSpace: "pre" }}>
      {displayText}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          borderRight: "0.15em solid currentColor",
          marginLeft: "2px",
        }}
      >
        &nbsp;
      </span>
    </div>
  );
};

export default TypeWriter; 