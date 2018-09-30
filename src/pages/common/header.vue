<template>
	<!-- <div id="headerTop"> -->
		<div id="xy_header">
			<div class="btnGroup" style="background-color: #585858;">
				<div class="container">
					<div class="areaDv">
						<div class="areaBtn" style="color: #fff;">
							<div style="display: inline-block;" id="tiyan"><span class="areaIcon"  style="background-image: url(''); background-size: contain;"></span>全国体验中心 </div>
							<div style="display: inline-block;" id="guojia"><span class="areaIcon"  style="background-image: url('../../../static/images/header/global.png'); background-size: contain; margin-left: 10px;  margin-top: 1px;"></span>选择留学国家 </div>
						</div>
					</div>
					<div class="loginPart" style="color: #fff; font-size: 14px; line-height: 40px;">
						<img src="../../../static/images/header/tel_icon.png" alt="" style="vertical-align: middle;margin-right: 7px;">全国咨询热线：4000150170
					</div>
				</div>
			</div>
			<div class="navGroup">
				<div class="head_effect">

					<div class="searchGroup container copy">
						<a href="http://class.xiaoying.net/mall" class="logo" style="margin-top: 15px;"><img src="../../../static/images/header/logo.png" style="width: 142px"></a>
						<ul class="s_nav  clearfix" style="padding-right: 210px;">
							<li data-nav='index'>
								<router-link to="/">首页</router-link>
							</li>
							<li data-nav='application'>
								<router-link to="/Application">留学申请</router-link>
							</li>
							<li data-nav='school'>
								<router-link to="/School">院校库</router-link>
							</li>
							<li data-nav='case'>
								<router-link to="/Case">案例中心</router-link>
							</li>
							<li data-nav='news'>
								<router-link to="/News">资讯库</router-link>
								<!-- <a href="javascript:;" >资讯库</a> -->
							</li>
						</ul>
						<div class="btng" style="top: 28px;">
							<div v-show="!flag" class="btnngropu">
								<a href="http://class.xiaoying.net/user/#/login?a=login" @click="setHref()">登录</a>
								<a href="http://class.xiaoying.net/user/#/login?a=register" style=" background-color: #ffd900" @click="setHref()">注册</a>
							</div>
							<div :class="flag?'show':''" class="exitPart">
								<a class="username" href="/user/#/index" v-html="info.nickname"></a>
								<a href="javascript:;" class="signOut" @click="logout()">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;退出</a>
							</div>
						</div>
					</div>
					<div class="searchGroup container t_main">
						<div class="clearfix">
							<a href="/mall" class="logo" style="margin-top: -5px;"><img src="../../../static/images/header/logo.svg" style="width: 142px"></a>
							<div class="searchPart">
								<div>
									<input type="text" name="" v-model="inputval" @keyup.13="ready()" id="ssinput">
									<select class="select2" id="searchOp">
										<option value="0">院校</option>
										<option value="1">案例</option>
										<option value="2">资讯</option>
									</select>
									<span class="searchBtn" @click="ready()"><img src="../../../static/images/header/search.png"></span>
								</div>
							</div>
							<div class="btng" style="top: 28px;">
								<div v-show="!flag" class="btnngropu">
									<a href="http://class.xiaoying.net/user/#/login?a=login" @click="setHref()">登录</a>
									<a href="http://class.xiaoying.net/user/#/login?a=register" style=" background-color: #ffd900" @click="setHref()">注册</a>
								</div>
								<div :class="flag?'show':''" class="exitPart">
									<a class="username" href="http://class.xiaoying.net/user/#/index" v-html="info.nickname"></a>
									<a href="javascript:;" class="signOut" @click="logout()">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;退出</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 选择地区 -->
		    <div class="areaPart" id="a">
		        <div class="areaHeader clearfix">
		            <h3>选择城市：</h3>
		            <div class="closeImg">×</div>
		        </div>
		        <ul class="cityList clearfix">
		            <li>
		                <a class="backindex" href="http://xiaoying.net/" ><span data-hover="全国主站">全国主站</span></a>
		            </li>
		            <li v-for="n in cityList">
		                <a v-bind:href="n.link"  ><span v-bind:data-hover="n.name">{{n.name}}</span></a>
		            </li>
		        </ul>
		    </div>
		    <!-- 选择国家 -->
		    <div class="areaPart" id="b">
		    	<div class="areaHeader clearfix">
		    		<h3>选择城市：</h3>
		    		<div class="closeImg">×</div>
		    	</div>
		    	<ul class="cityList clearfix" id="countryList">
		    		<li v-for="item in countryList" :key="item.id">
		    			<a href="javascript:;" @click="tabCountryClick(item.name,item.id,$event)"><span :data-hover="item.name">{{item.name}}</span></a>
		    			<!-- <a href="javascript:;" @click="tabCountryClick(item.name,$event)"><span :data-hover="item.name"><img class="dd_img" :src="item.flagSrc" :alt="item.name">{{item.name}}</span></a> -->
		    		</li>
		    	</ul>
		    </div>
		    <div class="overlay_city"></div>

		</div>
		<!-- </div> -->
	</div>
