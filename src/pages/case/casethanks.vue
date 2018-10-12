<template>
	<div>
		<header-top :nav ="nav"></header-top>
		<div class="case_head marginTop">
			<casebanner  :bannerNav = "bannerNav"></casebanner>
		</div>
		<div id="caseThanks" class="case">
			<div class="container">
				<ul class="list_Ul clearfix"></ul>
			</div>
			<ul id="caseLi" style="display: none;">
				<li class="item_li" v-for="n in data">
					<div class="imgDV" v-if="n.avatar != '0'" :data-large="'http://crm.xiaoying.net'+n.file">
						<div class="mainner">
							<img :src="'http://crm.xiaoying.net/'+n.mini_img" class="s_faceImg">
							<img src="" alt="" class="loadImg">
						</div>
						<div class="cover">
							<img src="../../../static/images/case/see.png" class="see">
						</div>
					</div>
					<div class="info">
						<div class="m_info">
							<p class="name">{{n.name}}</p>
							<p class="d_font">{{n.one}}</p>
						</div>
						<p class="hr"></p>
						<p class="des">{{n.content}}</p>
					</div>
				</li>
			</ul>
			<!-- <include file="./Template/Common/Index_loading.html"/> -->
		</div>

	</div>
</template>
<script>
	var $grid;
	import headerTop from '@/pages/common/header.vue';
	import casebanner from '@/pages/case/casebanner.vue';
	export default{
		name: 'casethanks',
		data() {
			return {
				nav: 'case',
				bannerNav: 'casethanks',
				lock: true,
	            requet: {
	                limit: "5",
	                page: "1",
	            },
	            data: [],
			}
        },
        components: {
			headerTop,
			casebanner

			// applyForm,
			// recommendConsult
		},
        methods: {
            search: function(item) {
                this.s_choose = item.type;
            },
            getData: function() {
                $("#loader").show();
                this.data = [];
                var _this = this;
                $.ajax({
                    type: 'post',
                    url:"http://crm.xiaoying.net/api/koubei",
                    data: _this.requet,
                    success: function(res) {
                        if (res.status && res.data != null) {
                            if (res.data.length > 0) {
                                _this.lock = false;
                            }
                            _this.data = res.data;
                            _this.requet.page = parseInt(_this.requet.page) + 1;

                            _this.$nextTick(function() {

                                //瀑布流初始化
                                if (_this.requet.page == 2) {
                                    $grid = $('.list_Ul').masonry({
                                        columnWidth: 370,
                                        itemSelector: '.item_li',
                                        gutter: 30,
                                        transitionDuration: 0
                                    });
                                    $grid.masonry('reloadItems');
                                    $grid.masonry('layout');
                                }

                                $('.list_Ul').append($("#caseLi").html());

                                //图片主要颜色
                                $(".list_Ul .item_li").each(function(){
                                    if ($(this).find(".imgDV").length > 0) {
                                        var placeholder = $(this).find(".imgDV");
                                        // 2: load large image
                                        var imgLarge = new Image();
                                        imgLarge.src = placeholder.attr("data-large");
                                        imgLarge.onload = function() {
                                            placeholder.find(".loadImg").attr("src",imgLarge.src)
                                            placeholder.closest('.item_li').addClass("loaded");
                                            $grid.masonry('reloadItems');
                                            $grid.masonry('layout');
                                            window.setTimeout(function(){
                                                placeholder.find(".s_faceImg").addClass("hidee");
                                            },600)
                                        };
                                    }else{
                                        $(this).addClass("loaded");
                                        $grid.masonry('reloadItems');
                                        $grid.masonry('layout');
                                        window.setTimeout(function(){
                                            $(this).find(".s_faceImg").addClass("hidee");
                                        },600)
                                    }
                                    
                                })
                                _this.lock = true;
                                $("#loader").fadeOut(450);
                            });
                        }else{
                            _this.lock = false;
                            $("#loader").fadeOut(450);
                        }
                    }
                })

            }
        },
        mounted: function() {

            $("#loader").show();

            var _this = this;

            this.getData();

            $(window).scroll(function() {
                var scrollTop = $(this).scrollTop();
                var scrollHeight = $(document).height();
                var windowHeight = $(this).height();
                if (parseInt(scrollTop + windowHeight) == scrollHeight && _this.lock) {
                    _this.lock = false;
                    _this.getData();
                }
            });
        }
	}
</script>
<style scoped lang="less">
@import '../../../static/stylesheet/pages/casethanks.css';
</style>
