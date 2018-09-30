<template>
	<div id="recommendConsult">
		<p class="title">推荐顾问</p>
		<div class="result_counselor_peo">
			<ul class="clearfix">
				<li>
					<a href="javascript:;">
						<img src="../../../../static/images/case/yuanshanzhijiu.png" alt="">
						<p class="peo_name">远山智久</p>
						<p class="peo_anli"><span>178</span>个相似案例</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						
						<img src="../../../../static/images/case/chenyuanying.png" alt="">
						<p class="peo_name">陈远英</p>
						<p class="peo_anli"><span>161</span>个相似案例</p>
					</a>

				</li>
				<li>
					<a href="javascript">
						<img src="../../../../static/images/case/huliang.png" alt="">
						<p class="peo_name">胡俍</p>
						<p class="peo_anli"><span>158</span>个相似案例</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="../../../../static/images/case/huliang.png" alt="">
						<p class="peo_name">胡俍</p>
						<p class="peo_anli"><span>158</span>个相似案例</p>
					</a>
				</li>

			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'recommendConsult',
		data () {
			return {

			}
			
		},
		// methods () {

		// },
		mounted () {

		}
	}
</script>
<style scoped lang="less">
#recommendConsult {
	border: 1px solid #e3eaee;
	padding-bottom: 20px;
	background: #fff;
	margin-top: 20px;
	margin-bottom: 20px;
	.title {
		text-align: left;
		font-size: 17px;
		line-height: 60px;
		color: #333333;
		font-weight: 600;
		padding-left: 20px;
	}
	.result_counselor_peo {
		width: 310px;
		margin: 0 auto;
		li {
			width: 50%;
			float: left;
			margin-bottom: 20px;
			a {
				display: block;
				cursor: default;
				img {
					display: block;
					width: 100px;
					height: 100px;
					margin: 0 auto;
					border-radius: 200px;
				}
				p {
					font-size: 16px;
					color: #333333;
					text-align: center;
					padding: 5px 0;
					span {
						color: #FF0000;
					}
				}

			}
		}
	}
}
</style>
