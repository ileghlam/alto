/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { boolean, text } from '@storybook/addon-knobs';

import StateProvider from '../StateProvider';
import Dropdown from './Dropdown';

const items = [
  {
    key: '1',
    title: 'Alert',
    // eslint-disable-next-line no-alert
    onClick: () => alert('hello world'),
  },
  {
    key: '2',
    title: 'Sub Dropdown',
    items: [
      { key: 'foo', title: 'Foo' },
      { key: 'bar', title: 'Bar' },
      {
        key: 'baz',
        title: 'Sub Sub Dropdown',
        items: [
          { key: 'foo', title: 'Foo' },
          { key: 'bar', title: 'Bar' },
          { key: 'baz', title: 'Baz' },
        ],
      },
    ],
  },
  {
    key: '3',
    title: 'Disabled',
    disabled: true,
  },
  {
    key: '4',
    title: 'Action + sub dropdown',
    // eslint-disable-next-line no-alert
    onClick: () => alert('hello world'),
    items: [
      { key: 'foo', title: 'Foo' },
      { key: 'bar', title: 'Bar' },
      { key: 'baz', title: 'Baz' },
    ],
  },
];

storiesOf('Dropdown', module)
  .addDecorator(centered)
  .addWithJSX('overview', () => (
    <Dropdown
      items={items}
      label={text('label', 'Click me')}
      loading={boolean('loading', false)}
      loadingItems={boolean('loadingItems', false)}
      small={boolean('small', false)}
      large={boolean('large', false)}
      selected="1"
    />
  ))
  .addWithJSX('selectable', () => (
    <StateProvider state={{ selected: [] }}>
      {(state, setState) => (
        <Dropdown
          id="favourite-language"
          items={[
            { key: 'js', title: 'javascript' },
            { key: 'rb', title: 'ruby' },
            { key: 'py', title: 'python' },
            { key: 'hs', title: 'haskell' },
          ]}
          onSelect={selected => setState({ selected })}
          selected={state.selected}
          label="Favourite language"
        />
      )}
    </StateProvider>
  ));
