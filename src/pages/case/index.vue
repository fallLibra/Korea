<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="bannerPart">
				
			</div>
			<div class="container">
				<div class="search-container">
					<div class="search-country"  v-for="item in choose" :key="item.name">
						<ul class="list-inline">
							<li>{{item.name}}：</li>
							<li class="searchInput" v-if="item.hasSearchInput">
								<input v-model="searchCasesByschoolName" type="text" id="searchCasesByschoolName" value="" placeholder="按录取大学名称搜索">
								<button type="button" @click="toSearch(searchCasesByschoolName)">搜索</button>
							</li>
							<li v-for= "itemType in item.type"  :data-type="item.dataType" :key="itemType.name" @click="addtag(itemType.name,$event)">
								<a v-if="itemType.name=='不限'" class="active" href="javascript:;">{{itemType.name}}</a>
								<a v-else href="javascript:;">{{itemType.name}}</a>
							</li>
						</ul>
					</div>
					
				</div>
				<div class="search-result">
					<div class="result-tips">
						<div class="select-button">
							<ul class="list-inline">
								<li class="alreadyChoose">已选条件 :</li>
								<li @click="deltag" v-if="haschoose.receiveSchool">{{haschoose.receiveSchool}}<a href="javascript:;">X</a></li>
								<li @click="deltag" v-if="haschoose.receiveYear">{{haschoose.receiveYear}}<a href="javascript:;">X</a></li>
								<li @click="deltag" v-if="haschoose.receiveType">{{haschoose.receiveType}}<a href="javascript:;">X</a></li>
								<li @click="deltag" v-if="haschoose.hotTag">{{haschoose.hotTag}}<a href="javascript:;">X</a></li>
								<li @click="deltag" v-if="haschoose.profession">{{haschoose.profession}}<a href="javascript:;">X</a></li>
							</ul>
							<div class="input-group"> 
								<input type="text" value="" class="form-control consultant-search-input">
								<button class="btn btn-default consultant-search-btn" type="submit" id="btn-search"><img src="../../../static/images/case/search.png"></button>
							</div>
						</div>
					</div>
				</div>
				<div class="searchContent clearfix">
					<div class="leftPart">
						<ul class="clearfix searchCaseList">
							<li>
								<router-link to="/Casedetails">
									<div class="imgDv">
										<img src="../../../static/images/school/school.png">
									</div>
									<h4>首尔大学</h4>
									<div class="caseDes">
										<h5>李同学</h5>
										<ul>
											<li>
												录取专业：建筑设计  本科
											</li>
											<li>
												毕业院校：浙江大学计算机
											</li>
											<li>CPA：/4托福：托福：102/120</li>
										</ul>
									</div>
								</router-link>
							</li>
							
							<li>
								<router-link to="/Casedetails">
									<div class="imgDv">
										<img src="../../../static/images/school/school.png">
									</div>
									<h4>首尔大学</h4>
									<div class="caseDes">
										<h5>李同学</h5>
										<ul>
											<li>
												录取专业：建筑设计  本科
											</li>
											<li>
												毕业院校：浙江大学计算机
											</li>
											<li>CPA：/4托福：托福：102/120</li>
										</ul>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/Casedetails">
									<div class="imgDv">
										<img src="../../../static/images/school/school.png">
									</div>
									<h4>首尔大学</h4>
									<div class="caseDes">
										<h5>李同学</h5>
										<ul>
											<li>
												录取专业：建筑设计  本科
											</li>
											<li>
												毕业院校：浙江大学计算机
											</li>
											<li>CPA：/4托福：托福：102/120</li>
										</ul>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/Casedetails">
									<div class="imgDv">
										<img src="../../../static/images/school/school.png">
									</div>
									<h4>首尔大学</h4>
									<div class="caseDes">
										<h5>李同学</h5>
										<ul>
											<li>
												录取专业：建筑设计  本科
											</li>
											<li>
												毕业院校：浙江大学计算机
											</li>
											<li>CPA：/4托福：托福：102/120</li>
										</ul>
									</div>
								</router-link>
							</li>
							
						</ul>
					</div>
					<div class="righPart">
						<div class="applyForm">
							<apply-form :applyFormBanner="applyFormBanner"></apply-form>
							<recommend-consult></recommend-consult>

						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import applyForm from '@/pages/case/components/applyForm.vue';
	import recommendConsult from '@/pages/case/components/recommendConsult.vue';
	export default{
		name: 'Case',
		data () {
			return {
				nav: 'case',
				applyFormBanner: true,
				searchCasesByschoolName: '',
				choose: [
					{
						name: "录取大学",
						hasSearchInput: true,
						dataType: 'receiveSchool',
						type: [{
							name: "不限"
						}, {
							name: "东京大学"
						}, {
							name: "京都大学"
						}, {
							name: "北海道大学"
						}, {
							name: "大阪大学"
						}, {
							name: "一桥大学"
						}, {
							name: "广岛大学"
						}, {
							name: "名古屋大学"
						}, {
							name: "东北大学"
						}, {
							name: "九州大学"
						}, {
							name: "筑波大学"
						}, {
							name: "东京工业"
						}, {
							name: "大学神户大学"
						}, {
							name: "千叶大学"
						}, {
							name: "庆应义塾大学"
						}, {
							name: "早稻田大学"
						}, {
							name: "明治大学"
						}, {
							name: "立命馆大学"
						}]
					},{
						name: "录取年份",
						hasSearchInput: false,
						dataType: 'receiveYear',
						type: [{
							name: "不限"
						}, {
							name: "2000-2012"
						}, {
							name: "2013"
						}, {
							name: "2014"
						}, {
							name: "2015"
						}, {
							name: "2016"
						}, {
							name: "2017"
						}]
					}, {
						name: "录取类型",
						hasSearchInput: false,
						dataType: 'receiveType',
						type: [{
							name: "不限"
						}, {
							name: "语言学校"
						}, {
							name: "高中/专门学校"
						}, {
							name: "本科"
						}, {
							name: "大学别科/预科"
						}, {
							name: "大学院修士"
						}]
					}, {
						name: "热门标签",
						hasSearchInput: false,
						dataType: 'hotTag',
						type: [{
							name: "不限"
						}, {
							name: "跨专业申请"
						}, {
							name: "零中介"
						}, {
							name: "专升本硕"
						}, {
							name: "SGU/G30英文项目"
						}]
					}, {
						name: "专业分类",
						hasSearchInput: false,
						dataType: 'profession',
						type: [{
							name: "不限"
						}, {
							name: "日本语"
						}, {
							name: "经济金融"
						}, {
							name: "经营商科"
						}, {
							name: "社会学"
						}, {
							name: "机械工程"
						}, {
							name: "建筑设计"
						}, {
							name: "视觉传达"
						}, {
							name: "理工类"
						}, {
							name: "融合学科"
						}, {
							name: "艺术"
						}, {
							name: "情报理工"
						}, {
							name: "教育"
						}]
					}
				],
				haschoose: {
					receiveSchool: '',
					receiveYear: '',
					receiveType: '',
					hotTag: '',
					profession: ''
				},
				page: 1,
				rows: 10
			}	
		},
		computed: {

		},
		components: {
			headerTop,
			applyForm,
			recommendConsult
		},
		methods: {
			addtag(item,event) {
				var _this = this;
				var el = event.currentTarget;
				var _type = $(el).data('type');

				$(el).siblings().find('a').removeClass('active');
				$(el).find('a').addClass('active');
				if(_type == 'receiveSchool') {
					_this.haschoose.receiveSchool = item=="不限"?'':item;
				}
				if(_type == 'receiveYear') {
					_this.haschoose.receiveYear = item=="不限"?'':item;
				}
				if(_type == 'receiveType') {
					_this.haschoose.receiveType = item=="不限"?'':item;
				}
				if(_type == 'hotTag') {
					_this.haschoose.hotTag = item=="不限"?'':item;
				}
				if(_type == 'profession') {
					_this.haschoose.profession = item=="不限"?'':item;
				}

			},
			deltag(event) {
				var _this = this;
				var el =  event.currentTarget;
				$(el).remove();
			},
			toSearch(searchCasesByschoolName) {
				console.log(searchCasesByschoolName)
			},
			getData() {
				
			}

		},
		mounted () {
			var _this = this;
			_this.getData();
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/case.css';

</style>
