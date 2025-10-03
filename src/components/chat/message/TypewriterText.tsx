"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageMarkdown } from "./MessageMarkdown";

interface TypewriterTextProps {
  children: string;
  isActive?: boolean;
}

export function TypewriterText({ children, isActive = true }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Split text into words while preserving spaces and line breaks
  const words = React.useMemo(() => {
    if (!children) return [];
    const parts = children.split(/(\s+)/);
    return parts.filter((part) => part.length > 0);
  }, [children]);

  useEffect(() => {
    if (!isActive || !children || words.length === 0) {
      setDisplayedText(children);
      return;
    }

    setDisplayedText("");

    let displayText = "";
    let wordIndex = 0;

    function addNextWord() {
      if (wordIndex >= words.length) {
        return;
      }

      const currentWord = words[wordIndex];
      displayText += currentWord;

      setDisplayedText(displayText);

      wordIndex++;

      let nextDelay = 50;
      if (currentWord.includes(".") || currentWord.includes("!") || currentWord.includes("?")) {
        nextDelay = 200;
      } else if (currentWord.includes(",") || currentWord.includes(";")) {
        nextDelay = 100;
      } else if (currentWord.trim() === "") {
        nextDelay = 15;
      }

      timeoutRef.current = setTimeout(addNextWord, nextDelay);
    }

    addNextWord();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [children, isActive, words]);

  if (!isActive) return <MessageMarkdown>{children}</MessageMarkdown>;

  return (
    <div className="relative">
      <MessageMarkdown>{displayedText}</MessageMarkdown>
    </div>
  );
}
