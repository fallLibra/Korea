<template>
	<div id="indexJpCollege">
		
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
                    <option :value="n.id" v-for="n in area">{{n.name}}</option>
                </select>
                <span class="s_title">选择城市：</span>
                <select name="" id="city" class="select2" width="290">
                    <option value="">全部</option>
                    <option :value="n.id" v-for="n in city">{{n.name}}</option>
                </select>
            </div>
            <div class="lineDv choose clearfix">
                <span class="s_title">学校性质：</span>
                <ul class="listul">
                    <li class="item active" @click="change('school_type','')">不限</li>
                    <li class="item" @click="change('school_type','1')">语言学校</li>
                    <li class="item" @click="change('school_type','2')">高中/专门学校</li>
                    <li class="item" @click="change('school_type','3')">本科</li>
                    <li class="item" @click="change('school_type','4')">大学别科/预科</li>
                    <li class="item" @click="change('school_type','5')">大学院修士</li>
                </ul>
            </div>
            <div class="lineDv choose clearfix">
                <span class="s_title">学校性质：</span>
                <ul class="listul">
                    <li class="item active" @click="change('xingzhi_name','')">不限</li>
                    <li class="item" @click="change('xingzhi_name','私立')">私立</li>
                    <li class="item" @click="change('xingzhi_name','公立')">公立</li>
                    <li class="item" @click="change('xingzhi_name','国立')">国立</li>
                </ul>
            </div>
            <div class="lineDv choose clearfix">
                <span class="s_title">国内排名：</span>
                <ul class="listul">
                    <li class="item active" @click="change('rank','')">不限</li>
                    <li class="item" @click="change('rank','1')">1~10名</li>
                    <li class="item" @click="change('rank','2')">11~20名</li>
                    <li class="item" @click="change('rank','3')">21~50名</li>
                </ul>
            </div>
        </div>
        <div class="resultPart container">
            <h3 class="search_title">共找到<font>{{count}}</font>所学校</h3>
            <ul class="schoolList">
                <li class="item_school clearfix" v-for="n in lists">
                    <router-link class="imgDv left" :to="{ name: 'Schooldetailsjpcoll', params: { id: n.id }}">
                        <img :src="'http://www.xiao-ying.net'+n.logo_sqr" alt="">
                    </router-link>
                    <div class="info left">
                        <h3 class="name">{{n.name_cn}}</h3>
                        <ul class="slistDv">
                            <li class="slineDv">学校性质：{{n.xingzhi_name}}</li>
                            <li class="slineDv">国内排名：{{n.rank_local}}</li>
                            <li class="slineDv">每年学费：{{n.cost_fee | filterfee}}万(日元)</li>
                            <li class="slineDv">电话：{{n.contact}}</li>
                            <li class="slineDv">录取比例：{{n.competition}}%</li>
                            <li class="slineDv full">学校地址：{{n.address}}</li>
                        </ul>
                    </div>
                    <div class="btn-wapper left">
                        <a :href="'/school/jp/detail?id='+n.id" class="admissions">领取官方招生手册</a>
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
		name: 'indexJpCollege',
		data() {
			return {
	            area: [],
	            city: [],
	            request:{
	                page:1,
	                limit:10,
	                school_type:"",
	                xingzhi_name:"",
	                rank:"",
	                nowcid:"",
	                schoolname:""
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
            getarea: function(_id) {
                var _data = {};
                if (_id) {
                    _data = {
                        id : _id
                    }
                }
                var _this = this;
                $.ajax({
                    url:"http://manage.xiaoying.net/getarea",
                    type:"post",
                    data:_data,
                    success:function(res){
                        if (res.status) {
                            if (!_id) {
                                _this.area = res.data;
                            }else{
                                _this.city = res.data;
                            }
                            _this.$nextTick(function(){
                                $("#city").select2({
                                    width: "300px",
                                })
                            })
                        }
                    }
                })
            },
            change: function(key,val){
                this.request[key] = val;
                this.request.page = 1;
                this.getdata();
            },
            getdata: function(){
                var _this = this;
                $.ajax({
                    url:"http://manage.xiaoying.net/getjapschool",
                    type:"get",
                    data: _this.request,
                    success:function(res){
                        if (res.code == 0) {
                            _this.lists = res.data;
                            _this.count = res.count
                            
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
                                        	$("body, html").animate({
				                                scrollTop: $(".choosepart").offset().top - 130
				                            }, 200)
                                            _this.request.page = num;
                                            _this.getdata();
                                        }
                                    }
                                })
                            }
                        }
                        console.log("xxx",res);
                    }
                })
            }
        },
        mounted: function() {
            var _this = this;
            this.getarea();
            this.getdata();
            $(".choose .item ").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
            $("#area,#city").select2({
                width: "300px",
            })
            $(".selectcity .city_item").eq(1).addClass("active")

            $("#area").on("select2:select",function(e){
                _this.change('nowcid',$("#area").val());
                _this.getarea($("#area").val());
            });
            $("#city").on("select2:select",function(e){
                _this.change('nowcid',$("#city").val());
            });
        }
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/schoolPublic.css';
</style>
