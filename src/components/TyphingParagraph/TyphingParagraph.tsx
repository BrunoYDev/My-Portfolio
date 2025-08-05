'use client';

import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

interface TypingParagraphProps {
  text: string;
  speed?: number;
}

export function TypingParagraph({ text, speed = 10 }: TypingParagraphProps) {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <TypeAnimation
      cursor={showCursor}
      sequence={[
        text,
        (el) => {
          el?.classList.remove('custom-type-animation-cursor');
          setShowCursor(false);
        },
      ]}
      speed={{ type: 'keyStrokeDelayInMs', value: speed }}
      wrapper="p"
      repeat={0}
      style={{
        whiteSpace: 'pre-line',
        display: 'inline',
      }}
    />
  );
}