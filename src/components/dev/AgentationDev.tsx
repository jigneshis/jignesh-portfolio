'use client';

import React, { useEffect, useState } from 'react';
import { Agentation } from 'agentation';

export function AgentationDev() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isMounted) {
    return null;
  }

  return <Agentation />;
}
