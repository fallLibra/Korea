<template>
	<div class="mainPart" id="indexKorea">
		<div class="bannerPart">
			<img src="../../../static/images/school/schoolBanner.jpg">
		</div>
		<div class="container choosepart">
            <!-- <div class="lineDv clearfix">
                <span class="s_title">热门排行：</span>
                <ul class="listul">
                    <li class="item" v-for="n in 5">规模较大的语言学校</li>
                </ul>
            </div> -->
            <div class="lineDv choose clearfix">
                <span class="s_title">学校名称：</span>
                <div class="inputDv">
                    <input type="text" placeholder="请输入学校名称" v-model="request.schoolname" @keyup.13="change('schoolname',request.schoolname)">
                    <i class="search" @click="change('schoolname',request.schoolname)"></i>
                </div>
            </div>
            <div class="lineDv clearfix">
                <span class="s_title">选择地区：</span>
                <select name="" id="area" class="select2" width="290">
                    <option value="">全部</option>
                    <option value="首尔特别市">首尔特别市</option>
                    <option value="庆尚南道">庆尚南道</option>
                    <option value="庆尚北道">庆尚北道</option>
                    <option value="全罗南道">全罗南道</option>
                    <option value="全罗北道">全罗北道</option>
                    <option value="忠清南道">忠清南道</option>
                    <option value="忠清北道">忠清北道</option>
                    <option value="江原道">江原道</option>
                    <option value="京畿道">京畿道</option>
                    <option value="蔚山广域市">蔚山广域市</option>
                    <option value="大田广域市">大田广域市</option>
                    <option value="光州广域市">光州广域市</option>
                    <option value="仁川广域市">仁川广域市</option>
                    <option value="大邱广域市">大邱广域市</option>
                    <option value="釜山广域市">釜山广域市</option>
                    <option value="济州特别自治道">济州特别自治道</option>
                </select>
            </div>
        </div>
        <div class="resultPart container">
            <h3 class="search_title">共找到<font>{{count}}</font>所学校</h3>
            <ul class="schoolList">
                <li class="item_school clearfix" v-for="n in lists">
                    <router-link class="imgDv left" :to="{ name: 'Schooldetails', params: { id: n.school_id }}">
                        <img :src="'http://manage.xiaoying.net/'+n.logo_long" alt="">
                    </router-link>
                    <div class="info left">
                        <h3 class="name">{{n.name_cn}}</h3>
                        <ul class="slistDv">
                            <li class="slineDv">国内排名：{{n.rank_local}}</li>
                            <li class="slineDv">世界排名：{{n.rank_world}}</li>
                            <li class="slineDv">学校性质：{{n.type}}</li>
                            <li class="slineDv">电话：{{n.mobile}}</li>
                            <li class="slineDv full">学校网址：<a :href="n.website" target="_blank">{{n.website}}</a></li>
                            <li class="slineDv full">学校地址：{{n.address}}</li>
                        </ul>
                    </div>
                    <div class="btn-wapper left">
                        <a :href="'/school/kr/detail?id='+n.school_id" class="admissions">领取官方招生手册</a>
                        <a href="javascript:;" class="subscribe" onclick="_MEIQIA('showPanel')">招生官面试预约</a>
                        <a href="javascript:;" class="apply" onclick="_MEIQIA('showPanel')">官方免费申请</a>
                    </div>
                </li>
            </ul>
            <div id="jqPaginator" class="pageNav" style="display: block;"></div>
        </div>
	</div>
</template>
<script>
	export default{
		name: 'indexKorea',
		data() {
			return {


	            area: [],
	            city: [],
	            request:{
	                page:1,
	                limit:10,
	                schoolname:"",
	                address:""
	            },
	            count:"",
	            lists:[],
	            tuition: [{
	                name: "60万円以下",
	                id: "1"
	            }, {
	                name: "60-70万円",
	                id: "2"
	            }, {
	                name: "70-80万円",
	                id: "3"
	            }, {
	                name: "80万円以上",
	                id: "4"
	            }]
            }
        },
        filters:{
            filterfee: function(val){
                if (val) {
                    val = parseFloat(val);
                    val = val.toFixed(2);
                }
                return val;
            }
        },
        methods: {
            change: function(key,val){
                this.request[key] = val;
                this.request.page = 1;
                this.getdata();
            },
            getdata: function(){
                var _this = this;
                $.ajax({
                    url:"http://manage.xiaoying.net/getkoreaschool",
                    type:"get",
                    data: _this.request,
                    success:function(res){
                        if (res.status) {
                            _this.lists = res.data;
                            _this.count = res.count
                            $("body, html").animate({
                                scrollTop: $(".choosepart").offset().top - 130
                            }, 200)
                            $("#jqPaginator").html("");
                            if (res.count > 0) {
                                $('#jqPaginator').jqPaginator({
                                    totalCounts: parseInt(res.count),
                                    pageSize: _this.request.limit,
                                    visiblePages: 7,
                                    currentPage: _this.request.page,
                                    first: "<a>首页</a>",
                                    last: "<a>末页</a>",
                                    prev: "<a>上一页</a>",
                                    page: "<a class='page'>{{page}}</a>",
                                    next: "<a>下一页</a>",
                                    onPageChange: function(num, type) {
                                        if (type == "change") {
                                            _this.request.page = num;
                                            _this.getdata();
                                        }
                                    }
                                })
                            }
                        }
                    }
                })
            }
        },
        mounted: function() {
            var _this = this;
            this.getdata();
            $(".choose .item ").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
            $("#area").select2({
                width: "300px",
            })
            $(".selectcity .city_item").eq(2).addClass("active")

            $("#area").on("select2:select",function(e){
                _this.change('address',$("#area").val());
            });
        }
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/schoolPublic.css';
</style>
