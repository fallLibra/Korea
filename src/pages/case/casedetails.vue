<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="headerGroup marginTop">
				<div class="container">
					<h3 class="title">SUCCESSFUL CASES 成功案例</h3>
					<div class="buttonGroup">
						<div class="choosePart">
							<ul class="c_ul">
								<li :class="index == 0 ? 'active':''" v-for="(n,index) in choose" @click="tabChoose(n,$event)" v-html="n.name" :key="n.name"></li>
							</ul>
							<ul class="in_ul" v-show="s_choose.type">
								<li v-for="(n,index) in s_choose.type" v-html="n.name" @click="search(n,$event)" :data-type="s_choose.name" :key="n.name"></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="greyLine"></div>
			</div>
			<div class="casedetailsGroup">
				<div class="container clearfix" >
					<div class="leftGroup">
						<div class="studentInfoPart">
							<div class="studentInfo">
								<div>
									<div>
										<!-- <img src="/Public/Case/img/ramandImg/10.jpg" class="faceImg"> -->
										<img :src="caseInfo.pic" class="faceImg">
									</div>
									<div>
										<ul class="studentInfoList">
											<li>
												<span>学生姓名：<b>{{caseInfo.names}}</b></span>
												<span>日语水平：{{caseInfo.japan_language?caseInfo.japan_language:"暂无"}}</span>
												<!-- <span>申请结果：<b>成功</b></span> -->
												<span>入学时间：{{caseInfo.receive_year?caseInfo.receive_year:"暂无"}}</span>
											</li>
											<li>
												<span>学历：<b>{{caseInfo.education?caseInfo.education:"暂无"}}</b></span>
												<span>申请学校：<b>{{caseInfo.receive_college}}</b>
												</span>
											</li>
											<li>
												<span>国内毕业院校：{{caseInfo.undergraduate_college}}</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- <div class="line"></div> -->

						<div class="studentWordsPart">{{caseInfo.remark?caseInfo.remark:"暂无"}}</div>
						<div class="line"></div>
						<div class="teacherInfoPart">
							<div class="teacherInfo">
								<div><img src="../../../static/images/case/teacher.jpg"></div>
								<div>
									<p>简老师</p>
									<!-- <p>{{caseInfo.from_p}}</p> -->
									<p title="语言学校相关的各方面以及日本生活相关内容">擅长领域：<span>语言学校相关的各方面以及日本生活相关内容</span></p>
									<p class="sp" title="国内本科日语专业，在日本学的商学科。">专业背景：<span>国内本科日语专业，在日本学的商学科。国内本科日语专业，在日本学的商学科。国内本科日语专业，在日本学的商学科。国内本科日语专业，在日本学的商学科。国内本科日语专业，在日本学的商学科。国内本科日语专业，在日本学的商学科。</span></p>
									<p>
										<a href="javascript:;" >联系顾问老师</a>
									</p>

								</div>
							</div>
						</div>
					</div>
					<div class="rightGroup">
						<hot-activities></hot-activities>
						<!-- <include file="./Template/Zixun/Index_hotActivities.html" /> -->
						<div class="similarCasePart">
							<h3 class="title">SIMILAR CASE 相似案例</h3>
							<ul class="similarCaseList">
								<li>
									<a href="javascript:;" class="clearfix">
										<div class="imgContainerDv">
											<img class="careimg" src="http://showimage2.jpwind.com/2017-11-1/0.5970100916456431朱宇飞.jpg" >
										</div>
										<div class="font">
											<h4>感谢小莺帮我完成留学...</h4>
											<p class="content">首先我觉得小莺的宣传做的很好，经常在微博上看到，也有全首先我觉得小莺的宣传做的很好，经常在微博上看到，也有全</p>
										</div>
									</a> 
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import hotActivities from '@/pages/common/hotActivities.vue';
	// import applyForm from '@/pages/case/components/applyForm.vue';
	// import consultInfo from '@/pages/case/components/consultInfo.vue';

	export default{
		name: 'Casedetails',
		
		data() {
			return {
				nav: 'case',
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
	            caseInfo: '',
	            query:{
	                education: '',
	                programcate: '',
	                japan_language: '',
	                receive_year: '',
	                receive_college: '',
	                c: ''
	            },
	            // requet: {
	            //     PageIndex: 1
	            // },
	            // ,
	            // temp: 12
	        }
        },
        components: {
			headerTop,
			hotActivities
			// applyForm,
			// consultInfo
		},
        methods: {
            tabChoose: function(item,event) {
                var _this = this;
                var el = event.currentTarget;

                this.s_choose = item;
                $('.in_ul li').removeClass('active');
                $(el).addClass("active").siblings().removeClass("active");

                localStorage.c = $(el).text();
                if(item.name == "全部") {
                	localStorage.c = '';
                    localStorage.education = '';
                    localStorage.programcate = '';
                    localStorage.japan_language = '';
                    localStorage.receive_year = '';
                    localStorage.receive_college = '';
                    _this.$router.push({ path: '/case' });
                }

            },
            search: function (item,event) {
                // console.log("search",item);
                var _this = this;

                var el = event.currentTarget;
                $('.in_ul li').removeClass('active');
                $(el).addClass("active").siblings().removeClass("active");
                // console.log(item.name,item.type);
                localStorage.education = '';
                localStorage.programcate = '';
                localStorage.japan_language = '';
                localStorage.receive_year = '';
                localStorage.receive_college = '';
                if ($(el).data('type') == "学生学历") {
                    localStorage.education= item.name;
                }else if ($(el).data('type') == "服务项目") {
                    localStorage.programcate= item.name;
                }else if ($(el).data('type') == "日语水平") {
                    localStorage.japan_language= item.name;
                }else if ($(el).data('type') == "录取年份") {
                    localStorage.receive_year= item.name;
                }else if ($(el).data('type') == "名校报考经验") {
                    localStorage.receive_college= item.name;
                }
                _this.$router.push({ path: '/case' });
                
                // window.location.href = "/cases?education="+_this.query.education+'&programcate='+_this.query.programcate+'&japan_language='+_this.query.japan_language+'&receive_year='+_this.query.receive_year+'&receive_college='+_this.query.receive_college+'&cat='+_this.query.c;
            },
            getData: function(id){
                var _this = this;
                $.ajax({
                    url:"http://crm.xiaoying.net?m=case&a=detail",
                    // url:"http://crm.xiaoying.net?m=case&a=search",
                    type:"POST",
                    data: {
                        id: _this.$route.params.id
                    },
                    dataType:"json",
                    success:function(res){
                        _this.caseInfo=  res;
                        if(res.pic) {
                            _this.caseInfo.pic = 'http://crm.xiaoying.net/' + res.pic;

                        } else {
                            _this.caseInfo.pic = '../../../static/images/case/ramandImg/'+_this.$route.params.r_pic+'.jpg';
                        }
                    }
                })
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
            var _this = this;
            //获取服务项目
            _this.getallprogramcate();
            
            _this.getData(_this.$route.params.id);

            // 多行溢出兼容IE
            var body=document.getElementsByTagName("body")[0];
            if(typeof body.style.WebkitAnimation!="undefined") {
                // alert("当前浏览器是Webkit内核！");
                // $('.item_li a h2').removeClass('ie');
            }else {
                // alert("当前浏览器不是Webkit内核！");
                $('.item_li a h2').addClass('ie');
            }

        }

	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/casedetails.css';
</style>
