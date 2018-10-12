<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart" id="detailsKr">
			<div class="topDeatailPart">
				<div class="cover_banner_part"></div>
				<div class="container maininfo clearfix">
					<div class="left leftPart">
						<div class="imgDv">
							<img :src="tempimg" alt="" data-adaptive-background='1' data-description='grandpa' class="imgs">
						</div>
					</div>
					<div class="right rightPart">
						<p class="name">{{detail.name_cn}}</p>
						<a :href="detail.website" class="url_href" target="_blank">{{detail.website}}</a>
						<ul class="listinfo clearfix">
							<li class="itemli clearfix">
								<span class="s_title">学校性质：</span>
								<span class="s_content">{{detail.xingzhi_name}}</span>
							</li>
							<li class="itemli clearfix">
								<span class="s_title">每年学费：</span>
								<span class="s_content">{{detail.cost_fee}}万（日元）</span>
							</li>
							<li class="itemli clearfix">
								<span class="s_title">学校电话：</span>
								<span class="s_content">{{detail.contact}}</span>
							</li>
							<li class="itemli clearfix">
								<span class="s_title">录取比例：</span>
								<span class="s_content">{{detail.competition}}%</span>
							</li>
							<li class="itemli clearfix full">
								<span class="s_title">学校地址：</span>
								<span class="s_content">{{detail.address}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div style="background-color: #f7f7f7;">
				<div class="container clearfix detailInfo">
					<div class="left leftDv">
						<ul class="chooseul">
							<li class="item_li active" data-flag="tab1">学校介绍</li>
							<li class="item_li" data-flag="tab2">学校专业</li>
							<li class="item_li" data-flag="tab3">学校图库</li>
							<li class="item_li" data-flag="tab4">地理交通</li>
							<li class="item_li" data-flag="tab5">留学攻略</li>
						</ul>
						<div class="maincontent" id="tab1">
							<div class="mm_main" v-if="detail.description != null && detail.description != ''">
								<div class="mm_header">
									<h3>学校简介</h3>
								</div>
								<div class="mm_content" v-html="detail.description"></div>
							</div>
							<div class="mm_main" v-if="detail.request_en != null && detail.request_en != ''">
								<div class="mm_header">
									<h3>申请条件</h3>
								</div>
								<div class="mm_content" v-html="detail.request_en"></div>
							</div>
							<div class="mm_main" v-if="detail.request_lang != null && detail.request_lang != ''">
								<div class="mm_header">
									<h3>申请条件-小语种</h3>
								</div>
								<div class="mm_content" v-html="detail.request_lang"></div>
							</div>
							<div class="mm_main" v-if="detail.request_doclist != null && detail.request_doclist != ''">
								<div class="mm_header">
									<h3>申请条件-提及材料</h3>
								</div>
								<div class="mm_content" v-html="detail.request_doclist"></div>
							</div>

							<div class="mm_main" v-if="detail.academic_info != null && detail.academic_info != ''">
								<div class="mm_header">
									<h3>学术信息</h3>
								</div>
								<div class="mm_content" v-html="detail.academic_info"></div>
							</div>

							<div class="mm_main" v-if="detail.zige != null && detail.zige != ''">
								<div class="mm_header">
									<h3>考试资格</h3>
								</div>
								<div class="mm_content" v-html="detail.zige"></div>
							</div>

							<div class="mm_main" v-if="detail.apply_method != null  && detail.apply_method != ''">
								<div class="mm_header">
									<h3>选拔办法</h3>
								</div>
								<div class="mm_content" v-html="detail.apply_method"></div>
							</div>


							<div class="mm_main" v-if="detail.schoolhistory != null  && detail.schoolhistory != ''">
								<div class="mm_header">
									<h3>学校历史</h3>
								</div>
								<div class="mm_content" v-html="detail.schoolhistory"></div>
							</div>

							<div class="mm_main" v-if="detail.schoolspecial != null && detail.schoolspecial != ''">
								<div class="mm_header">
									<h3>学校特色</h3>
								</div>
								<div class="mm_content" v-html="detail.schoolspecial"></div>
							</div>

							<div class="mm_main" v-if="detail.schoolmanage != null && detail.schoolmanage != ''">
								<div class="mm_header">
									<h3>学校管理</h3>
								</div>
								<div class="mm_content" v-html="detail.schoolmanage"></div>
							</div>

							<div class="mm_main" v-if="detail.schoolgoods != null && detail.schoolgoods != ''">
								<div class="mm_header">
									<h3>学校设施</h3>
								</div>
								<div class="mm_content" v-html="detail.schoolgoods"></div>
							</div>
						</div>
						<div class="maincontent" id="tab2">
							<div class="lineDv choose clearfix">
								<span class="s_title">专业：</span>
								<div class="inputDv">
									<input type="text" placeholder="请输入专业名称" v-model="request.name" @keyup.13="change('name',request.name)">
									<i class="search" @click="change('name',request.name)"></i>
								</div>
							</div>
							<div class="lineDv choose clearfix">
								<span class="s_title">专业方向：</span>
								<ul class="listul">
									<li class="item active" @click="change('cate','')">不限</li>
									<li class="item" v-for="n in cate" @click="change('cate',n.id)">{{n.name}}</li>
								</ul>
							</div>
							<div class="lineDv choose clearfix">
								<span class="s_title">学历方向：</span>
								<ul class="listul">
									<li class="item active" @click="change('type','')">不限</li>
									<li class="item" v-for="n in xueli" @click="change('type',n.id)">{{n.type_name}}</li>
								</ul>
							</div>
							<h4 class="majorTitle">学部专业 Faculty major</h4>
							<div  v-if="major.length > 0">
								<ul class="majorListUl">
									<li v-for="(n,index) in major">
										<div class="list1">{{(request.limit*(request.page-1))+index+1}}</div>
										<div class="list2">{{n.name_cn}}</div>
										<div class="list3">招生人数：{{n.zhaosheng}}</div>
										<div class="list4"><a :href="'/school/major?id='+n.id">免费申请</a></div>
									</li>
								</ul>
							</div>	

							<div id="jqPaginator" class="pageNav" style="display: block;"></div>
							<!-- <div class="nodate_d" v-else>
								<p style="margin: 20px 0; margin-top: 40px;">暂无{{detail.name_cn}}的相关专业资料...</p>
							</div> -->
						</div>
						<div class="maincontent" id="tab3">
							<div class="schoolCircle">
								<p>{{detail.name_cn}}</p>
								<span>校区图片</span>
							</div>
							<div v-if="detail.allpic && detail.allpic.length > 0">
								<ul class="imgUl">
									<li class="img_li clearfix" v-for="(n,index) in detail.allpic">
										<div class="imgDv">
											<img :src="'http://manage.xiaoying.net'+n" alt="">
											<span class="arrow"></span>
										</div>
										<div class="numDv">
											<p>{{index+1}}</p>
											<span class="circle"></span>
										</div>
									</li>
									<li class="border_li"></li>
								</ul>
							</div>
							<div class="nodate_d" v-else>
								<img src="../../../static/images/school/xiaoying_error.png" alt="">
								<p>小莺情报组拼命搜集资料中...</p>
							</div>
						</div>
						<div class="maincontent" id="tab4">
							<div class="mm_main">
								<div class="mm_header">
									<h3>地理交通</h3>
								</div>
								<div class="smapDv" id="baiduMap" v-show="detail.longitude && detail.latitude"></div>
								<div class="nodate_d" v-show="!detail.longitude">
									<img src="../../../static/images/school/xiaoying_error.png" alt="">
									<p>小莺情报组拼命搜集资料中...</p>
								</div>
							</div>
						</div>
						<div class="maincontent" id="tab5">
							<ul class="newsListUl">
								<li v-for = "item in newsList" :key="item.id">
									<div class="imgDv">
	                                	<router-link :to = "{name: 'Newsdetails',params: {id: item.id}}">
	                                        <img :src="item.picture" :alt="item.title">
	                                	</router-link>
	                                </div>
	                                <div class="contDv">
	                                    <h4>
	                                    	<router-link :to = "{name: 'Newsdetails',params: {id: item.id}}">{{item.title}}</router-link>
	                                    </h4>
	                                    <p class="time"><span></span>{{item.publishedtime}}</p>
	                                    <p class="newsDes">
	                                    	<router-link :to = "{name: 'Newsdetails',params: {id: item.id}}">{{item.des}}</router-link>
	                                    </p>
	                                    <div class="btnPart">
	                                    	<router-link :to = "{name: 'Newsdetails',params: {id: item.id}}">查看详情</router-link>
	                                        <ul class="clearfix">
	                                            <li>
	                                                <span></span>{{item.upsnum}}
	                                            </li>
	                                            <li>
	                                                <span></span>{{item.hits}}
	                                            </li>
	                                        </ul>
	                                    </div>
	                                </div>
								</li>
							</ul>
						</div>
					</div>
					<div class="right rightDv">
						<quick-consult></quick-consult>
	                	<apply-students></apply-students>
	                	<same-city></same-city>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import quickConsult from '@/pages/school/components/quickConsult.vue';
	import applyStudents from '@/pages/school/components/applyStudents.vue';
	import sameCity from '@/pages/school/components/sameCity.vue';
	export default{
		name: 'Schooldetailsjpcoll',
		data() {
			return {
				nav: 'school',
				//专业
				cate:[],
	            //学历
	            xueli:[],
	            request:{
	            	type:"",
	            	cate:"",
	            	name:"",
	            	id:"",
	            	page:1,
	            	limit:15
	            },
	            newsList: [],
	            major:[],
	            tempimg:"",
	            detail:{},
	            schoolId: ''
	        }
	    },
	    components: {
	    	headerTop,
	    	quickConsult,
			applyStudents,
			sameCity

	    },
	    filters:{
	    },
	    methods: {
	    	escapeStringHTML:function(str) {
	    		str = str.replace(/&lt;/g,'<');
	    		str = str.replace(/&gt;/g,'>');
	    		str = str.replace(/&amp;/g,'&');
	    		str = str.replace(/&quot;/g,'"');
	    		str = str.replace(/&#039;/g,"'");
	    		return str;
	    	},
            //获取专业分类
            getcate: function(){
            	var _this = this;
            	$.ajax({
            		url:"http://manage.xiaoying.net/school/cate",
            		type:"get",
            		success:function(res){
            			if (res) {
            				_this.cate = res
            			}
            		}
            	})
            },
            //获取学历
            getxueli: function(){
            	var _this = this;
            	$.ajax({
            		url:"http://manage.xiaoying.net/school/xueli",
            		type:"get",
            		success:function(res){
            			if (res) {
            				_this.xueli = res
            			}
            		}
            	})
            },
            //获取专业列表
            getzhuanye:function(){
            	var _this = this;
            	this.major = [];
            	$.ajax({
            		url:"http://manage.xiaoying.net/school/schoolprogram",
            		type:"get",
            		data:_this.request,
            		success:function(res){
            			$("#jqPaginator").html("");
            			if (res.status) {
            				for(var i = 0; i < res.data.length; i++){
            					if (res.data[i].zhaosheng == "") {
            						res.data[i].zhaosheng = '若干';
            					}
            				}
            				if ( _this.request.page != 1) {
            					$("body, html").animate({
            						scrollTop: $(".majorTitle").offset().top - 130
            					}, 200)
            				}
            				if (res.count > 0) {
            					$('#jqPaginator').jqPaginator({
            						totalCounts: parseInt(res.count),
            						pageSize: _this.request.limit,
            						visiblePages: 7,
            						currentPage: _this.request.page,
            						first: "<a>首页</a>",
            						last: "<a>末页</a>",
            						prev: "<a>上一页</a>",
            						page: "<a class='page'>{{page}}</a>",
            						next: "<a>下一页</a>",
            						onPageChange: function(num, type) {
            							if (type == "change") {
            								_this.request.page = num;
            								_this.getzhuanye();
            							}
            						}
            					})
            				}
            				_this.major = res.data;
            			}
            		}
            	})
            },
            //获取咨询
            getNewListData:function () {
            	var _this = this;
            	$.ajax({
            		url:"http://manage.xiaoying.net/article/contentssearch",
            		data:{limit:5},
            		type:"get",
            		success: function(res) {
            			var array = res.data;
                        // 'http://www.xiao-ying.net'+item.picture
                        for (var i = 0; i < array.length; i++) {
                        	if(array[i].picture.indexOf('http') > -1) {
                        		array[i].picture = array[i].picture;
                        	}else if(array[i].picture == '') {
                        		array[i].picture = '../../../static/images/school/img.jpg'
                        	} else {
                        		array[i].picture = 'http://www.xiao-ying.net'+ array[i].picture;
                        	}
                        	array[i].publishedtime = _this.timestampToTime(array[i].publishedtime);
                        }
                        _this.newsList = array;
                    }
                })
            },
            change: function(key,val){
            	this.request[key] = val;
            	this.getzhuanye();
            },
            getdata: function(_id){
            	var _this = this;
            	$.ajax({
            		url:"http://manage.xiaoying.net/getschooldetail",
            		type:"get",
            		data: {id:_id},
            		success:function(res){
            			if (res.status) {
            				_this.detail = res.data;

            				if (_this.detail.academic_info) {
            					_this.detail.academic_info = _this.escapeStringHTML(res.data.academic_info)
            				}
            				if (_this.detail.zige) {
            					_this.detail.zige = _this.escapeStringHTML(res.data.zige)
            				}
            				if (_this.detail.apply_method) {
            					_this.detail.apply_method = _this.escapeStringHTML(res.data.apply_method)
            				}

            				if (_this.detail.request_en) {
            					_this.detail.request_en = _this.escapeStringHTML(res.data.request_en)
            				}
            				if (_this.detail.request_lang) {
            					_this.detail.request_lang = _this.escapeStringHTML(res.data.request_lang)
            				}
            				if (_this.detail.request_doclist) {
            					_this.detail.request_doclist = _this.escapeStringHTML(res.data.request_doclist)
            				}
            				if (_this.detail.description) {
            					_this.detail.description = _this.escapeStringHTML(res.data.description)
            				}
            				if (_this.detail.schoolhistory) {
            					_this.detail.schoolhistory = _this.escapeStringHTML(res.data.schoolhistory)
            				}
            				if (_this.detail.schoolspecial) {
            					_this.detail.schoolspecial = _this.escapeStringHTML(res.data.schoolspecial)
            				}
            				if (_this.detail.schoolmanage) {
            					_this.detail.schoolmanage = _this.escapeStringHTML(res.data.schoolmanage)
            				}
            				if (_this.detail.schoolgoods) {
            					_this.detail.schoolgoods = _this.escapeStringHTML(res.data.schoolgoods)
            				}

            				if (_this.detail.longitude && _this.detail.latitude) {
            					_this.detail.longitude = parseFloat(_this.detail.longitude);
            					_this.detail.latitude = parseFloat(_this.detail.latitude);
            					_this.initmap();
            				}
            			}
            		}
            	})
            },
            initmap:function(){
            	var _this = this;
            	var _point = [_this.detail.longitude,_this.detail.latitude];
            	$("#baiduMap").show();
                // 百度地图API功能
                var map = new BMap.Map("baiduMap", {});
                map.enableScrollWheelZoom(true);
                var point = new BMap.Point(_point[0], _point[1]);
                map.centerAndZoom(point, 50);
                
                //创建logo
                var pt = new BMap.Point(_point[0], _point[1]);
                var myIcon = new BMap.Icon("../../../static/images/school/mappoint.png", new BMap.Size(95, 36));
                var marker2 = new BMap.Marker(pt, { icon: myIcon }); // 创建标注
                map.addOverlay(marker2);
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
            timestampToTime:function(timestamp) {
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                return Y+M+D;
                // return Y+M+D+h+m+s;
            }
        },
        mounted: function() {
        	console.log('111');
        	var _this = this;
        	var _s = Math.round(Math.random()*5+1);
        	this.tempimg = '../../../static/images/school/school/random'+_s+'.jpg';
        	$(".cover_banner_part").backgroundBlur({
        		imageURL : '../../../static/images/school/school/random'+_s+'.jpg',
        		blurAmount : 50,
        		duration: 1000,
        		endOpacity : 1
        	});
        	_this.schoolId = _this.$route.params.id;
        	this.getdata(_this.schoolId);
            this.request.id = _this.schoolId;
		   this.getcate();
		   this.getxueli();
		   this.getzhuanye();
		   this.getNewListData();

		   $(document).on('click', '.choose .item', function() {
		   	$(this).addClass("active").siblings().removeClass("active");
		   })

		   $(document).on('click', '.chooseul .item_li', function() {
		   	$(this).addClass("active").siblings().removeClass("active");
		   	var _flag = $(this).attr("data-flag");
		   	$("body, html").animate({
		   		scrollTop: $("#"+_flag).offset().top - 155
		   	}, 600)
		   })

		   $(window).scroll(function() {

		   })
		   fixDiv($(".chooseul"), "fixed_pc", 450);

		   function fixDiv(t, e, o) {
		   	var n = 0;
		   	$(window).scroll(function() {
		   		n = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop,
		   		n >= o ? t.addClass(e) : o > n && t.removeClass(e)
		   	})
		   }
		}

}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/detailsKr.css';
</style>
