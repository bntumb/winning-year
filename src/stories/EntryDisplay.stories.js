import EntryDisplay from '@/design-system/compoments/EntryDisplay/EntryDisplay';

export default {
  title: 'Components/EntryDisplay',
  component: EntryDisplay,
  argTypes: {
    content: {
      control: 'text',
    },
    timestamp: {
      control: 'text',
    },
  },
};

const Template = (args) => <EntryDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a sample entry content',
  timestamp: 'Jan 18, 2026 • 10:30 AM',
};
