<!-- 
调研前端自动化测试工具

目的：找前端自动化测试工具，能够模仿人的行为代替操作。

工具简介
名称：selenium
GitHub: https://github.com/SeleniumHQ/selenium
Javascript Doc: http://seleniumhq.github.io/selenium/docs/api/javascript/

踩坑：
1.必须先安装对应浏览器的driver，且不同版本装的driver不同。
   derver地址: https://sites.google.com/a/chromium.org/chromedriver/downloads 
   下载完成之后http://blog.csdn.net/walter_chan/article/details/50464625安装。

2.是否可以对iframe操作：https://www.jianshu.com/p/33cf3ba703bd  可以
3.在模拟发送私信的时候，网易云采用的web结构比较奇怪，iframe展示内容，登录框不在iframe内部。
4.中文社区非常不活跃，国内用的比较少，但是是谷歌维护所以国外社区比较活跃，且API丰富，但是也带来了比较难上手的缺点。且有问题只能自己看找api或者上stackoverflow，issue。

目标
模拟一次给网易云音乐人发送私信  完成。 

-->