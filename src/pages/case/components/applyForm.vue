<template>
	<div id="applyForm">
		<img v-if="applyFormBanner" class="apply_form_banner" src="../../../../static/images/case/apply_form_banner.jpg">
		<div class="appltFormPart">
			<p class="title">填写信息获得专属申请方案</p>
			<div class="result_form_package">
				<div class="inputDv">
					<input type="" name="" placeholder="请输入你的名字">
				</div>
				<div class="inputDv">
					<input type="" name="" placeholder="请输入你的电话">
				</div>
				<div class="inputDv">
					<select>
						<option>所在城市</option>
					</select>
				</div>
				<div class="inputDv">
					<select>
						<option>出国时间</option>
					</select>
				</div>
				<div class="inputDv">
					<select>
						<option>目前学历:</option>
					</select>
				</div>
				<a href="javascript:;" class="btn_sub btnSubmit xy_submit"
				>获得申请方案</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'applyForm',
		data () {
			return {

			}
			
		},
		props: {
			applyFormBanner: Boolean
		},
		// methods () {

		// },
		mounted () {
			
		}
	}
</script>
<style scoped lang="less">
#applyForm {
	.apply_form_banner {
		width: 100%;
	}
	.appltFormPart {
		margin-top: 20px;
		border: 1px solid #e3eaee;
		padding-bottom: 20px;
		background: #fff;
		.title {
			text-align: left;
			font-size: 17px;
			line-height: 60px;
			color: #333333;
			font-weight: 600;
			padding-left: 20px;
		}
		.result_form_package {
			font-size: 16px;
			width: 310px;
			margin: 0 auto;
			.inputDv {
				input,
				select {
					width: 100%;
					border: 1px solid #e3eaee;
					margin-bottom: 10px;
					border-radius: 3px;
				}
				input {
					// height: 40px;
					// line-height: 40px;
					padding: 8px 10px 9px 10px;
					
				}
				select {
					padding: 7px 10px 8px 10px;
				}
			}
			.btn_sub {
				display: block;
				width: 100%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				background-color: #FBD92E;
				font-size: 18px;
				color: #000 !important;
				border-radius: 3px;
				font-weight: 600;
				margin-top: 10px;
			}
		}
	}
}
</style>