</template>
<script>
	import { mapState, mapMutations,mapGetters} from 'vuex'
	export default {
		name: 'xy_header',
		data() {
			return {
				flag:false,
				info:{},
				cityList: {},
				inputval:"",
				countryList: []
			}
		},
		computed: {
			...mapState({
				selectedCounted: 'country'
			}),
			...mapGetters({
				currentCountry: 'currentCountry'
			})
			// ,
			// currentCountry () {
			// 	return localStorage.country?localStorage.country:this.selectedCounted
			// }
		},
		props: {
			nav: String
		},
		methods: {
			getCountry () {
				var _this = this;
				$.ajax({
					url: "http://manage.xiaoying.net/getcountry",
					type:"GET",
					success: function (res) {
						if(res.status) {
							_this.countryList = res.data;
							// console.log(_this.countryList);
							_this.$nextTick(function () {
								$('#countryList li').each(function () {
									var $span = $(this).find('a span');
									// console.log(111,$span.text());
									if($span.text() == _this.currentCountry) {
										$('#countryList li').find('a').removeClass('active');
										$(this).find('a').addClass('active');
									}
								})
							})
						}
					}
				})
			},
			tabCountryClick (country,id,event) {
				var _this = this;
				var el = event.currentTarget;

				$('#countryList li').find('a').removeClass('active');
				$(".overlay_city").hide();
            	$(".areaPart").removeClass("in");

				$(el).addClass('active');
				_this.tabCountry(country);
				console.log('111')
				$.ajax({
					url: "http://manage.xiaoying.net/getcountrylink?id=" + id,
					type: "GET",
					success: function(res) {
						console.log('222')
					}
				})
				// _this.$router.push({ path: 'School' });
				_this.$router.go(0);

			},
			...mapMutations(['tabCountry','initGlobalData']),


			ready: function(){
				if ($("#searchOp").val() == '0') {
					window.location.href = 'http://class.xiaoying.net/Result?type=banji&keywords='+encodeURI(this.inputval)
				}
				if ($("#searchOp").val() == '1') {
					window.location.href = 'http://class.xiaoying.net/Result?type=course&keywords='+encodeURI(this.inputval)
				}
				if ($("#searchOp").val() == '2') {
					window.location.href = 'http://class.xiaoying.net/DownLoadCenter?keywords='+encodeURI(this.inputval)
				}
			},
			/**
			 * 存储localStorage
			 */
			utily_setStore: function(name, content) {
				if (!name) return;
				if (typeof content !== 'string') {
					content = JSON.stringify(content);
				}
				window.localStorage.setItem(name, content);
			},
			/**
			 * 获取localStorage
			 */
			utily_getStore: function(name){
				if (!name) return;
				return window.localStorage.getItem(name);
			},
			/**
			 * 删除localStorage
			 */
			utily_removeStore: function(name){
				if (!name) return;
				window.localStorage.removeItem(name);
			},
			utily_logout: function(refresh){
				var _this = this;
			    _this.utily_removeStore('xy_nickname')
			    _this.utily_removeStore('xy_headpic')
			    if (refresh) {
			    	location.reload()
			    }
			},
			getInfo: function() {
				var _this = this;
				$.ajax({
					url:"http://i.xiaoying.net/api/profile",
                    // url:"/api/profile",
                    type:"POST",
                    datatype:"json",
                    success:function(res){
                    	// console.log(res)
                    	if (res.result) {
                    		_this.flag = true;
                    		_this.info = res.info.profile;
                    		var _name = res.info.code
                    		if (res.info.profile.nickname != "" && res.info.profile.nickname != '网站注册用户') {
                    			_name = res.info.profile.nickname
                    		}
                    		_this.utily_setStore('xy_nickname',_name);
                    		_this.info.nickname = _name;
                    		var _headpic = res.info.profile.headpic;
                    		if (_headpic.length > 0) {
                    			var _s = _headpic.substr(1,_headpic.length);
                    			res.info.profile.headpic = _s
                    			_this.utily_setStore('xy_headpic',_s)
                    		}else{
                    			_this.utily_setStore('xy_headpic','')
                    		}

                    	}
                    	else if (!res.result || res.msg == '请先登录') {
                    		_this.flag = false;
                    	}
                    }
                });

			},
			logout:function(){
				var _this = this;
				$.ajax({
					url:"http://i.xiaoying.net/api/logout",
                    // url:"/api/logout",
                    type:"POST",
                    datatype:"json",
                    success:function(res){
                    	if (res.result) {
                    		_this.flag = false;
                    		_this.utily_logout('refresh');
                    	}
                    }
                });
			},
			setHref:function(){
				var _this = this;
				_this.utily_setStore('xy_logined_href',location.href)
			},
			getArea:function () {
				var _this = this;
				var settings = {
					"async": true,
					"crossDomain": true,
					"dataType":"json",
					"url": "http://cd.xiaoying.net/search_city",
					"method": "GET"
				}

				$.ajax(settings).done(function(res) {
					if (res && res.code == 200) {
						if (res.data.length > 0) {
							var _str = "";
							_this.cityList = res.data;
						}
					}
				});
			},
			change: function(){
				$(".navGroup").addClass("scrollDown");
				$(".searchPart input").focus();
			},
			scroll: function (fn) {
				var beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop,  
            	fn = fn || function() {};  
            	window.addEventListener("scroll", function() {  
            		var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop,  
            		delta = afterScrollTop - beforeScrollTop;  
            		if( delta === 0 ) return false;  
            		fn( delta > 0 ? "down" : "up" );  
            		beforeScrollTop = afterScrollTop;  
            	}, false);  
			}
		},
		mounted:function() {
			var _this = this;
			console.log('_this.currentCountry',_this.currentCountry,_this.selectedCounted);

			_this.getCountry();
			_this.initGlobalData();
			
			
			$('.s_nav li').each(function () {
				var $nav = $(this).data('nav');
				if($nav == _this.nav) {
					$(this).addClass('active').siblings().removeClass('active');
				}
			})
			// $('.s_nav li').click(function () {
			// 	$(this).addClass('active').siblings().removeClass('active');
			// })
			if (_this.utily_getStore('xy_nickname') && _this.utily_getStore('xy_headpic') != '') {
				this.info.nickname = _this.utily_getStore('xy_nickname')
				this.info.headpic = _this.utily_getStore('xy_headpic')
				this.flag = true;
			}else{
            	// this.getInfo();
            }
            this.getInfo();

            $('.select2').select2({
            	width:'80px',
            	minimumResultsForSearch: -1
                // closeOnSelect: false
            });

            this.getArea();

            //点击城市
            $(".areaBtn #tiyan").click(function(){
            	$(".overlay_city").fadeIn();
            	$("#a.areaPart").addClass("in");
            });

            $(".areaBtn #guojia").click(function(){
            	$(".overlay_city").fadeIn();
            	$("#b.areaPart").addClass("in");

            }); 
            $(".closeImg").click(function(){
            	$(".overlay_city").hide();
            	$(".areaPart").removeClass("in");
            });

            $('body [data-nav="'+ $('body').attr('data-nav')+'"]').addClass('active').siblings().removeClass('active');

            // function scroll( fn ) {  
            // 	var beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop,  
            // 	fn = fn || function() {};  
            // 	window.addEventListener("scroll", function() {  
            // 		var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop,  
            // 		delta = afterScrollTop - beforeScrollTop;  
            // 		if( delta === 0 ) return false;  
            // 		fn( delta > 0 ? "down" : "up" );  
            // 		beforeScrollTop = afterScrollTop;  
            // 	}, false);  
            // }

            _this.scroll(function(direction) {
            	var _temp = document.documentElement.scrollTop || document.body.scrollTop;
            	if (direction == 'down' ) {
            		if (_temp >= 130) {
            			if (!$(".navGroup").hasClass("scrollDown")) {
            				$(".navGroup").addClass("scrollDown");
            			}
            		}
            	}else{
            		$(".navGroup").removeClass("scrollDown");
            	}
            })
            
        }
    }
</script>

<style scoped lang="less">

</style>
