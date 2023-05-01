1.  **Prepare Project**

    Clone this repository.

    ```
    git clone https://github.com/MartinnBonchev/events-web-app.git
    ```

    Install dependencies.

    ```
    # replace `yarn` with `npm` if it works better for you
    cd expression-calculator && yarn
    ```

2.  **Set environment variables**

    ```.env
    VITE_SEATGEEK_BASE_URL=
    VITE_SEATGEEK_URL_VERSION=
    VITE_SEATGEEK_CLIENT_ID=
    ```

3.  **Start the Project**

    Open the terminal and run.

    ```
    yarn dev
    ```

    A development server with start on `http://localhost:3000`

## Folder Structure

```
.
|____.vscode                            # VSCode workspace config
│   └───settings.json
|____public                             # Static assets
| |____vite.svg
|____src                                # Source code
│ ├───assets/
│ │   └───favicon.ico
| |____components
| |____features
| |____routes
| |____pages
| |____store
| | |____hooks
| | |____reducers
| | |____store.ts
| |____styles
| |____utils
| |____App.tsx
| |____main.tsx
| |____App.module.css
| |____vite-env.d.ts
|____.gitignore
|____.eslintrc.cjs
|____.env                               # Default `dotenv` secrets
|____index.html
|____package.json
|____README.md
|____tsconfig.json
|____tsconfig.node.json
|____vite.config.ts
|____yarn.lock

```

### Available Scripts

```bash
# local development
yarn dev

# production build
yarn build

# lint project
yarn lint

# vite preview
yarn preview
```
