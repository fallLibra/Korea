<template>
	<div class="case_head marginTop">
		<div class="case_head_con">
			<img src="../../../static/images/case/banner.png" class="banner">
			<h4>案例中心</h4>
			<p>TOP30名校录取人数遥遥领先</p>
			<ul class="caseBlockUl container clearfix">
				<li data-nav="case">
					<router-link to="/case">
						<div class="statusDv">
							<div class="normalStatusDv">
								<div><img src="../../../static/images/case/success_case_icon.png"></div>
								<p>成功案例</p>
							</div>
							<div class="lightStatusDv">
								<p>成功案例</p>
							</div>
						</div>
					</router-link>
				</li>
				<li data-nav="casethanks">
					<router-link to="/case/casethanks">
						<div class="statusDv">
							<div class="normalStatusDv">
								<div><img src="../../../static/images/case/public_praise_icon.png"></div>
								<p>口碑墙</p>
							</div>
							<div class="lightStatusDv">
								<p>口碑墙</p>
							</div>
						</div>
					</router-link>
				</li>
				<li data-nav="caseadmission">
					<router-link to="/case/caseadmission">
						<div class="statusDv">
							<div class="normalStatusDv">
								<div><img src="../../../static/images/case/case_data_icon.png"></div>
								<p>案例数据</p>
							</div>
							<div class="lightStatusDv">
								<p>案例数据</p>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'casebanner',
		data () {
			return {

			}
			
		},
		props: {
			bannerNav:String
		},
		mounted () {
			var _this = this;
			$('.caseBlockUl li').each(function () {
				var $nav = $(this).data('nav');
				if ($nav == _this.bannerNav) {
					$(this).addClass('active').siblings().removeClass('active');
				}
			})
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/casebanner.css';
</style>