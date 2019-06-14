 // 命令行交互方式inquirer.prompt 知道选择那个选项
const inquirer = require('inquirer');

module.exports = (songs) => inquirer.prompt([{
  type: 'list',
  name: 'song',
  message: '共有 ' + songs.length + ' 个结果, 按下回车播放',
  choices: songs.map((i, index) => `${index + 1}${i.name}`)
}])