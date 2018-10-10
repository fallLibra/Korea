<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="bannerPart">
				<div class="container">
					<div>
						<span><img :src="schoolDes.logo_long"></span>
					</div>
					<div>
						<h2>{{schoolDes.name_cn}}</h2>
						<h4>{{schoolDes.name_en}}</h4>
						<ul class="schoolInfoUl">
							<li>位于：{{schoolDes.address}}</li>
							<li>学校官网： <a :href="schoolDes.website" target="_blank">{{schoolDes.website}}</a></li>
							<li>电话：{{schoolDes.mobile}}</li>
						</ul>
					</div>
					<div>
						<ul class="clearfix rankUl">
							<li>
								<span>{{schoolDes.rank_world?schoolDes.rank_world:'暂无'}}</span>
								<p>世界排名</p>
							</li>
							<li>
								<span>{{schoolDes.rank_local?schoolDes.rank_local:'暂无'}}</span>
								<p>本国排名</p>
							</li>
						</ul>
						<a class="applyBtn" href="javascript:;">官方申请通道</a>
					</div>
				</div>
			</div>
			<div class="schoolTab">
				<ul class="clearfix container">
					<li @click="tab" data-nav = "学校介绍"><a href="javascript:;">学校介绍</a></li>
					<li @click="tab" data-nav = "录取要求"><a href="javascript:;">录取要求</a></li>
					<li @click="tab" data-nav = "新闻资讯"><a href="javascript:;">新闻资讯</a></li>
				</ul>
			</div>
			<div class="content container clearfix">
				<div class="leftContent">
					<div class="schoolListPart">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="n in schoolDes.despic">
									<a href="javascript:;">
										<img :src="n">
									</a>
								</div>
							</div>
							<!-- <div class="pagination"></div> -->
							<!-- swiper arrow -->
							<a class="swiper-button swiper-button-next" href="javascript:;"><img src="../../../static/images/application/arrow-next-white.png"></a> 
							<a class="swiper-button swiper-button-prev" href="javascript:;"><img src="../../../static/images/application/arrow-prev-white.png"></a>
						</div>
					</div>
					<div class="contentInfo">
						<div class="contentInfoItem schoolIntroPart" v-show="dataNav=='学校介绍'">
							<div class="titleContent">
								<span></span>学校简介<span></span>
							</div>
							<p v-html="schoolDes.desc"></p>
						</div>		
						<div class="contentInfoItem entryRequirePart" v-show="dataNav=='录取要求'">
							<div class="titleContent">
								<span></span>录取要求<span></span>
							</div>
							<p v-html="schoolDes.request_apply"></p>
							<p v-html="schoolDes.request_doclist"></p>
							<p v-html="schoolDes.requret_fee"></p>
						</div>
						<div class="contentInfoItem newInfoPart" v-show="dataNav=='新闻资讯'">
							<div class="titleContent">
								<span></span>新闻资讯<span></span>
							</div>
							<div class="news-list" v-for="item in newsList" :key="item.id">
								<a href="javascript:;" :title="item.title">
									<div class="news-img jm-fl">
										<img :src="'http://xiaoying.net'+item.picture" :alt="item.title">
									</div>
									<div class="news-wapper jm-fl">
										<h2 class="">{{item.title}}</h2>
										<p v-html="item.des"></p>
										<div class="statistics-mes">
											<span><img src="../../../static/images/school/eyes.png">6173</span>
											<span><img src="../../../static/images/school/time.png">2017-07-05</span>
										</div>
									</div>
								</a>
							</div>
							<!-- <div class="news-list">
								<a href="javascript:;" title="THE大学排名 | 2017亚太地区最佳大学排名发布！北大、清华排名前5">
									<div class="news-img jm-fl">
										<img src="http://imghome.jiemo.net//Upload/forumpic/2017/0705/20170705092642502.jpg" alt="THE大学排名 | 2017亚太地区最佳大学排名发布！北大、清华排名前5">
									</div>
									<div class="news-wapper jm-fl">
										<h2 class="">THE大学排名 | 2017亚太地区最佳大学排名发布！北大、清华排名前5</h2>
										<p>昨日，THE发布2017亚太地区最佳大学排名——Best universities in the Asia-Pacific region 2017！该排名分析了东亚、东南亚、大洋洲的38个国家，排名包括200多所来自13个国家的大学。其中日本大学上榜最多，有69所；中国第二，上榜52所，依次为澳洲35所，韩国25所。 中国和新加坡</p>
										<div class="statistics-mes">
											<span><img src="../../../static/images/school/eyes.png">6173</span>
											<span><img src="../../../static/images/school/time.png">2017-07-05</span>
										</div>
									</div>
								</a>
							</div> -->
						</div>				
					</div>
				</div>
				<div class="rightContent">
					<div class="quickConsultPart">
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
		name: 'Schooldetails',
		data () {
			return {
				nav: 'school',
				dataNav: '新闻资讯',
				schoolDes: {},
				newsList: [],
				newsRequest: {
					page: 1,
					limit: 5
				}
			}
			
		},
		components: {
			headerTop,
			quickConsult,
			applyStudents,
			sameCity
		},
		methods: {
			initTab() {
				var _this = this;
				console.log('_this.dataNav',_this.dataNav);
				$('.schoolTab li').each(function () {
					if ($(this).data('nav') == _this.dataNav) {
						$(this).addClass('active').siblings().removeClass('active');
					}
				})
			},
			tab(event) {
				var _this = this;
				var el =  event.currentTarget;
				var nav = $(el).data('nav');
				$(el).addClass('active').siblings().removeClass('active');

				_this.dataNav = nav;
				// console.log(_this.dataNav)

			},
			getData() {
				var _this = this;
				var id = _this.$route.params.id;
				$.ajax({
					url:"http://manage.xiaoying.net/getkoreadetail?id=" + id,
					type:"GET",
					success: function (res) {
						if (res.status) {
							// console.log(res.data.despic.split(','));
							_this.schoolDes = res.data;
							_this.schoolDes.despic = res.data.despic.split(',');
							// console.log(_this.schoolDes.despic)

							_this.$nextTick(function () {
							 	var mySwiper = new Swiper('.swiper-container',{
									loop:true,
									// pagination: '.pagination',
									paginationClickable: true,
									centeredSlides: false,
									slidesPerView: 4,
									watchActiveIndex: true
								})
								$('.swiper-button-prev').on('click', function(e){
									e.preventDefault()
									mySwiper.swipePrev()
								})
								$('.swiper-button-next').on('click', function(e){
									e.preventDefault()
									mySwiper.swipeNext()
								})
							})
							

						}
					}
				})
			},
			getNewsList() {
				var _this = this;
				$.ajax({
					url:"http://manage.xiaoying.net/article/contentssearch?page="+ _this.newsRequest.page + "&limit=" + _this.newsRequest.limit,
					type:"GET",
					success: function (res) {

						_this.newsList=res.data;

						console.log('getNewsList',res.data);

					}
				})
			}


		},
		mounted () {
			var _this = this;
			// console.log(_this.$route.params.id);
			_this.initTab();
			_this.getData();
			_this.getNewsList();
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/schooldetails.css';
</style>
