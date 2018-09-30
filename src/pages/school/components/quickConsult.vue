<template>
	<div class="quickConsultPart">
		<!-- <div class="quickConsultPart">
			<h4></h4>
		</div> -->
		<div class="user-mes">
			<header>快速咨询通道</header>
			<div class="first-choice">
				<p class="first-choice-tit">小莺留学留学顾问1对1为您免费解答留学问题</p>
				<ul class="li-wap">
					<li>
						<div class="js-choose" data-link="1">
							<p>电话</p>
						</div>
					</li>
					<li>
						<div class="js-choose" data-link="2">
							<p>微信</p>
						</div>
					</li>
					<li>
						<div class="js-choose" data-link="3">
							<p>QQ</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="wappers">
				<ul>
					<li data-value="1">
						<span><img src="../../../../static/images/school/phone.png">电话</span>
					</li>
					<li data-value="2">
						<span><img src="../../../../static/images/school/wechart.png">微信</span>
					</li>
					<li data-value="3">
						<span><img src="../../../../static/images/school/qq.png">QQ</span>
					</li>
				</ul>
				<form action="   " method="POST">
					<div class="ipt-wapper">
						<input type="hidden" name="mg_id" value="2047">
						<input type="hidden" name="sh_id" value="4661">
						<input type="text" name="" class="js-message" autocomplete="off">
						<span class="prompt">请填写手机号</span>
					</div>
					<button type="button" class="js-btn">提交</button>
				</form>

				<p>小莺留学留学顾问1对1为您免费解答留学问题</p>
			</div>
			<div class="success-prompt">
				<i class="iconfont js-close"><img class="close" src="../../../../static/images/school/close.png"></i>
				<p>提交成功!</p>
				<p>请等待专业的留学顾问与您沟通!</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'quickConsult',
		data () {
			return {

			}
			
		},
		mounted () {
			$('.js-message').on('focus', function() {
				$(".prompt").hide();
				$(this).addClass('focu')
			});
			$(".js-choose").on('click', function() {
				var which = $(this).data('link');
				$(".first-choice").hide();
				$(".wappers").fadeIn();
				$('.wappers ul li:nth-of-type(' + which + ')').addClass('active')
				if (which == 1) {
					$(".js-message").attr('name', 'mobile');
					$(".prompt").text('请填写手机号');
				} else if (which == 2) {
					$(".js-message").attr('name', 'weixin');
					$(".prompt").text('请填写微信号');
				} else if (which == 3) {
					$(".js-message").attr('name', 'qq');
					$(".prompt").text('请填写QQ号');
				}
			});
			$(".prompt").on('click', function() {
				$(".prompt").hide();
				$('.js-message').addClass('focu');
				$('.js-message').focus()
			});
			$('.js-message').on('blur', function() {
				$(this).removeClass('focu')
				var user_mes = $(".js-message").val()
				if (user_mes == '') {
					$(".prompt").show();
				}
			});
			$('.wappers ul li').on('click', function() {
				$(this).addClass('active');
				var which = $(this).data('value');
				$(".prompt").show();
				$(".js-message").val('');
				$(this).siblings().removeClass('active');
				if (which == 1) {
					$(".js-message").attr('name', 'mobile');
					$(".prompt").text('请填写手机号');
				} else if (which == 2) {
					$(".js-message").attr('name', 'weixin');
					$(".prompt").text('请填写微信号');
				} else if (which == 3) {
					$(".js-message").attr('name', 'qq');
					$(".prompt").text('请填写QQ号');
				}
			});
			$('.js-close').on('click', function() {
				$(".js-message").blur();
				$(".js-message").val('');
				$(".js-message").attr('name', 'mobile');
				$(".prompt").show();
				$(".prompt").text('请填写手机号');
				$('.user-mes ul li').removeClass('active')
				$('.user-mes ul li:nth-of-type(1)').addClass('active');
				$('.success-prompt').fadeOut();
			});
			$(".js-btn").on('click', function() {
				var message = $('.js-message').val();
				if (message) {
					$(this).parent().ajaxSubmit({
						success: function(data) {
							$(".success-prompt").css('display', 'flex')
						}
					});
				}
			});
		}
	}
