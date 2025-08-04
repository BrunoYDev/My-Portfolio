'use client';

import { useState, useEffect } from 'react';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  youtubeVideoId: string;
  title: string;
}

export function ProjectModal({ youtubeVideoId, title }: ProjectModalProps) {
  // Estado para controlar se o modal está no DOM
  const [isMounted, setIsMounted] = useState(false);
  // Estado para controlar a animação (abrir vs. fechar)
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsClosing(false);
    setIsMounted(true);
  };

  const closeModal = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onAnimationEnd = () => {
    if (isClosing) {
      setIsMounted(false);
    }
  };

  return (
    <>
      <button onClick={openModal} className={styles.openButton}>
        &gt; Watch Demo
      </button>

      {isMounted && (
        <div className={styles.overlay} onClick={closeModal}>
          <div
            className={`${styles.modal} ${isClosing ? styles.modalOff : styles.modalOn}`}
            onAnimationEnd={onAnimationEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className={styles.closeButton}>
              X
            </button>
            <h3>{title}</h3>
            <div className={styles.videoContainer}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}