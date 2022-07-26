/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StyledButton = lazyLoad(
  () => import('./index'),
  module => module.StyledButton,
);