</script>
<style scoped lang="less">
.quickConsultPart {
	.user-mes {
		// width: 100%;
		height: 283px;
		box-shadow: 0px 1px 2px #dbdbdb;
		margin-bottom: 20px;
		position: relative;
		background-color: #fff;
		margin-bottom: 38px;
	}

	.user-mes header {
		width: 100%;
		height: 43px;
		background: #2196f3;
		color: #fff;
		text-align: center;
		line-height: 43px;
		font-size: 16px
	}

	.first-choice {
		width: 100%;
		height: calc(100% - 43px);
		box-sizing: border-box;
		padding-top: 19px
	}

	.first-choice ul {
		width: 268px;
		height: 89px;
		margin: 0 auto
	}

	.first-choice li {
		width: calc(100% / 3);
		height: 100%;
		float: left
	}

	.first-choice li>div {
		width: 64px;
		height: 100%;
		box-sizing: border-box;
		padding-top: 70px;
		cursor: pointer;
		margin: 0 auto;
		transition-duration: 0.4s
	}

	.first-choice li:nth-of-type(1) div {
		background: url('../../../../static/images/school/aside_phone.png') center top no-repeat
	}

	.first-choice li:nth-of-type(1):hover div {
		background: url('../../../../static/images/school/aside_phone_l.png') center top no-repeat
	}

	.first-choice li:nth-of-type(2) div {
		background: url('../../../../static/images/school/aside_wechat.png') center top no-repeat
	}

	.first-choice li:nth-of-type(2):hover div {
		background: url('../../../../static/images/school/aside_wechat_l.png') center top no-repeat
	}

	.first-choice li:nth-of-type(3) div {
		background: url('../../../../static/images/school/aside_qq.png') center top no-repeat
	}

	.first-choice li:nth-of-type(3):hover div {
		background: url('../../../../static/images/school/aside_phone.png') center top no-repeat
	}

	.first-choice li p {
		color: #394043;
		text-align: center
	}

	.user-mes .first-choice-tit {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 268px;
		height: 84px;
		margin: 0 auto;
		font-size: 16px;
		color: #394043;
		background: #f0f7fb;
		border-radius: 8px;
		box-sizing: border-box;
		padding: 0 40px;
		margin-bottom: 26px
	}

	.wappers {
		display: none;
		width: 100%;
		height: calc(100% - 43px)
	}

	.user-mes .wappers ul {
		width: 100%;
		height: 47px;
		margin-bottom: 26px
	}

	.user-mes .wappers ul li {
		height: 100%;
		width: calc(100% / 3);
		float: left;
		text-align: center;
		line-height: 47px;
		color: #394043;
		font-size: 16px;
		background: #f0f7fb;
		cursor: pointer;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		box-sizing: border-box;
		border-left: 1px solid #ebeff2
	}

	.user-mes .wappers ul li img {
		margin-right: 9px;
		position: relative;
		top: -1px
	}

	.user-mes .wappers ul li:nth-of-type(2) span img {
		height: 16px
	}

	.ipt-wapper {
		width: 261px;
		height: 41px;
		margin: 0 auto;
		margin-bottom: 20px;
		position: relative
	}

	.ipt-wapper input {
		width: 100%;
		height: 100%;
		border-radius: 4px;
		background: #f0f7fb;
		border: 1px solid #f0f7fb;
		outline: none;
		box-sizing: border-box;
		padding-left: 20px
	}

	.ipt-wapper .focu {
		border: 1px solid #58b4ee;
		background: #fff
	}

	.prompt {
		color: #646d71;
		font-size: 14px;
		position: absolute;
		top: 50%;
		margin-top: -9.5px;
		left: 20px
	}

	.user-mes button {
		display: block;
		width: 261px;
		height: 41px;
		text-align: center;
		outline: none;
		border: none;
		border-radius: 4px;
		color: #fff;
		margin: 0 auto;
		background: #ed5322;
		margin-bottom: 20px
	}

	.user-mes button:hover {
		background: #e65124
	}

	.user-mes p {
		font-size: 12px;
		text-align: center;
		color: #979ea2
	}

	.user-mes .wappers .active {
		background: #fff
	}

	.success-prompt {
		display: none;
		width: 100%;
		height: calc(100% - 43px);
		background: #fff;
		position: absolute;
		left: 0;
		top: 43px;
		text-align: center;
		line-height: 24px;
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding-bottom: 26px

	}
	.success-prompt .close {
		width: 25px;
	}
	.success-prompt p {
		line-height: 30px;
		color: #394043;
		font-size: 14px
	}

	.success-prompt p:nth-of-type(1) {
		color: #0ccd79;
		font-size: 18px
	}

	.success-prompt i {
		line-height: 30px;
		font-size: 25px;
		color: #898989;
		position: absolute;
		right: 17px;
		top: 14px;
		cursor: pointer
	}
}
</style>
