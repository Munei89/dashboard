/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StyledDrawer = lazyLoad(
  () => import('./index'),
  module => module.StyledDrawer,
);
