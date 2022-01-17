$(function() {
    $(".page3Case").hover(function() {
        const img = $(this).find('img');
        const oldSrc = img.attr('src');
        const afterSplit = oldSrc.split('.png');
        let newSrc = afterSplit[0].replace('logo', 'fblogo');
        newSrc += '-w.png';
        img.attr('src', newSrc);

        // var arr = ["../img/fblogo/emotibit-w.png", "../img/fblogo/guanjie-w.png", "../img/fblogo/cehui-w.png", "../img/fblogo/kennai-w.png", "../img/fblogo/kuaiyuntu-w.png", "../img/fblogo/yixin-w.png", "../img/fblogo/股权融资科技反白logo5.png", "../img/fblogo/yunquna-w.png", "../img/fblogo/股权融资科技反白logo1.png", "../img/fblogo/股权融资健康反白logo2.png", "../img/fblogo/股权融资健康反白logo3.png", "../img/fblogo/股权融资健康反白logo4.png", "../img/fblogo/股权融资消费反白logo1.png", "../img/fblogo/股权融资消费反白logo2.png", "../img/fblogo/股权融资消费反白logo3.png", "../img/fblogo/股权融资消费反白logo4.png", "../img/fblogo/股权融资消费反白logo5.png", "../img/fblogo/股权融资消费反白logo6.png", "../img/fblogo/股权融资消费反白logo7.png", "../img/fblogo/股权融资消费反白logo8.png", "../img/fblogo/股权融资工业反白logo1.png", "../img/fblogo/股权融资工业反白logo2.png", "../img/fblogo/股权融资工业反白logo3.png", "../img/fblogo/股权融资工业反白logo4.png", "../img/fblogo/兼收并购 反白logo1.png", "../img/fblogo/兼收并购 反白logo2.png", "../img/fblogo/兼收并购 反白logo3.png", "../img/fblogo/兼收并购 反白logo4.png", "../img/fblogo/兼收并购 反白logo5.png", "../img/fblogo/兼收并购 反白logo6.png", "../img/fblogo/兼收并购 反白logo7.png", "../img/fblogo/兼收并购 反白logo9.png", "../img/fblogo/兼收并购 反白logo8.png", "../img/fblogo/兼收并购 反白logo10.png", "../img/fblogo/战略顾问反白logo1副本.png", "../img/fblogo/战略顾问反白logo2副本.png", "../img/fblogo/战略顾问反白logo3副本.png", "../img/fblogo/战略顾问反白logo4副本.png", "../img/fblogo/战略顾问反白logo5副本.png", "../img/fblogo/战略顾问反白logo6副本.png", ];
        // var sr = arr[$(".page3Case").index(this)];
        // var s = jQuery(this).find("img");
        // s.attr("src", sr);
    }, function() {
        const img = $(this).find('img');
        const oldSrc = img.attr('src');
        const afterSplit = oldSrc.split('.png');
        let newSrc = afterSplit[0].replace('fblogo', 'logo');
        newSrc = newSrc.replace('-w', '');
        newSrc += '.png';
        img.attr('src', newSrc);

        // var arr1 = ["../img/logo/emotibit.png", "../img/logo/guanjie.png", "../img/logo/cehui.png", "../img/logo/kennai.png", "../img/logo/kuaiyuntu.png", "../img/logo/yixin.png", "../img/logo/股权融资科技logo5.png", "../img/logo/yunquna.png", "../img/logo/股权融资科技logo1.png", "../img/logo/股权融资健康logo2.png", "../img/logo/股权融资健康logo3.png", "../img/logo/股权融资健康logo4.png", "../img/logo/股权融资消费logo1.png", "../img/logo/股权融资消费logo2.png", "../img/logo/股权融资消费logo3.png", "../img/logo/股权融资消费logo4.png", "../img/logo/股权融资消费logo5.png", "../img/logo/股权融资消费logo6.png", "../img/logo/股权融资消费logo7.png", "../img/logo/股权融资消费logo8.png", "../img/logo/股权融资工业logo1.png", "../img/logo/股权融资工业logo2.png", "../img/logo/股权融资工业logo3.png", "../img/logo/股权融资工业logo4.png", "../img/logo/兼收并购 logo1.png ", "../img/logo/兼收并购 logo2.png ", "../img/logo/兼收并购 logo3.png ", "../img/logo/兼收并购 logo4.png ", "../img/logo/兼收并购 logo5.png ", "../img/logo/兼收并购 logo6.png", "../img/logo/兼收并购 logo7.png ", "../img/logo/兼收并购 logo9.png ", "../img/logo/兼收并购 logo8.png ", "../img/logo/兼收并购 logo10.png ", "../img/logo/战略顾问logo1副本.png", "../img/logo/战略顾问logo2副本.png", "../img/logo/战略顾问logo3副本.png", "../img/logo/战略顾问logo4副本.png", "../img/logo/战略顾问logo5副本.png", "../img/logo/战略顾问logo6副本.png"];
        // var _sr = arr1[$(".page3Case").index(this)];
        // var _s = jQuery(this).find("img");
        // _s.attr("src", _sr);
    })
})