<template>
	<div>
		<div class="school-common">
			<div class="students">
				<p>
					已申请该校的同学<span>（275个）</span>
					<!--<em><a onclick="baidu('向留学前辈请教', 首尔大学);" href="http://www.jiemo.net/Ask/index.html" target="_blank"><i class="iconfont"></i><b>向前辈请教</b></a></em>-->
				</p>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student01_f99b2689.png" alt="">张同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student02_9fc4c8d6.png" alt="">王同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student03_a9da0e94.png" alt="">李同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student04_fbd808fb.png" alt="">赵同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student05_0107d6ee.png" alt="">于同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student06_e9529fb2.png" alt="">孙同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student07_6869fed3.png" alt="">周同学</a>
				</strong>
				<strong>
					<a><img src="http://static.jiemo.net/proc/School/Public/Images/cinfo/student08_457fc2c1.png" alt="">陈同学</a>
				</strong>
				<a class="content-predecessor" href="javascript:;" target="_blank"><i class="iconfont"></i><b>向前辈请教</b></a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'applyStudents',
		data () {
			return {

			}
			
		},
		mounted () {

		}
	}
</script>
<style scoped lang="less">
.school-common {
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 10px 10px 5px;
	// width: 320px;
	border: 1px #E5E5E5 solid;
	background: #FCFCFC
}

.school-common p {
	padding-bottom: 10px;
	color: #333;
	font-size: 14px
}

.school-common p span {
	font-size: 14px;
	color: #01a4e5
}

.school-common p em {
	float: right;
	background: #01a4e5;
	padding: 5px 0;
	height: 24px;
	display: inline-block
}

.school-common p em a {
	line-height: 22px;
	display: inline-block;
	font-size: 12px;
	font-weight: bold;
	font-style: normal;
	color: #fff;
	vertical-align: middle
}

.school-common .content-predecessor {
	line-height: 22px;
	display: inline-block;
	font-size: 12px;
	font-weight: bold;
	font-style: normal;
	color: #fff;
	vertical-align: middle;
	background: #2196f3;
	padding-right: 10px;
	margin-bottom: 2px
}

.school-common p em i {
	display: inline-block;
	margin-left: 5px;
	margin-right: 5px;
	font-size: 20px;
	font-weight: 100;
	vertical-align: top;
	line-height: 24px
}

.school-common .content-predecessor i {
	display: inline-block;
	margin-left: 5px;
	margin-right: 5px;
	font-size: 20px;
	font-weight: 100;
	vertical-align: top;
	line-height: 24px
}

.school-common p em b {
	display: inline-block;
	line-height: 24px
}

.school-common .content-predecessor b {
	display: inline-block;
	line-height: 24px
}

.school-common .students>strong {
	position: relative;
	display: inline-block;
	width: 23.8%;
	margin-bottom: 5px;
	text-align: center;
	font-weight: normal;
	font-size: 14px;
	color: #01a4e5
}

.school-common .students>strong img {
	display: block;
	width: 66px;
	height: 66px;
	padding: 1px;
	border: none;
	margin: 0 auto
}

.school-common .students>strong a {
	color: #01a4e5
}

.school-common .students>strong a:hover span.tip-area {
	visibility: visible;
	opacity: 1;
	top: -80px
}

.school-common .students>strong .tip-area {
	background: #01A4E5;
	padding: 5px 8px;
	min-width: 184px;
	position: absolute;
	top: -70px;
	left: -70px;
	color: #FFF;
	text-align: left;
	z-index: 999;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: visibility 0s,top 1s,opacity 0.5s linear;
	-moz-transition: visibility 0s,top 1s,opacity 0.5s linear;
	-o-transition: visibility 0s,top 1s,opacity 0.5s linear;
	transition: visibility 0s,top 1s,opacity 0.5s linear
}

.school-common .students>strong .tip-area small {
	display: block
}

.school-common .wwcity {
	border-bottom: solid 1px #E5E5E5;
	padding-bottom: 10px;
	padding-top: 10px;
	overflow: hidden
}

.school-common .wwcity dl:first-child {
	width: 30%
}

.school-common .wwcity dl:last-child {
	width: 70%
}

.school-common .wwcity:first-of-type {
	padding-top: 0
}

.school-common .wwcity:last-child {
	border-bottom: none
}

.school-common dl {
	float: left
}

.school-common dl dt {
	padding-left: 8px;
	font-size: 16px;
	font-weight: normal;
	color: #333
}

.school-common dl dt a:hover {
	color: #01a4e5
}

.school-common dl dt a:hover span {
	color: #999
}

.school-common dl dt span,.school-common dl dd p {
	display: block;
	color: #999;
	font-size: 12px;
	font-weight: normal;
	word-wrap: break-word;
	word-break: normal
}

.school-common dl dd img {
	width: 86px;
	height: 64px;
	padding: 1px;
	border: 1px #E5E5E5 solid
}

.school-common dl dd {
	width: 100%
}

.school-common dl dd p {
	padding-left: 8px;
	padding-bottom: 0
}

.school-common dl dd p span {
	color: #01a4e5
}

.school-common dl dd strong span {
	color: #f39800
}

.school-common .more-tag {
	padding: 15px 0 10px 0;
	margin: 0 auto
}

</style>
