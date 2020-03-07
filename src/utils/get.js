/**
 * 下载模板
 * download-git-repo 支持从 Github、Gitlab 下载远程仓库到本地。
 */
import {getAll} from './rc';   //配置文件
import downloadGit from 'download-git-repo';
export const downloadLocal = async (templateName, projectName) => {
    let config = await getAll();   //获取配置信息
    let api = `${config.registry}/${templateName}`;
    console.log('==========',api);
    return new Promise((resolve, reject) => {
        //projectName 为下载到的本地目录
        downloadGit(api, projectName, (err) => {
            if(err){
                reject(err);
            }
            resolve();
        });
    });
}