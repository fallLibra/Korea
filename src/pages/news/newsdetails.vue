<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="mainPart">
			<div class="bannerPart">
				
			</div>
			<div class="newsNavPart">
				<ul class="container newsNavUl">
					<li @click="clickNewsNav" data-cateid="newsNavAll"><a href="javascript:;">全部</a></li>
					<li v-for="n in newsNav" @click="clickNewsNav" :data-cateid="n.id" :key = "n.id">
						<a href="javascriot:;">{{n.name}}</a>
					</li>
				</ul>
			</div>
			<div class="container clearfix contentPart">
				<div class="leftPart">
					<div class="newsContPart">
						<div class="newsdetailsContPart">
							<h4 class="currentAddress">您当前的位置：<router-link to="/News">留学资讯</router-link>>><router-link to="/News">全部</router-link>>><span>正文详情</span></h4>
							<div class="detailsTitlePart">
								<h3 class="detailsTitle">{{newsDetailInfo.title}}</h3>
							</div>
							<div class="newsSourcePart clearfix">
								<ul class="sourceUl clearfix">
									<li class="sourse">{{newsDetailInfo.source}}</li>
									<li class="editor">xiaoying</li>
									<li class="time">{{newsDetailInfo.publishedtime}}</li>
								</ul>
								<ul class="eyeUl clearfix">
									<li class="thumb" @click="clickThumb">
										<span></span>{{vote}}
									</li>
									<li class="eye">
										<span></span>{{reads}}
									</li>
									<!-- <li class="share">
										<span></span>18
									</li> -->
								</ul>
							</div>
							<div class="detailsContPart">
								<p v-html="newsDetailInfo.body">{{}}</p>
								<div class="thumbPart"  @click="clickThumb">
									<div>
										<img src="../../../static/images/news/thumb.png">
										<p>赞</p>
									</div>
								</div>
								<p class="likeNum">{{vote}}人赞过</p>
							</div>
							<div class="labelPart">
								<div class="labelItem clearfix">
									<div class="labelTitle">你关心的标签: </div>
									<div class="labelUl">
										<ul class="clearfix">
											<li><a href="javascript:;">日本留学面试问题</a></li>
											<li><a href="javascript:;">东京大学</a></li>
											<li><a href="javascript:;">早稻田大学</a></li>
											<li><a href="javascript:;">日本大学排名</a></li>
											<li><a href="javascript:;">日本大学排名</a></li>
										</ul>
									</div>
								</div>
								<div class="labelItem clearfix">
									<div class="labelTitle">我关心的标签: </div>
									<div class="labelUl">
										<ul class="clearfix">
											<li><a href="javascript:;">日本留学面试问题</a></li>
											<li><a href="javascript:;">东京大学</a></li>
											<li><a href="javascript:;">早稻田大学</a></li>
											<li><a href="javascript:;">日本大学排名</a></li>
											<li><a href="javascript:;">日本大学排名</a></li>
											<li><a href="javascript:;">日本大学排名</a></li>
											<li><a href="javascript:;">日本大学排名</a></li>
										</ul>
									</div>
								</div>
							</div>
							<p class="notice">声明：本站文章标明 [原创] 系本站原创内容，如需转载请注明 [来源于小莺出国 www.xiao ying.net] 。任何单位或个人认为本站内容涉嫌侵犯其合法权益，请及时向本站书面反馈并提供证明，本站将会尽快移除被控侵权内容。</p>
						</div>

					</div>
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
	export default{
		name: 'Newsdetails',
		data () {
			return {
				nav: 'news',
				newsNav: [],
				newsDetailInfo: {},
				vote: 0, //点赞数
				reads: 0 //阅读量
				
			}
		},
		components: {
			headerTop,
			hotActivities,
			parentsCare,
			hotFlag
		},
		methods: {
			getNewsNavData () {
				var _this = this;
				console.log('localStorage.cateid',localStorage.cateid,localStorage.cateidSec);

				$.ajax({
					url: "http://manage.xiaoying.net/article/catesearch",
					type:"GET",
					success: function(res) {
						_this.newsNav = res;
					}
				})
			},
			clickNewsNav(event) {
				var _this= this;
				var el =  event.currentTarget;
				if ($(el).data('cateid') != 'newsNavAll') {
					localStorage.cateid = $(el).data('cateid');
				} else {
					localStorage.cateid = '';
				}
				localStorage.cateidSec = '';
				console.log($(el).data('cateid'))
				_this.$router.push({ path: '/news' });
			},
			
			getData() {
				var _this = this;
				var id = _this.$route.params.id;
				console.log(id)
				$.ajax({
					url:"http://manage.xiaoying.net/article/detailsearch?id=" + id,
					type:"GET",
					success: function (res) {
						if (res.status) {
							var obj = res.data;
							obj.source = obj.source?obj.source:'网络';
							obj.publishedtime = _this.timestampToTime(obj.publishedtime);
							_this.newsDetailInfo = obj;
							_this.vote = obj.upsnum;
							_this.reads = obj.hits;
						}
					}
				})
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
		    clickThumb () {
		    	var _this = this;
				var id = _this.$route.params.id;
		    	$.ajax({
					url:"http://manage.xiaoying.net/vote?id=" + id,
					type:"GET",
					success: function (res) {
						if (res.status) {
							_this.vote++
						}else {
							console.log(res.msg);
						}
					},
					error: function (res) {
						console.log(res.msg);
					}
				})
		    },
		    setReads() {
		    	var _this = this;
				var id = _this.$route.params.id;
				$.ajax({
					url:"http://manage.xiaoying.net/reads",
					type:"POST",
					data: {
						id: id
					},
					dataType: 'json',
					success: function (res) {
						if (res.status) {
							_this.reads++
						}else {
							console.log(res.msg);
						}
					},
					error: function (res) {
						console.log(res.msg);
					}
				})
		    }
		},
		mounted () {
			var _this = this;
			_this.getNewsNavData();
			_this.getData();
			// _this.setReads();
			
		}
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/newsdetails.css';

</style>
