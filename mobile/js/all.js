class inxf{
    constructor(elname,cls){ 
        this.elname = elname;
        this.cls = cls; 
        this.getEl = this.getEl.bind(this); 
    }
    getEl(elname,cls){ 
        // this.cls = cls;
        // this.elname = elname;   
        $(elname).find('.tab_btn_box ul li').each(function(index, el) { 
            $(this).click(function() {  
                $(this).siblings().removeClass(cls);
                $(this).addClass(cls); 
                $(elname).find('.tab_cont').eq(index).siblings().hide();
                $(elname).find('.tab_cont').eq(index).show();  
            });
        })
    };
    Totop(){
        $('.to_top').click(function(event) {
            $('html,body').animate({ scrollTop: 0 }, 'slow')
        });
        $(window).scroll(function() {
            if($(document).scrollTop()>$('footer').offset().top-1200) {
                $('.to_top').fadeIn(300);
            }else {
                $('.to_top').fadeOut(300);
            }  
        })
        return $(document).scrollTop();
    };  
}
$(function() { 
    // type:1  -> 科技 
    // type:2  -> 大健康 
    // type:3  -> 消费升级 
    // type:4  -> 工业
    // type:5  -> 兼收  
    // type:6  -> 战略顾问 
    let list = [
        { 
            id: 31,
            type: 1,
            name: '竹间智能', 
            def: 'logo/emotibit.png', 
            act: 'logo/emotibit-w.png', 
            txt: '多模态情感识别技术研发商', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466453&idx=1&sn=570b8755ca8a8d7b15dbe368a403ac95&scene=19&token=970758363&lang=zh_CN#wechat_redirect' 
        },
        { 
            id: 33,
            type: 1,
            name: '慧策集团', 
            def: 'logo/cehui.png', 
            act: 'logo/cehui-w.png', 
            txt: '一体化智能零售服务商', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&tempkey=MTA5Ml94bDM1azMyRnA5UWVvZkExMEpoYlN3TUtycV9qRnZPU2Q3T2VCUy02V3E3MXlZaFNleTc4UzlSaHZzTTBEbmlwSVdKcDFyemVFd3VvTVpYZE5GOERRRjFaQ3ozbTg5aHZmTU9LUnV3bF9NZmhTOThYZGNuUzRPRk9aX1IwNEo3QmxXMjQ5cXpCNUJTa3hyRVRoMXJyOXp6dWZTY2d3eldTb2NvVjZnfn4%3D&chksm=73dd12be44aa9ba8cafa2fd2f387721254e324ba8f4eea43d8274170ada05b8377dc5b7aca23#rd' 
        },
        { 
            id: 34,
            type: 1,
            name: '肯耐珂萨', 
            def: 'logo/kennai.png', 
            act: 'logo/kennai-w.png', 
            txt: '领先的HCM一体化云解决方案提供商', 
            url: ' https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465738&idx=1&sn=818e416f3dea54b8564714e975ac07eb&chksm=f3dd1592c4aa9c84d9002727687825c67d1f609e6f97665648569acc56b82c5adc911bd027cc&token=1845434932&lang=zh_CN#rd' 
        },
        { 
            id: 9, 
            type:1,
            name:'云账房', 
            def: 'logo/消费logo1.png', 
            act: 'logo/消费logo1-w.png', 
            txt: '中国领先的智能财税SaaS提供商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465250&idx=1&sn=
            50d0dfbebc03c5541d825a76a837a4c4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 36,
            type: 1,
            name: '移芯通信', 
            def: 'logo/yixin.png', 
            act: 'logo/yixin-w.png', 
            txt: '蜂窝移动通信芯片及其软件的研发和销售', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&tempkey=MTA5Ml9iMDdiZGdzUDJUVk0zVlhFMEpoYlN3TUtycV9qRnZPU2Q3T2VCUy02V3E3MXlZaFNleTc4UzlSaHZzUGNkOHdGdGtXdHFDa2lPTFFWUVdiTHlOZGNfanVpSlk3WGVFYk9IVXR0MnU1YU5mOFdqNjN4TXNCS0JoRzJIMFMxbURnemUxU2trSmJDbERSMmtOQXhFLUVmSEpnMjhkZVpVVDBLTkVzejBnfn4%3D&chksm=73dd128e44aa9b980853330373ceff70a9ea9e3a2b71a8178345280d58e6b26c425709163c62#rd' 
        },

        { 
            id: 2, 
            type:1,
            name:'Udesk', 
            def: 'logo/科技logo2.png', 
            act: 'logo/科技logo2-w.png', 
            txt: '国内领先的全场景智能客服系统提供商', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465128&idx=1&sn=e9c9a27c840e139f8d21567bfff25d72&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },

        { 
            id: 50,
            type: 1,
            name: '擎创科技', 
            def: 'logo/股权融资科技logo8.png', 
            act: 'logo/股权融资科技logo8-w.png', 
            txt: '国内首家智能运维AIOps落地解决方案供应商', 
            url: '#' 
        },
        
        { 
            id: 1,
            type:1,
            name:'运去哪', 
            def: 'logo/yunquna.png', 
            act: 'logo/yunquna-w.png', 
            txt: '国内领先的一站式国际物流服务平台', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465320&idx=1&sn=b5ed5688c3266d71e1eb93b7761f9a4c&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },
        
        { 
            id: 35,
            type: 1,
            name: '快兔物流', 
            def: 'logo/kuaiyuntu.png', 
            act: 'logo/kuaiyuntu-w.png', 
            txt: '为中小企业提供一站式门到门运输服务的智能化物流平台', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465816&idx=1&sn=7186e7913e78e084b592d2425ea04f46&scene=19&token=970758363&lang=zh_CN#wechat_redirect' 
        },

        { 
            id: 51,
            type: 1,
            name: '同创永益', 
            def: 'logo/股权融资科技logo5.png',
            act: 'logo/股权融资科技logo5-w.png', 
            txt: '国内业务连续性和容灾管理领域的领军企业', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465416&idx=1&sn=3e5fbb08d5a12fddeea89b2ef1cfc849&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },
        { 
            id: 52,
            type: 1,
            name: '知因智慧', 
            def: 'logo/股权融资科技logo7.png',
            act: 'logo/股权融资科技logo7-w.png', 
            txt: '国内领先的产业链金融AI赋能和运营商', 
            url: '#' 
        },
        { 
            id: 53,
            type: 1,
            name: '中科聚信', 
            def: 'logo/股权融资消费logo6.png',
            act: 'logo/股权融资消费logo6-w.png', 
            txt: '中国大数据智能分析与金融科技领域的代表企业', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465250&idx=1&sn=50d0dfbebc03c5541d825a76a837a4c4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },
        { 
            id: 54,
            type: 1,
            name: '快金数据', 
            def: 'logo/股权融资消费logo7.png',
            act: 'logo/股权融资消费logo7-w.png', 
            txt: '国内领先的物流数据科技服务公司', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465574&idx=1&sn=d95590847f4b5087b2ce6da1d57c9c29&chksm=f3dd167ec4aa9f683208dacea185a9d587ed171e85bb6f308c83c56cfdc6e68dbb1f96e16aef&token=1914594675&lang=zh_CN#rd' 
        },

        { 
            id: 55,
            type: 1,
            name: '氪信科技', 
            def: 'logo/股权融资科技logo3.png',
            act: 'logo/股权融资科技logo3-w.png', 
            txt: '人工智能技术驱动金融机构升级的领跑者', 
            url: '#' 
        },

        { 
            id: 4, 
            type:1,
            name:'Holovis', 
            def: 'logo/科技logo4.png', 
            act: 'logo/科技logo4-w.png', 
            txt: '英国虚拟沉浸技术解决方案提供商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652464496&idx=1&sn=2d631f6fd028f8f0c1f9e4ff387e0cca&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },

        { 
            id: 56, 
            type: 1,
            name: 'FLI Global', 
            def: 'logo/股权融资科技logo2.png', 
            act: 'logo/股权融资科技logo2-w.png', 
            txt: '欧洲领先的综合土壤修复解决方案提供商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504979860&idx=1&sn=1dc8d6d79f1f956b8a5836ac03c94dc4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },

        // { 
        //     id: 3, 
        //     type:1,
        //     name:'KeneXa', 
        //     def: 'logo/科技logo3.png', 
        //     act: 'logo/科技logo3-w.png', 
        //     txt: '全球领先的权威整体人力资源解决方案服务供应商', 
        //     url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==
        //     &mid=2652464496&idx=1&sn=2d631f6fd028f8f0c1f9e4ff3
        //     87e0cca&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        // },
       
        { 
            id: 7, 
            type:2,
            name:'医准智能', 
            def: 'logo/健康logo3.png', 
            act: 'logo/健康logo3-w.png', 
            txt: '人工智能辅助医疗影像诊断服务商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465183&idx=1&sn=b958aa1be8615dd34d0f7e744a027adb&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 57, 
            type: 2,
            name: '柯瑞森', 
            def: 'logo/股权融资健康logo2.png', 
            act: 'logo/股权融资健康logo2-w.png', 
            txt: '国药集团联合优秀技术团队打造的辅助生殖平台', 
            url: '#'
        },
        { 
            id: 6, 
            type:2,
            name:'锦葵医疗', 
            def: 'logo/健康logo2.png', 
            act: 'logo/健康logo2-w.png', 
            txt: '致力于先天性心脏病治疗装置的研制与开发', 
            url: `#`
        },
       
        { 
            id: 8, 
            type:2,
            name:'诺灵生物', 
            def: 'logo/健康logo4.png', 
            act: 'logo/健康logo4-w.png', 
            txt: '专注于新一代抗体偶联技术的药物研发公司', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465178&idx=1&sn=38d6d4676df4642c778249778a2b1581&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 37, 
            type: 3,
            name:'小佩宠物', 
            def: 'logo/xiaopei.png', 
            act: 'logo/xiaopei-w.png', 
            txt: '一站式宠物消费平台', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466332&idx=1&sn=789a12f34ee85b87b87f964cce0e3610&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 38, 
            type: 3,
            name:'豌豆思维', 
            def: 'logo/wandou.png', 
            act: 'logo/wandou-w.png', 
            txt: '少儿数理思维头部企业', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466435&idx=1&sn=323f677f11344b9edbe5d0139575f8f3&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 10, 
            type:3,
            name:'安歆公寓', 
            def: 'logo/消费logo2.png', 
            act: 'logo/消费logo2-w.png', 
            txt: '集中式企业住宿头部品牌', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465510&idx=1&sn=9a2dd516a3628d8d19e26ff25139ec09&chksm=f3dd16bec4aa9fa89206b2574fec2ebd98c907a4dda851b70e392ada33580820af845b970a27&token=1914594675&lang=zh_CN#rd`
        },
        { 
            id: 39, 
            type:3,
            name:'视游互动', 
            def: 'logo/xiaoy.png', 
            act: 'logo/xiaoy-w.png', 
            txt: '国内领先的家庭屏终端内容服务商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&tempkey=MTA5Ml9MMHhvZTNBUWNsRVgrMEZrMEpoYlN3TUtycV9qRnZPU2Q3T2VCUy02V3E3MXlZaFNleTc4UzlSaHZzTUVydzBYQlRsQmFlRnhPd0wzZFg5RFVuMUJNTXNVTTV2QWRyelVwYjFjTVRXZ1dOZ3JLc2h1Qkc0M0FTeGkwUDB0RE5nOGxTNVRqM3lnek8weWFsQlYxT2FKN19yX2ROQmZsaUZWYVJ3dUlnfn4%3D&chksm=73dd147c44aa9d6a77dfeb3a76ba0502845fa2be1972374351199f352cecbe1af85cd3189fe8#rd`
        },
        { 
            id: 12, 
            type:3,
            name:'触漫', 
            def: 'logo/消费logo4.png', 
            act: 'logo/消费logo4-w.png', 
            txt: '国内头部的泛二次元创作社区', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465370&idx=1&sn=ced799ecdb8aa7e1019c2f3e0a25fcd9&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 11, 
            type:3,
            name:'家有学霸', 
            def: 'logo/消费logo3.png', 
            act: 'logo/消费logo3-w.png', 
            txt: '真人1对1、 C2C平台型在线教育企业', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465391&idx=1&sn=a7adddae8ba8f0aa178a01732cf67ff0&scene=19&token=1271111519&lang=zh_CN#wechat_redirect'
        },
        { 
            id: 32,
            type: 4,
            name: '固安捷中国', 
            def: 'logo/guanjie.png', 
            act: 'logo/guanjie-w.png', 
            txt: '全球最大工业品分销商W.W.Grainger的中国运营子公司', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466316&idx=1&sn=088eeb58de4bb895e0642cc943d0bd39&scene=19&token=970758363&lang=zh_CN#wechat_redirect' 
        },
        { 
            id: 15, 
            type: 4,
            name: '快准车服', 
            def: 'logo/工业logo3.png', 
            act: 'logo/工业logo3-w.png', 
            txt: '中国汽车后市场行业领先的汽配供应链平台', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465410&idx=1&sn=1ca21f27bb673a5e5a929e05f0d8562f&chksm=f3dd16dac4aa9fccb57e4cf9443ae6b1eba6290c1c851f97c534265a92a03fbf17a1417e1eee&token=1271111519&lang=zh_CN#rd`
        },
        { 
            id: 41, 
            type: 4,
            name:'GoFun科技', 
            def: 'logo/gofun.png', 
            act: 'logo/gofun-w.png', 
            txt: '首汽集团针对移动出行推出的一款共享汽车产品', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466381&idx=1&sn=ae8ee70f1ea58b5b9eeb63fa798f4ad4&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 40, 
            type: 4,
            name: '希迪智驾', 
            def: 'logo/xidi.png', 
            act: 'logo/xidi-w.png', 
            txt: '以人工智能技术为导向打造下一代的物流系统', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466242&idx=1&sn=391ee14f3861a93b76a82aed729859d1&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        
        { 
            id: 16, 
            type: 4,
            name: '听伴', 
            def: 'logo/工业logo4.png', 
            act: 'logo/工业logo4-w.png', 
            txt: '智能车载音频服务商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465597&idx=1&sn=1dd69d0b3e5724254b8101255e4ce903&chksm=f3dd1665c4aa9f733ff621562c5a20a303743cedf607930a4c0f8697502d8c54c3656fbf8b02&token=1914594675&lang=zh_CN#rd`
        },
        { 
            id: 42, 
            type: 4,
            name: '箱信', 
            def: 'logo/股权融资工业logo4.png', 
            act: 'logo/股权融资工业logo4-w.png', 
            txt: '专注于港口集装箱物流的陆运服务的集装箱物流经纪平台', 
            url: `#`
        },
        // { 
        //     id: 13, 
        //     type:4,
        //     name:'小鹏汽车', 
        //     def: 'logo/工业logo1.png', 
        //     act: 'logo/工业logo1-w.png', 
        //     txt: '专注于互联网电动汽车的研发', 
        //     url: `#`
        // },
        // { 
        //     id: 14, 
        //     type:4,
        //     name:'纵目科技', 
        //     def: 'logo/工业logo2.png', 
        //     act: 'logo/工业logo2-w.png', 
        //     txt: '中国领先的自动驾驶和高级驾驶辅助系统技术及产品供应商', 
        //     url: `#`
        // },
        { 
            id: 17, 
            type:5,
            name:'晨光文具', 
            def: 'logo/兼收logo1.png', 
            act: 'logo/兼收logo1-w.png', 
            txt: '国际上享誉盛名的一级文具品牌。', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504981519&idx=1&sn=9ff246e5b5f533528a81b970
            7aa018dc&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 18, 
            type:5,
            name:'Babycare', 
            def: 'logo/兼收logo2.png', 
            act: 'logo/兼收logo2-w.png', 
            txt: '中国领先的跨境母婴电商品牌', 
            url: `#`
        },
        { 
            id: 19, 
            type:5,
            name:'江南布衣', 
            def: 'logo/兼收logo3.png', 
            act: 'logo/兼收logo3-w.png', 
            txt: '中国本土最成功的的设计师品牌', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ
            ==&mid=504981504&idx=1&sn=e1fba607e56a12e61e5f951497a1a61b&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 20, 
            type:5,
            name:'华讯网络', 
            def: 'logo/兼收logo4.png', 
            act: 'logo/兼收logo4-w.png', 
            txt: '中国新一代IT基础架构解决方案。', 
            url: `https://mp.weixin.qq.com/s?__biz=M
            zIyMjIxODkzNQ==&tempkey=MTAzMV8yeS9PTEduU1JPRVczWFJCaDZKNU5TaVgxSTlnRlMweUVXdUFOQVZ0MmlPSEcxYTJpZjNnWUZWUGZVTGUzbEQzR1RRcnliTmFxcTlGTWpyUy1oOHROV2NXekFjaTdHWWpEZk10RGx2Skc4bXJNdFhxT0E2V2NNMENoSE1QVExCUzM3VlJkVEVJT1FiTTNkNGJTNGp0VDM3TnJDdmRfUkNyX1dlejlRfn4%3D&chksm=73dd2fe244aaa6f43038782
            6d19d006ab8f4f25903284638ade4930681a477f6730f068dd07f#rd`
        },
        { 
            id: 21, 
            type:5,
            name:'柯润玺医疗', 
            def: 'logo/兼收logo5.png', 
            act: 'logo/兼收logo5-w.png', 
            txt: '华东最大的骨科医疗器械经销商之一', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504978482&idx=1&sn=ae12e27af5c511278c6c865e125ae209&scene=1
            9&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 22, 
            type:5,
            name:'索尔思光电', 
            def: 'logo/兼收logo6.png', 
            act: 'logo/兼收logo6-w.png', 
            txt: '全球领先、提供创新且可靠的光通信技术的供应商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504975241&idx=1&sn=b8b296b2e81c79ea0c6e33d489
            ea614a&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 23, 
            type:5,
            name:'小小运动馆', 
            def: 'logo/兼收logo7.png', 
            act: 'logo/兼收logo7-w.png', 
            txt: '国内早教三大品牌之一，儿童运动型教育品牌', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465303&idx=1&sn=2b4959457837f8e17b01c30a20025e48&scene
            =19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 24, 
            type:5,
            name:'AHAVA', 
            def: 'logo/兼收logo8.png', 
            act: 'logo/兼收logo8-w.png', 
            txt: '以色列独特而珍贵的国宝级护肤品牌', 
            url: `#`
        },
        { 
            id: 24, 
            type:5,
            name:'格兰特', 
            def: 'logo/兼收logo9.png', 
            act: 'logo/兼收logo9-w.png', 
            txt: '专注于水净化、污水处理及污水再生领域的高新技术企业', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504977627&idx=1&sn=a53b0a7d93ed03c1b6469e31
            ac89e5a2&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 24, 
            type:5,
            name:'Peleg Design', 
            def: 'logo/兼收logo10.png', 
            act: 'logo/兼收logo10-w.png', 
            txt: '以色列知名的高端礼品与居家用品设计公司', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504981682&idx=1&sn=7b8795efda2f88fcc3d73f709ab86c2e&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        }, 
        { 
            id: 25, 
            type:6,
            name:'SK集团', 
            def: 'logo/战略logo1.png', 
            act: 'logo/战略logo1-w.png', 
            txt: '韩国第三大跨国企业', 
            url: ``,
            intro:`多维海拓促成SK集团与碧桂园合资设立汽车综合体基金`
        } ,
        { 
            id: 26, 
            type:6,
            name:'AsiaPak Investments', 
            def: 'logo/战略logo2.png', 
            act: 'logo/战略logo2-w.png', 
            txt: '巴基斯坦知名跨境投资机构', 
            url: ``,
            intro:`多维海拓担任独家战略与财务顾问`
        } ,
        { 
            id: 27, 
            type:6,
            name:'可隆集团', 
            def: 'logo/战略logo3.png', 
            act: 'logo/战略logo3-w.png', 
            txt: '韩国领先的综合性集团', 
            url: ``,
            intro:`多维海拓担任KOLON亚洲投资财务顾问`
        } ,
        { 
            id: 28, 
            type:6,
            name:'LHL医疗集团', 
            def: 'logo/战略logo4.png', 
            act: 'logo/战略logo4-w.png', 
            txt: '挪威最大综合医疗机构', 
            url: ``,
            intro:`多维海拓担任中、美两大医疗市场的独家战略和财务顾问`
        } ,
        { 
            id: 29, 
            type:6,
            name:' Daelim Industries', 
            def: 'logo/战略logo5.png', 
            act: 'logo/战略logo5-w.png', 
            txt: '韩国建筑业巨头', 
            url: ``,
            intro:`多维海拓担任战略与财务顾问`
        } ,
        { 
            id: 30, 
            type:6,
            name:'奥凯发集团', 
            def: 'logo/战略logo6.png', 
            act: 'logo/战略logo6-w.png', 
            txt: '中国领先山茶油品牌', 
            url: ``,
            intro:`多维海拓担任海外IPO顾问`
        } 
    ] 


    // 评价
    let assess = [ 
        {
            id:1,
            name:'郭维学',
            title:'小佩宠物 CEO',
            content:`在融资过程中，多维海拓作为国内知名的FA，在专业性、沟通能力、以及执行力上都令人称赞。感谢坤言资本和股东们的支持，公司将进一步加大连锁体系的建设投入，打造一个开放、合作、共赢的宠物消费平台。`
        },
        {
            id:2,
            name:'于浩然',
            title:'UDESK 创始人',
            content:`非常感谢多维海拓团队在交易中展现出的卓越能力，他们对市场
            的深刻理解、对项目的卓越洞察力以及丰富的资本运作经验和资源，成功协助
            我们找到了顶级的投资方。他们的专业素养为交易的快速进行保驾护航，我们对此感到
            非常满意。`
        },
        {
            id:3,
            name:'薛兴华',
            title:'云账房 创始人',
            content:`我们与多维海拓的合作顺利且愉快。多维海拓在项目上展现
            了非常专业的价值挖掘和精准的机构匹配能力，为项目的平稳推进保驾护航。
            我们欣赏并且信任多维海拓的服务，在架构设计和交易谈判中显示出非常高的专业度，
            这也是云账房选择和他们展开合作的原因。 `
        },
        {
            id:4,
            name:'汤文婷',
            title:'晨光文具 战略投资部',
            content:`在晨光的海外收购进程中，多维海拓无疑扮演了非常重要的角色，
            他们一站式的服务能力使机构内部印象深刻。团队在海外战略的设计、标的的筛选、
            交易谈判以及并购整合等阶段都很成熟的方法论，可以说，多维海拓在海外并购方
            面的丰富经验，是晨光出海战略的有力推手。`
        },
        {
            id:5,
            name:'胡巍',
            title:'小小运动馆 CEO',
            content:`非常欣赏多维海拓在整个交易过程中给我们提供的服务，
            包括整体交易结构的谈判、中国区利益的锁定、未来利益的分配等等。
            他们不仅高效地将我们与资本方连接起来，并且在交易的关键议题上起到了辅导和平
            衡的作用。我们非常感谢多维海拓的服务！`
        },
        {
            id:6,
            name:'黄跃中',
            title:'触漫 创始人',
            content:`非常感谢多维海拓在资本运作、战略定位和产品服务上为触漫提供的赋能支持
            ，他们过硬的专业素养及认真负责的态度助力触漫战胜了资本寒冬，在触漫遇到困难和挫
            折时，多维海拓也一直陪伴和支持着我们，这种人情味也让我们感受到了寒冬中的温暖。`
        },
        {
            id:7,
            name:'顾浩沁',
            title:'Holovis 中国区总监',
            content:`多维海拓拥有对关键领域的深入理解、丰富的行业实操经验、提供企业战略发展的专业能力。多维海拓为我们起草和定稿的一个独特
            且极具吸引力的股权投资故事成功并获得了路劲集团投资。我们对多维海拓非常有信心，并期待着与他们有更深入的合作。`
        },
        {
            id:8,
            name:'宋世民',
            title:'华讯网络 战略发展部',
            content:`多维海拓拥有专业的投行、咨询服务能力，为我们提供战略服务、标的筛选、项
            目执行、投后管理等服务。多维海拓借助丰富的全球标的资源，为我们搜索定位美国IT、基
            础设施领域的优质企业，对于我们将技术和服务扎根于美国市场、资本的全球配置提供了很好的建议。`
        },
        {
            id:9,
            name:'王鹏飞',
            title:'老虎基金 中国区董事总经理',
            content:`多维海拓具有极其敏锐的商业洞察力和高效专业的项目执行力。在多维海拓的协助下，我们
            接触到了极具潜力的项目，并且得以与其快速达成合作。他们是国内少数具备全球化视野的财务顾问，
            我对多维海拓所提供的专业服务感到非常满意。`
        },
        {
            id:10,
            name:'徐全利',
            title:'红杉宽带跨境数字产业基金 合伙人',
            content:`多维海拓对全球科技领域有着非常深入的研究和简介，在高新技术领域的交易能力令人称赞，
            尤其是在项目挖掘和精准推荐方面。他们具有全球视野，能够洞悉投资人的需求，有力地
            促成了红杉与优秀项目的牵手，我们一直与多维海拓保持持续密切的沟通，共同投出优秀的中国企业家！`
        },
        {
            id:11,
            name:'王启贤',
            title:'凯雷投资 董事总经理',
            content:`多维海拓同时拥有卓越的交易能力和专业的服务精神，是国内为数不多同时兼具资本运
            作和战略咨询经验的财务顾问，也是少有的能够提供全方面服务的团队。多维海拓在产业方面的洞识、
            在交易方面的全球视野都非常难能可贵，我们在行业见解和资本运作上有很多交流期待有更多的合作机会。`
        },
        {
            id:12,
            name:'蒋恺',
            title:'Coatue Management 中国区董事总经理',
            content:`我们已与多维海拓达成多次合作。多维海拓团队具有高效的执行能力和丰富的经验，促成了
            多轮交易的顺利进行，并且为我们提供了很好的投资建议。我们将继续在中国市场下注，期待未来与多
            维海拓更多、更深入的合作。`
        },
        {
            id:13,
            name:'张晶',
            title:'春华资本 合伙人',
            content:`多维海拓熟谙产业和资本市场运作，他们在产业研究、项目筛选等方面都有自己独到的
            理解和分析，给我们留下了深刻的印象。我们将会与多维海拓保持接触和交流，并且期待未来有和多维
            海拓合作的机会。`
        },
        {
            id:14,
            name:'陈利伟',
            title:'东方富海 合伙人',
            content:`与多维海拓的接触和交流非常愉快。多维海拓的执行团队积累了丰富的实践经验，并且
            拥有出色的交易成绩，对项目和市场的把握都有独到之处。我们信任多维海拓的专业服务水平，并期待
            与他们有更进一步的合作。`
        },
        {
            id:15,
            name:'朱斌',
            title:'高盛集团 董事总经理',
            content:`多维海拓在促成双方达成交易中发挥了全面的作用。由多维海拓的工作，我们在既定的时
            间内，准确的说是3个月内，完成了所有事项。我对多维海拓提供的专业而富有洞察力的服务非常满意。`
        },
        {
            id:16,
            name:'王浩泽',
            title:'AA投资 合伙人',
            content:`多维海拓具有领先的投行服务能力，在多个维度都表现出了专业素养。他们在资本运作和战略咨
            询方面的专长，更是在项目执行之余促进了企业的长远发展。多维海拓和我们一样，都有与企业相伴成长的情怀。`
        }
    ]
 

//打印头部
    // 
     $('#layout').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/index.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/index.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)

        $('#layout1').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/股权融资.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/股权融资.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout1').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)
    
        $('#layout2').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/2_2.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/2_2.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout2').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)

        $('#layout3').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/2_3.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/2_3.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout3').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)

        $('#layout4').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/3.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/3.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout4').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)

        $('#layout5').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/4_1.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/4_1.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout5').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)

        $('#layout6').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/4_2.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/4_2.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout6').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)

        $('#layout7').prepend(`
        <nav>
            <div class="head_box">
                <div class="logo_box">
                    <a href="#"><img src="images/导航logo.png" class="m-logo" alt=""></a>
                </div>
                <div class="nav_box"></div> 
                <div class="act_list"> 
                    <div class="change_box">
                        <span class="lg En"><a href="/mobile/en/contact.html">En</a></span>
                        <span class="lg Cn active"><a href="/mobile/contact.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">首页</a></li>
                        <li>
                            <div class="fx">精品投行<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">股权融资</a></span>
                                    <span><a href="2_2.html">兼并收购</a></span>
                                    <span><a href="2_3.html">核心团队</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">产业投资</a></li>
                        <li>
                            <div class="fx">产业发展<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">简介历程</a></span>
                                    <span><a href="4_2.html">产业综合体</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="https://m.investarget.com" class="login_">登 录</a>
                        <a href="contact.html" class="about_us">联系我们 ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout7').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>联系我们</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget </p>
                <p><a style="color: #999;" href="http://www.beian.miit.gov.cn/">沪ICP备15056238号-1</a></p>
            </div>
            <div class="to_top"></div>
        </footer>`)
    
    const inx = new inxf();
    inx.Totop(); 
    // 移动端列表展开与关闭 
    $('.nav_box').click(function(){ 
        $('nav').toggleClass('nav_act'); 
        if($('nav').hasClass('nav_act')) {
          $('body').css({overflow: 'hidden'});
        }else {
          $('body').css({overflow: 'inherit'})
        }
    })
    $('nav ul li').click(function() { 
        event.stopPropagation();
        $('nav ul li').removeClass('on');
        $('nav ul li').find('.hover_box').removeClass('active');
        $('nav ul li').find('i').text('+');
        $('nav ul li').find('.hover_box').height(0);

        $(this).toggleClass('on');
        $(this).find('.hover_box').toggleClass('active');
        let hei = $(this).find('.hover_box').find('.getHeight').height();
        // nav .head_box .act_list ul li i
        if ($(this).hasClass('on')) {
            $(this).find('i').text('-')
            $(this).find('.hover_box').height(hei);
            // $(this).siblings().find('.hover_box').addClass('off');
        } else {
            $(this).find('i').text('+')
            $(this).find('.hover_box').height(0);
        }
    })
    $('.Temp3 ul li').click(function(event) {
        $(this).addClass('active');
        $('body').css({overflow: 'hidden'});
    });
    $('.Temp3 ul li .close_').click(function(event) {
        event.stopPropagation(); 
        $(this).parents('li').removeClass('active');
        $('body').css({overflow: 'inherit'})
    });


    // 渲染评论
    
    for (let i in assess) { 
        let li_temp = `
                    <li> 
                        <h3>${assess[i].name}</h3>
                        <span>${assess[i].title}</span>
                        <p>${assess[i].content}</p>
                    </li>`
        if (i<4) {
            $('.assess_content .Temp-assess ul').append(li_temp)
        }
    }
    // 评价点击更多
    // 
    $('.assess_content .Temp-assess .more').click(function(){  
        for (let i in assess) {
            if (i>3) {
                let li_temp = `
                    <li> 
                        <h3>${assess[i].name}</h3>
                        <span>${assess[i].title}</span>
                        <p>${assess[i].content}</p >
                    </li>`
                $('.assess_content .Temp-assess ul').append(li_temp)
            }
        }
        $(this).text('没有咯！')
        $(this).addClass('disable');
    })
    // 评论内容展开与隐藏
    // 
    $('.assess_content .Temp-assess ul').on('click','li',function(){
        $(this).toggleClass('on');
    })


    // type:1  -> 科技 
    // type:2  -> 大健康 
    // type:3  -> 消费升级 
    // type:4  -> 工业
    // type:5  -> 兼收   
    // type:6  -> 战略顾问 
    // 
    // 锚点跳转
    $('.logo_content .tab_btn_box ul li').click(function(event) {
        let type_ = $(this).data('type');
        let typeDom = $("[data-point="+type_+"]").eq(1).offset().top-$('nav').height();
        $('html,body').animate({ scrollTop: typeDom }, 'slow');
    });
    for (let i in list) { 
        // 股权页面
        if (list[i].type!==5 && list[i].type!==6) { 
            let li_str = `
                    <li data-point='${list[i].type}'>
                        <a href="#${list[i].type}"></a>
                        <img src="${list[i].def}" class="def" alt="">
                        <div class="bg">
                            <img src="${list[i].act}" class="act" alt=""> 
                            <p><a href="${list[i].url}">${list[i].txt}</a></p> 
                        </div> 
                    </li>`
            $('#guquan').append(li_str)
        }
        // 2-2  兼收
        if (list[i].type==5) { 
            let li_str = `
                    <li>
                        <img src="${list[i].def}" class="def" alt="">
                        <div class="bg">
                            <img src="${list[i].act}" class="act" alt=""> 
                            <p><a href="${list[i].url}">${list[i].txt}</a></p> 
                        </div> 
                    </li>`
            $('#jianshou').append(li_str)
        }
        // 2-2  战略 
        if (list[i].type==6) { 
            let li_str = `
                        <li>
                            <img src="${list[i].def}" class="def" alt="">
                            <img src="${list[i].act}" class="act" alt="">
                            <div class="info"> 
                                <h3>${list[i].name}</h3>
                                <span>${list[i].txt}</span>
                                <i>▼</i>
                                <p>${list[i].intro}</p>
                            </div>
                        </li>`
            $('#zhanlue').append(li_str)
        }
    }
 })  
