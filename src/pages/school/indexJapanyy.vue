<template>
	<div id="jpyy">
        
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
                <span class="s_title">学费：</span>
                <ul class="listul">
                    <li class="item active" @click="change('cost_fee','')">不限</li>
                    <li class="item" v-for="n in tuition" @click="change('cost_fee',n.id)">{{n.name}}</li>
                </ul>
            </div>
        </div>
        <div class="resultPart container">
            <h3 class="search_title">共找到<font>{{count}}</font>所学校</h3>
            <ul class="schoolList">
                <li class="item_school clearfix" v-for="n in lists" :key="n.id">
                    <div class="imgDv left">
                        <router-link :to="{ name: 'SchooldetailsJpyy', params: { id: n.id }}">
                        <img :src="'http://www.xiao-ying.net'+n.logo_sqr" alt="">
                        </router-link>
                    </div>
                    <div class="info left">
                        <a :href="'/school/jpyy/detail?id='+n.id">
                            <h3 class="name">{{n.name_cn}}</h3>
                            <ul class="slistDv">
                                <li class="slineDv">学校类型：{{n.category_school}}</li>
                                <li class="slineDv">每年学费：{{n.cost_fee | filterfee}}万(日元)</li>
                                <li class="slineDv">学校性质：{{n.xingzhi_name}}</li>
                                <li class="slineDv">电话：{{n.contact}}</li>
                                <li class="slineDv">录取比例：{{n.competition}}%</li>
                                <li class="slineDv full">学校地址：{{n.address}}</li>
                            </ul>
                        </a>
                    </div>
                    <div class="btn-wapper left">
                        <a :href="'/school/jpyy/detail?id='+n.id" class="admissions">领取官方招生手册</a>
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
		name: 'indexJapanyy',
		data() {
			return {
	            area: [],
	            city: [],
	            request:{
	                page:1,
	                limit:10,
	                school_type:1,
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
                    url:"http://manage.xiaoying.net/getlangschool",
                    type:"get",
                    data: _this.request,
                    success:function(res){
                        if (res.code == 0) {
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
            $(".selectcity .city_item").eq(0).addClass("active")

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
