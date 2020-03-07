import {RC, DEFAULTS} from './constants';
import {decode, encode} from 'ini';
import {promisify} from 'util';    //util.promisify是在node.js 8.x版本中新增的一个工具，用于将老式的Error first callback转换为Promise对象
import chalk from 'chalk';
import fs from 'fs';

const exists = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

//RC 是配置文件
//DEFAULTS 是默认的配置
export const get = async (key) => {
    const exist = await exists(RC);
    let opts;
    if(exist){
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts[key];
    }
    return '';
}
export const getAll = async () => {
    const exist = await exists(RC);
    let opts;
    if (exist) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts;
    }
    return {};
}
export const set = async (key, value) => {
    const exist = await exists(RC);
    let opts;
    if(exist){
        opts = await readFile(RC, 'utf-8');
        opts = decode(opts);
        if(!key){
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
            return;
        }
        if(!value){
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
            return;
        }
        Object.assign(opts, {[key]: value});
    }else{
        opts = Object.assign(DEFAULTS, { [key]: value });
    }
    await writeFile(RC, encode(opts), 'utf-8');
}
export const remove = async (key) => {
    const exist = await exists(RC);
    let opts;
    if(exist){
        opts = await readFile(RC, 'utf-8');
        opts = decode(opts);
        delete opts[key];
        await writeFile(RC, encode(opts), 'utf-8');
    }
}