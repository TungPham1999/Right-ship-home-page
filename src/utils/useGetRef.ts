import { ForwardedRef, useRef } from 'react';

export const useGetRef = (forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const fallbackRef = useRef(null);
  return forwardedRef || fallbackRef;
};
