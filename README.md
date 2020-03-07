参考链接：https://juejin.im/post/5d37d982e51d45108c59a635
##### 依赖的第三方库
- babel-cli/babel-env: 语法转换
- commander: 命令行工具
- download-git-repo: 用来下载远程模板
- ini: 格式转换
- inquirer: 交互式命令行工具
- ora: 显示loading动画
- chalk: 修改控制台输出内容样式
- log-symbols: 显示出 √ 或 × 等的图标
##### 本地使用方法
1. 执行git clone ...将代码下载到本地；
2. 执行npm install下载代码所需依赖包；
3. 执行npm link将模块链接为全局可执行命令，此时就可以使用liner的各个命令了。

> 注：初次使用使需先执行liner config set type <type>、liner config set registry <registry>设置仓库地址。
##### liner的命令
可以通过执行liner -h、liner --help命令查看帮助。
- liner init templateName projectName
- liner config set <k> <v>
- liner config get <k>
- liner config remove <k>

> 本项目仅为学习示例。