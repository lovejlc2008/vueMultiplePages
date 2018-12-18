const glob = require('glob');
const pages = {};
let entries;
try {
  // 获取入口文件列表
  entries = glob('src/pages/*/main.js', {
    sync: true
  })
} catch (err) {
  entries = [];
  throw err
}
// 入口
entries.forEach((filePath) => {
  const fileSplit = filePath.split('/');
  const pageName = fileSplit[2];
  pages[pageName] = {
    entry: './' + filePath,
    template: 'public/index.html',
    filename: `${fileSplit[2]}.html`,
  }
})

module.exports = {
  pages
    // pages: {
    //   index: {
    //     entry: './src/pages/index/main.js',
    //     template: 'public/index.html',
    //     filename: 'index.html',
    //     title: '新闻首页'
    //   },
    //   page1: {
    //     entry: './src/pages/world/main.js',
    //     template: 'public/world.html',
    //     filename: 'world.html',
    //     title: '国际新闻'
    //   },
    //   page2: {
    //     entry: './src/pages/domestic/main.js',
    //     template: 'public/domestic.html',
    //     filename: 'domestic.html',
    //     title: '国内新闻'
    //   }
    // }
  }