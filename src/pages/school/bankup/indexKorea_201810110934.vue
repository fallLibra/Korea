<template>
	<div class="mainPart">
		<div class="bannerPart">
			<img src="../../../static/images/school/schoolBanner.jpg">
		</div>
		<div class="container">
			<div class="krCheckPart">
				<div class="selectDv">
					选择地区： 
					<div>
						<select @change="chooseArea" v-model="areaSelected">

							<option v-for="item in area" :key="item.name">{{item.name}}</option>
						</select>
					</div>
					<!-- 选择城市 -->
					<!-- <div>
						<select  v-model="citySelected">
							<option v-for="city in cityList" :key="city.name">{{city.name}}</option>
						</select>
					</div> -->
				</div>

				<div class="inputDv">
					学校名字：
					<div>
						<input v-model="schoolInput" type="text" name="" placeholder="请输入学校名字" @keyup.enter="chooseArea">
						<a href="javascript:;" @click="chooseArea">查询</a>
					</div>
				</div>
			</div>
			<div class="schoolListPart">
				<p class="seekSchools">找到{{schoolTotal}}所学校</p>
				<ul>
					<li v-for="item in schoolLists" :key="item.id">

						<!-- <router-link to="/schooldetails/" tag="div"> -->
							<router-link :to="{ name: 'Schooldetails', params: { id: item.school_id }}" tag="div">
								<span><img :src="item.logo_long"></span>
							</router-link>
							<router-link :to="{ name: 'Schooldetails', params: { id: item.school_id }}" tag="div">
								<h3><span>{{item.name_cn}}</span><span>{{item.name_en}}</span></h3>
								<div class="rankDv clearfix">
									<p class="abroadRank">QS世界大学排名：<span class="num">{{item.rank_world}}</span></p>
									<p class="inlandRank"> 国内排名： <span class="num">{{item.rank_local}}</span></p>
								</div>
							</router-link>
							<div>
								<a type="button" class="applyBtn" href="javascript:;">
								官方申请通道</a>
							</div>
						</li>
					<!-- <li>
						<router-link to="/schooldetails" tag="div">
							<span><img src="../../../static/images/school/school.png"></span>
						</router-link>
						<router-link to="/schooldetails" tag="div">
							<h3><span>济州国立大学</span><span>Jeju National University</span></h3>
							<div class="rankDv clearfix">
								<p class="abroadRank">QS世界大学排名：<span class="num">暂无</span></p>
								<p class="inlandRank"> 国内排名： <span class="num">22</span></p>
							</div>
						</router-link>
						<div>
							<a type="button" class="applyBtn" href="javascript:;">
							官方申请通道</a>
						</div>
					</li> -->
				</ul>
				<div class="pageBox"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'indexKorea',
		data () {
			return {
				nav: 'school',
				schoolLists: [],
				area: [
				{
					name: "全部地区",
					city: [{name: "全部城市"}]
				},
				{
					name: "首尔特别市",
					city: [
					{name: "全部城市"},
					{name: "首尔"}
					]
				},
				{
					name: "庆尚南道",
					city: [
					{name: "全部城市"},
					{name: "马山市"},
					{name: "晋州市"},
					{name: "镇海市"},
					{name: "统营市"}
					]
				},
				{
					name: "庆尚北道",
					city: [
					{name: "全部城市"},
					{name: "浦项市"},
					{name: "庆州市"},
					{name: "金泉市"},
					{name: "安东市"},
					{name: "龟尾市"},
					{name: "庆山市"},
					{name: "昌原市"}
					]
				},
				{
					name: "全罗南道",
					city: [
					{name: "全部城市"},
					{name: "木浦市"},
					{name: "丽水市"},
					{name: "顺天市"},
					{name: "罗州市"},
					{name: "光阳市"},
					]
				},
				{
					name: "全罗北道",
					city: [
					{name: "全部城市"},
					{name: "全州市"},
					{name: "群山市"},
					{name: "益山市"},
					{name: "井邑市"}
					]
				},
				{
					name: "忠清南道",
					city: [
					{name: "全部城市"},
					{name: "天安市"},
					{name: "公州市"},
					{name: "保宁市"},
					{name: "牙山市"},
					]
				},
				{
					name: "忠清北道",
					city: [
					{name: "全部城市"},
					{name: "清州市"},
					{name: "忠州市"},
					{name: "堤川市"}
					]
				},
				{
					name: "江原道",
					city: [
					{name: "全部城市"},
					{name: "春川市"},
					{name: "原州市"},
					{name: "江陵市"},
					{name: "东海市"},
					{name: "太白市"}
					]
				},
				{
					name: "京畿道",
					city: [
					{name: "全部城市"},
					{name: "水原市"},
					{name: "城南市"},
					{name: "议政府市"},
					{name: "安养市"},
					{name: "富川市"},
					{name: "光明市"},
					{name: "平泽市"},
					{name: "东豆川市"}
					]
				},
				{
					name: "蔚山广域市",
					city: [
					{name: "全部城市"},
					{name: "蔚山"}
					]
				},
				{
					name: "大田广域市",
					city: [
					{name: "全部城市"},
					{name: "大田"},
					]
				},
				{
					name: "光州广域市",
					city: [
					{name: "全部城市"},
					{name: "光州"}
					]
				},
				{
					name: "仁川广域市",
					city: [
					{name: "全部城市"},
					{name: "仁川"}
					]
				},
				{
					name: "大邱广域市",
					city: [
					{name: "全部城市"},
					{name: "大邱"}
					]
				},
				{
					name: "釜山广域市",
					city: [
					{name: "全部城市"},
					{name: "釜山"}
					]
				},
				{
					name: "济州特别自治道",
					city: [
					{name: "全部城市"},
					{name: "济州市"}
					]
				}
				], 
				schoolInput: '',
				schoolTotal: 0,
				pageCount: 0,
				areaSelected: '全部地区',
				citySelected: '全部城市',
				cityList: [],
				request: {
					page: 1,
					limit: 10,
				}
			}
		},
		methods: {
			initCity () {
				var _this = this;
				var _areaSelected = _this.areaSelected
				for (var i = 0; i < _this.area.length; i++) {
					if(_this.area[i].name == _areaSelected) {
						_this.cityList = _this.area[i].city;
						console.log(_this.cityList)
					}
				}
			},
			getData () {
				var _this = this;
				var _url = '';
				var	_data = {};
				var _address = _this.areaSelected == '全部地区'?'':_this.areaSelected;

					_url = "http://manage.xiaoying.net/getkoreaschool";
					_data = {
						schoolname: _this.schoolInput,
						address: _address,
						page: _this.request.page,
						limit: _this.request.limit
					};
				/*
					//切换城市
					var _areaSelected = _this.areaSelected;
					for (var i = 0; i < _this.area.length; i++) {
						if(_this.area[i].name == _areaSelected) {
							_this.cityList = _this.area[i].city;
							console.log(_this.cityList)
						}
					}
					*/
				$.ajax({
					url: _url,
					data: _data,
					type:"POST",
					dataType: "json",
					success: function (res) {
					// console.log(3333,_this.areaSelected)
						if (res.status) {
							_this.schoolLists = res.data;
							_this.schoolTotal= res.count;
							_this.pageCount = parseInt(_this.schoolTotal/_this.request.limit) + 1;
							$('.pageBox').pagination({
								pageCount: _this.pageCount,
								showData: _this.request.limit,
								current:  _this.request.page,
								homePage: '首页',
								endPage: '末页',
								isHide: true,
								count: 2,
								activeCls: 'active',
								coping: true,
								callback: function (api) {
									var getCurrent = api.getCurrent();
									var total = api.getPageCount();
									if (getCurrent>=1 && getCurrent <= total) {
										_this.request.page = api.getCurrent();
										// console.log(_this.request.page);
										_this.getData();
									}
								}
							});
						}
					}
				})
			},
			chooseArea() {
				var _this = this;
				_this.request.page = 1;
				_this.getData();
			}

		},
		mounted () {
				var _this = this;

				_this.getData();

			/*
			//初始化城市
			_this.initCity()
			*/
			
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/school.css';
</style>
