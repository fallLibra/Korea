<template>
	<div class="consultInfo">
		<div class="sidebar-consultant">
			<div class="sid-teacher-info">
				<a href="javascript:;">
					<img src="../../../../static/images/case/teacher.png" alt="">
					<p class="sid-t-info-name">远山智久</p>
				</a>
				<div class="sid-t-info-introduce">
					<p>东京大学金融博士</p>
				</div>
			</div>
			<div class="advisory-button">
				<a href="javascript:void();" onclick="_MEIQIA('showPanel')">  <span class="clearfix" data-toggle="modal" data-target="#apply-reservation">预约咨询</span></a>
				<a href="javascript:void();" onclick="_MEIQIA('showPanel')"><span class="consultant-call">在线咨询</span></a>
			</div>
		</div>
		<div class="sid-teacher-results">
			<div class="help-offer-title">TA帮学生获得的OFFER</div>
			<ul>
				<li>
					<a href="javascript:;"></a>
					<div class="tableDv">
						<div class="res-top-img">
							<img src="../../../../static/images/case/dongjing.png" alt="广岛大学">
						</div>
						<div class="school-name">
							<h4>广岛大学</h4>
							<p>地域经济</p>
						</div>
						<div class="middle-line">
							<span></span>
							
						</div>
						<div class="student-name">
							<h4>H同学</h4>
							<p>浙江工商大学</p>
						</div>
					</div>
				</li>
				<li>
					<a href="javascript:;"></a>
					<div class="tableDv">
						<div class="res-top-img">
							<img src="../../../../static/images/case/dongjing.png" alt="广岛大学">
						</div>
						<div class="school-name">
							<h4>广岛大学</h4>
							<p>地域经济</p>
						</div>
						<div class="middle-line">
							<span></span>
							
						</div>
						<div class="student-name">
							<h4>H同学</h4>
							<p>浙江工商大学</p>
						</div>
					</div>
				</li>
				<li>
					<a href="javascript:;"></a>
					<div class="tableDv">
						<div class="res-top-img">
							<img src="../../../../static/images/case/dongjing.png" alt="广岛大学">
						</div>
						<div class="school-name">
							<h4>广岛大学</h4>
							<p>地域经济</p>
						</div>
						<div class="middle-line">
							<span></span>
							
						</div>
						<div class="student-name">
							<h4>H同学</h4>
							<p>浙江工商大学</p>
						</div>
					</div>
				</li>
				<li>
					<a href="javascript:;"></a>
					<div class="tableDv">
						<div class="res-top-img">
							<img src="../../../../static/images/case/dongjing.png" alt="广岛大学">
						</div>
						<div class="school-name">
							<h4>广岛大学</h4>
							<p>地域经济</p>
						</div>
						<div class="middle-line">
							<span></span>
							
						</div>
						<div class="student-name">
							<h4>H同学</h4>
							<p>浙江工商大学</p>
						</div>
					</div>
				</li>

			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'consultInfo',
		data () {
			return {

			}
			
		},
		mounted () {

		}
	}
</script>
<style scoped lang="less">
@import '../../../../static/stylesheet/function.less';
.consultInfo {
	background-color: #f6f7fb!important;
}
.sidebar-consultant,
.sid-teacher-results {
	border: 1px solid #e3eaee;
	background-color: #fff;
}
.sidebar-consultant {
	text-align: center;
	padding-top: 40px;
	padding-bottom: 40px;
	.sid-teacher-info {
		a {
			display: block;

			img {
				width: 114px;
				height: 114px;
				border-radius: 50%;
			}
			p {
				font-size: 16px;
				font-weight: 700;
				line-height: 56px;
			}
		}
		.sid-t-info-introduce {
			padding: 0 10px;
			text-align: center;
			font-size: 14px;
			line-height: 20px;
			padding-bottom: 13px;
			p {
				.multi-overflow(2);
				height: 40px;
			}
		}
	}
	.advisory-button {
		font-size: 0;
		a {
			display: inline-block;
			font-size: 14px;
			line-height: 30px;
			width: 104px;
			color: #fff;
			background-color: #fe7223;
			margin: 0 6px;
			vertical-align: middle;
			border-radius: 4px;
		}
	}
}
.sid-teacher-results {
	padding-top: 21px;
	padding-bottom: 33px;
	margin-top: 20px;
	.help-offer-title {
		font-size: 14px;
		line-height: 18px;
		color: #343434;
		padding-left: 16px;
	}
	ul {
		margin: 0 10px;
		li {
			position: relative;
			a {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			.tableDv {
				display: table;
				width: 100%;
				&>div {
					display: table-cell;
					vertical-align: middle;
					height: 85px;
				}
				.res-top-img {
					text-align: center;
					width: 65px;
					img {
						display: inline-block;	
						vertical-align: middle;
					}
				}
				.school-name {
					width: 105px;
					line-height: 26px;
					padding-left: 6px;
					h4 {
						font-size: 16px;
						color: #333333;
						font-weight: 700;
					}
					p {
						font-size: 14px;
						color: #7c8290;
					}
				}
				.middle-line {
					width: 1px;
					font-size: 0;
					span {
						display: block;
						width: 1px;
						height: 42px;
						background-color: #e2eaed;
					}
				}
				.student-name {
					color: #999999;
					line-height: 26px;
					padding-left: 18px;
					h4 {
						font-size: 14px;
					}
					p {
						font-size: 16px;
					}
				}
			}
		}
	}

}
</style>
