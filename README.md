# 📦 Шаблон Webpack5

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NodeJS](https://img.shields.io/badge/NodeJS-v17.6.0-success)](https://nodejs.org/en/)
[![Webpack](https://img.shields.io/badge/Webpack-v5.58.2-informational)](https://webpack.js.org/)


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

### ***Локальный сервер***

```bash
npm run start:dev
```
**Запускается сам**, настройки из конфига для разработки.

```bash
npm run start:prod
```
Сам **не запускается**, надо самому. Настройки из конфига для продакшена.

### ***Билд***

```bash
npm run build:dev
```
Билд **без** прохождения тестов

```bash
npm run build:dev
```
Билд **с** прохождением тестов

> Важно: Установите [http-server](https://www.npmjs.com/package/http-server) как глобальную зависимость, чтобы запустить небольшой сервер.

```bash
npm i -g http-server
```

Теперь вы можете посмотреть свои труды из папки `dist`. Для этого перейдите в папку с билдом и запустите сервер

```bash
cd dist && http-server
```

### ***Прочие команды***

Просто запускает тесты

```bash
npm run test
```

А вот тут работает линтер

```bash
npm run lint
```

Делает наш код _красивым_

```bash
npm run prettify
```

## `Структура проекта`
```bash
config/ - конфиги Webpack
public/ - всякие robot.txt и т.д пихаем сюда
src/ - основная директория
├── fonts/ - среда обитания шрифтов
├── images/ - картиночки
├── scripts/ - а тут живут TypeScript файлы
├── styles/ - куда же без стилей
└── template.html/ - шаблон HTML-документа
tests/ - директория с тестами
```

## `Зависимости`

### ***webpack***

- [`webpack`](https://github.com/webpack/webpack) - Упаковщик
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Коммандный интерфейс для Webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Локальный сервер для Webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Упрощенное создание конфигов для разработки/продакшена
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Кросс-платформенная конфигурация

### ***Загрузчики***

- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Загружает SCSS и компилирует в CSS
  - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Обрабатывает CSS с PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Значения по умолчанию для PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - CSS импорты
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Внедрение CSS в DOM
- [`ts-loader`](https://www.npmjs.com/package/ts-loader) - Загрузка и компиляция TypeScript

### ***Плагины***

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Очищает папку с билдом
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Копирует файлы в папку с билдом
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Генерирует HTML из шаблона
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Разделяет CSS по разным файлам
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Оптимизация и минификация CSS файлов

### ***Линтеры***

- [`eslint`](https://github.com/eslint/eslint) - Одинаковое форматирование по всему проекту
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Правила для prettier
  - - [`prettier`](https://github.com/prettier/prettier) - Зависимость для плагина `prettier-webpack-plugin`
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Исключения для импорта/экспорта в webpack 

## `Лицензия`

Проект с открытым исходным кодом и доступен под лицензией [MIT License](LICENSE).
