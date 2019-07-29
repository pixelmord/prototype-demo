import { LitElement, html } from 'lit-element';

export class PtyIconButton extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <button>your icon here</button>
    `;
  }
}

customElements.define('pty-icon-button', PtyIconButton);
