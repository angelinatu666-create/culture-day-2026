// ===== 文化日2026 中国展台 · 数据 =====
// 修改这个文件即可更新看板，不用动 HTML。
// status: "confirmed"(已确认) | "pending"(待确认) | "gap"(缺口/待办)

window.BOARD = {
  meta: {
    title: "文化日 2026 · 中国展台",
    subtitle: "餐饮统筹看板",
    date: "2026年10月9日 中午",
    owner: "餐饮负责人"
  },

  // ---------- 财务 ----------
  finance: {
    currency: "SGD",       // 募集收入币种
    budget: 400,           // 募集总收入（SGD）
    donors: [              // 捐赠人（SGD）
      { name: "韦又嘉", amount: 200 },
      { name: "Angelian", amount: 200 }
    ],
    // 财务只记录已经发生的支出（待采购/物资见「现场设备与耗材」页）
    spent: [
      { item: "小舞龙",         unit: 5.9,  qty: 2, cur: "CNY" },
      { item: "花围裙",         unit: null, qty: 6, cur: "CNY", note: "单价待补" },
      { item: "香槟色桌布",     unit: 49,   qty: 4, cur: "CNY" },
      { item: "红色桌布",       unit: 49,   qty: 4, cur: "CNY" },
      { item: "红色格子桌布",   unit: 10,   qty: 1, cur: "CNY" },
      { item: "金红色背景",     unit: null, qty: 1, cur: "CNY", note: "单价待补" },
      { item: "红色折扇",       unit: 35.6, qty: 2, cur: "CNY" },
      { item: "马年小挂旗",     unit: 57.8, qty: 2, cur: "CNY" }
    ]
  },

  // ---------- 赞助商 ----------
  sponsors: [
    { name: "海底捞",     status: "rejected", note: "已拒绝😔" },
    { name: "农耕记",     status: "rejected", note: "已拒绝😔" },
    { name: "袁记云饺",   status: "rejected", note: "已拒绝😔" },
    { name: "蜜雪冰城",   status: "rejected", note: "已拒绝😔" },
    { name: "太二酸菜鱼", status: "rejected", note: "已拒绝😔" },
    { name: "扑面而来",   status: "rejected", note: "已拒绝😔" },
    { name: "思家客",     status: "rejected", note: "已拒绝😔" }
  ],

  // ---------- 食物接龙（11人） ----------
  food: [
    { name: "Angelina",      items: ["番茄炒蛋 20人份", "海南鸡 20人份", "奶茶 20人份"], status: "confirmed" },
    { name: "Hilary",        items: ["蛋炒饭 10人份", "肉末豆角 10人份", "酸梅汤 30人份"], status: "confirmed" },
    { name: "小周周 Lily",   items: ["棉花糖机（现场制作）", "干锅鸡翅"], status: "confirmed" },
    { name: "晓芳",          items: ["煎饺 100个", "橘子 60个", "陕西凉皮 10份"], status: "confirmed" },
    { name: "思文",          items: ["包子 40个", "酱牛肉 20人份", "干炒牛河 10人份"], status: "confirmed" },
    { name: "许可",          items: ["韭菜猪肉饺子 100个"], status: "confirmed" },
    { name: "家桓",          items: ["饮料或零食"], status: "pending", note: "种类/数量待补充" },
    { name: "Vivi",          items: ["卤牛肉", "卤鹌鹑蛋和土豆"], status: "pending", note: "份量待补充" },
    { name: "Susan",         items: ["冰皮月饼 50粒"], status: "confirmed" },
    { name: "李静",          items: ["生煎包 50", "地瓜丸 50"], status: "confirmed" },
    { name: "LSY",           items: ["中式糕点 若干（鲍师傅 / 熊猫馋了 采购）"], status: "pending", note: "数量待定" },
    { name: "Alicia",        items: ["叉烧肉 约20人份"], status: "confirmed" }
  ],

  // ---------- 菜品归类汇总 ----------
  foodSummary: [
    { cat: "冷盘（摆盘简单装饰）", items: [
      "陕西凉皮 10份（晓芳）",
      "酱牛肉 20人份（思文）",
      "卤牛肉（Vivi）",
      "卤鹌鹑蛋（Vivi）",
      "叉烧肉 约20人份（Alicia）"
    ]},
    { cat: "热菜", items: [
      "海南鸡 20人份（Angelina）",
      "番茄炒蛋 20人份（Angelina）",
      "肉末豆角 10人份（Hilary）",
      "干锅鸡翅（小周周 Lily）",
      "干炒牛河 10人份（思文）"
    ]},
    { cat: "主食", items: [
      "蛋炒饭 10人份（Hilary）",
      "包子 40个（思文）",
      "生煎包 50（李静）",
      "煎饺 100个（晓芳）",
      "韭菜猪肉饺子 100个（许可）",
      "卤土豆（Vivi）"
    ]},
    { cat: "点心水果", items: [
      "冰皮月饼 50粒（Susan）",
      "地瓜丸 50（李静）",
      "中式糕点 若干（LSY）",
      "橘子 60个（晓芳）"
    ]},
    { cat: "零食饮料", items: [
      "奶茶 20人份（Angelina）",
      "酸梅汤 30人份（Hilary）",
      "棉花糖机 · 现场制作（小周周 Lily）",
      "饮料或零食（家桓，种类/数量待补）"
    ]}
  ],

  // ---------- 装饰品（附实拍图） ----------
  decor: [
    { photo: "assets/d00.jpg", item: "中国结",       qty: "1个",              by: "周", note: "双鱼盘长结，红金配色，带流苏" },
    { photo: "assets/d01.jpg", item: "小挂旗",       qty: "2副",              by: "周" },
    { photo: "assets/d02.jpg", item: "红色扇子",     qty: "4把",              by: "周" },
    { photo: "assets/d03.jpg", item: "小舞龙",       qty: "2个",              by: "文" },
    { photo: "assets/d04.jpg", item: "红色格子桌布", qty: "1张 140×140cm",    by: "文" },
    { photo: "assets/d05.jpg", item: "围裙",         qty: "6条",              by: "沈" },
    { photo: "assets/d07.jpg", item: "易拉宝①",      qty: "1个（待定）",      by: "沈", note: "中英双语「中国：丰厚遗产与光明未来」主题海报" },
    { photo: "assets/d08.jpg", item: "易拉宝②",      qty: "1个（待定）",      by: "沈", note: "同上主题，第二版" },
    { photo: "assets/d09.jpg", item: "红色长桌布",   qty: "4张 140×180cm",    by: "沈" },
    { photo: "assets/d10.jpg", item: "熊猫庆华夏背景布", qty: "1套",          by: "沈", note: "5条幅35×175cm + 红/金气球 + 皱纹纸（现场主视觉背景）" },
    { photo: "assets/d11.jpg", item: "香槟色桌布",   qty: "4张 140×180cm",    by: "沈" }
  ],
  decorNoPhoto: [
    { item: "国旗",     qty: "2面",       by: "小周周1面 + 思文1面" },
    { item: "小灯笼",   qty: "若干",      by: "思文提供" },
    { item: "台卡",     qty: "十几个",    by: "沈提供" }
  ],

  // ---------- 现场设备 ----------
  equipment: [
    { item: "棉花糖机", qty: "1台",  by: "周周" },
    { item: "插线板",   qty: "1个",  by: "涂" }
  ],

  // ---------- 食物相关耗材 ----------
  supplies: [
    { item: "手套",       qty: "1盒",      by: "涂", status: "confirmed" },
    { item: "夹子",       qty: "5个",      by: "沈3个 + 周2个", status: "confirmed" },
    { item: "竹签",       qty: "3把",      by: "涂", status: "confirmed" },
    { item: "现场纸杯",   qty: "约40个中杯 + 杯盖", by: "涂", status: "confirmed", note: "已买好" },
    { item: "野餐盒",     qty: "20个（45×31cm 大尺寸）", by: "", status: "todo", note: "菜品统计约需 15 个" },
    { item: "雪糕棍",     qty: "待定",     by: "",   status: "todo", note: "待采购" },
    { item: "餐勺",       qty: "待定",     by: "",   status: "gap" },
    { item: "成分表",     qty: "待制作",   by: "", status: "gap", note: "过敏原/成分标示，务必补" }
  ]
};
