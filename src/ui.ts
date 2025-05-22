export interface GoFormsUIConfig {
  theme?: string;
  prefix?: string;
}

export class GoFormsUI {
  private static instance: GoFormsUI;
  private config: GoFormsUIConfig = {
    theme: 'default',
    prefix: 'goforms'
  };

  private constructor() {}

  static getInstance(): GoFormsUI {
    if (!GoFormsUI.instance) {
      GoFormsUI.instance = new GoFormsUI();
    }
    return GoFormsUI.instance;
  }

  init(config: GoFormsUIConfig = {}): void {
    this.config = { ...this.config, ...config };
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.config.theme || 'default');
  }

  getConfig(): GoFormsUIConfig {
    return { ...this.config };
  }
} 