<template>
	<div>
		<div class="hotActivitiesPart">
			<h4 class="title">热门活动</h4>
			<div class="hotActivitiesDv">
				<a class="arrow-left" href="#"></a> 
				<a class="arrow-right" href="#"></a>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="n in hotActivities" :key="n.id">
							<a :href="n.url" target="_blank">
								<img :src="n.imgSrc">
							</a>
						</div>
					</div>
				</div>
				<div class="pagination"></div>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		name: 'hotActivities',
		data () {
			return {
				hotActivities: [
					{
						id: 1,
						imgSrc: "../../../static/images/hotActivities/zhanhui2018.jpg",
						url: "http://www.xiaoying.net/zhanhui2018/"
					},
					{
						id: 2,
						imgSrc: "../../../static/images/hotActivities/evaluation.jpg",
						url: "http://www.xiaoying.net/evaluation?q=web"
					},
					{
						id: 3,
						imgSrc: "../../../static/images/hotActivities/duyan.jpg",
						url: "http://www.xiaoying.net/newdy/"
					},
					{
						id: 4,
						imgSrc: "../../../static/images/hotActivities/yuyan.jpg",
						url: "http://www.xiaoying.net/yuyan/"
					}
				],
			}
		},
		
		mounted () {

			//热门活动轮播初始化
			var mySwiper = new Swiper('.swiper-container',{
                // pagination: '.pagination',
                loop:true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                grabCursor: true,
                paginationClickable: true
            })
			$('.arrow-left').on('click', function(e){
				e.preventDefault()
				mySwiper.swipePrev()
			});
			$('.arrow-right').on('click', function(e){
				e.preventDefault()
				mySwiper.swipeNext()
			});
		}
	}
</script>
<style scoped lang="less">
@import url("../../../static/stylesheet/function.less");

.hotActivitiesPart {
	width: 100%;
	background-color: #fff;
	overflow: hidden;
	.border-radius(4px);
	padding: 0 20px 40px;
    margin-bottom: 20px;
    .title {
    	font-size: 16px;
    	color: #262626;
    	line-height: 54px;
    }
    .hotActivitiesDv {
    	position: relative;

    	.arrow-left,
    	.arrow-right {
    		position:absolute;
    		top: 50%;
    		width: 24px;
    		height: 24px;
    		.transform(translateY(-50%));
    		z-index: 2;
    	}
    	.arrow-left {
    		left: -10px;
			background: url("../../../static/images/hotActivities/arrow_left.png") no-repeat 0 0;			
			background-size: 24px auto;

		}
		.arrow-right {
			right:-10px;
			background: url("../../../static/images/hotActivities/arrow_right.png") no-repeat 0 0;
			background-size: 24px auto;

		}
		.swiper-container {
			height: auto!important;
			.swiper-wrapper {
				height: auto!important;
				.swiper-slide {
					height: auto!important;
					width: 100%;
					a {
						display: block;
						img {
							width: 100%!important;
							height: 160px!important;
						}
					}
				}
			}
		}
	}

}
</style>