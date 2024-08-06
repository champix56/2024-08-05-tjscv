import React, { lazy, Suspense } from 'react';

const LazyFlexHThirdGrow = lazy(() => import('./FlexHThirdGrow'));

const FlexHThirdGrow = props => (
  <Suspense fallback={null}>
    <LazyFlexHThirdGrow {...props} />
  </Suspense>
);

export default FlexHThirdGrow;
