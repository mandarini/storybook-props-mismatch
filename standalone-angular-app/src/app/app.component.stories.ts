import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

const argTypes = {
  title: { control: 'text' },
  rating: { control: 'number' },
  flag: { defaultValue: false, control: { type: 'boolean' } },
};

export const Primary = Template.bind({});
// Primary.args = {
//   title: '',
//   rating: 0,
//   flag: false,
// };
Primary.argTypes = {
  ...argTypes,
};
