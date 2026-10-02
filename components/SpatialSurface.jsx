'use client';

export default function SpatialSurface({ as: Tag = 'div', className = '', children, ...props }) {
  function reset(event) {
    event.currentTarget.style.removeProperty('--tilt-x');
    event.currentTarget.style.removeProperty('--tilt-y');
  }

  return (
    <Tag
      {...props}
      className={`spatial-surface ${className}`}
      onPointerMove={(event) => {
        if (
          event.pointerType !== 'mouse' ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
          return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty('--tilt-x', `${-y * 4}deg`);
        event.currentTarget.style.setProperty('--tilt-y', `${x * 4}deg`);
      }}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </Tag>
  );
}
