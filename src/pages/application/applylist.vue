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
				<span>列表</span>
			</div>
			<div class="container whiteBack secNavPart">
				<div class="tabs clearfix">
					<a href="javascript:;" class="active">留学申请</a> 
					<a href="javascript:;">背景提升</a> 
					<a href="javascript:;">考培服务</a>
				</div>
			</div>
			<div class="container tableDv">
				<div class="swiper-container swiper-container-table">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<ul class="applyInfoList clearfix">
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
										<a href="javascript:;" target="_blank">查看详情</a>
										<a href="javascript:;" target="_blank">在线咨询</a>
									</div>
								</li>
							</ul>
						</div>
						<div class="swiper-slide">
							2222
						</div>
						<div class="swiper-slide">
							3333
						</div>
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
