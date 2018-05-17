
var timeInfo = require('../modules/timeCalculator')
var os = require('os');
var  colors = require('colors');

function getOSinfo() {
  var type = os.type();
  if (type === 'Darwin') {
    type = 'OSX';
  }else if (type === 'Windows_NT') {
    type = 'Windows';
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();


  console.log(colors.blue.bold('System:'), type);
  console.log(colors.bgMagenta.red('Release:'), release);
  console.log(colors.green.bold('CPU model:'), cpu);
  console.log(colors.bgYellow.red('Uptime: '), timeInfo.print(uptime));
  console.log(colors.cyan.bold('User name:'), userInfo.username);
  console.log(colors.bgRed.yellow('Home dir:'), userInfo.homedir);
}


exports.print = getOSinfo;
