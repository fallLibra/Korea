<template>
	<div class="mainPart detailsKr" id="detailsKr">
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
							<span class="s_content">{{detail.type}}</span>
						</li>
						<li class="itemli clearfix">
							<span class="s_title">学校电话：</span>
							<span class="s_content">{{detail.mobile}}</span>
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
						<li class="item_li" data-flag="tab2">学费相关</li>
						<li class="item_li" data-flag="tab2b">招生相关</li>
						<li class="item_li" data-flag="tab3">学校图库</li>
						<li class="item_li" data-flag="tab5">留学攻略</li>
					</ul>
					<div class="maincontent" id="tab1">
						<div class="mm_main" v-if="detail.desc != null && detail.desc != ''">
							<div class="mm_header">
								<h3>学校简介</h3>
							</div>
							<div class="mm_content" v-html="detail.desc"></div>
						</div>
						<div class="mm_main" v-if="detail.request_en != null && detail.request_en != ''">
							<div class="mm_header">
								<h3>申请条件</h3>
							</div>
							<div class="mm_content" v-html="detail.request_en"></div>
						</div>
						<div class="mm_main" v-if="detail.request_doclist != null && detail.request_doclist != ''">
							<div class="mm_header">
								<h3>申请条件-提及材料</h3>
							</div>
							<div class="mm_content" v-html="detail.request_doclist"></div>
						</div>

						<div class="mm_main" id="tab2" v-if="detail.requret_fee != null && detail.requret_fee != ''">
							<div class="mm_header">
								<h3>学费相关</h3>
							</div>
							<div class="mm_content" v-html="detail.requret_fee"></div>
						</div>

						<div class="mm_main" id="tab2b" v-if="detail.student != null && detail.student != ''">
							<div class="mm_header">
								<h3>招生相关</h3>
							</div>
							<div class="mm_content" v-html="detail.student"></div>
						</div>

					</div>
					<div class="maincontent" id="tab3">
						<div class="schoolCircle">
							<p>{{detail.name_cn}}</p>
							<span>校区图片</span>
						</div>
						<ul class="imgUl" v-if="detail.despic && detail.despic.length > 0">
							<li class="img_li clearfix" v-for="(n,index) in detail.despic">
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
						<div class="nodate_d" v-else>
							<img src="../../../static/images/school/xiaoying_error.png" alt="">
							<p>小莺情报组拼命搜集资料中...</p>
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
</template>
<script>
	import quickConsult from '@/pages/school/components/quickConsult.vue';
	import applyStudents from '@/pages/school/components/applyStudents.vue';
	import sameCity from '@/pages/school/components/sameCity.vue';
	export default{
		name: 'detailsKr',
		data() {
			return {
				request:{
	                type:"",
	                cate:"",
	                name:"",
	                id:"",
	                page:1,
	                limit:15
	            },
	            newsList: [],
	        	tempimg:"",
	        	detail:{},
	        	schoolId: ''
			}
        },
        components: {
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
                    url:"http://manage.xiaoying.net/getkoreadetail",
                    type:"get",
                    data: {id:_id},
                    success:function(res){
                    	if (res.status) {
                            // if (res.data.despic) {
                            //     res.data.despic = res.data.despic.split(',')
                            // }
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
                            if (_this.detail.student) {
                                _this.detail.student = _this.escapeStringHTML(res.data.student)
                            }
                            if (_this.detail.request_lang) {
                                _this.detail.request_lang = _this.escapeStringHTML(res.data.request_lang)
                            }
                            if (_this.detail.requret_fee) {
                                _this.detail.requret_fee = _this.escapeStringHTML(res.data.requret_fee)
                            }
                            if (_this.detail.request_doclist) {
                                _this.detail.request_doclist = _this.escapeStringHTML(res.data.request_doclist)
                            }
                            if (_this.detail.desc) {
                                _this.detail.desc = _this.escapeStringHTML(res.data.desc)
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
            var _this = this;
            var _s = Math.round(Math.random()*1+1);
            this.tempimg = '../../../static/images/school/school/kr/random'+_s+'.jpg';
		    $(".cover_banner_part").backgroundBlur({
			    imageURL : '../../../static/images/school/school/kr/random'+_s+'.jpg',
			    blurAmount : 50,
			    duration: 1000,
			    endOpacity : 1
			});
			_this.schoolId = _this.$route.params.id;
			this.getdata(_this.schoolId);
            this.request.id = _this.schoolId;
            this.getNewListData();

            $(document).on('click', '.choose .item', function() {
                $(this).addClass("active").siblings().removeClass("active");
            })

            $(document).on('click', '.chooseul .item_li', function() {
                $(this).addClass("active").siblings().removeClass("active");
                var _flag = $(this).attr("data-flag");
                $("body, html").animate({
                    scrollTop: $("#"+_flag).offset().top - 185
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
