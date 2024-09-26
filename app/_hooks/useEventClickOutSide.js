'use client';
import { useEffect, useRef } from 'react';

export default function useEventClickOutSide(action, listenerCapturing = true) {
  const ref = useRef();
  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) action();
    }
    document.addEventListener('click', handleClick, {
      capture: listenerCapturing,
    });
    return () => {
      removeEventListener('click', handleClick);
    };
  }, []);
  return ref;
}
