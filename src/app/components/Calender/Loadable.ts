/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StyledCalender = lazyLoad(
  () => import('./index'),
  module => module.StyledCalender,
);
