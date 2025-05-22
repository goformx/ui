import { css } from 'lit';

export const baseStyles = css`
  :root {
    /* Colors */
    --goforms-primary-color: #007bff;
    --goforms-secondary-color: #6c757d;
    --goforms-success-color: #28a745;
    --goforms-danger-color: #dc3545;
    --goforms-warning-color: #ffc107;
    --goforms-info-color: #17a2b8;
    
    /* Typography */
    --goforms-font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --goforms-font-size-base: 1rem;
    --goforms-line-height-base: 1.5;
    
    /* Spacing */
    --goforms-spacing-unit: 0.25rem;
    --goforms-spacing-small: calc(var(--goforms-spacing-unit) * 2);
    --goforms-spacing-medium: calc(var(--goforms-spacing-unit) * 4);
    --goforms-spacing-large: calc(var(--goforms-spacing-unit) * 8);
    
    /* Border */
    --goforms-border-radius: 4px;
    --goforms-border-color: #dee2e6;
    --goforms-border-width: 1px;
  }

  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--goforms-font-family);
    font-size: var(--goforms-font-size-base);
    line-height: var(--goforms-line-height-base);
    color: #333;
  }
`; 