#### CSS复用说明文档

这套基础通用样式文件在代码中没有对默认的html标签进行过多的处理
因为每个项目一般都会引入不同的reset.css 或者 normal.css ，因此
样式的表现是在此基础上做显示的。


【注释规范】
~~~
// 单行注释 (用于行注释和部件说明)

/*
多行注释 (用于段注释和控件说明)
*/
~~~


* 汇总文件  ui.less

    包含引入所有单独控件样式文件，在这里可以增加新增
    控件文件 或 删除不需要的控件文件的引用。

* 主题文件

    theme.less - 各个less文件中都有引用方便变更主题色

* 通用文件

    common.less - 主要包含快速样式（文本，对齐，颜色）

* 控件分类

    * layout - ( flex grid )

    * tab

    * button

    * menu

    * list

    * table

    * panel

    * form

    * modal

    * avatar
