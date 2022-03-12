# 📦 Шаблон Webpack5

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Шаблон webpack 5-ой версии с использованием таких технологий как:
- TypeScript
- SCSS
- Mocha
- ThreeJS

## `Установка`

Клонируем репозиторий и устанавливаем зависимости

```bash
npm i
```

## `Использование`

### Локальный сервер

```bash
npm run start:dev
```
**Запускается сам**, настройки из конфига для разработки.

```bash
npm run start:prod
```
Сам **не запускается**, надо самому. Настройки из конфига для продакшена.

### Билд

```bash
npm run build:dev
```
Билд **без** прохождения тестов

```bash
npm run build:dev
```
Билд **с** прохождением тестов

> Важно: Установите [http-server](https://www.npmjs.com/package/http-server) как глобальную зависимость, чтобы сделать небольшой сервер.

```bash
npm i -g http-server
```

Теперь вы можете посмотреть свои труды из папки `dist`. Для этого перейдите в папку с билдом и запустите сервер

```bash
cd dist && http-server
```

## `Зависимости`

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Упаковщик
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Коммандный интерфейс для Webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Локальный сервер для Webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Упрощенное создание конфигов для разработки/продакшена
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Кросс-платформенная конфигурация

<!-- ### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel -->

<!-- ### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
-->

### Плагины

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Очищает папку с билдом
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Копирует файлы в папку с билдом
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Генерирует HTML из шаблона
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Разделяет CSS по разным файлам
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Оптимизация и минификация CSS файлов

<!-- ### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
  - - [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack -->

## `Лицензия`

Проект с открытым исходным кодом и доступен под лицензией [MIT License](LICENSE).
