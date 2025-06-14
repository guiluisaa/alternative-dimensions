import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (
  callback: () => void,
  isLoading: boolean,
  hasNextPage: boolean
) => {
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage && !isLoading) {
          callback();
        }
      });

      if (node) observer.current.observe(node);
    },
    [callback, isLoading, hasNextPage]
  );

  return { lastElementRef };
};
