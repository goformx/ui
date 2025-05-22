# GoForms UI

A custom UI framework for GoForms, extracted from the main GoForms project. This framework provides a modern, customizable UI system for building forms and applications.

## Features

- Custom CSS framework with modern design principles
- Component-based architecture
- Responsive layouts
- Theme support
- Form builder components
- Utility classes

## Installation

```bash
npm install @goforms/ui
```

## Usage

```typescript
import '@goforms/ui/dist/css/main.css';
import { GoFormsUI } from '@goforms/ui';

// Initialize the UI framework
GoFormsUI.init({
  theme: 'default',
  // other configuration options
});
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Building

```bash
npm run build
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

