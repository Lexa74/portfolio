import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Иначе браузер сам возвращает прежнюю позицию при back/forward, перебивая scrollTo
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
