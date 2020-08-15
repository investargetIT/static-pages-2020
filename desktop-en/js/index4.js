$(function() {
    $(".time-horizontal li").click(function() {
        $(".time-horizontal .cir").addClass("hidden");
        $(this).find(".cir").removeClass("hidden");
        $(this).find(".cir").addClass("show");
        var indexs = $(this).index();
        $(".ft1").eq(indexs).siblings().addClass("hidden");
        $(".ft1").eq(indexs).removeClass("hidden");
        $(".ft1").eq(indexs).addClass("show");
    })
})