<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="container breadNavPart">
				<a href="javascrpt:;">您的位置：</a>
				<!-- <a href="/">首页</a><font>&gt;</font> -->
				<router-link to="/">首页<font>&gt;</font></router-link>
				<!-- <a href="/application">韩国留学</a><font>&gt;</font> -->
				<router-link to="/application">韩国留学<font>&gt;</font></router-link>
				<span>详情</span>
			</div>
			<div class="container whiteBack contentPart">
				<div class="imgDv">
					<img src="../../../static/images/application/details-img.png">
				</div>
				<div>
					<h2>韩国留学语学院+本科或者语学院+研究生</h2>
					<span>择校+申请材料办理+签证办理申请材料办理申请材料办理申请材料办理申请材料办理申请材料办理申请材料办理</span>
					<div class="btnDv">
						<a href="javascript:;" target="_blank">预约报名</a>
						<a href="javascript:;" target="_blank">在线咨询</a>
					</div>
				</div>
			</div>
			<div class="serviceIntro">
				<div class="container">
					<h4 class="applyTitleDv">
						<img class="icon-titl" src="static/images/application/icon-title.png">服务介绍
					</h4>
					<div class="serviceContent">
						服务介绍服务介绍服务介绍服务介绍服务介绍服务介绍服务介绍
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	export default{
		name: 'Applydetails',
		data () {
			return {
				nav: 'application'
			}
			
		},
		components: {
			headerTop
		},
		mounted () {
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
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/applydetails.css';

</style>
