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
            name: 'Emotibot', 
            def: 'logo/emotibit.png', 
            act: 'logo/emotibit-w.png', 
            txt: 'Multimodal Emotion Recognition Solution Provider', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466453&idx=1&sn=570b8755ca8a8d7b15dbe368a403ac95&scene=19&token=970758363&lang=zh_CN#wechat_redirect' 
        },
        { 
            id: 33,
            type: 1,
            name: 'Huice', 
            def: 'logo/cehui.png', 
            act: 'logo/cehui-w.png', 
            txt: 'Integrated Intelligent Retail Service Provider', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466535&idx=1&sn=283966eb0bb8f21bdba088eabfab0992&chksm=f3dd12bfc4aa9ba9e38cb483e78fac365fa6e5b9124926f730070854a61b4651110b47507e51&token=545970318&lang=zh_CN#rd' 
        },
        { 
            id: 34,
            type: 1,
            name: 'KNX', 
            def: 'logo/kennai.png', 
            act: 'logo/kennai-w.png', 
            txt: 'Leading HCM Cloud Solution Provider', 
            url: ' https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465738&idx=1&sn=818e416f3dea54b8564714e975ac07eb&chksm=f3dd1592c4aa9c84d9002727687825c67d1f609e6f97665648569acc56b82c5adc911bd027cc&token=1845434932&lang=zh_CN#rd' 
        },
        { 
            id: 9, 
            type:1,
            name:'Yunzhangfang', 
            def: 'logo/消费logo1.png', 
            act: 'logo/消费logo1-w.png', 
            txt: 'Leading Intelligent Accounting and Tax Services SaaS Company in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465250&idx=1&sn=
            50d0dfbebc03c5541d825a76a837a4c4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 36,
            type: 1,
            name: 'EIGENCOMM', 
            def: 'logo/yixin.png', 
            act: 'logo/yixin-w.png', 
            txt: 'Leading Developer of Honeycomb Mobile Communication Chips and Software', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466521&idx=1&sn=d987d4b74afbf0b2723dc140d3002db0&chksm=f3dd1281c4aa9b977285b4fb32b498a21ad5b8c3c5d77c2f3f53a75757d578a9e46308515f32&token=545970318&lang=zh_CN#rd' 
        },
        { 
            id: 2, 
            type:1,
            name:'Udesk', 
            def: 'logo/科技logo2.png', 
            act: 'logo/科技logo2-w.png', 
            txt: 'Leading Solution Provider of All-scenario Intelligent Customer Service System Provider in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465128&idx=1&sn=e9c9a27c840e139f8d21567bfff25d72&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },
        
      
        { 
            id: 50, 
            type: 1,
            name: 'EOI Tek', 
            def: 'logo/股权融资科技logo8.png', 
            act: 'logo/股权融资科技logo8-w.png', 
            txt: 'The First AIOps Solution Provider in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465790&idx=1&sn=249a5a798459caafe2c2e7a9c700ea6f&chksm=f3dd15a6c4aa9cb02a698994b8ad60b85b8a39a3fc47cfbcf0bb9c9a69adc82138416abb6029&token=545970318&lang=zh_CN#rd' 
        },

        { 
            id: 1,
            type:1,
            name:'YUNQUNA', 
            def: 'logo/yunquna.png', 
            act: 'logo/yunquna-w.png', 
            txt: 'The Largest Digital One-stop Cross-border Logistics Service Provider in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465320&idx=1&sn=b5ed5688c3266d71e1eb93b7761f9a4c&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },
        
        { 
            id: 35,
            type: 1,
            name: 'KTU', 
            def: 'logo/kuaiyuntu.png', 
            act: 'logo/kuaiyuntu-w.png', 
            txt: ' One-stop Door-to Door Smart Logistics Platform for SMEs', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465816&idx=1&sn=7186e7913e78e084b592d2425ea04f46&scene=19&token=970758363&lang=zh_CN#wechat_redirect' 
        },

        { 
            id: 51,
            type: 1,
            name: 'Tongchuang Yongyi', 
            def: 'logo/股权融资科技logo5.png',
            act: 'logo/股权融资科技logo5-w.png', 
            txt: 'Leading Solution Provider of Business Continuity and Disaster Recovery Management in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465416&idx=1&sn=3e5fbb08d5a12fddeea89b2ef1cfc849&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },

        { 
            id: 52,
            type: 1,
            name: 'KNOWLEDGENE', 
            def: 'logo/股权融资科技logo7.png',
            act: 'logo/股权融资科技logo7-w.png', 
            txt: 'Leading AI Solution Provider of Industrial and Supply Chain Finance', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465738&idx=2&sn=ad5619b50f408983f8a4baeedf5ba083&chksm=f3dd1592c4aa9c84b3b75234e27a5ed77e154ccd4b3272db8cce061cd4528f55ecf970c1f0fd&token=545970318&lang=zh_CN#rd' 
        },

        { 
            id: 53,
            type: 1,
            name: 'SCAI', 
            def: 'logo/股权融资消费logo6.png',
            act: 'logo/股权融资消费logo6-w.png', 
            txt: 'Leading Data Analytics and AI Solution Provider for Financial Institutions in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465250&idx=1&sn=50d0dfbebc03c5541d825a76a837a4c4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
        },

        { 
            id: 54,
            type: 1,
            name: 'Kuaijin Data', 
            def: 'logo/股权融资消费logo7.png',
            act: 'logo/股权融资消费logo7-w.png', 
            txt: 'Leading Logistics Data Service Provider in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465574&idx=1&sn=d95590847f4b5087b2ce6da1d57c9c29&chksm=f3dd167ec4aa9f683208dacea185a9d587ed171e85bb6f308c83c56cfdc6e68dbb1f96e16aef&token=1914594675&lang=zh_CN#rd' 
        },

        { 
            id: 55,
            type: 1,
            name: 'CRAIDITX', 
            def: 'logo/股权融资科技logo3.png',
            act: 'logo/股权融资科技logo3-w.png', 
            txt: 'Leading AI Solution Provider empowering upgrading of financial institutions in China', 
            url: '#' 
        },

        { 
            id: 4, 
            type:1,
            name:'Holovis', 
            def: 'logo/科技logo4.png', 
            act: 'logo/科技logo4-w.png', 
            txt: 'UK Immersive Virtual Reality Solution Provider', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652464496&idx=1&sn=2d631f6fd028f8f0c1f9e4ff387e0cca&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },

        { 
            id: 56, 
            type: 1,
            name: 'FLI', 
            def: 'logo/股权融资科技logo2.png', 
            act: 'logo/股权融资科技logo2-w.png', 
            txt: 'Leading Land Remediation Solution Provider in Europe', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504979860&idx=1&sn=1dc8d6d79f1f956b8a5836ac03c94dc4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },

        // { 
        //     id: 3, 
        //     type:1,
        //     name:'Kenexa', 
        //     def: 'logo/科技logo3.png', 
        //     act: 'logo/科技logo3-w.png', 
        //     txt: 'Leading Comprehensive Human Capital Management Solution Provider', 
        //     url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==
        //     &mid=2652464496&idx=1&sn=2d631f6fd028f8f0c1f9e4ff3
        //     87e0cca&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        // },
       
       
        { 
            id: 7, 
            type:2,
            name:'Yizhun AI', 
            def: 'logo/健康logo3.png', 
            act: 'logo/健康logo3-w.png', 
            txt: 'AI-assisted Medical Imaging Diagnosis Service Provider', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465183&idx=1&sn=b958aa1be8615dd34d0f7e744a027adb&scene=19&token=664976924&lang=zh_CN#wechat_redirect'
        },

        { 
            id: 57, 
            type: 2,
            name: 'Corrison', 
            def: 'logo/股权融资健康logo2.png', 
            act: 'logo/股权融资健康logo2-w.png', 
            txt: 'Assisted Reproductive Platform built by Sinopharm Group and Seasoned R&D Team', 
            url: '#'
        },

        { 
            id: 6, 
            type:2,
            name:'Mallow Medical', 
            def: 'logo/健康logo2.png', 
            act: 'logo/健康logo2-w.png', 
            txt: 'Committed to the Research and Development of Congenital Heart Disease Treatment Devices', 
            url: `#`
        },
        
        { 
            id: 8, 
            type:2,
            name:'Norling Bio', 
            def: 'logo/健康logo4.png', 
            act: 'logo/健康logo4-w.png', 
            txt: 'A Drug Research and Development Company focusing on a Next-generation of Antibody Coupling Technology', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465178&idx=1&sn=38d6d4676df4642c778249778a2b1581&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 37, 
            type: 3,
            name:'PETKIT', 
            def: 'logo/xiaopei.png', 
            act: 'logo/xiaopei-w.png', 
            txt: 'One-stop Pet Supplies Retail Platform', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466332&idx=1&sn=789a12f34ee85b87b87f964cce0e3610&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 38, 
            type: 3,
            name:'VIPThink', 
            def: 'logo/wandou.png', 
            act: 'logo/wandou-w.png', 
            txt: 'Leading Online Education Platform for K-12 Children Specialized in Mathematics and Science', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466435&idx=1&sn=323f677f11344b9edbe5d0139575f8f3&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 10, 
            type:3,
            name:'Anxin', 
            def: 'logo/消费logo2.png', 
            act: 'logo/消费logo2-w.png', 
            txt: 'Largest Blue-collar Apartments Operation in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465510&idx=1&sn=9a2dd516a3628d8d19e26ff25139ec09&chksm=f3dd16bec4aa9fa89206b2574fec2ebd98c907a4dda851b70e392ada33580820af845b970a27&token=1914594675&lang=zh_CN#rd`
        },
        { 
            id: 39, 
            type:3,
            name:'XiaoY', 
            def: 'logo/xiaoy.png', 
            act: 'logo/xiaoy-w.png', 
            txt: 'Leading Content Provider of Home Intelligent Devices', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&tempkey=MTA5Ml9MMHhvZTNBUWNsRVgrMEZrMEpoYlN3TUtycV9qRnZPU2Q3T2VCUy02V3E3MXlZaFNleTc4UzlSaHZzTUVydzBYQlRsQmFlRnhPd0wzZFg5RFVuMUJNTXNVTTV2QWRyelVwYjFjTVRXZ1dOZ3JLc2h1Qkc0M0FTeGkwUDB0RE5nOGxTNVRqM3lnek8weWFsQlYxT2FKN19yX2ROQmZsaUZWYVJ3dUlnfn4%3D&chksm=73dd147c44aa9d6a77dfeb3a76ba0502845fa2be1972374351199f352cecbe1af85cd3189fe8#rd`
        },
        { 
            id: 12, 
            type:3,
            name:'DEAMPIX', 
            def: 'logo/消费logo4.png', 
            act: 'logo/消费logo4-w.png', 
            txt: 'Online Original Animation Content Creation Community in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465370&idx=1&sn=ced799ecdb8aa7e1019c2f3e0a25fcd9&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 11, 
            type:3,
            name:'Jia You Xue Ba', 
            def: 'logo/消费logo3.png', 
            act: 'logo/消费logo3-w.png', 
            txt: 'Leading One to One C2C Online Education Platform in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465391&idx=1&sn=a7adddae8ba8f0aa178a01732cf67ff0&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 32,
            type: 4,
            name: 'MYMRO', 
            def: 'logo/guanjie.png', 
            act: 'logo/guanjie-w.png', 
            txt: 'Chinese Subsidiary of Global Leading MRO Supplier W.W. Grainger', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466316&idx=1&sn=088eeb58de4bb895e0642cc943d0bd39&scene=19&token=970758363&lang=zh_CN#wechat_redirect' 
        },
        { 
            id: 15, 
            type:4,
            name:'KZ Mall', 
            def: 'logo/工业logo3.png', 
            act: 'logo/工业logo3-w.png', 
            txt: 'Leading Auto Parts Supply Chain Platform in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465410&idx=1&sn=1ca21f27bb673a5e5a929e05f0d8562f&chksm=f3dd16dac4aa9fccb57e4cf9443ae6b1eba6290c1c851f97c534265a92a03fbf17a1417e1eee&token=1271111519&lang=zh_CN#rd`
        },
        { 
            id: 41, 
            type:4,
            name:'GoFun', 
            def: 'logo/gofun.png', 
            act: 'logo/gofun-w.png', 
            txt: 'Car-sharing Platform launched by Shouqi Grou', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466381&idx=1&sn=ae8ee70f1ea58b5b9eeb63fa798f4ad4&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 40, 
            type:4,
            name:'CiDi', 
            def: 'logo/xidi.png', 
            act: 'logo/xidi-w.png', 
            txt: 'Next-gen Logistics System driven by AI Technologies', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466242&idx=1&sn=391ee14f3861a93b76a82aed729859d1&scene=19&token=970758363&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 58, 
            type: 4,
            name: 'IPLAS', 
            def: 'logo/股权融资消费logo5.png', 
            act: 'logo/股权融资消费logo5-w.png', 
            txt: 'Leading Plastics and Chemical B2B E-commerce Platform in Asia', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465190&idx=1&sn=4226d5662315fd888add02319c956f69&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        }, 
        { 
            id: 16, 
            type:4,
            name:'Tingban', 
            def: 'logo/工业logo4.png', 
            act: 'logo/工业logo4-w.png', 
            txt: 'Intelligent Car Audio Service Provider in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465597&idx=1&sn=1dd69d0b3e5724254b8101255e4ce903&chksm=f3dd1665c4aa9f733ff621562c5a20a303743cedf607930a4c0f8697502d8c54c3656fbf8b02&token=1914594675&lang=zh_CN#rd`
        },
        { 
            id: 42, 
            type:4,
            name:'Xiangxin', 
            def: 'logo/股权融资工业logo4.png', 
            act: 'logo/股权融资工业logo4-w.png', 
            txt: 'Logistics Service Provider focused on Seaport Container Transportation', 
            url: `#`
        },
        // { 
        //     id: 13, 
        //     type:4,
        //     name:'Xpeng Motors', 
        //     def: 'logo/工业logo1.png', 
        //     act: 'logo/工业logo1-w.png', 
        //     txt: 'Focused on development of smart electric vehicles', 
        //     url: `#`
        // },
        // { 
        //     id: 14, 
        //     type:4,
        //     name:'ZongmuTech', 
        //     def: 'logo/工业logo2.png', 
        //     act: 'logo/工业logo2-w.png', 
        //     txt: 'Leading Autonomous Driving and ADAS Solution Provider in China', 
        //     url: `#`
        // },
        
        { 
            id: 17, 
            type:5,
            name:'M&G (603899.SH)', 
            def: 'logo/兼收logo1.png', 
            act: 'logo/兼收logo1-w.png', 
            txt: 'Largest Stationery Brand in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504981519&idx=1&sn=9ff246e5b5f533528a81b970
            7aa018dc&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 18, 
            type:5,
            name:'Babycare', 
            def: 'logo/兼收logo2.png', 
            act: 'logo/兼收logo2-w.png', 
            txt: 'Leading Cross-border Maternity & Baby E-commerce Brand in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652466259&idx=1&sn=525928b6cc15f96b53deaaa37db608e6&chksm=f3dd138bc4aa9a9dfc1a0e7a1a917ca22465705a20d13856597c10d722e8ffd195305d4afa5c&token=545970318&lang=zh_CN#rd'
        },
        { 
            id: 19, 
            type:5,
            name:'JNBY (3306.HK)', 
            def: 'logo/兼收logo3.png', 
            act: 'logo/兼收logo3-w.png', 
            txt: 'Leading Clothing Designer Brand in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ
            ==&mid=504981504&idx=1&sn=e1fba607e56a12e61e5f951497a1a61b&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 20, 
            type:5,
            name:'ECCOM', 
            def: 'logo/兼收logo4.png', 
            act: 'logo/兼收logo4-w.png', 
            txt: 'Next-gen IT Infrastructure Solutions Provider in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652459128&idx=2&sn=b03187ab99f9fb4cc40a36d7811f3e37&chksm=f3dd2fa0c4aaa6b6a4ec97f88e6403dc3c9ae2b1fc3215bb095e9a5e6a32d8059969886cfb68&token=545970318&lang=zh_CN#rd`
        },
        { 
            id: 21, 
            type:5,
            name:'Kerunxi Medical', 
            def: 'logo/兼收logo5.png', 
            act: 'logo/兼收logo5-w.png', 
            txt: 'Leading Orthopedic Medical Equipment Distributor in East China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504978482&idx=1&sn=ae12e27af5c511278c6c865e125ae209&scene=1
            9&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 22, 
            type:5,
            name:'Source Photonics', 
            def: 'logo/兼收logo6.png', 
            act: 'logo/兼收logo6-w.png', 
            txt: 'Global Leading Supplier of Innovative and Reliable Optical Communication Technologies', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504975241&idx=1&sn=b8b296b2e81c79ea0c6e33d489
            ea614a&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 23, 
            type:5,
            name:'The Little Gym', 
            def: 'logo/兼收logo7.png', 
            act: 'logo/兼收logo7-w.png', 
            txt: 'Top 3 Early-education Brand focused on Sports Education for Children', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465303&idx=1&sn=2b4959457837f8e17b01c30a20025e48&scene
            =19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 24, 
            type:5,
            name:'AHAVA', 
            def: 'logo/兼收logo8.png', 
            act: 'logo/兼收logo8-w.png', 
            txt: 'Unique and Precious National Treasure-level Skin Care Brand in Israel', 
            url: `#`
        },
        { 
            id: 24, 
            type:5,
            name:'Grant Water', 
            def: 'logo/兼收logo9.png', 
            act: 'logo/兼收logo9-w.png', 
            txt: 'Leading Industrial Wastewater Treatment Solution Provider and Membrane Manufacturer in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504977627&idx=1&sn=a53b0a7d93ed03c1b6469e31
            ac89e5a2&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 24, 
            type:5,
            name:'Peleg Design', 
            def: 'logo/兼收logo10.png', 
            act: 'logo/兼收logo10-w.png', 
            txt: 'A Well-known High-end Gift and Homeware Design Company in Israel', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504981682&idx=1&sn=7b8795efda2f88fcc3d73f709ab86c2e&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        }, 
        { 
            id: 25, 
            type:6,
            name:'SK Group', 
            def: 'logo/战略logo1.png', 
            act: 'logo/战略logo1-w.png', 
            txt: 'South Korea\'s Third Largest Multinational Conglomerate', 
            url: ``,
            intro:`InvesTarget promoted the establishment of a joint venture between SK Group and Country Garden for an automobile complex fund`
        } ,
        { 
            id: 26, 
            type:6,
            name:'AsiaPak Investments', 
            def: 'logo/战略logo2.png', 
            act: 'logo/战略logo2-w.png', 
            txt: 'Pakistan\'s Well-known Cross-border Investment Institution', 
            url: ``,
            intro:`InvesTarget acted as exclusive strategic and financial advisor`
        } ,
        { 
            id: 27, 
            type:6,
            name:'Kolon Group', 
            def: 'logo/战略logo3.png', 
            act: 'logo/战略logo3-w.png', 
            txt: 'Korea\'s leading comprehensive group', 
            url: ``,
            intro:`nvesTarget acted as KOLON’s financial advisor on investments in Asia`
        } ,
        { 
            id: 28, 
            type:6,
            name:'LHL Medical Group', 
            def: 'logo/战略logo4.png', 
            act: 'logo/战略logo4-w.png', 
            txt: 'Norway\'s largest comprehensive medical institution', 
            url: ``,
            intro:`InvesTarget acted as the exclusive strategic and financial advisor for the two major medical markets in China and the United States`
        } ,
        { 
            id: 29, 
            type:6,
            name:' Daelim Industries', 
            def: 'logo/战略logo5.png', 
            act: 'logo/战略logo5-w.png', 
            txt: 'Construction Giant in South Korea', 
            url: ``,
            intro:`InvesTarget acted as strategic and financial advisor`
        } ,
        { 
            id: 30, 
            type:6,
            name:'Okayfa Group', 
            def: 'logo/战略logo6.png', 
            act: 'logo/战略logo6-w.png', 
            txt: 'Leading Camellia Oil Brand in China', 
            url: ``,
            intro:`InvesTarget acted as financial advisor for capital markets`
        } 
    ] 


    // 评价
    let assess = [ 
        {
            id:1,
            name:'Weixue Guo',
            title:'PETKIT-CEO',
            content: 'We are very impressed by InvesTarget’s professionalism, project management and execution as a leading investment bank in China during our private placement process. Thanks to the support of Kun Yan Capital and other shareholders, the Company will further invest in chain stores and build an open, cooperative, win-win pet consumption platform.'
        },
        {
            id:2,
            name:'Haoran Yu',
            title:'UDESK-Founder & CEOli',
            content:`InvesTarget’s excellent ability proved in the transaction process is much appreciated. Their deep understanding of the market, excellent insight into the project and rich capital market experience and resources have successfully helped us find the top investors. We are very satisfied with their professional services and hence the guarantee on the rapid transaction.`
        },
        {
            id:3,
            name:'Xinghua Xue',
            title:'YunZhangFang-Founder & CEO',
            content:`Our cooperation with InvesTarget is smooth and pleasant. InvesTarget has demonstrated a very professional value mining and precise investor matching ability in the project, which guarantees the smooth closing of the deal. We appreciate and trust the services of InvesTarget, because they show a very high degree of professionalism in transaction structuring and negotiations, which is also the reason why we choose to cooperate with them.`
        },
        {
            id:4,
            name:'Wenting Tang',
            title:'M&G-Strategic Investment Department',
            content:`In the process of M&G's overseas M&A activities, InvesTarget has undoubtedly played a very important role, and their one-stop service ability has impressed our C-suite and management. The team has mature methodologies in the design of overseas strategy, target selection, transaction negotiation and post-merger integration. It can be said that the rich experience of InvesTarget in overseas merger and acquisition is the powerful driving force of M&G's overseas expansion strategies.`
        },
        {
            id:5,
            name:'Wei Hu',
            title:'The Little Gym-CEO',
            content:`Really appreciate the services provided by InvesTarget in the whole transaction process, including the negotiation of the overall transaction structure, the locking of interests in China, the distribution of future interests, etc. They not only effectively connect us with the capital side, but also provide guidance and balance on key issues of the transaction. Thank you very much for your service!`
        },
        {
            id:6,
            name:'Yuezhong Huang',
            title:'Dreampix-Founder & CEO',
            content:`Really appreciate the empowering support provided to touch man in capital operation, strategic positioning and product service. Their excellent professional quality and serious and responsible attitude helped touch man overcome the cold winter of capital. When touch man encountered difficulties and setbacks, InvesTarget has also been accompanying and supporting us, which makes us feel the warmth of the cold winter.`
        },
        {
            id:7,
            name:'Haoqin Gu',
            title:'Holovis-Director of China',
            content:`InvesTarget has in-depth understanding of key areas, rich industry practical experience, and professional ability to provide corporate strategic development advisory. A unique and highly attractive equity investment story drafted and finalized for us by InvesTarget was successfully recognized by RK Properties. We are very confident in InvesTarget and look forward to further cooperation with them.`
        },
        {
            id:8,
            name:'Shimin Song',
            title:'ECCOM Strategic Development Department',
            content:`InvesTarget has professional investment banking and consulting service capabilities, providing us with strategic services, target screening, project execution, post-investment management and other services. With the help of rich global target resources, InvesTarget provides us with good suggestions for searching and locating high-quality companies in the US IT and infrastructure fields, and for us to root our technology and services in the US market and the global allocation of capital.`
        },
        {
            id:9,
            name:'Pengfei Wang',
            title:'Tiger Global-Managing Director',
            content:`InvesTarget has in-depth business insight, efficient and professional project execution capabilities. With the assistance of InvesTarget, we were able to approach projects with great potential and were able to quickly cooperate with them. They are one of the few financial advisors with a global perspective in China. I am very satisfied with the professional services provided by InvesTarget.`
        },
        {
            id:10,
            name:'Quanli Xu',
            title:'Sequoia CBC Cross-border Digital Industry Fund-Partner',
            content:`InvesTarget has a very in-depth research and introduction to the global science and technology field, and its trading capabilities in the high-tech field are praiseworthy, especially in terms of project mining and accurate recommendation. They have a global perspective, can understand the needs of investors, and have effectively contributed to Sequoia and excellent projects. We have always maintained close and continuous communication with InvesTarget to jointly invest in outstanding Chinese entrepreneurs!`
        },
        {
            id:11,
            name:'Qixian Wang',
            title:'The Carlyle Group-Managing Director',
            content:`With excellent transaction experience and professional  spirit, InvesTarget is one of the few domestic financial advisors with capital markets and strategic consulting experience, and also a rare team that can provide all-round services. Their insight in industry and global vision in identifying opportunities are very valuable. We have a lot of exchanges in industry views and the markets, and we look forward to more cooperation opportunities.`
        },
        {
            id:12,
            name:'Kai Jiang',
            title:'Coatue Management-Managing Director',
            content:`We have achieved many times of cooperation with InvesTarget. InvesTarget team has efficient execution ability and rich experience, which facilitates the smooth progress of multiple rounds of transactions, and provides us with good investment suggestions. We will continue to place our bets in the Chinese market and look forward to more and more in-depth cooperation with InvesTarget in the future.`
        },
        {
            id:13,
            name:'Jing Zhang',
            title:'Primavera Capital-Partner',
            content:`InvesTarget has the expertise in the operation of industrial developments and capital markets. They have their own unique understanding and insights in industrial research, project selection and other aspects, leaving us a deep impression. We will keep in touch with and exchange with InvesTarget and look forward to cooperation opportunities with InvesTarget in the future.`
        },
        {
            id:14,
            name:'Liwei Chen',
            title:'OFC-Partner',
            content:`We had a very pleasant contact and exchange with InvesTarget. The executive team of multi-dimensional InvesTarget has accumulated rich practical experience, and has outstanding trading achievements, with unique grasp of the project and market. We believe in the professional service level of InvesTarget and look forward to further cooperation with them.`
        },
        {
            id:15,
            name:'Bin Zhu',
            title:'Goldman Sachs-Managing Director',
            content:`InvesTarget has played an all-round role in facilitating the two sides to reach a deal. From the work of InvesTarget, we have completed all matters within the established time, or exactly within three months. I am very satisfied with the professional and insightful service provided by InvesTarget.`
        },
        {
            id:16,
            name:'Haoze Wang',
            title:'AA Investment-Partner',
            content:`InvesTarget has the leading investment banking service ability, and has demonstrated professional quality in many dimensions. Their expertise in capital operation and strategic consulting, in addition to the implementation of the project, has promoted the long-term development of the enterprise. Like us, InvesTarget has the feelings of accompanying the growth of enterprises`
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
                        <span class="lg En active"><a href="/mobile/en/index.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/index.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/股权融资.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/股权融资.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout1').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/2_2.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/2_2.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout2').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/2_3.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/2_3.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout3').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/3.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/3.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout4').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/4_1.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/4_1.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout5').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/4_2.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/4_2.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout6').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
                        <span class="lg En active"><a href="/mobile/en/contact.html">En</a></span>
                        <span class="lg Cn"><a href="/mobile/contact.html">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Investment Banking<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="股权融资.html">CAPITAL-RAISING ADVISORY</a></span>
                                    <span><a href="2_2.html">Merger & Acquisitions</a></span>
                                    <span><a href="2_3.html">Leadership</a></span>
                                </div>
                            </div>
                        </li>
                        <li><a href="3.html">Industrial Investment</a></li>
                        <li>
                            <div class="fx">Industrial Development<i>+</i></div>
                            <div class="hover_box">
                                <div class="getHeight">
                                    <span><a href="4_1.html">Introduction & Development History</a></span>
                                    <span><a href="4_2.html">Industrial Complex</a></span> 
                                </div>
                            </div>
                        </li> 
                    </ul>
                    <div class="link_box"> 
                        <a href="http://mtest.investarget.com/login" class="login_">Login</a>
                        <a href="contact.html" class="about_us">Contact us ></a>
                    </div>
                </div>
            </div>
        </nav>  `)

    // 打印底部
    // 
    $('#layout7').append(`<footer>
            <div class="fhead_">
                <div class="f-l"> 
                    <i>Contact us</i>
                    <b>021-5258 0136</b>
                    <em>career@investarget.com</em>
                </div>
                <div class="f-r">
                    <div class="code_box">
                        <img src="images/微信二维码.png" alt="">
                        <p>WeChat Official Account</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>APP Download</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>copyright©2020 Investarget</p>
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
        $(this).text('The end')
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
