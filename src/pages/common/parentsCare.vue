<template>
	<div>
		<div class="parentsCare">
			<h4>家长关心</h4>
			<ul class="careQuestionList clearfix">
				<li v-for="n in parentsCare">
					<a href="javascript:;">
						<div class="iconDv">
							<img :src="n.imgSrc">
						</div>
						<p>{{n.title}}</p>
					</a>
				</li>
			</ul>
		</div>	
	</div>
</template>
<script>
	export default{
		name: 'parentsCare',
		data () {
			return {
				parentsCare: [
					{
						id: 1,
						title: "为何选择小莺",
						imgSrc: "../../../static/images/news/why_choose_icon.png"
					},
					{
						id: 2,
						title: "赴日留学费用",
						imgSrc: "../../../static/images/news/liuxue_free_icon.png"
					},
					{
						id: 3,
						title: "在日如何工作",
						imgSrc: "../../../static/images/news/how_work_icon.png"
					},
					{
						id: 4,
						title: "日本升学攻略",
						imgSrc: "../../../static/images/news/highter_school_icon.png"
					},
					{
						id: 5,
						title: "赴日调研要求",
						imgSrc: "../../../static/images/news/survey_require_icon.png"
					},
					{
						id: 6,
						title: "语言学校要求",
						imgSrc: "../../../static/images/news/language_school_icon.png"
					},
					{
						id: 7,
						title: "日常生活常识",
						imgSrc: "../../../static/images/news/life_icon.png"
					},
					{
						id: 8,
						title: "出国行前准备",
						imgSrc: "../../../static/images/news/befor_prepare_icon.png"
					}

				]
			}
			
		},
		
		mounted () {

		}
	}
</script>
<style scoped lang="less">
@import url("../../../static/stylesheet/function.less");
.parentsCare {
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
    .careQuestionList {
    	padding-top: 7px;
    	li {
    		float: left;
    		width: 50%;
    		text-align: center;
    		font-size: 14px;
    		a {
    			display: block;
    			.iconDv {
    				line-height: 68px;
    				img {
    					vertical-align: middle;
    					margin-top: -2px;
    				}
    			}
    			p {
    				font-size: 14px;
    				line-height: 30px;
    				color: #3a3a3a;
    				padding: 0 10px;
    				.single-overflow();
    			}
    		}
    	}
    }
}
</style>
