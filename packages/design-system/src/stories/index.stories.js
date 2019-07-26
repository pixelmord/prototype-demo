import { storiesOf, html } from '@open-wc/demoing-storybook'
storiesOf('Demo|Example Element', module)
  .add(
    'Start Lit Element',
    () => html`
      <start-lit-element>
        <!-- Placeholders to improve time to first paint -->
        <h1>Start LitElement!</h1>
        <p>Hello World from LitElement</p>

        <!-- Check for JavaScript -->
        <p id="jsyes"></p>
        <script type="text/javascript">
          document.getElementById('jsyes').innerHTML = 'Loading...'
        </script>
        <noscript>
          Could not render the custom element. Check that JavaScript is enabled.
        </noscript>
      </start-lit-element>
    `
  )
  .add(
    'Lazy Element',
    () => html`
      <lazy-element></lazy-element>
    `
  )
