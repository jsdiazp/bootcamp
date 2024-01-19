import SecondaryCardV1 from "@/components/SecondaryCardV1";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SecondaryCardV1> = {
  component: SecondaryCardV1,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
