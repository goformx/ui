import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('goforms-button')
export class GoFormsButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    
    button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--goforms-button-border-color, #ccc);
      border-radius: 4px;
      background: var(--goforms-button-bg-color, #fff);
      color: var(--goforms-button-text-color, #333);
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.2s ease;
    }

    button:hover {
      background: var(--goforms-button-hover-bg-color, #f0f0f0);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `;

  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <button
        type="${this.type}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
} 