/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import Button from '../Button';
import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .addDecorator(centered)
  .addWithJSX('overview', () => (
    <Tooltip
      show={boolean('show', false)}
      content={text('content', "Hey I'm a tooltip!")}
      info={boolean('info', false)}
      success={boolean('success', false)}
      error={boolean('error', false)}
      warning={boolean('warning', false)}
      small={boolean('small', false)}
      medium={boolean('medium', false)}
      large={boolean('large', false)}
      top={boolean('top', false)}
      left={boolean('left', false)}
      right={boolean('right', false)}
      tiny={boolean('tiny', false)}
    >
      {text('children', 'hover me')}
    </Tooltip>
  ))
  .addWithJSX('sizes', () => {
    const longText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar molestie ullamcorper.';
    return (
      <div>
        <Tooltip content={longText} show>
          <div style={{ marginBottom: 80, textAlign: 'center' }}>default</div>
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet..." show small>
          <div style={{ marginBottom: 80, textAlign: 'center' }}>small</div>
        </Tooltip>
        <Tooltip
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar..."
          show
          medium
        >
          <div style={{ marginBottom: 80, textAlign: 'center' }}>medium</div>
        </Tooltip>
        <Tooltip content={longText} show large>
          <div style={{ marginBottom: 80, textAlign: 'center' }}>large</div>
        </Tooltip>
      </div>
    );
  })
  .addWithJSX('directions', () => (
    <Tooltip content="default" show>
      <Tooltip content="left" show left>
        <Tooltip content="top" show top>
          <Tooltip content="right" show right>
            <Button>Hello world!</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  ));
