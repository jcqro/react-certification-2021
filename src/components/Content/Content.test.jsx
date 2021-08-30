import React from 'react';
import { render } from '@testing-library/react';
import DataContext from '../../context/DataContext';
import Content from '.';

describe('Content', () => {
  it('Content renders with classname named MuiGrid-container', () => {
    const context = {
      videos: [],
    };
    const { container } = render(
      <DataContext.Provider value={context}>
        <Content />
      </DataContext.Provider>
    );
    expect(container.getElementsByClassName('MuiGrid-container').length).toBe(1);
  });
});
