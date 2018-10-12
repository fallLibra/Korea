<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="bannerPart">
				
			</div>
			<div class="newsNavPart">
				<ul class="container newsNavUl">
					<li @click="tabNewsNav" data-cateid="newsNavAll" ><a href="javascript:;">全部</a></li>
					<li v-for="n in newsNav" :data-cateid="n.id" :key = "n.id" @click="tabNewsNav">
						<a href="javascriot:;">{{n.name}}</a>
					</li>
				</ul>
			</div>
			<div class="container clearfix contentPart">
				<div class="leftPart">
					<div class="newsContPart">
						<ul class="secNavList">
							<li @click="tabsecNav" data-cateid="secNavAll"><a href="javascript:;">全部</a></li>

							<li v-for="n in newsSecNav" @click="tabsecNav" :data-cateid="n.id" :key = "n.id"><a href="javascript:;">{{n.name}}</a></li>
						</ul>
						<ul class="newsListUl">
							<li v-for = "item in newsList" :key="item.id">
								<div class="imgDv">
									<router-link :to="{name: 'Newsdetails',params: {id: item.id}}">
										<img :src="item.picture" :alt="item.title">
									</router-link>
								</div>
								<div class="contDv">
									<h4>
										<router-link :to="{name: 'Newsdetails',params: {id: item.id}}">{{item.title}}</router-link>
									</h4>
									<p class="time"><span></span>{{item.publishedtime}}</p>
									<p class="newsDes">
										<router-link :to="{name: 'Newsdetails',params: {id: item.id}}" v-html="item.des"></router-link></p>
									<div class="btnPart">
										<router-link :to="{name: 'Newsdetails',params: {id: item.id}}">查看详情</router-link>
										<ul class="clearfix">
											<li>
												<span></span>{{item.upsnum}}
											</li>
											<li>
												<span></span>{{item.hits}}
											</li>
										</ul>
									</div>
								</div>
							</li>
							<!-- <li>
								<div class="imgDv">
									<a href="javascript:;">
										<img src="../../../static/images/news/img.jpg">
									</a>
								</div>
								<div class="contDv">
									<h4><a href="javascript:;">日本留学：金泽大学留学费用</a></h4>
									<p class="time"><span></span>2018-08-11</p>
									<p class="newsDes"><a href="javascript:;">位于丰岛区池袋的千代田国际学院，看就知道地理位置特别好啦。周围还有立教大学、东京音乐大学、大正...</a></p>
									<div class="btnPart">
										<a href="javascript:;">查看详情</a>
										<ul class="clearfix">
											<li>
												<span class=""></span>18
											</li>
											<li>
												<span class=""></span>18
											</li>
										</ul>
									</div>
								</div>
							</li> -->
						</ul>
					</div>
					<div class="pageBox"></div>
				</div>
				<div class="rightPart">
					<hot-activities></hot-activities>
					<hot-flag></hot-flag>
					<parents-care></parents-care>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import headerTop from '@/pages/common/header.vue';
	import hotActivities from '@/pages/common/hotActivities.vue';
	import parentsCare from '@/pages/common/parentsCare.vue';
	import hotFlag from '@/pages/common/hotFlag.vue';
	import {mapGetters} from 'vuex'
	export default{
		name: 'News',
		data () {
			return {
				nav: 'news',
				newsNav: [],
				newsSecNav: [],
				newsList: [],
				request: {
					page: 1,
					limit: 10,
					cateidSecNav: '',
					cateid: ''
				},
				newsTotal: 0 ,//资讯总数,
				countryId: 0
			}
		},
		components: {
			headerTop,
			hotActivities,
			parentsCare,
			hotFlag
		},
		computed: {
			...mapGetters({
				currentCountry: 'currentCountry'
			})
		},
		methods: {
			getNewsNavData (id) {
				var _this = this;
				var _id = id;
				console.log('localStorage.cateid',localStorage.cateid,localStorage.cateidSec);

				$.ajax({
					url: "http://manage.xiaoying.net/article/catesearch?countryid=" + _id,
					type:"GET",
					success: function(res) {
						_this.newsNav = res;
						_this.$nextTick(function () {
							if (localStorage.cateid) {
								$('.newsNavUl li').each(function () {
									if($(this).data('cateid') == localStorage.cateid) {
										$(this).addClass('active').siblings().removeClass('active');
									}
								})
								_this.request.cateidSecNav = localStorage.cateid;
								_this.getSecNavData(_id);
							} else if (localStorage.cateid == '') {
								$('.newsNavUl li').eq(0).addClass('active').siblings().removeClass('active');
								$('.secNavList li').eq(0).addClass('active').siblings().removeClass('active');
							}
						})
					}
				})
			},
			getSecNavData (id) {
				var _this = this;
				var _id = id;
				$.ajax({
					url: "http://manage.xiaoying.net/article/catesearch?cateid=3"+"&countryid=" + _id,
					type:"GET",
					success: function(res) {
						_this.newsSecNav= res;
						_this.$nextTick(function () {
							if (localStorage.cateidSec) {
								$('.secNavList li').each(function () {
									if($(this).data('cateid') == localStorage.cateidSec) {
										$(this).addClass('active').siblings().removeClass('active');
									}
								})
								_this.request.cateid = localStorage.cateidSec;

							} else if(localStorage.cateidSec == '') {
								$('.secNavList li').eq(0).addClass('active').siblings().removeClass('active');
								_this.request.cateid = localStorage.cateid;
							}
							_this.getNewListData(_id);
						})
					}
				})
			},
			getNewListData (id) {
				var _this = this;
				var _id = id;
				$.ajax({
					url: "http://manage.xiaoying.net/article/contentssearch?page="+_this.request.page + "&limit=" +_this.request.limit+"&cateid="+ _this.request.cateid + "&countryid=" + _id,
					type:"GET",
					success: function(res) {
						var array = res.data;
						// 'http://xiaoying.net'+item.picture
						for (var i = 0; i < array.length; i++) {
							if(array[i].picture.indexOf('http') > -1) {
								array[i].picture = array[i].picture;
							}else if(array[i].picture == '') {
								array[i].picture = '../../../static/images/news/img.jpg'
							} else {
								array[i].picture = 'http://xiaoying.net'+ array[i].picture;
							}
							array[i].publishedtime = _this.timestampToTime(array[i].publishedtime);
						}
						_this.newsList = array;

						_this.newsTotal= res.count;
						_this.pageCount =  _this.newsTotal%_this.request.limit?(parseInt(_this.newsTotal/_this.request.limit) + 1 ):parseInt(_this.newsTotal/_this.request.limit);

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
									localStorage.page = api.getCurrent();
									_this.request.page = localStorage.page;
									console.log(_this.request.page);
									_this.getNewListData(_id);
								}
							}
						});
					}
				})
			},
			tabNewsNav (event) {
				var _this= this;
				var el =  event.currentTarget;

				$(el).addClass('active').siblings().removeClass('active');
				_this.request.page = 1;
				localStorage.page = 1;
				if ($(el).data('cateid') != 'newsNavAll') {
					_this.request.cateidSecNav = $(el).data('cateid');

					_this.request.cateid = $(el).data('cateid');
					$('.secNavList li').eq(0).addClass('active').siblings().removeClass('active');

					localStorage.cateidSec = '';
					localStorage.cateid = $(el).data('cateid');

					_this.getSecNavData(_this.countryId);


				} else {
					
					_this.request.cateid = '';
					localStorage.cateid = '';
					_this.newsSecNav = '';
					_this.getNewListData(_this.countryId);
				}
				
			},
			tabsecNav(event) {
				var _this= this;
				var el =  event.currentTarget;
				$(el).addClass('active').siblings().removeClass('active');
				_this.request.page = 1;
				localStorage.page = 1;
				if($(el).data('cateid') != 'secNavAll') {
					_this.request.cateid = $(el).data('cateid');
					localStorage.cateidSec = $(el).data('cateid');
					_this.getNewListData(_this.countryId);
				} else {
					//点击全部
					console.log(2)
					_this.request.cateid = localStorage.cateid;
					localStorage.cateidSec = '';
					_this.getNewListData(_this.countryId);
				}

			},
			timestampToTime (timestamp) {
		        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        var Y = date.getFullYear() + '-';
		        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		        var D = date.getDate() + ' ';
		        var h = date.getHours() + ':';
		        var m = date.getMinutes() + ':';
		        var s = date.getSeconds();
		        return Y+M+D;
		        // return Y+M+D+h+m+s;
		    },
		    getCountry() {
				var _this = this;
				$.ajax({
					url: "http://manage.xiaoying.net/getcountry",
					type:"GET",
					success: function (res) {
						if(res.status) {
							for (var i = 0; i < res.data.length; i++) {
								if (res.data[i].name == _this.currentCountry) {
									_this.countryId = res.data[i].id;
									console.log('apply_getCountry',_this.countryId);
1
									//初始化一级分类
									_this.getNewsNavData(_this.countryId);
									// 初始化课程列表
									_this.getNewListData(_this.countryId);

									// _this.getData(_this.countryId);

								}
							}
						}
					}
				})
			}
		},
		mounted () {
			var _this = this;
			_this.request.page = localStorage.page?localStorage.page:1;
			_this.getCountry();
			/*//初始化一级分类
			_this.getNewsNavData();
			// 初始化课程列表
			_this.getNewListData();*/

		},
		beforeRouteLeave (to, from, next) {
		    // 导航离开该组件的对应路由时调用
		    // 可以访问组件实例 `this`
		    localStorage.cateid = '';
		    localStorage.cateidSec = '';
		    localStorage.page = '';
		    next();
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/news.css';

</style>
