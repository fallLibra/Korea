<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="container breadNavPart">
				<a href="javascrpt:;">您的位置：</a>
				<router-link to="/">首页<font>&gt;</font></router-link>
				<router-link to="/application">{{currentCountry}}留学<font>&gt;</font></router-link>
				<span>详情</span>
			</div>
			<div class="container whiteBack contentPart">
				<div class="imgDv">
					<img :src="'http://manage.xiaoying.net' + applyDet.headimg">
					<!-- <img src="../../../static/images/application/details-img.png"> -->
				</div>
				<div>
					<h2 v-html="applyDet.title"></h2>
					<span v-html="applyDet.desc"></span>
					<div class="btnDv">
						<a href="javascript:;" target="_blank">预约报名</a>
						<a href="javascript:;" target="_blank">在线咨询</a>
					</div>
				</div>
			</div>
			<div class="serviceIntro">
				<div class="container">
					<!-- <h4 class="applyTitleDv">
						<img class="icon-titl" src="static/images/application/icon-title.png">服务介绍
					</h4> -->
					<div class="serviceCont"></div>
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
				applyDet: {}
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
		methods: {
			getData() {
				var _this = this;
				var id = _this.$route.params.id;
				localStorage['applydetailstype'] = _this.$route.params.type;

				var url = localStorage['applydetailstype'] == '背景提升' ? ("http://manage.xiaoying.net/backdetail?id="+ id) :("http://manage.xiaoying.net/getliuxuedetail?id="+ id);
				console.log(localStorage.applydetailstype,url);

				$.ajax({
					url: url,
					type: "GET",
					success: function (res) {
						if (res.status) {
							_this.applyDet = res.data;
							var $pre = $('<pre>');
							$pre.html(_this.applyDet.detail);
							$('.serviceCont').html($pre.text());
							$('.serviceCont h3').css({
								'background':"url('../../../static/images/application/detail_title_backgroud.png') no-repeat 0 0",
								'margin': '20px 0'
							});
							$('.serviceCont ul li').css({
								'line-height': '1.5em',
								'font-size': '14px'
							})
							$('.serviceCont h2').css({
								'float': 'none',
								'line-height': '1.75em',
								'margin': '10px 0'
							})
							$('.serviceCont h2 img').css({
								'margin-right': '10px'
							})
						}
					}
				}) 
			}
		},
		mounted () {
			var _this = this;
			_this.getData();
			// var tabsSwiper = new Swiper('.swiper-container-table',{
			// 	speed:500,
			// 	onSlideChangeStart: function(){
			// 		$(".tabs .active").removeClass('active')
			// 		$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
			// 	}
			// })
			// $(".tabs a").on('touchstart mousedown',function(e){
			// 	e.preventDefault()
			// 	$(".tabs .active").removeClass('active')
			// 	$(this).addClass('active')
			// 	tabsSwiper.swipeTo( $(this).index() )
			// })
			// $(".tabs a").click(function(e){
			// 	e.preventDefault()
			// })
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/applydetails.css';

</style>
