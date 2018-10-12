<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="container breadNavPart">
				<a href="javascrpt:;">您的位置：</a>
				<!-- <a href="/">首页</a><font>&gt;</font> -->
				<router-link to="/">首页<font>&gt;</font></router-link>
				<!-- <a href="/application">韩国留学</a><font>&gt;</font> -->
				<router-link to="/application">{{currentCountry}}留学<font>&gt;</font></router-link>
				<span>列表</span>
			</div>
			<div class="container whiteBack secNavPart">
				<div class="tabs clearfix">
					<a href="javascript:;" v-for="n in applyListData" :data-type = "n.type"  @click = "setApplistType(n.type)">{{n.catename}}</a> 
					<!-- <a href="javascript:;">背景提升</a> 
					<a href="javascript:;">考培服务</a> -->
				</div>
			</div>
			<div class="container tableDv">
				<div class="swiper-container swiper-container-table">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="n in applyListData" :data-type = "n.type">
							<ul class="applyInfoList clearfix">
								<li v-for="item in n.data">
									<router-link :to="{ name: 'Applydetails', params: { id: item.id,type: n.type }}">
										<img :src="'http://manage.xiaoying.net' + item.headimg">
										<h3 v-html="item.title">韩国留学本科申请</h3>
										<p v-html="item.desc">择校+申请材料办理+签证办理</p>
									</router-link>
									<div class="hoverDv">
										<!-- <a href="javascript:;" target="_blank">查看详情</a> -->
										<a href="javascript:;" @click="onlineConsult" target="_blank">在线咨询</a>
									</div>
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
	import {mapGetters} from 'vuex'
	export default{
		name: 'Applydetails',
		data () {
			return {
				nav: 'application',
				applyListData: ''
			}
			
		},
		components: {
			headerTop
		},
		computed: {
			...mapGetters({
				currentCountry: 'currentCountry'
			})
		},
		watch: {
		    '$route' (to, from,next) {
		      // 对路由变化作出响应...
		    	this.$router.go(0);
		    }
	    },
		methods: {
			setApplistType (type) {
				var _this = this;
				localStorage.applistType = type;
				console.log('localStorage.applistType',localStorage.applistType)
			},
			getData (id) {
				var _this = this;
				$.ajax({
					url: "http://manage.xiaoying.net/getliuxuelist?country_id="+ id,
					type:"GET",
					success: function (res) {
						if (res.status) {
							var obj = res.data;
							var arr = [];
							for (let i in obj) {
								obj[i].type = obj[i].catename;
								
								if(obj[i].catename == '背景提升') {
									for (var n = 0; n < obj[i].data.length; n++) {
										var $pre = $('<pre>');
										$pre.html(obj[i].data[n].xmbright)
										obj[i].data[n].xmbright = $pre.html().split(/[\n]/g);
									}
								}
								
							    arr.push(obj[i]);
							}
							_this.applyListData = arr;

							_this.$nextTick(function () {
								//初始化 tabs
								var num = 0;
								// var _type = _this.$route.params.type;
								// localStorage.applistType = _type;
								// console.log('_type',localStorage.applistType);
								$('.tabs a').each(function () {
									var $type = $(this).data('type');
									if ($type == localStorage.applistType) {
										$(this).addClass('active').siblings().removeClass('active');
										$('.swiper-container-table ')
									}else {
										num ++;
										if(num >= $('.tabs a').length) {
											
											_this.$router.push('/applylist');
											
										}
									}
								})
								var tabsSwiper = new Swiper('.swiper-container-table',{
									speed:500,
									initialSlide: $('.tabs a.active').index(),
									onSlideChangeStart: function(){
										$(".tabs .active").removeClass('active');
										// console.log(tabsSwiper.activeIndex);
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
									e.preventDefault();

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
			},
			onlineConsult () {
				_MEIQIA('showPanel');
			}
		},
		mounted () {
			var _this = this;
			_this.getCountry();
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/applydetails.css';

</style>
