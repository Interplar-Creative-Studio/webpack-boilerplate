const path = require('path')

module.exports = {
  // Исходные файлы
  src: path.resolve(__dirname, '../src'),

  // Билд для продакшена
  build: path.resolve(__dirname, '../dist'),

  // Статические файлы
  public: path.resolve(__dirname, '../public'),
}
