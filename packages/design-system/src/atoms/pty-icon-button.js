import { LitElement, html, css } from 'lit-element';

export class PtyIconButton extends LitElement {
  render() {
    return html`
      <button></button>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: top;
        }

        /* RESET */
        button {
          background: #fff;
          border: 1px solid #000;
          display: block;
          font-size: 14px;
          font-family: inherit;
          margin: 0;
          padding: 0;
        }

        /* BASE */
        button {
          border-radius: 0.15rem;
          cursor: pointer;
          font-weight: bold;
          min-height: 2rem;
          padding: 0 0.5rem;
          text-transform: uppercase;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width: 100%;
        }

        /* COLORS */
        button.simple {
          --btn-color: hsl(210, 23%, 26%);
        }

        button.primary {
          --btn-color: hsl(213, 55%, 62%);
        }

        button.success {
          --btn-color: hsl(144, 56%, 43%);
        }

        button.danger {
          --btn-color: hsl(351, 70%, 47%);
        }

        /* MODES */
        button {
          background-color: var(--btn-color);
          border-color: var(--btn-color);
          color: #fff;
        }

        button.outlined {
          background-color: #fff;
          color: var(--btn-color);
        }

        /* special case: we want to keep simple buttons subtle */
        button.simple {
          border-color: #aaa;
        }

        /* STATES */
        button:enabled:focus {
          box-shadow: 0 0 0 0.2em rgba(50, 115, 220, 0.25);
          outline: 0;
        }

        button:enabled:hover {
          box-shadow: 0 1px 3px #888;
        }

        button:enabled:active {
          box-shadow: none;
          outline: 0;
        }

        button:disabled {
          cursor: default;
          opacity: 0.5;
        }

        button.skeleton {
          animation-direction: alternate;
          animation-duration: 500ms;
          animation-iteration-count: infinite;
          animation-name: pulse;
          background-color: #aaa;
          border-color: #777;
          color: transparent;
          cursor: progress;
        }

        @keyframes pulse {
          from {
            opacity: 0.75;
          }

          to {
            opacity: 0.5;
          }
        }

        /* TRANSITIONS */
        button {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          transition: all 75ms ease-in-out;
        }

        /* We can do this because we set a visible focus state */
        button::-moz-focus-inner {
          border: 0;
        }
      `,
    ];
  }
}

customElements.define('pty-icon-button', PtyIconButton);
