<template>
	<div>
		<div class="hotFlag">
			<h4>热门标签</h4>
			<ul class="hotFlagList clearfix">
				<li><a href="javascript:;">研究生申请</a></li>
				<li><a href="javascript:;">研究生</a></li>
				<li><a href="javascript:;">研究生申请</a></li>
				<li><a href="javascript:;">研究生</a></li>
				<li><a href="javascript:;">研究生申请</a></li>
				<li><a href="javascript:;">研究生</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'hotFlag',
		data () {
			return {

			}
			
		},
		
		mounted () {

		}
	}
</script>
<style scoped lang="less">
@import url("../../../static/stylesheet/function.less");
.hotFlag {
	background-color: #fff;
	.border-radius(4px);
	padding: 6px 20px 40px;
	margin-bottom: 20px;
	h4 {
		font-size: 16px;
		color: #262626;
		line-height: 44px;
		border-bottom: 1px solid #f2d248;
	}
	.hotFlagList {
		padding-top: 9px;
		li {
			float: left;
			font-size: 14px;
			color: #3a3a3a;
			line-height: 30px;
			padding: 0 10px;
			.border-radius(4px);
			background-color: #fbda4c;
			margin-right: 12px;
			margin-top: 12px;
		}
	}
}

</style>