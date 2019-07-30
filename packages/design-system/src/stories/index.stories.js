import { storiesOf, html } from '@open-wc/demoing-storybook';
/* eslint-disable-next-line */
import { PtyIconButton } from '../atoms/pty-icon-button.js';
import { PtyButton } from '../atoms/pty-button.js';

storiesOf('Atoms|Buttons', module)
  .add(
    'Button',
    () => html`
      <pty-button>Click me</pty-button>
    `,
  )
  .add(
    'Icon Button',
    () => html`
      <pty-icon-button></pty-icon-button>
    `,
  );
