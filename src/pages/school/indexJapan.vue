<template>
	<div class="mainPart" id="indexJapan">
		<div class="bannerPart">
			<img src="../../../static/images/school/schoolBanner.jpg">
		</div>
		<ul class="selectcity container">
		    <li class="city_item" @click="tabClick()">
		        <a href="javascript:;">语言学校零中介申请</a>
		    </li>
		    <li class="city_item"  @click="tabClick()">
		        <a href="javascript:;">日本大学</a>
		    </li>
		    <!-- <li class="city_item">
		        <a href="/school/kr">韩国</a>
		    </li>
		    <li class="city_item">
		        <a href="/school/sg">新加坡</a>
		    </li> -->
		</ul>
		<index-japanyy v-if="isShow == '语言学校零中介申请'"></index-japanyy>
		<index-jp-college v-if="isShow == '日本大学'"></index-jp-college>
	</div>
</template>
<script>
	import indexJpCollege from '@/pages/school/indexJpCollege.vue';
	import indexJapanyy from '@/pages/school/indexJapanyy.vue';
	export default{
		name: 'areaChoose',
		data () {
			return {
				isShow: '语言学校零中介申请'
			}
			
		},
		components: {
			indexJpCollege,
			indexJapanyy
		},
		methods: {
			tabClick: function (e) {
				var _this = this;
				var el = event.currentTarget;
				$(el).addClass('active').siblings().removeClass('active');
				_this.isShow = $(el).find('a').text();
			}
		},
		mounted () {
			
		}	
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/schoolPublic.css';
</style>
