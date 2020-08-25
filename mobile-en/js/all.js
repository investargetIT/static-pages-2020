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
            id: 1,
            type:1,
            name:'YUNQUNA', 
            def: 'logo/科技logo1.png', 
            act: 'logo/科技logo1-w.png', 
            txt: 'The Largest Digital One-stop Cross-border Logistics Service Provider in China', 
            url: 'https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465320&idx=1&sn=b5ed5688c3266d71e1eb93b7761f9a4c&scene=19&token=1271111519&lang=zh_CN#wechat_redirect' 
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
            id: 3, 
            type:1,
            name:'KeneXa', 
            def: 'logo/科技logo3.png', 
            act: 'logo/科技logo3-w.png', 
            txt: '全球领先的权威整体人力资源解决方案服务供应商', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==
            &mid=2652464496&idx=1&sn=2d631f6fd028f8f0c1f9e4ff3
            87e0cca&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 4, 
            type:1,
            name:'Holovis', 
            def: 'logo/科技logo4.png', 
            act: 'logo/科技logo4-w.png', 
            txt: 'UK Immersive Virtual Reality Solution Provider', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=26
            52464496&idx=1&sn=2d631f6fd028f
            8f0c1f9e4ff387e0cca&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 5, 
            type:2,
            name:'Kerunxi Medical', 
            def: 'logo/健康logo1.png', 
            act: 'logo/健康logo1-w.png', 
            txt: 'Leading Orthopedic Medical Equipment Distributor in East China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=504978482
            &idx=1&sn=ae12e27af5c511278c6c865e125ae209&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
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
            id: 7, 
            type:2,
            name:'Yizhun AI', 
            def: 'logo/健康logo3.png', 
            act: 'logo/健康logo3-w.png', 
            txt: 'AI-assisted Medical Imaging Diagnosis Service Provider', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465183&idx=1&sn=b958aa1be8615dd34d0f7e74
            4a027adb&scene=19&token=664976924&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 8, 
            type:2,
            name:'Norling Bio', 
            def: 'logo/健康logo4.png', 
            act: 'logo/健康logo4-w.png', 
            txt: 'A Drug Research and Development Company focusing on a Next-generation of Antibody Coupling Technology', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465178&idx=1&sn=38d6d4676df
            4642c778249778a2b1581&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 9, 
            type:3,
            name:'Yunzhangfang', 
            def: 'logo/消费logo1.png', 
            act: 'logo/消费logo1-w.png', 
            txt: 'Leading Intelligent Accounting and Tax Services SaaS Company in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465250&idx=1&sn=
            50d0dfbebc03c5541d825a76a837a4c4&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 10, 
            type:3,
            name:'Anxin', 
            def: 'logo/消费logo2.png', 
            act: 'logo/消费logo2-w.png', 
            txt: 'Largest Blue-collar Apartments Operation in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465510&idx=
            1&sn=9a2dd516a3628d8d19e26ff25139ec09&chksm=f3dd16bec4aa9fa89206b
            2574fec2ebd98c907a4dda851b70e392ada33580820af845b970a27&token=1914594675&lang=zh_CN#rd`
        },
        { 
            id: 11, 
            type:3,
            name:'Jia You Xue Ba', 
            def: 'logo/消费logo3.png', 
            act: 'logo/消费logo3-w.png', 
            txt: 'Leading One to One C2C Online Education Platform in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465391&idx=1&
            sn=a7adddae8ba8f0aa178a01732cf67ff0&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 12, 
            type:3,
            name:'DEAMPIX', 
            def: 'logo/消费logo4.png', 
            act: 'logo/消费logo4-w.png', 
            txt: 'Online Original Animation Content Creation Community in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465370&idx=1&sn=
            ced799ecdb8aa7e1019c2f3e0a25fcd9&scene=19&token=1271111519&lang=zh_CN#wechat_redirect`
        },
        { 
            id: 13, 
            type:4,
            name:'小鹏汽车', 
            def: 'logo/工业logo1.png', 
            act: 'logo/工业logo1-w.png', 
            txt: '专注于互联网电动汽车的研发', 
            url: `#`
        },
        { 
            id: 14, 
            type:4,
            name:'纵目科技', 
            def: 'logo/工业logo2.png', 
            act: 'logo/工业logo2-w.png', 
            txt: '中国领先的自动驾驶和高级驾驶辅助系统技术及产品供应商', 
            url: `#`
        },
        { 
            id: 15, 
            type:4,
            name:'KZ Mall', 
            def: 'logo/工业logo3.png', 
            act: 'logo/工业logo3-w.png', 
            txt: 'Leading Auto Parts Supply Chain Platform in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465410&idx=1&sn=1ca21f27bb673a5e5a929e05f0d8562f&chksm=f3dd16dac4aa9fccb57
            e4cf9443ae6b1eba6290c1c851f97c534265a92a03fbf17a1417e1eee&token=1271111519&lang=zh_CN#rd`
        },
        { 
            id: 16, 
            type:4,
            name:'Tingban', 
            def: 'logo/工业logo4.png', 
            act: 'logo/工业logo4-w.png', 
            txt: 'Intelligent Car Audio Service Provider in China', 
            url: `https://mp.weixin.qq.com/s?__biz=MzIyMjIxODkzNQ==&mid=2652465597&idx=1&s
            n=1dd69d0b3e5724254b8101255e4ce903&chksm=f3dd1665c4aa9f733ff621562c5a20a303743cedf607930a4c0f8697502d8c54c3656fbf8b02&token=1914594675&lang=zh_CN#rd`
        },
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
            url: `#`
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
            url: `https://mp.weixin.qq.com/s?__biz=M
            zIyMjIxODkzNQ==&tempkey=MTAzMV8yeS9PTEduU1JPRVczWFJCaDZKNU5TaVgxSTlnRlMweUVXdUFOQVZ0MmlPSEcxYTJpZjNnWUZWUGZVTGUzbEQzR1RRcnliTmFxcTlGTWpyUy1oOHROV2NXekFjaTdHWWpEZk10RGx2Skc4bXJNdFhxT0E2V2NNMENoSE1QVExCUzM3VlJkVEVJT1FiTTNkNGJTNGp0VDM3TnJDdmRfUkNyX1dlejlRfn4%3D&chksm=73dd2fe244aaa6f43038782
            6d19d006ab8f4f25903284638ade4930681a477f6730f068dd07f#rd`
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
            name:'Shihao Zhou',
            title:'YunQuNa-Founder & CEO',
            content:`We appreciate InvesTarget’s long-standing support and help in thinking and planning the future. With their transaction experience and network in the global market, we are able to quickly promote our cooperation with Coatue and Sequoia Capital. They have rich deal experience and always give us help and advice at the right node. We look forward to more cooperation with InvesTarget in the future. `
        },
        {
            id:2,
            name:'Haoran Yu',
            title:'UDESK-Founder & CEO',
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
                        <span class="lg En"><a href="#">En</a></span>
                        <span class="lg Cn active"><a href="#">中</a></span>
                    </div>
                    <ul class="list_">  
                        <li><a href="index.html">MAIN PAGE</a></li>
                        <li>
                            <div class="fx">Boutique Investment Banking<i>+</i></div>
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
                        <a href="login.html" class="login_">Login</a>
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
                        <p>微信公众号</p>
                    </div>
                    <div class="code_box">
                        <img src="images/客户端二维码.png" alt="">
                        <p>客户端下载</p>
                    </div>
                </div> 
            </div>
            <div class="fend_">
                <p>© 2020 Shanghai Yingtai Information Technology Co., Ltd. All rights reserved.</p>
                <p>Shanghai ICP: No. 13002172-3</p>
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
