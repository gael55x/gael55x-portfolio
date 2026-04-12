'use client';

/**
 * Route-level overlay transitions were removed to avoid duplicate full-screen
 * flashes with StairTransition and to improve first paint / reduced-motion UX.
 */
const PageTransition = ({ children }) => {
  return <>{children}</>;
};

export default PageTransition;
