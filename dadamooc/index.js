var hotWords = ["香水百合", "古堡小镇", "一百分", "偏靠才华",
        "小龙女", "力争上游", "老人与海", "精诚所至", "一身是胆", "加油",
        "真心", "瑞雪", "灿若桃花", "鹏程万里", "云卷云舒", "猫屎咖啡", "一鸣惊人",
        "上交国家", "麦霸", "博闻强识", "巴塞罗那", "长腿欧巴", "美男子", "火影忍者",
        "欣欣向荣", "千里之行", "凯旋", "浮花浪蕊", "执子之手", "欢聚一堂", "阿拉斯加",
        "鸡尾酒", "四平八稳", "四月物语", "大吉大利", "丽江古城", "巴士长", "礼帽", "心心相印",
        "金榜题名", "财经巴士", "陈绮贞", "冰与火", "好心情", "八面春风", "挪威森林", "美酒",
        "诗和远方", "高级定制", "黄岩岛", "绿色出行", "布达拉宫", "永暑岛", "大唐盛世", "马尔代夫",
        "平平安安", "国色天香", "健康", "老炮儿", "傻白甜", "棉布长裙", "有志竟成", "天天向上", "极限挑战",
        "三思而行", "三阳开泰", "摩卡咖啡", "杨颖", "漂亮", "快乐", "宁静", "嗒我上班", "迎刃而解", "李沁",
        "维纳斯", "我爱嗒嗒", "快快乐乐", "乘车愉快", "我十八岁", "心旷神怡", "妩媚动人", "嗒嗒包车",
        "嗒嗒男神", "骑士精神", "甄嬛传", "山海经", "和气生财", "一如既往", "破釜沉舟", "洞房花烛", "你好帅",
        "刘亦菲", "老司机", "闭月羞花", "沉鱼落雁", "万事如意", "拉布拉多", "华丽冒险", "柔情似水", "机智如我",
        "多读书", "花好月圆", "美神", "落落大方", "纸牌屋", "英俊", "喜剧人", "带你飞", "嗒嗒黄", "鹿晗", "进步",
        "你好呀", "澳门风云", "五光十色", "可爱", "疯狂动物", "石榴夫妇", "跑男", "我满拼的", "画面太美",
        "相互理解", "貌美如花", "月光宝盒", "孙悟空", "我的天使", "厚德载物", "奉天承运", "靠脸吃饭",
        "矢志不移", "风雨无阻", "倪妮", "赤心相待", "双喜临门", "张爱玲", "小鲜肉", "老唱片",
        "高跟鞋", "非诚勿扰", "芈月传", "助人为乐", "精致妆容", "奋发有为", "迪丽热巴",
        "美梦成真", "极致浪漫", "恭喜发财", "阿玛吉祥", "卡地亚", "修心养性",
        "星星之火", "琅琊榜", "天气真好", "我们", "聊天室见", "大幂幂", "美式咖啡",
        "五福临门", "一马平川", "起来嗨", "寻龙诀", "长乐未央", "皆大欢喜",
        "黄晓明", "乐善好施", "烛光晚餐", "开卷有益", "女医明妃", "梅花",
        "长城", "勤奋", "口红", "民族风", "熟能生巧", "丝绸之路", "午后阳光",
        "马到功成", "水滴石穿", "黄河", "心想事成", "大堡礁", "围城", "长江",
        "睡着上班", "善良", "百尺竿头", "刘诗诗", "干的不错", "文明", "创意巴士",
        "巴士生活", "恍若初见", "仁慈", "品学兼优", "天天开心", "身体健康", "和善",
        "两全其美", "神奇巴士", "回笼觉", "锲而不舍", "与我常在 ", "融会贯通", "四季安康",
        "团结", "三生有幸", "一往情深", "七星高照", "城会玩", "美人鱼", "我是歌手", "年年有余",
        "二人同心", "金玉良缘", "众志成城", "宜表白", "学富五车", "祝你好运", "世界真大",
        "太子妃", "一见如故", "巴士文化", "风雨同舟", "同呼吸", "人定胜天", "才貌双全",
        "企业支付", "嗒嗒女神", "静待花开", "一帆风顺", "郑爽", "再别康桥", "爱马仕",
        "哈根达斯", "不加班", "施华洛", "博学多才", "一米阳光", "博古通今", "宜吃美食",
        "持之以恒", "四季发财", "毅力", "多睡一会", "COACH", "在下良辰", "坐车凭证",
        "约吗", "周边游", "前程似锦", "巴厘岛", "恋人", "与你同在", "春风得意",
        "步步高升", "闪电侠", "萌萌哒", "志在四方", "初恋", "帆布鞋", "秦时明月",
        "肝胆相照", "吃好喝好", "美梦", "梦想", "理想", "高山流水", "杠杠的", "宝宝",
        "后会有期", "草原", "嗒你回家", "拿铁咖啡", "楚辞", "蓝莲花", "窈窕淑女", "有轨电车",
        "最帅巴爷", "与子偕老", "风衣", "进取", "牛顿", "我美吗", "不见不散", "全车最美",
        "美食巴士", "巴士节", "古力娜扎", "霍金", "好好吃饭", "日进斗金", "火锅巴士",
        "幸运巴士", "一日千里", "一人一座", "创业巴士", "单反", "辛苦了", "拼巴士", "荒野猎人",
        "英式午茶", "健身巴士", "中央空调", "四小天鹅", "爱因斯坦", "福利", "儒雅", "最萌嗒友",
        "珊瑚海", "红红火火", "生如夏花", "玛琪雅朵", "勇往直前", "叶问", "意气风发", "一生一世",
        "知心爱人", "万象更新", "发展", "特斯拉", "牛津包", "香水", "孔子", "灼灼其华", "悠然",
        "嗒嗒之夜", "优雅知性", "黑巧克力", "一见钟情", "率性而为", "财源广进", "女神节", "神韵",
        "最强大脑", "相亲巴士", "双宿双栖", "我好想你", "美丽", "巴爷你好", "爱情", "速度激情",
        "霍建华", "烟雨倾城", "六六大顺", "知音", "知性", "小资情调", "蒸蒸日上", "百炼成钢",
        "百折不挠", "胡歌", "花千骨", "何以笙箫", "无懈可击", "私人派对", "炸鸡啤酒", "好声音",
        "自强不息", "尊老爱幼", "百年好合", "颜值爆表 ", "最美巴神", "美容巴士", "福如东海",
        "岁月静好", "亲师友", "十全十美", "好好开车", "周杰伦", "白雪公主", "卡布奇诺", "喜大普奔",
        "黄道吉日", "百战百胜", "吉祥", "金牌司机", "爱琴海", "哈士奇", "天天向上", "如意", "一路顺风",
        "卡农", "北极之光", "蓝天", "香奈儿", "百发百中", "锦绣前程", "白云", "山花烂漫", "手气最佳",
        "我很快乐", "缘分", "亚洲天团", "天长地久", "宝宝好美", "八拜之交", "嗒嗒巴士", "赤影传说",
        "冯诺依曼", "谢谢师傅", "蛋糕巴士", "定制巴士", "芭蕾舞", "好喜欢你", "今日有喜", "赚钱养家",
        "天鹅"
    ],
    eticket = {
        platform_id: 1,
        main_line_type: 1,
        line_type: 7,
        frequency: 600,
        ticket_code: "1511231034188240-20151123-1",
        start_date: "2018-11-23",
        start_time: "7:30:00",
        end_time: "19:30:00",
        line_start_time: "17:30:00",
        on_site_name: "南山邮局测试地址",
        on_site_lng: "113.92009077867",
        on_site_lat: "22.506864105589",
        off_site_name: "泰邦科技大厦测试地址",
        off_site_lng: "113.952397",
        off_site_lat: "22.536342",
        tog_line_id: "344",
        line_code: "344-82-90",
        is_checked: "0",
        ticket_color: "#d3b17d",
        car_number: "1234是",
        line_card: "A123",
        order_number: "1511231034188240",
        ticket_number: 3,
        ticket_version: 5,
        ticket_identifier: "2312",
        ticket_key: "3790c2e0170cb569ed72fd49d89dc616",
        ticket_ad: {
            mid_bg: {
                ad_id: "129",
                ad_desc: "背景描述",
                image_url: "",
                target_url: "http://www.buskeji.com"
            },
            left_button: {
                ad_id: "128",
                ad_desc: "按钮描述",
                image_url: "http://test.public.ds.dadabus.com/ad_res/20151123103924_colin.jpg",
                target_url: "http://www.baidu.com"
            },
            bottom_animate: {
                ad_id: "130",
                ad_desc: "跑动小车描述",
                image_url: "http://test.public.ds.dadabus.com/ad_res/20151123120159_colin.jpg",
                target_url: "http://sina.com.cn"
            }
        }
    },
    serverTimeDif = 0,
    tokenStopUpBeforeMin = 6e5,
    md5 = function(e) {
        function t(e) {
            var t = (e >>> 0).toString(16);
            return "00000000".substr(0, 8 - t.length) + t
        }

        function n(e) {
            var t, n = [];
            for (t = 0; t < e.length; t++)
                n = n.concat(d(e[t]));
            return n
        }

        function r(e) {
            var t, n = [];
            for (t = 0; 8 > t; t++)
                n.push(255 & e),
                e >>>= 8;
            return n
        }

        function i(e, t) {
            return 4294967295 & e << t | e >>> 32 - t
        }

        function o(e, t, n) {
            return e & t | ~e & n
        }

        function a(e, t, n) {
            return n & e | ~n & t
        }

        function s(e, t, n) {
            return e ^ t ^ n
        }

        function c(e, t, n) {
            return t ^ (e | ~n)
        }

        function u(e, t) {
            return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
        }

        function d(e) {
            var t, n, r, i = [];
            for (t = 0; t < e.length; t++)
                if (e.charCodeAt(t) <= 127)
                    i.push(e.charCodeAt(t));
                else
                    for (n = encodeURIComponent(e.charAt(t)).substr(1).split("%"),
                        r = 0; r < n.length; r++)
                        i.push(parseInt(n[r], 16));
            return i
        }

        function l() {
            var e, n = "",
                r = 0,
                i = 0;
            for (e = 3; e >= 0; e--)
                i = arguments[e],
                r = 255 & i,
                i >>>= 8,
                r <<= 8,
                r |= 255 & i,
                i >>>= 8,
                r <<= 8,
                r |= 255 & i,
                i >>>= 8,
                r <<= 8,
                r |= i,
                n += t(r);
            return n
        }

        function p(e) {
            var t, n = new Array(e.length);
            for (t = 0; t < e.length; t++)
                n[t] = e[t];
            return n
        }

        function f(e, t) {
            return 4294967295 & e + t
        }

        function h() {
            function e(e, t, n, r) {
                var o = _;
                _ = b,
                    b = y,
                    y = f(y, i(f(g, f(e, f(t, n))), r)),
                    g = o
            }
            var t, n, d, p, h, m, g, y, b, _, w, x = v.length;
            if (v.push(128),
                t = v.length % 64,
                t > 56) {
                for (n = 0; 64 - t > n; n++)
                    v.push(0);
                t = v.length % 64
            }
            for (n = 0; 56 - t > n; n++)
                v.push(0);
            for (v = v.concat(r(8 * x)),
                d = 1732584193,
                p = 4023233417,
                h = 2562383102,
                m = 271733878,
                g = 0,
                y = 0,
                b = 0,
                _ = 0,
                n = 0; n < v.length / 64; n++)
                g = d,
                y = p,
                b = h,
                _ = m,
                w = 64 * n,
                e(o(y, b, _), 3614090360, u(v, w), 7),
                e(o(y, b, _), 3905402710, u(v, w + 4), 12),
                e(o(y, b, _), 606105819, u(v, w + 8), 17),
                e(o(y, b, _), 3250441966, u(v, w + 12), 22),
                e(o(y, b, _), 4118548399, u(v, w + 16), 7),
                e(o(y, b, _), 1200080426, u(v, w + 20), 12),
                e(o(y, b, _), 2821735955, u(v, w + 24), 17),
                e(o(y, b, _), 4249261313, u(v, w + 28), 22),
                e(o(y, b, _), 1770035416, u(v, w + 32), 7),
                e(o(y, b, _), 2336552879, u(v, w + 36), 12),
                e(o(y, b, _), 4294925233, u(v, w + 40), 17),
                e(o(y, b, _), 2304563134, u(v, w + 44), 22),
                e(o(y, b, _), 1804603682, u(v, w + 48), 7),
                e(o(y, b, _), 4254626195, u(v, w + 52), 12),
                e(o(y, b, _), 2792965006, u(v, w + 56), 17),
                e(o(y, b, _), 1236535329, u(v, w + 60), 22),
                e(a(y, b, _), 4129170786, u(v, w + 4), 5),
                e(a(y, b, _), 3225465664, u(v, w + 24), 9),
                e(a(y, b, _), 643717713, u(v, w + 44), 14),
                e(a(y, b, _), 3921069994, u(v, w), 20),
                e(a(y, b, _), 3593408605, u(v, w + 20), 5),
                e(a(y, b, _), 38016083, u(v, w + 40), 9),
                e(a(y, b, _), 3634488961, u(v, w + 60), 14),
                e(a(y, b, _), 3889429448, u(v, w + 16), 20),
                e(a(y, b, _), 568446438, u(v, w + 36), 5),
                e(a(y, b, _), 3275163606, u(v, w + 56), 9),
                e(a(y, b, _), 4107603335, u(v, w + 12), 14),
                e(a(y, b, _), 1163531501, u(v, w + 32), 20),
                e(a(y, b, _), 2850285829, u(v, w + 52), 5),
                e(a(y, b, _), 4243563512, u(v, w + 8), 9),
                e(a(y, b, _), 1735328473, u(v, w + 28), 14),
                e(a(y, b, _), 2368359562, u(v, w + 48), 20),
                e(s(y, b, _), 4294588738, u(v, w + 20), 4),
                e(s(y, b, _), 2272392833, u(v, w + 32), 11),
                e(s(y, b, _), 1839030562, u(v, w + 44), 16),
                e(s(y, b, _), 4259657740, u(v, w + 56), 23),
                e(s(y, b, _), 2763975236, u(v, w + 4), 4),
                e(s(y, b, _), 1272893353, u(v, w + 16), 11),
                e(s(y, b, _), 4139469664, u(v, w + 28), 16),
                e(s(y, b, _), 3200236656, u(v, w + 40), 23),
                e(s(y, b, _), 681279174, u(v, w + 52), 4),
                e(s(y, b, _), 3936430074, u(v, w), 11),
                e(s(y, b, _), 3572445317, u(v, w + 12), 16),
                e(s(y, b, _), 76029189, u(v, w + 24), 23),
                e(s(y, b, _), 3654602809, u(v, w + 36), 4),
                e(s(y, b, _), 3873151461, u(v, w + 48), 11),
                e(s(y, b, _), 530742520, u(v, w + 60), 16),
                e(s(y, b, _), 3299628645, u(v, w + 8), 23),
                e(c(y, b, _), 4096336452, u(v, w), 6),
                e(c(y, b, _), 1126891415, u(v, w + 28), 10),
                e(c(y, b, _), 2878612391, u(v, w + 56), 15),
                e(c(y, b, _), 4237533241, u(v, w + 20), 21),
                e(c(y, b, _), 1700485571, u(v, w + 48), 6),
                e(c(y, b, _), 2399980690, u(v, w + 12), 10),
                e(c(y, b, _), 4293915773, u(v, w + 40), 15),
                e(c(y, b, _), 2240044497, u(v, w + 4), 21),
                e(c(y, b, _), 1873313359, u(v, w + 32), 6),
                e(c(y, b, _), 4264355552, u(v, w + 60), 10),
                e(c(y, b, _), 2734768916, u(v, w + 24), 15),
                e(c(y, b, _), 1309151649, u(v, w + 52), 21),
                e(c(y, b, _), 4149444226, u(v, w + 16), 6),
                e(c(y, b, _), 3174756917, u(v, w + 44), 10),
                e(c(y, b, _), 718787259, u(v, w + 8), 15),
                e(c(y, b, _), 3951481745, u(v, w + 36), 21),
                d = f(d, g),
                p = f(p, y),
                h = f(h, b),
                m = f(m, _);
            return l(m, h, p, d).toUpperCase()
        }
        var v = null,
            m = null;
        return "string" == typeof e ? v = d(e) : e.constructor == Array ? 0 === e.length ? v = e : "string" == typeof e[0] ? v = n(e) : "number" == typeof e[0] ? v = e : m = typeof e[0] : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? v = p(new Uint8Array(e)) : e instanceof Uint8Array || e instanceof Int8Array ? v = p(e) : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? v = p(new Uint8Array(e.buffer)) : m = typeof e : m = typeof e,
            m && alert("MD5 type mismatch, cannot process " + m),
            h()
    };

function mkToken(e, t) {
    var n = e.ticket_key,
        r = e.start_date,
        i = e.line_start_time;
    "string" == typeof n && n || alert("数据格式错误：[ticketKey]"),
        "string" == typeof r && r || alert("数据格式错误：[startDate]"),
        "string" == typeof i && i || alert("数据格式错误：[lineStartTime]"),
        "[object Array]" === Object.prototype.toString.call(t) && t.length || alert("数据格式错误：[tokenNames]");
    var o, a, s, c = (new Date).getTime() + serverTimeDif,
        u = new Date(r.replace(/-/g, "/") + " " + i).getTime(),
        d = Math.round(c / 1e3 / 60),
        l = function(e) {
            for (var t = 0, n = 0, r = e.length; r > n; ++n)
                char = e.charCodeAt(n),
                t = char + (t << 6) + (t << 16) - t;
            return t
        };
    return tokenStopUpBeforeMin > u - c ? s = r + i : s = d,
        s = n + s,
        o = Math.abs(l(md5(s))) % t.length,
        a = t[o]
};
var textInput=mkToken(eticket, hotWords);

document.getElementById("token").innerHTML = textInput;
