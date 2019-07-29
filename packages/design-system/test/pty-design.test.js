import { html, fixture, expect } from '@open-wc/testing';

import '../src/pty-icon-button.js';

describe('<pty-icon-button>', () => {
  it('has a default property title', async () => {
    const el = await fixture('<pty-icon-button></pty-icon-button>');

    expect(el.label).to.equal('Menu');
  });

  it('allows property title to be overwritten', async () => {
    const el = await fixture(html`
      <pty-icon-button label="different title"></pty-icon-button>
    `);

    expect(el.label).to.equal('different title');
  });
});
