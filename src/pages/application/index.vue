<template>
	<div id="application">
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="container typeList">
				<ul class="clearfix">
					<li v-for="item in applyData" :key="item.catename">
						<router-link to="/Applylist" v-if='item.data'>
							<img :src="item.cateicon">
							<p v-html="item.catename"></p>
						</router-link>
						<router-link to="/applydetails" v-else>
							<img :src="item.cateicon">
							<p v-html="item.catename"></p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="applyInfoPart">
				<div class="applyInfoItem" v-for="n in applyData" :key="n.catename">
					<h4 class="container applyTitleDv">
						{{n.catename}}
						<a class="moreBtn" href="javascript:;">more&nbsp;></a>
						<div class="tabs" v-if="n.catename == '背景提升'">
							<!-- <a href="javascript:;" class="active">耶鲁商科</a> 
							<a href="javascript:;">香港金融</a> 
							<a href="javascript:;">国际义工</a> 
							<a href="javascript:;">新加坡财管</a>  -->
							<a href="javascript:;" v-for="item in n.data">{{item.title}}</a> 
						</div>
					</h4>

					<div class="container" v-if="n.catename != '背景提升'">
						<ul class="applyInfoList clearfix">
							<!-- <li>
								<a href="javascript:;"><img src="static/images/application/apply-info-b.png"></a>
								<div class="hoverDv">
									<a href="javascript:;" target="_blank">查看详情</a>
									<a href="javascript:;" target="_blank">在线咨询</a>
								</div>
							</li> -->
							<li v-for="item in n.data" :key = "n.id">
								<router-link :to="{ name: 'Applydetails', params: { id: item.id,type: '11' }}">
								<!-- <a href="javascript:;"> -->
									<img :src="'http://manage.xiaoying.net'+ item.headimg">
									<h3>{{item.title}}</h3>
									<p>{{item.desc}}</p>
								<!-- </a> -->
								</router-link>
								<div class="hoverDv">
									<!-- <a href="javascript:;" target="_blank">查看详情</a> -->
									<a href="javascript:;" target="_blank">在线咨询</a>
								</div>
							</li>
						</ul>
					</div>
					<!-- 背景提升 -->
					<div class="container tableDv" v-else>
						<div class="swiper-container swiper-container-table">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="item in n.data" :key = "n.id">
									<router-link :to="{ name: 'Applydetails', params: { id: item.id,type: '背景提升' }}" class="content-slide clearfix">
									<!-- <a href="javascript:;" class="content-slide clearfix"> -->
										<div class="imgSwiper">
											<div :class="'swiper-container swiper-container-inner swiper-container-inner'+ item.id">
												<div class="swiper-wrapper">
													<div class="swiper-slide">
														<img src="static/images/index/banner1.jpg">
													</div>
													<div class="swiper-slide">
														<img src="static/images/index/banner2.jpg">
													</div>
													<div class="swiper-slide">
														<img src="static/images/index/banner3.jpg">
													</div>
												</div>
												<div :class="'pagination pagination'+ item.id"></div>
												<span :class="'swiper-button swiper-button-next swiper-button-next'+item.id" href="javascript:;"><img src="static/images/application/arrow-next-white.png"></span> 
												<span :class="'swiper-button swiper-button-prev swiper-button-prev'+item.id" href="javascript:;"><img src="static/images/application/arrow-prev-white.png"></span>
											</div>
										</div>
										<div class="contextPart">
											<div class="col-md-7 col-xs-6">
												<h3>{{item.title}}</h3>
												<span>{{item.desc}}</span>
												<div class="hidden-xs">
													<h4>项目亮点</h4>
													<ul>
														<li v-html="item.xmbright">
															
														</li>
														<!-- <li>
															耶鲁教授“个性化”推荐信
														</li>
														<li>
															免费文书指导服务
														</li>
														<li>
															提供结课证书和成绩单
														</li>
														<li>
															7天高度浓缩课程
														</li>
														<li>
															商科专业&amp;跨专业&amp;在职人员
														</li> -->
													</ul>
												</div>
											</div>
										</div>
									<!-- </a> -->
									</router-link>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="applyInfoItem">
					<h4 class="container applyTitleDv">
						增值服务
						<a class="moreBtn" href="javascript:;">more&nbsp;></a>
					</h4>
					<div class="container">
						<ul class="applyInfoList clearfix">
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h3>韩国留学本科申请</h3>
									<p>择校+申请材料办理+签证办理</p>
								</a>
								<div class="hoverDv">
									<a href="javascript:;" target="_blank">在线咨询</a>
								</div>
							</li>
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h3>韩国留学本科申请</h3>
									<p>择校+申请材料办理+签证办理</p>
								</a>
								<div class="hoverDv">
									<a href="javascript:;" target="_blank">查看详情</a>
									<a href="javascript:;" target="_blank">在线咨询</a>
								</div>
							</li>
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h3>韩国留学本科申请</h3>
									<p>择校+申请材料办理+签证办理</p>
								</a>
								<div class="hoverDv">
									<a href="javascript:;" target="_blank">在线咨询</a>
								</div>
							</li>
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h3>韩国留学本科申请</h3>
									<p>择校+申请材料办理+签证办理</p>
								</a>
								<div class="hoverDv">
									<a href="javascript:;" target="_blank">在线咨询</a>
								</div>
							</li>
						</ul>
					</div>
				</div> -->
				<!-- 留学资讯 -->
				<div class="applyInfoItem">
					<h4 class="container applyTitleDv">
						留学资讯
						<a class="moreBtn" href="javascript:;">more&nbsp;></a>
					</h4>
					<div class="container">
						<ul class="applyInfoList clearfix liuxueInfoLIst">
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h4>［留学攻略小站］韩国语言［留学攻略小站］韩国语言</h4>
									<!-- <p>择校+申请材料办理+签证办理</p> -->
								</a>
								<ul class="infoListUl">
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h4>［留学攻略小站］韩国语言［留学攻略小站］韩国语言</h4>
									<!-- <p>择校+申请材料办理+签证办理</p> -->
								</a>
								<ul class="infoListUl">
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h4>［留学攻略小站］韩国语言［留学攻略小站］韩国语言</h4>
									<!-- <p>择校+申请材料办理+签证办理</p> -->
								</a>
								<ul class="infoListUl">
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:;">
									<img src="static/images/application/apply-info-l.png">
									<h4>［留学攻略小站］韩国语言［留学攻略小站］韩国语言</h4>
									<!-- <p>择校+申请材料办理+签证办理</p> -->
								</a>
								<ul class="infoListUl">
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
									<li>
										<a href="javascript:;">• 2019QS世界大学排名中国排行...</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import Swiper from '../../../static/plugins/swiper2/idangerous.swiper.min.js';
	import {mapGetters} from 'vuex'

	export default{
		name: 'Application',
		data () {
			return {
				nav: 'application',
				
				countryId: 0,
				applyData: []

			}
		},
		computed: {
			...mapGetters({
				currentCountry: 'currentCountry'
			}),
			isKorea: function () {
				return this.currentCountry == '韩国' ? true : false;
			}
		},
		components: {
			headerTop
		},
		methods: {
			getData (id) {
				var _this = this;
				$.ajax({
					url: "http://manage.xiaoying.net/getliuxuelist?country_id="+ id,
					type:"GET",
					success: function (res) {
						if (res.status) {
							var obj = res.data;
							var arr = [];
							var n = 1;
							for (let i in obj) {
								console.log(i,obj[i].catename) 
								obj[i].cateicon = 'static/images/application/icon'+n+'.png'
								n++;
								// if(obj[i].catename == '留学申请') {
								// 	obj[i].cateicon = 'static/images/application/icon1.png'
								// }
								// if(obj[i].catename == '增值服务') {
								// 	obj[i].cateicon = 'static/images/application/icon2.png'
								// }
								// if(obj[i].catename == '考培服务') {
								// 	obj[i].cateicon = 'static/images/application/icon3.png'
								// }
								// if(obj[i].catename == '背景提升') {
								// 	obj[i].cateicon = 'static/images/application/icon4.png'
								// }
							    arr.push(obj[i]);
							}
							if (arr.length == 4) {
								_this.applyData = arr;
							}else if(arr.length == 3) {
								var arrAdd = [{
									"catename":"全程申请",
									"cateicon": "static/images/application/icon2.png"
								}];
								
								arr = arr.concat(arrAdd)
								_this.applyData = arr;
							}
							else if(arr.length == 2) {
								var arrAdd = [{
									"catename":"耶鲁商科",
									"cateicon": "static/images/application/icon3.png"
								},{
									"catename":"全程申请",
									"cateicon": "static/images/application/icon4.png"
								}];
								
								arr = arr.concat(arrAdd)
								_this.applyData = arr;
							}else if(arr.length == 1) {
								var arrAdd = [{
									"catename":"签证办理",
									// "cateicon": "static/images/application/icon2.png"
									
								},{
									"catename":"耶鲁商科",
									// "cateicon": "static/images/application/icon2.png"
								},{
									"catename":"全程申请",
									// "cateicon": "static/images/application/icon2.png"
								}];
								
								arr = arr.concat(arrAdd)
								_this.applyData = arr;
							}


							_this.$nextTick(function () {
								//背景提升 初始化
								var tabsSwiper = new Swiper('.swiper-container-table',{
									speed:500,
									onSlideChangeStart: function(){
										$(".tabs .active").removeClass('active')
										$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
									}
								})
								$(".tabs a").on('touchstart mousedown',function(e){
									e.preventDefault()
									$(".tabs .active").removeClass('active')
									$(this).addClass('active')
									tabsSwiper.swipeTo( $(this).index() )
								})
								$(".tabs a").click(function(e){
									e.preventDefault()
								})

								/*for (var i = 0; i < $('.swiper-container-inner').length; i++) {
										var sw = 'mySwiper' + i;
									    sw = new Swiper('.swiper-container-inner'+i,{
										pagination: '.pagination'+1,
										slidesPerView: 1,
										// loop:true,
										// autoplay: 2000,
										autoplayDisableOnInteraction: false,
										grabCursor: true,
										paginationClickable: true
									})
									$('.swiper-button-prev'+i).on('click', function(e){
										e.preventDefault()
										sw.swipePrev()
									})
									$('.swiper-button-next'+i).on('click', function(e){
										e.preventDefault()
										sw.swipeNext()
									})
								}*/
								
								var mySwiper1 = new Swiper('.swiper-container-inner1',{
									pagination: '.pagination1',
									slidesPerView: 1,
									// loop:true,
									// autoplay: 2000,
									autoplayDisableOnInteraction: false,
									grabCursor: true,
									paginationClickable: true
								})
								$('.swiper-button-prev1').on('click', function(e){
									e.preventDefault()
									mySwiper1.swipePrev()
								})
								$('.swiper-button-next1').on('click', function(e){
									e.preventDefault()
									mySwiper1.swipeNext()
								})
								var mySwiper2 = new Swiper('.swiper-container-inner2',{
									pagination: '.pagination2',
									loop:true,
									autoplay: 2000,
									autoplayDisableOnInteraction: false,
									grabCursor: true,
									paginationClickable: true
								})
								$('.swiper-button-prev2').on('click', function(e){
									e.preventDefault()
									mySwiper2.swipePrev()
								})
								$('.swiper-button-next2').on('click', function(e){
									e.preventDefault()
									mySwiper2.swipeNext()
								})
								var mySwiper3 = new Swiper('.swiper-container-inner3',{
									pagination: '.pagination3',
									loop:true,
									autoplay: 2000,
									autoplayDisableOnInteraction: false,
									grabCursor: true,
									paginationClickable: true
								})
								$('.swiper-button-prev3').on('click', function(e){
									e.preventDefault()
									mySwiper3.swipePrev()
								})
								$('.swiper-button-next3').on('click', function(e){
									e.preventDefault()
									mySwiper3.swipeNext()
								})
								var mySwiper4 = new Swiper('.swiper-container-inner4',{
									pagination: '.pagination4',
									loop:true,
									autoplay: 2000,
									autoplayDisableOnInteraction: false,
									grabCursor: true,
									paginationClickable: true
								})
								$('.swiper-button-prev4').on('click', function(e){
									e.preventDefault()
									mySwiper4.swipePrev()
								})
								$('.swiper-button-next4').on('click', function(e){
									e.preventDefault()
									mySwiper4.swipeNext()
								})
							})
						}
					}
				})
			},
			getCountry () {
				var _this = this;
				$.ajax({
					url: "http://manage.xiaoying.net/getcountry",
					type:"GET",
					success: function (res) {
						if(res.status) {
							for (var i = 0; i < res.data.length; i++) {
								if (res.data[i].name == _this.currentCountry) {
									// console.log('apply_getCountry',_this.currentCountry);
									_this.countryId = res.data[i].id;
									_this.getData(_this.countryId);
								}
							}
						}
					}
				})
			}
		},
		mounted () {
			var _this = this;
			_this.getCountry();
			// console.log('apply',_this.$store.getters.currentCountry);
			
		}

	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/application.css';

</style>
