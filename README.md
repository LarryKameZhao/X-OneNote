# onenote
这是一个在线云笔记项目，实现了登陆、注册、创建笔记本和笔记页（实现markdown预览和自动保存）以及回收站功能
## [预览链接](https://larrykamezhao.github.io/X-OneNote/dist/#/login)

## 技术栈
vue2 + vuex + vue-router + ES6 + axios + less + 部分ElementUI组件

## 功能

### 登陆、注册

![登陆注册页面](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/login.jpg)

登陆后才可进入项目，创建个人笔记以及查看笔记

### 创建笔记本
![创建笔记本](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/notebooklist.jpg)
 
笔记本名称需通过正则检验。弹框使用了element-ui的Message组件。

![笔记本列表页](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/notebooklist2.jpg)

可点击笔记本，跳到该笔记本的详情页查看对应的笔记。

![编辑笔记本标题](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/notebooklist3.jpg)

编辑笔记本名称同样需通过正则检验。

### 笔记详情页
#### 创建和编辑笔记（markdown格式），会自动保存。
![创建和编辑笔记](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/editnote.jpg)

#### 预览笔记
![预览笔记](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/preview.jpg)

使用markdown-it将输入笔记转化为html.

#### 跳转笔记本
![点击下拉框跳转](
https://article111.oss-cn-beijing.aliyuncs.com/git-photo/notebooklist5.jpg)

下拉框使用element-ui的el-dropdown组件，可跳转至其他笔记本以及回收站。

### 回收站页面
![回收站](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/trash1.jpg)

点击恢复，笔记会回到对应笔记本的笔记列表中。

![恢复](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/revert.jpg)

点击删除后，笔记完全消失.笔记本列表中笔记数量也会更新

![彻底删除](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/delete.jpg)
![删除后的笔记列表](https://article111.oss-cn-beijing.aliyuncs.com/git-photo/notebooklis4.jpg)









## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

