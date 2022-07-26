import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { StyledButton } from '../Loadable';

const renderer = createRenderer();

describe('<StyledButton />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<StyledButton>Button</StyledButton>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
