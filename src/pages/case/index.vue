<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<casebanner :bannerNav = "bannerNav"></casebanner>
		    <div id="caseIndex" class="case">
		        <div class="container">
		            <div class="caseTitlePart">
		                <h4>成功案例<span></span></h4>
		                <h5>SUCCESSFUL CASES</h5>
		            </div>
		            <div class="choosePart">
		                <ul class="c_ul">
		                    <li :class="index == 0 ? 'active':''" v-for="(n,index) in choose" @click="tabChoose(n,$event)" v-html="n.name" :key = "n.name"></li>
		                </ul>
		                <ul class="in_ul" v-show="s_choose.type">
		                    <li v-for="(n,index) in s_choose.type" v-html="n.name" @click="search(n,$event)" :data-type="s_choose.name" :key="n.name"></li>
		                </ul>
		            </div>
		        </div>
		        <ul class="list_Ul clearfix"> </ul>
		        <ul class="model_list clearfix " id="model_list" style="display: none;">
		            <li class="item_li" v-for="n in lists" :key="n.id">
		            	<router-link :to="{ name: 'Casedetails', params: { id: n.id, r_pic: n.r_pic }}">
		                <!-- <a :href="'/cases/detail?id='+n.id + '&r_pic=' + n.r_pic " target="_blank"> -->
		                    <img :src="n.pic" class="faceImg">
		                    <!-- <img :src="'http://crm.xiaoying.net/'+n.head_file_path" class="faceImg"> -->
		                    <h3 v-html="n.names"></h3>
		                    <span><img src="../../../static/images/case/case_school.png">{{n.receive_college}}</span>
		                    <h2>{{n.remark}}
		                        <img src="../../../static/images/case/left_quote.png">
		                        <img src="../../../static/images/case/right_quote.png">
		                    </h2>
		                <!-- </a> -->
		            	</router-link>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import casebanner from '@/pages/case/casebanner.vue';
	// import applyForm from '@/pages/case/components/applyForm.vue';
	// import recommendConsult from '@/pages/case/components/recommendConsult.vue';
	export default{
		name: 'Case',
		data() {
			return {
				nav: 'case',
                bannerNav: 'case',
	            lock: true,
	            choose: [
	                {
	                    name: "全部",
	                    type: []
	                }, {
	                    name: "学生学历",
	                    type: [{
	                        name: "初中"
	                    }, {
	                        name: "高中"
	                    }, {
	                        name: "大学/大专在读"
	                    }, {
	                        name: "SGU英语项目"
	                    }, {
	                        name: "毕业工作"
	                    }]
	                }, {
	                    name: "服务项目",
	                    type: []
	                }, {
	                    name: "日语水平",
	                    type: [{
	                        name: "N1"
	                    }, {
	                        name: "N2"
	                    }, {
	                        name: "N3"
	                    }, {
	                        name: "N4"
	                    }, {
	                        name: "N5"
	                    }, {
	                        name: "0基础"
	                    }]
	                }, {
	                    name: "录取年份",
	                    type: [{
	                        name: "2000-2012"
	                    }, {
	                        name: "2013"
	                    }, {
	                        name: "2014"
	                    }, {
	                        name: "2015"
	                    }, {
	                        name: "2016"
	                    }, {
	                        name: "2017"
	                    }]
	                }, {
	                    name: "名校报考经验",
	                    type: [{
	                        name: "东京大学"
	                    }, {
	                        name: "京都大学"
	                    }, {
	                        name: "大阪大学"
	                    }, {
	                        name: "庆应大学"
	                    }, {
	                        name: "早稻田大学"
	                    }
	                    // , {
	                    //     name: "更多"
	                    // }
	                    ]
	                }
	            ],
	            s_choose: [],
	            // requet: {
	            //     PageIndex: 1,
	            //     rows: 10
	            // },
	            lists: [],
	            query:{
	                education: '',
	                programcate: '',
	                japan_language: '',
	                receive_year: '',
	                receive_college: '',
	                page: 1,
	                rows: 10,
	                c: ''
	            },
	            lock: true,
	            r_pic: ''
	            // lotwhere: ''
            }
        },
        components: {
			headerTop,
			casebanner

			// applyForm,
			// recommendConsult
		},
        methods: {
            tabChoose: function(item,event) {
                var _this = this;
                var el = event.currentTarget;
                this.s_choose = item;
                $('.in_ul li').removeClass('active');
                $(el).addClass("active").siblings().removeClass("active");

                localStorage.caes_c = $(el).text();
                _this.query.c = localStorage.caes_c;

                if(item.name == "全部") {
                    _this.query.c = '';
                    _this.query.education = '';
                    _this.query.programcate = '';
                    _this.query.japan_language = '';
                    _this.query.receive_year = '';
                    _this.query.receive_college = '';
                    _this.query.page = 1;
                    $('.list_Ul').html('');

                    _this.getData(_this.query.education, _this.query.programcate,_this.query.japan_language,_this.query.receive_year,_this.query.receive_college);

                }
                //已选中的二级条件高亮
                var receiveYear = _this.query.receive_year == '2010'?'2000-2012':_this.query.receive_year;
                _this.$nextTick(function() {
                    $('.in_ul li').each(function () {
                        if ($(this).text() == _this.query.education) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == _this.query.programcate) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == _this.query.japan_language) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == receiveYear) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == _this.query.receive_college) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                    })
                })
            },
            search: function (item,event) {
                var _this = this;
                var el = event.currentTarget;
                console.log('search',item.name,$(el).data('type'));
                
                //记录选中的二级条件
                if(!$(el).hasClass('active')) {
                    $(el).addClass("active").siblings().removeClass("active");
                
                    if ($(el).data('type') == "学生学历") {
                        localStorage.case_education = item.name;
                        _this.query.education= localStorage.case_education;
                    }else if ($(el).data('type') == "服务项目") {
                        localStorage.case_programcate = item.name;
                        _this.query.programcate= localStorage.case_programcate;
                    }else if ($(el).data('type') == "日语水平") {
                        localStorage.case_japan_language = item.name;
                        _this.query.japan_language= localStorage.case_japan_language;
                    }else if ($(el).data('type') == "录取年份") {
                        if (item.name == '2000-2012') {
                            localStorage.case_receive_year = '2010'
                        }else {
                            localStorage.case_receive_year = item.name;
                        }
                        _this.query.receive_year= localStorage.case_receive_year;
                    }else if ($(el).data('type') == "名校报考经验") {
                        localStorage.case_receive_college = item.name;
                        _this.query.receive_college= localStorage.case_receive_college;
                    }
                } else {
                    $(el).removeClass("active");
                    if ($(el).data('type') == "学生学历") {
                        localStorage.case_education='';
                        _this.query.education= localStorage.case_education;
                    }else if ($(el).data('type') == "服务项目") {
                        localStorage.case_programcate='';
                        _this.query.programcate= localStorage.case_programcate;
                    }else if ($(el).data('type') == "日语水平") {
                        localStorage.case_japan_language='';
                        _this.query.japan_language= localStorage.case_japan_language;
                    }else if ($(el).data('type') == "录取年份") {
                        localStorage.case_receive_year='';
                        _this.query.receive_year= localStorage.case_receive_year;
                    }else if ($(el).data('type') == "名校报考经验") {
                        localStorage.case_receive_college='';
                        _this.query.receive_college= localStorage.case_receive_college;
                    }
                }

                _this.query.page = 1;
                $('.list_Ul').html('');

                _this.getData(_this.query.education, _this.query.programcate,_this.query.japan_language,_this.query.receive_year,_this.query.receive_college);
                // window.location.href = "/Case?education="+_this.query.education+'&programcate='+_this.query.programcate+'&japan_language='+_this.query.japan_language+'&receive_year='+_this.query.receive_year+'&receive_college='+_this.query.receive_college+'&cat='+_this.query.c;

                
            },
            getallprogramcate: function () {
                var _this = this;
                //获取服务项目
                $.ajax({
                    url:"http://crm.xiaoying.net?m=case&a=getallprogramcate",
                    type:"POST",
                    dataType:"json",
                    success:function(res){
                        var obj = res;
                        // console.log('getallprogramcate',res);
                        var array = [];
                        for (var i = 0; i < _this.choose.length; i++) {
                            if(_this.choose[i].name == '服务项目') {
                                for(let i in obj) {
                                    var o = {}
                                    o.name = obj[i].name;
                                    
                                    array.push(o);
                                }
                                _this.choose[i].type = array;
                                return false
                            }   
                            
                        }
                    }
                })
            },
            getData: function(education,programcate,japan_language,receive_year,receive_college){
                var _this = this;
                console.log('education',education,'programcate',programcate,'japan_language',japan_language,'receive_year',receive_year,'receive_college',receive_college)
                $("#loader").show();
                $.ajax({
                    url:"http://crm.xiaoying.net?m=case&a=frontsearch",
                    type:"POST",
                    data: {
                        //education  学历
                        //programcate  服务项目
                        //japan_language  日语水平
                        //receive_year  录取年份
                        //receive_college  名校报考
                        //page: 当前页
                        //rows: 每页多少条
                        /*education: _this.query.education,
                        programcate: _this.query.programcate,
                        japan_language: _this.query.japan_language,
                        receive_year: _this.query.receive_year,
                        receive_college: _this.query.receive_college,
                        page: _this.query.page,
                        rows: _this.query.rows*/
                      
                        education: education?decodeURI(education):'',
                        programcate: programcate? decodeURI(programcate):'',
                        japan_language: japan_language?decodeURI(japan_language):'',
                        receive_year: receive_year?decodeURI(receive_year):'',
                        receive_college: receive_college?decodeURI(receive_college):'',
                        page: _this.query.page,
                        rows: _this.query.rows
                    },
                    dataType:"json",
                    success:function(res){
                        if (res.status && res.data != null) {
                           
                           //处理图片
                            var array = res.data.list;
                            for (var i = 0; i < res.data.list.length; i++) {
                                if(res.data.list[i].pic) {
                                    array[i].pic = 'http://crm.xiaoying.net/' + res.data.list[i].pic;
                                } else {
                                    var ramand = _this.randomNum(1,10);
                                    array[i].r_pic = ramand;
                                    array[i].pic = '../../../static/images/case/ramandImg/'+array[i].r_pic+'.jpg';
                                }
                            }
                            _this.lists = array;
                            _this.query.page = _this.query.page + 1;

                            _this.$nextTick(function() {
                                //瀑布流初始化
                               
                                /*if (_this.query.page == 2) {
                                    $grid = $('.list_Ul').masonry({
                                        // columnWidth: 330,
                                        itemSelector: '.item_li',
                                        // gutter: 30,
                                        transitionDuration: 0
                                    });
                                    $grid.masonry('reloadItems');
                                    $grid.masonry('layout');
                                }*/
                                $('.list_Ul').append($("#model_list").html());
                                $('.list_Ul li').addClass('show');
                                // $grid.masonry('reloadItems');
                                // $grid.masonry('layout');

                            })
                            _this.lock = true;
                            $("#loader").fadeOut(450);
                        } else {
                            _this.lock = false;
                            $("#loader").fadeOut(450);
                        }
                    }
                })
            },
            randomNum: function (minNum,maxNum) {
                switch(arguments.length){ 
                    case 1: 
                        return parseInt(Math.random()*minNum+1,10); 
                    break; 
                    case 2: 
                        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                    break; 
                        default: 
                            return 0; 
                        break; 
                } 
            },
            getQueryString: function(name, needdecoed) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var lh = window.location.search;
                if (needdecoed) {
                    lh = decodeURI(window.location.search)
                }
                var r = lh.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            }
        },
        mounted: function() {
            $("#loader").show();
            var _this = this;
            _this.query.c =  localStorage.caes_c?localStorage.caes_c:'';
            console.log(_this.query.c)
            _this.query.education = localStorage.case_education?localStorage.case_education:'';
            _this.query.programcate = localStorage.case_programcate?localStorage.case_programcate:'';
            _this.query.japan_language = localStorage.case_japan_language? localStorage.case_japan_language:'';
            _this.query.receive_year = localStorage.case_receive_year?localStorage.case_receive_year:'';
            _this.query.receive_college = localStorage.case_receive_college?localStorage.case_receive_college:'';

            // 多行溢出兼容IE
            var body=document.getElementsByTagName("body")[0];
            if(typeof body.style.WebkitAnimation!="undefined") {
                // alert("当前浏览器是Webkit内核！");
                // $('.item_li a h2').removeClass('ie');
            }else {
                // alert("当前浏览器不是Webkit内核！");
                $('.item_li a h2').addClass('ie');
            }
            _this.getallprogramcate();

            
            //初始化选择分类

            $('.c_ul li').each(function () {
                if ($(this).text() == _this.query.c) {
                    $(this).addClass("active").siblings().removeClass("active");
                    _this.s_choose = _this.choose[$(this).index()];

                    // console.log('_this.s_choose',_this.s_choose)
                    if ($(this).text() == '服务项目') {

                        $.ajax({
                            url:"http://crm.xiaoying.net?m=case&a=getallprogramcate",
                            type:"POST",
                            dataType:"json",
                            success:function(res){
                                var obj = res;
                                // console.log('getallprogramcate',res);
                                var array = [];
                                for (var i = 0; i < _this.choose.length; i++) {
                                    if(_this.choose[i].name == '服务项目') {
                                        for(let i in obj) {
                                            var o = {}
                                            o.name = obj[i].name;
                                            
                                            array.push(o);
                                        }
                                        _this.choose[i].type = array;

                                         _this.$nextTick(function() {
                                             $('.in_ul li').each(function () {
                                                if ($(this).text() == _this.query.programcate) {
                                                    $(this).addClass("active").siblings().removeClass("active");
                                                }
                                            })
                                        })
                                        return false
                                    }   
                                    
                                }
                            }
                        })
                            
                        
                    } else {
                        var receiveYear = _this.query.receive_year == '2010'?'2000-2012':_this.query.receive_year;
                         _this.$nextTick(function() {
                            $('.in_ul li').each(function () {

                                if ($(this).text() == _this.query.education) {
                                    $(this).addClass("active").siblings().removeClass("active");
                                }
                                if ($(this).text() == _this.query.japan_language) {
                                    $(this).addClass("active").siblings().removeClass("active");
                                }

                                if ($(this).text() == receiveYear) {
                                    $(this).addClass("active").siblings().removeClass("active");
                                }
                                if ($(this).text() == _this.query.receive_college) {
                                    $(this).addClass("active").siblings().removeClass("active");
                                }

                            })

                        })
                    }
                }
            })
            //初始化案例列表

            // _this.getData();
            _this.getData(_this.query.education, _this.query.programcate,_this.query.japan_language,_this.query.receive_year,_this.query.receive_college);

            $(window).scroll(function() {
                var scrollTop = $(this).scrollTop();
                var scrollHeight = $(document).height();
                var windowHeight = $(this).height();
                if (parseInt(scrollTop + windowHeight) == scrollHeight && _this.lock) {
                    _this.lock = false;
                    // console.log('scroll',_this.query.page);
                    // _this.getData();
                    _this.getData(_this.query.education, _this.query.programcate,_this.query.japan_language,_this.query.receive_year,_this.query.receive_college);
                }
            });
            
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            localStorage.caes_c = '';
            localStorage.case_education = '';
            localStorage.case_programcate = '';
            localStorage.case_japan_language = '';
            localStorage.case_receive_year = '';
            localStorage.case_receive_college = '';
            next();
        }
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/case.css';

</style>
