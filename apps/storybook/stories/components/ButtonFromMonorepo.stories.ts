import { fn } from '@storybook/test';
import  MonorepoButton from "@monorepo/ui/components/Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/MonorepoButton',
  component: MonorepoButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button Monorepo',
  },
};

export const Secondary = {
  args: {
    label: 'Button Monorepo',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button Monorepo',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button Monorepo',
  },
};
