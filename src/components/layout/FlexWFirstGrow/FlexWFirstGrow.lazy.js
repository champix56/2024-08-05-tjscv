import React, { lazy, Suspense } from 'react';

const LazyFlexWFirstGrow = lazy(() => import('./FlexWFirstGrow'));

const FlexWFirstGrow = props => (
  <Suspense fallback={null}>
    <LazyFlexWFirstGrow {...props} />
  </Suspense>
);

export default FlexWFirstGrow;
