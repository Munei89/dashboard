import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { StyledCalender } from '../Loadable';

const renderer = createRenderer();

describe('<StyledCalender />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<StyledCalender />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
