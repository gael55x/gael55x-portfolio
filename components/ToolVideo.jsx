'use client';

import { useEffect, useRef, useState } from 'react';

/** Poster first: the video loads and shows native controls only after the visitor presses play. */
export default function ToolVideo({ name, src, poster, href }) {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) video.current.focus();
  }, [playing]);

  function play() {
    setPlaying(true);
    video.current.play().catch(() => {});
  }

  return (
    <div className="tool-sculpture tool-video" data-playing={playing || undefined}>
      <noscript>
        <style>{`.tool-video-play { display: none; }`}</style>
      </noscript>
      <video
        ref={video}
        controls={playing}
        playsInline
        preload="none"
        poster={poster}
        aria-label={`${name} launch video`}
      >
        <source src={src} type="video/mp4" />
        <a href={href}>Watch the {name} launch video</a>
      </video>
      {!playing && (
        <button
          type="button"
          className="tool-video-play"
          aria-label={`Play the ${name} launch video`}
          onClick={play}
        />
      )}
    </div>
  );
}
