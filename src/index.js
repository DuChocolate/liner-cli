/**
 * 主的流程控制
 * 根据命令，执行相应的文件
 */
let apply = (action, ...args) => {
    require(`./${action}`)(...args);
};
export default apply;