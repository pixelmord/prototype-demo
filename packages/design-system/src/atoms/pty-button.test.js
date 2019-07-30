import { html, fixture, expect } from '@open-wc/testing';

import './pty-button.js';

describe('<pty-button>', () => {
  it('should be accessible', async () => {
    const el = await fixture(html`
      <pty-button>super button</pty-button>
    `);
    await expect(el).to.be.accessible();
  });
  it('can be disabled', async () => {
    const el = await fixture(html`
      <pty-button disabled>super button</pty-button>
    `);

    expect(el.disabled).to.equal(true);
  });
});
