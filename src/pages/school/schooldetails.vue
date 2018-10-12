<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<!-- <div class="mainPart"> -->
			<details-kr v-if="currentCountry == '韩国'"></details-kr>
			
			<schooldetailsjpyy v-if="currentCountry == '日本'"></schooldetailsjpyy>
		<!-- </div> -->
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';

	import headerTop from '@/pages/common/header.vue';
	import detailsKr from '@/pages/school/detailsKr.vue';
	import schooldetailsjpyy from '@/pages/school/schooldetailsjpyy.vue';

	import quickConsult from '@/pages/school/components/quickConsult.vue';
	import applyStudents from '@/pages/school/components/applyStudents.vue';
	import sameCity from '@/pages/school/components/sameCity.vue';
	export default{
		name: 'Schooldetails',
		data () {
			return {
				nav: 'school',
				schoolId: ''
			}
			
		},
		computed: {
			...mapGetters({
				currentCountry: 'currentCountry'
			})
		},
		components: {
			headerTop,
			detailsKr,
			schooldetailsjpyy,

			quickConsult,
			applyStudents,
			sameCity
		},
		mounted () {
			var _this = this;
		}
	}
</script>
<style scoped lang="less">
// @import '../../../static/stylesheet/pages/schooldetails.css';
</style>
