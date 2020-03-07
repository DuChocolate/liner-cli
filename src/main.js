
import program from 'commander';
import apply from './index';
import chalk from 'chalk';

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: [
            'liner init templateName projectName'
        ]
    },
    config: {
        alias: 'cfg',
        description: 'config .linerrc',
        usages: [
            'liner config set <k> <v>',
            'liner config get <k>',
            'liner config remove <k>'
        ]
        
    },
    //other commands
}
// 添加 init / config 命令
Object.keys(actionMap).forEach((action) => {
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias) //别名
    .action(() => {
        switch (action) {
            case 'config': 
                //配置
                apply(action, ...process.argv.slice(3));
                break;
            case 'init':
                apply(action, ...process.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}
program.usage('<command> [options]');
// liner -h 
program.on('-h', help);
program.on('--help', help);
// liner -V   VERSION 为 package.json 中的版本号
// program.version(VERSION, '-V --version').parse(process.argv);
program.parse(process.argv);
// liner 不带参数时
if (!process.argv.slice(2).length) {   //process.argv:  'liner --help' 输出 [ '/usr/local/bin/node', '/usr/local/bin/liner', '--help' ]
    program.outputHelp(make_green);
}
function make_green(txt) {
    return chalk.green(txt);   //使输出的字体颜色变绿
}
