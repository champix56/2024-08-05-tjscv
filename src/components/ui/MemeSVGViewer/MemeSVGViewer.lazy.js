import React, { lazy, Suspense } from 'react';

const LazyMemeSVGViewer = lazy(() => import('./MemeSVGViewer'));

const MemeSVGViewer = props => (
  <Suspense fallback={null}>
    <LazyMemeSVGViewer {...props} />
  </Suspense>
);

export default MemeSVGViewer;
