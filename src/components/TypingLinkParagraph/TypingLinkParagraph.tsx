'use client';

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './TypingLinkParagraph.module.css';

interface TypingLinkParagraphProps {
  children: React.ReactNode; 
  fullText: string; 
}

export function TypingLinkParagraph({ children, fullText }: TypingLinkParagraphProps) {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  return (
    <div className={styles.container}>
      <p className={`${styles.realText} ${isAnimationComplete ? styles.visible : ''}`}>
        {children}
      </p>

      {!isAnimationComplete && (
        <TypeAnimation
          cursor={true}
          sequence={[
            fullText,
            () => {
              setAnimationComplete(true);
            },
          ]}
          speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
          wrapper="p"
          repeat={0}
          style={{
            whiteSpace: 'pre-line',
            display: 'inline',
          }}
        />
      )}
    </div>
  );
}