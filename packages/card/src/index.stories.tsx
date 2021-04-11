import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card, { Props, CardTypes } from './index';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: CardTypes,
      }
    }
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Card {...args} >Test</Card>);

export const Primary = Template.bind({});
Primary.args = {
  type: CardTypes.flat,
};
