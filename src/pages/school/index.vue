<template>
	<div>
		<header-top :nav ="nav"></header-top>

		<index-korea v-if="currentCountry == '韩国'"></index-korea>
		<!-- <index-japanyy v-if="currentCountry == '日本'"></index-japanyy> -->
		<index-japan v-if="currentCountry == '日本'"></index-japan>

	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import areaChoose from '@/pages/school/components/areaChoose.vue';
	import indexKorea from '@/pages/school/indexKorea.vue';
	import indexJapan from '@/pages/school/indexJapan.vue';
	

	import {mapGetters} from 'vuex'
	// import pagination from '../../../static/plugins/jquery.pagination.js';
	export default{
		name: 'School',
		
		data () {
			return {
				nav: 'school',
				
			}
		},
		components: {
			headerTop,
			areaChoose,
			indexKorea,
			indexJapan
		},
		computed: {
			...mapGetters({
				currentCountry: 'currentCountry'
			})
		},
		
	}
</script>
<style scoped lang="less">


</style>
