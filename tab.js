
function Tab (node){
    this.data = ['首页', '新闻', '关于', '公告', '联系我们'];
    this.node = node;
    this.start();
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
        var tabHtml = '<li class="active">' + this.data[0] + '</li>',
            panelHtml = '<div class="panel active">'+ this.data[0] +'</div>';
        for(var i=1;i<this.data.length;i++) {
            tabHtml += '<li>' + this.data[i] + '</li>';
            panelHtml += '<div class="panel">'+ this.data[i] +'</div>';
        }
        this.node.innerHTML = '<ul>' + tabHtml + '</ul>' + panelHtml;
    },
    bind: function(){
        var _this = this;
        this.node.addEventListener('click', function(e) {
            var index;
            if(e.target.nodeName==='LI') {
                var liArr = _this.node.querySelectorAll('li');
                for(var i=0;i<liArr.length;i++) {
                    liArr[i].classList.remove('active');
                    if(e.target==liArr[i]) {
                        index = i;
                        e.target.classList.add('active');
                    }
                }
                var panelArr = _this.node.querySelectorAll('.panel');
                panelArr.forEach(function (node) {
                    node.classList.remove('active');
                });
                panelArr[index].classList.add('active');
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