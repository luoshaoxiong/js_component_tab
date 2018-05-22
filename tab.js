
function Tab (node){
    this.data = ['首页', '新闻', '关于', '公告', '联系我们'];
    this.node = node;
    this.start();
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
        var html = '';
        for(var i=0;i<this.data.length;i++) {
            html += '<li>' + this.data[i] + '</li>';
        }
        this.node.innerHTML = '<ul>' + html + '</ul>';
    },
    bind: function(){
        var _this = this;
        this.node.addEventListener('click', function(e) {
            if(e.target.nodeName==='LI') {
                var liArr = _this.node.querySelectorAll('li');
                for(var i=0;i<liArr.length;i++) {
                    liArr[i].classList.remove('active');
                }
                e.target.classList.add('active');
            }
        })
    },
    setData: function(data) {
        this.data = [];
        for(var i=0;i<data.length;i++) {
            this.data.push(data[i]);
        }
        this.init();
    },
    start: function() {
        this.init();
        this.bind();
    }
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
tab2.setData(['主页', '标签', '成就', '时间轴', '举报', '设置']);