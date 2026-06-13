# create-vrrtts

A CLI tool to quickly scaffold Vite+React+React Router+TypeScript+Tailwind+ShadCN UI projects.

## Features

- 🚀 Quick project setup with a single command
- ⚛️ Modern React setup with React Router
- 🔷 TypeScript support out of the box
- 🎨 Tailwind CSS pre-configured
- 🧩 ShadCN UI components ready to use
- 📁 Organized folder structure for components, pages, and layouts
- 🧩 File-based routing with automatic route generation

## Usage

```bash
# Create a new project
pnpm create vrrtts my-project

# Follow the prompts to configure your project

# Start development
cd my-project
pnpm install
pnpm dev
```

## Project Structure

```
my-project/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components (includes ShadCN UI)
│   ├── layout/        # Layout components
│   ├── pages/         # Page components (auto-routed)
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   ├── router.tsx     # Router configuration
│   └── index.css      # Global styles
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## File-Based Routing

Routes are automatically generated based on your file structure in the `pages` directory:

- `src/pages/index.tsx` → `/`
- `src/pages/about.tsx` → `/about`
- `src/pages/users/index.tsx` → `/users`
- `src/pages/users/$id.tsx` → `/users/:id` (dynamic parameter)

## Configuration Options

When running the create command, you'll be prompted to select:

- Project name
- Language variant (TypeScript or JavaScript)
- Whether to overwrite existing directories

## Development

To contribute to this project:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/create-vrrtts.git
   cd create-vrrtts
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Link it locally for testing:

   ```bash
   pnpm link --global
   ```

4. Test your changes:
   ```bash
   pnpm create vrrtts test-project
   ```

## License

MIT
