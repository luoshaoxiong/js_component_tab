# js_component_tab
使用对象实现tab组件
## 组件功能
点击切换组件的active状态
## 组件实现方式
通过封装对象的形式实现，将通用的设置数据和初始化以及绑定点击事件都放在prototype中，基本数据放于tab函数中。
## 如何使用
```
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
tab2.setData(['主页', '标签', '成就', '时间轴', '举报', '设置']);
```
Tab的参数传入需要变成tab组件的元素，可以通过setData传入一个要显示元素的数组。
