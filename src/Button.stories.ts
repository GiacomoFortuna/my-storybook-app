import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Base Components/Button',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Clicked!'),
    },
};
export const Disabled: Story = {
    args: {
        label: 'Disabled Button',
        onClick: async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(
                        alert('Clicked!')
                    );
                }, 5000);
            });
        },
        disabled: false,
    },
};