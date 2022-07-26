import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { Header } from '../Loadable';

const renderer = createRenderer();

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Header />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
