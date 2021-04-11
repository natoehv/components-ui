import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { Props, ButtonColors } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ButtonColors,
      }
    }
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: ButtonColors.Primary,
  label: 'Button',
};