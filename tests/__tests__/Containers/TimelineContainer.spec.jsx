import React from 'react';
import { mount } from 'enzyme';

import TimelineContainer from './../../../src/Containers/TimelineContainer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('TimelineContainer', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <TimelineContainer />
      </NetworkProvider>,
    );
  });
});
