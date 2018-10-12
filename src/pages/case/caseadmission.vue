<template>
	<div id="caseadmission">
		<header-top :nav ="nav"></header-top>
		<div class="case marginTop">
			<casebanner :bannerNav = "bannerNav"></casebanner>
			<div class="container main clearfix">
				<div class="left tableDv" id="caseAdmission">
					<div class="searchPart1">
						<ul class="c_ul">
							<li :class="index == 0 ? 'active':''" v-for="(n,index) in choose" @click="tabChoose(n,$event)" v-html="n.name" :key = "n.name"></li>
						</ul>
						<ul class="in_ul" v-show="s_choose.item">
							<li v-for="(n,index) in s_choose.item" v-html="n.name" @click="search(n,$event)" :data-type="s_choose.name" :key = "n.name"></li>
						</ul>
					</div>
					<ul class="list_head">
						<li>学生</li>
						<li>毕业院校</li>
						<li>GPA</li>
						<li>托福-托业</li>
						<li>录取大学</li>
						<li>录取专业</li>
					</ul>
					<ul class="list_body"></ul>
					<ul class="list_body_m" style="display: none;">
						<li class="list_item" v-for="n in lists">
							<span>{{n.name}}</span>
							<span>{{n.from_univ}}</span>
							<span>{{n.gpa}}</span>
							<span>{{n.score_en}}</span>
							<span>{{n.univ}}</span>
							<span>{{n.from_zhuan}}</span>
						</li>
					</ul>
					<div class="pageBox"></div>
				</div>
				<div class="right chartDv">
					<hot-activities></hot-activities>
					<asidechart></asidechart>
					<!-- <include file="./Template/Zixun/Index_hotActivities.html" />

					<include file="./Template/Common/rightAsideChart.html"/> -->
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import casebanner from '@/pages/case/casebanner.vue';
	import hotActivities from '@/pages/common/hotActivities.vue';
	import asidechart from '@/pages/common/asidechart.vue';

	export default{
		name: 'caseadmission',
		data () {
			return {
				nav: 'case',
				bannerNav: 'caseadmission',
	            lock: true,
	            choose: [{
	                name: "全部",
	                item: []
	            }, {
	                name: "录取大学",
	                item: [
	                    // {
	                    //     name:"全部",
	                    //     value:"",
	                    //     classname:"active"
	                    // },
	                    {
	                        name: "东京大学",
	                        value: ""
	                    },
	                    {
	                        name: "京都大学",
	                        value: ""
	                    },
	                    {
	                        name: "北海道大学",
	                        value: ""
	                    },
	                    {
	                        name: "大阪大学",
	                        value: ""
	                    },
	                    {
	                        name: "一桥大学",
	                        value: ""
	                    },
	                    {
	                        name: "广岛大学",
	                        value: ""
	                    },
	                    {
	                        name: "名古屋大学",
	                        value: ""
	                    }
	                ]
	            }, {
	                name: "录取年份",
	                item: [
	                    // {
	                    //     name:"全部",
	                    //     value:"",
	                    //     classname:"active"
	                    // },
	                    {
	                        name: "2000-2012",
	                        value: ""
	                    },
	                    {
	                        name: "2013",
	                        value: ""
	                    },
	                    {
	                        name: "2014",
	                        value: ""
	                    },
	                    {
	                        name: "2015",
	                        value: ""
	                    },
	                    {
	                        name: "2016",
	                        value: ""
	                    },
	                    {
	                        name: "2017",
	                        value: ""
	                    },
	                    {
	                        name: "2018",
	                        value: ""
	                    }
	                ]
	            }, {
	                name: "录取类型",
	                item: [
	                    // {
	                    //     name:"全部",
	                    //     value:"",
	                    //     classname:"active"
	                    // },
	                    {
	                        name: "语言学校",
	                        value: ""
	                    },
	                    {
	                        name: "高中/专门学校",
	                        value: ""
	                    },
	                    {
	                        name: "本科",
	                        value: ""
	                    },
	                    {
	                        name: "大学别科/预科",
	                        value: ""
	                    },
	                    {
	                        name: "大学院修士",
	                        value: ""
	                    }
	                ]
	            }, {
	                name: "热门标签",
	                item: [
	                    // {
	                    //     name:"全部",
	                    //     value:"",
	                    //     classname:"active"
	                    // },
	                    {
	                        name: "跨专业申请",
	                        value: ""
	                    },
	                    {
	                        name: "零中介",
	                        value: ""
	                    },
	                    {
	                        name: "专升本硕",
	                        value: ""
	                    },
	                    {
	                        name: "SGU/G30英文项目",
	                        value: ""
	                    }
	                ]
	            }, {
	                name: "专业分类",
	                item: [
	                    // {
	                    //     name:"全部",
	                    //     value:"",
	                    //     classname:"active"
	                    // },
	                    {
	                        name: "日本语",
	                        value: ""
	                    },
	                    {
	                        name: "经济金融",
	                        value: ""
	                    },
	                    {
	                        name: "经营商科",
	                        value: ""
	                    },
	                    {
	                        name: "社会学 ",
	                        value: ""
	                    },
	                    {
	                        name: "机械工程 ",
	                        value: ""
	                    },
	                    {
	                        name: "建筑设计",
	                        value: ""
	                    },
	                    {
	                        name: "视觉传达",
	                        value: ""
	                    },
	                    {
	                        name: "理工类",
	                        value: ""
	                    }
	                ]
	            }],
	            s_choose: [],
	            // haschoose:[],
	            lists: [],
	            query: {
	                lotwhere: '',
	                year: '',
	                xueli: '',
	                hottag: '',
	                college: '',
	                page: 1,
	                rows: 19,
	                c: '',
	            },
	            lock: true,
	            pageCount: 0
	        }
        },
        components: {
			headerTop,
			casebanner,
			hotActivities,
			asidechart

			// applyForm,
			// recommendConsult
		},
        methods: {
            tabChoose: function(item, event) {
                var _this = this;
                var el = event.target;

                $('.in_ul li').removeClass('active');
                $(el).addClass("active").siblings().removeClass("active");
                _this.s_choose = item;
                localStorage.caseadmi_cat = $(el).text();
                _this.query.c = localStorage.caseadmi_cat;

                if (item.name == "全部") {
                	_this.query.c = '';
                	_this.query.lotwhere = '';
                	_this.query.year = '';
                	_this.query.xueli = '';
                	_this.query.hottag = '';
                	_this.query.college = '';
                	_this.query.page = 1;
                	_this.getData(_this.query.lotwhere,_this.query.year,_this.query.xueli,_this.query.hottag,_this.query.college);
                    // window.location.href = "/cases/admission"
                }
                var receiveYear = _this.query.year == '2010' ? '2000-2012' : _this.query.year;
                _this.$nextTick(function() {
                    $('.in_ul li').each(function() {
                        if ($(this).text() == _this.query.lotwhere) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == receiveYear) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == _this.query.xueli) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == _this.query.hottag) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                        if ($(this).text() == _this.query.college) {
                            $(this).addClass("active").siblings().removeClass("active");
                        }
                    })
                })
            },
            search: function(item, el) {
                var _this = this;
                var el = event.target;

                
                //记录选中的二级条件
                if (!$(el).hasClass('active')) {
                    $(el).addClass("active").siblings().removeClass("active");

                    if ($(el).data('type') == "录取大学") {
                    	localStorage.caseadmi_lotwhere = item.name;
                        _this.query.lotwhere = localStorage.caseadmi_lotwhere;
                    } else if ($(el).data('type') == "录取年份") {
                    	if (item.name == '2000-2012') {
		                    localStorage.caseadmi_year = '2010'
		                }else {
                    		localStorage.caseadmi_year = item.name;
		                }
                        _this.query.year = localStorage.caseadmi_year;
                    } else if ($(el).data('type') == "录取类型") {
                    	localStorage.caseadmi_xueli = item.name;
                        _this.query.xueli = localStorage.caseadmi_xueli;
                    } else if ($(el).data('type') == "热门标签") {
                    	localStorage.caseadmi_hottag = item.name;
                        _this.query.hottag = localStorage.caseadmi_hottag;
                    } else if ($(el).data('type') == "专业分类") {
                    	localStorage.caseadmi_college = item.name;
                        _this.query.college = localStorage.caseadmi_college;
                    }
                } else {
                    $(el).removeClass("active");
                    if ($(el).data('type') == "录取大学") {
                    	localStorage.caseadmi_lotwhere= '';
                        _this.query.lotwhere = localStorage.caseadmi_lotwhere;
                    } else if ($(el).data('type') == "录取年份") {
                    	localStorage.caseadmi_year= '';
                        _this.query.year = localStorage.caseadmi_year;
                    } else if ($(el).data('type') == "录取类型") {
                    	localStorage.caseadmi_xueli= '';
                        _this.query.xueli = localStorage.caseadmi_xueli;
                    } else if ($(el).data('type') == "热门标签") {
                    	localStorage.caseadmi_hottag= '';
                        _this.query.hottag = localStorage.caseadmi_hottag;
                    } else if ($(el).data('type') == "专业分类") {
                    	localStorage.caseadmi_college= '';
                        _this.query.college = localStorage.caseadmi_college;
                    }
                }
                console.log(_this.query.lotwhere,_this.query.year,_this.query.xueli,_this.query.hottag,_this.query.college)
                _this.query.page = 1;
                _this.getData(_this.query.lotwhere,_this.query.year,_this.query.xueli,_this.query.hottag,_this.query.college);

                // window.location.href = "/cases/admission?lotwhere=" + _this.query.lotwhere + '&year=' + _this.query.year + '&xueli=' + _this.query.xueli + '&hottag=' + _this.query.hottag + '&college=' + _this.query.college + '&cat=' + _this.query.c;
            },
            // ,
            // deltag1: function(item) {
            //     var _this = $(item.target);
            //     _this.addClass("disappear");
            //     setTimeout(function(){
            //         _this.remove();
            //     },400)
            // },
            getData: function(lotwhere,year,xueli,hottag,college) {
                var _this = this;
                $("#loader").show();
                $.ajax({
                    url: "http://crm.xiaoying.net?m=casedata&a=search",
                    type: "POST",
                    data: {
                        lotwhere: lotwhere?decodeURI(lotwhere):'',
                        year: year?decodeURI(year):'',
                        xueli: xueli?decodeURI(xueli):'',
                        hottag: hottag?decodeURI(hottag):'',
                        college: college?decodeURI(college):'',
                        page: _this.query.page,
                        rows: _this.query.rows
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.status && res.data != null) {

                            /**
                                lotwhere  录取大学
                                year  录取年份
                                xueli 录取类型
                                hottag  热门标签
                                college  专业
                            **/
                            _this.pageCount = res.data.total;
                            // console.log(_this.pageCount);
                            _this.lists='';
                            _this.lists = res.data.list;
                            $('.pageBox').pagination({
                                pageCount: _this.pageCount,
                                showData: _this.query.rows,
                                current: _this.query.page,
                                homePage: '首页',
                                endPage: '末页',
                                isHide: true,
                                count: 2,
                                activeCls: 'active',
                                coping: true,
                                callback: function(api) {

                                    if (_this.query.page >= 2) {
                                        _this.query.page = api.getCurrent();
                                        // _this.getData();
                                        _this.getData(_this.query.lotwhere,_this.query.year,_this.query.xueli,_this.query.hottag,_this.query.college);
                                    }
                                }
                            });
                            _this.query.page = _this.query.page + 1;
                            _this.$nextTick(function() {

                                //瀑布流初始化
                                // if (_this.query.page == 2) {


                                //     $grid = $('.list_body').masonry({
                                //         // columnWidth: 330,
                                //         itemSelector: '.list_item',
                                //         // gutter: 30,
                                //         transitionDuration: 0
                                //     });
                                //     $grid.masonry('reloadItems');
                                //     $grid.masonry('layout');
                                // }

                                $('.list_body').html($(".list_body_m").html());
                                $('.list_body li').addClass('show');
                                // $grid.masonry('reloadItems');
                                // $grid.masonry('layout');
                            });
                            _this.lock = true;
                            $("#loader").fadeOut(450);
                        } else {
                            _this.lock = false;
                            $("#loader").fadeOut(450);
                        }
                    }
                })
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
            },
            // addtag:function(item,el){
            //     item.classname='active';
            //     console.log("xxx",item);
            //     this.haschoose.push(item)
            // },
            // deltag: function(item) {
            //     var _this = $(item.target);
            //     _this.addClass("disappear");
            //     setTimeout(function(){
            //         _this.remove();
            //     },400)
            // }
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            localStorage.caseadmi_cat = '';
            localStorage.caseadmi_lotwhere = '';
            localStorage.caseadmi_year = '';
            localStorage.caseadmi_xueli = '';
            localStorage.caseadmi_hottag = '';
            localStorage.caseadmi_college = '';
            // localStorage.caseadmi_page = 1;
            next();
        },
        mounted: function() {
            var _this = this;
            _this.query.c = localStorage.caseadmi_cat;

            _this.query.lotwhere = localStorage.caseadmi_lotwhere ? localStorage.caseadmi_lotwhere : '';
            _this.query.year = localStorage.caseadmi_year ? localStorage.caseadmi_year : '';
            _this.query.xueli = localStorage.caseadmi_xueli ? localStorage.caseadmi_xueli : '';
            _this.query.hottag = localStorage.caseadmi_hottag ? localStorage.caseadmi_hottag : '';
            _this.query.college = localStorage.caseadmi_college ? localStorage.caseadmi_college : '';
            // _this.query.page = localStorage.caseadmi_page ? localStorage.caseadmi_page : 1;
            //初始化选择分类

            $('.c_ul li').each(function() {
                if ($(this).text() == localStorage.caseadmi_cat) {
                    $(this).addClass("active").siblings().removeClass("active");
                    _this.s_choose = _this.choose[$(this).index()];

                    // console.log('_this.s_choose',_this.s_choose)
                    var receiveYear = localStorage.caseadmi_year == '2010' ? '2000-2012' : localStorage.caseadmi_year;
                    _this.$nextTick(function() {
                        $('.in_ul li').each(function() {
                            if ($(this).text() == localStorage.caseadmi_lotwhere) {
                                $(this).addClass("active").siblings().removeClass("active");
                            }
                            if ($(this).text() == receiveYear) {
                                $(this).addClass("active").siblings().removeClass("active");
                            }
                            if ($(this).text() == localStorage.caseadmi_xueli) {
                                $(this).addClass("active").siblings().removeClass("active");
                            }
                            if ($(this).text() == localStorage.caseadmi_hottag) {
                                $(this).addClass("active").siblings().removeClass("active");
                            }
                            if ($(this).text() == localStorage.caseadmi_college) {
                                $(this).addClass("active").siblings().removeClass("active");
                            }
                        })

                    })
                }
            })

            _this.getData(_this.query.lotwhere,_this.query.year,_this.query.xueli,_this.query.hottag,_this.query.college);
        }
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/caseadmission.css';

</style>
