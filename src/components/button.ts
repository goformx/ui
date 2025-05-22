import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('gf-button')
export class GFButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--button-padding-y) var(--button-padding-x);
      font-size: var(--button-font-size);
      font-weight: var(--button-font-weight);
      line-height: var(--line-height-normal);
      text-align: center;
      text-decoration: none;
      border-radius: var(--button-radius);
      border: none;
      cursor: pointer;
      transition: var(--button-transition);
    }

    .btn:hover {
      transform: var(--button-transform-hover);
    }

    .btn:focus {
      outline: none;
      box-shadow: 0 0 0 var(--form-focus-ring-size) var(--form-focus-ring);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .btn-primary {
      background: var(--button-primary-gradient);
      color: var(--button-primary-color);
      box-shadow: var(--button-primary-shadow);
    }

    .btn-primary:hover {
      box-shadow: var(--button-primary-shadow-hover);
    }

    .btn-secondary {
      background: var(--button-secondary-bg);
      color: var(--button-secondary-color);
      border: var(--button-secondary-border);
      backdrop-filter: blur(var(--button-secondary-blur));
    }

    .btn-secondary:hover {
      background: var(--button-secondary-bg-hover);
      color: var(--button-secondary-color-hover);
    }

    .btn-outline {
      background: transparent;
      color: var(--text);
      border: 1px solid var(--border-color);
    }

    .btn-outline:hover {
      background: var(--background-alt);
      border-color: var(--text);
    }

    .btn-text {
      background: transparent;
      color: var(--text);
      padding: var(--spacing-2) var(--spacing-4);
    }

    .btn-text:hover {
      background: var(--background-alt);
      transform: none;
    }

    .btn-sm {
      padding: calc(var(--button-padding-y) * 0.75) calc(var(--button-padding-x) * 0.75);
      font-size: var(--font-size-sm);
    }

    .btn-lg {
      padding: calc(var(--button-padding-y) * 1.25) calc(var(--button-padding-x) * 1.25);
      font-size: var(--font-size-lg);
    }

    .btn-block {
      display: flex;
      width: 100%;
    }
  `;

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'outline' | 'text' = 'primary';

  @property({ type: String })
  size: 'sm' | 'md' | 'lg' = 'md';

  @property({ type: Boolean })
  block = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    const classes = [
      'btn',
      `btn-${this.variant}`,
      this.size !== 'md' ? `btn-${this.size}` : '',
      this.block ? 'btn-block' : ''
    ].filter(Boolean).join(' ');

    return html`
      <button
        class="${classes}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
} 