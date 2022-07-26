import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { MenuLinks } from 'app/mock';

import { StyledDrawer } from '../Loadable';

const renderer = createRenderer();

describe('<StyledDrawer />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(
      <StyledDrawer
        menu={MenuLinks}
        onClose={() => console.log('close')}
        drawerOpen={true}
      />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
