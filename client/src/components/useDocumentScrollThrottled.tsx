import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

import { ScrollCallback } from './types';

const useDocumentScrollThrottled = (callback: ScrollCallback) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  };

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
  }, []);
};

export default useDocumentScrollThrottled;
