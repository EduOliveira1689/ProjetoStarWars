import React, { useState, useRef, useEffect, useCallback } from "react";
import { PlayPauseButton } from "./soundsTheme.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ audioSource, autoPlay = false, volume = 0.1, setPlayingState }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasInteracted, setHasInteracted] = useState(false);

  const isUserInteracted = useCallback(() => {
    return audioRef.current?.currentTime > 0 || isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    if (autoPlay && isUserInteracted() && !hasInteracted) {
      audioRef.current.play().catch(error => {
        console.error('Erro ao iniciar a reprodução automática:', error);
      });
      setHasInteracted(true);
    }
  }, [autoPlay, isUserInteracted, hasInteracted]);

  useEffect(() => {
    setPlayingState(isPlaying);
  }, [isPlaying, setPlayingState]);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
        audioRef.current.volume = volume;
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Erro na execução do áudio:', error);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={audioSource} autoPlay={autoPlay} />
      <PlayPauseButton onClick={togglePlay}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </PlayPauseButton>
    </div>
  );
};

export default AudioPlayer;
