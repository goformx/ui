// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  tseslint.configs.eslintRecommended, // Ensures non-conflicting ESLint rules
  tseslint.configs.recommendedTypeChecked, // More rules with type awareness
  tseslint.configs.strictTypeChecked, // Strict rules with type checking
  tseslint.configs.stylisticTypeChecked // Enforces stylistic consistency
);
