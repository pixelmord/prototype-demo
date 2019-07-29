import { storiesOf, html } from '@open-wc/demoing-storybook';
/* eslint-disable-next-line */
import { PtyIconButton } from '../pty-icon-button.js';

storiesOf('Atoms|Icon Button', module).add(
  'Default',
  () => html`
    <pty-icon-button> </pty-icon-button>
  `,
);
