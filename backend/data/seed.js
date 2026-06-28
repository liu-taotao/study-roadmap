/**
 * 全学科种子数据 v2.0
 * 小学(语数英) + 初中(语数英物化) + 高中(语数英物化生)
 * 三大路线：课内同步(sync) / 培优拓展(advance) / 考前冲刺(exam)
 * B站真实UP主方向素材
 */

// ==================== 学习路线 ====================
const routes = [

  // ================================================================
  //  小学3-4年级
  // ================================================================

  // --- 数学 ---
  { id:'p34-math-sync', gradeId:'grade-3-4',gradeName:'小学3-4年级',gradeSlug:'primary-3-4', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'3-4年级数学课内同步', description:'万以内加减、多位数乘除、分数初步、几何图形——夯实运算基础', tags:['基础运算','几何入门','应用题'], order:1,
    knowledgePoints:[
      {id:'p34-ms1',name:'万以内加减法',description:'三位数四位数加减法竖式、连续进位退位',order:1,importance:2,tags:['计算']},
      {id:'p34-ms2',name:'多位数乘除法',description:'两三位数×一位数、除法竖式、余数',order:2,importance:2,tags:['计算']},
      {id:'p34-ms3',name:'分数初步认识',description:'分数意义、读写、简单比较大小',order:3,importance:1,tags:['分数']},
      {id:'p34-ms4',name:'长方形与正方形',description:'周长计算、面积概念引入',order:4,importance:2,tags:['几何']},
      {id:'p34-ms5',name:'时间与日历',description:'24时计时法、年月日计算',order:5,importance:1,tags:['应用']},
      {id:'p34-ms6',name:'两步应用题',description:'加减乘除混合运算应用题解题思路',order:6,importance:3,tags:['应用题']}
    ]},
  { id:'p34-math-advance', gradeId:'grade-3-4',gradeName:'小学3-4年级',gradeSlug:'primary-3-4', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'3-4年级数学思维拓展', description:'奥数入门：找规律、鸡兔同笼、和差倍、速算巧算', tags:['奥数','思维训练'], order:2,
    knowledgePoints:[
      {id:'p34-ma1',name:'找规律填数',description:'数列规律、图形规律推理',order:1,importance:2,tags:['规律']},
      {id:'p34-ma2',name:'鸡兔同笼问题',description:'假设法、抬脚法三种解法',order:2,importance:3,tags:['经典']},
      {id:'p34-ma3',name:'和差倍问题',description:'和倍、差倍、和差三类应用题',order:3,importance:2,tags:['应用题']},
      {id:'p34-ma4',name:'巧算速算',description:'凑整法、拆分法、基准数法',order:4,importance:1,tags:['技巧']},
      {id:'p34-ma5',name:'数字谜题',description:'竖式谜、横式谜推理填空',order:5,importance:2,tags:['推理']}
    ]},
  { id:'p34-math-exam', gradeId:'grade-3-4',gradeName:'小学3-4年级',gradeSlug:'primary-3-4', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'3-4年级数学期中期末冲刺', description:'计算专项+应用题分类+易错题+模拟卷，高效提分', tags:['复习','考试','错题'], order:3,
    knowledgePoints:[
      {id:'p34-me1',name:'计算专项训练',description:'限时口算笔算，提升速度与准确率',order:1,importance:2,tags:['限时']},
      {id:'p34-me2',name:'应用题分类突破',description:'按类型归类解题模板',order:2,importance:3,tags:['模板']},
      {id:'p34-me3',name:'易错题精讲',description:'常见错误类型分析与纠正',order:3,importance:2,tags:['错题']},
      {id:'p34-me4',name:'模拟试卷',description:'历年真题模拟训练',order:4,importance:1,tags:['真题']}
    ]},

  // --- 语文 ---
  { id:'p34-chinese-sync', gradeId:'grade-3-4',gradeName:'小学3-4年级',gradeSlug:'primary-3-4', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'3-4年级语文课内同步', description:'字词积累+古诗背诵+阅读理解+写作入门，构建语文基础', tags:['字词','阅读','写作'], order:4,
    knowledgePoints:[
      {id:'p34-cs1',name:'生字词积累',description:'每课生字拼音、部首、组词造句',order:1,importance:2,tags:['字词']},
      {id:'p34-cs2',name:'古诗背诵与理解',description:'课内古诗默写、诗意理解、作者背景',order:2,importance:2,tags:['古诗']},
      {id:'p34-cs3',name:'段落概括能力',description:'自然段意义段划分、段意概括方法',order:3,importance:2,tags:['阅读']},
      {id:'p34-cs4',name:'记事作文',description:'六要素法、按事情发展顺序写作',order:4,importance:3,tags:['写作']},
      {id:'p34-cs5',name:'观察日记',description:'培养观察力、学会细节描写',order:5,importance:1,tags:['写作']}
    ]},
  { id:'p34-chinese-exam', gradeId:'grade-3-4',gradeName:'小学3-4年级',gradeSlug:'primary-3-4', subject:'语文',routeType:'exam',routeTypeName:'考前冲刺专项', title:'3-4年级语文期中期末冲刺', description:'基础题不失分+阅读满分技巧+作文模板', tags:['复习','基础','阅读'], order:5,
    knowledgePoints:[
      {id:'p34-ce1',name:'字词句基础过关',description:'看拼音写词、形近字辨析、修改病句',order:1,importance:2,tags:['基础']},
      {id:'p34-ce2',name:'课内阅读精练',description:'课文重点段落理解、中心思想归纳',order:2,importance:3,tags:['阅读']},
      {id:'p34-ce3',name:'课外阅读技巧',description:'记叙文说明文阅读答题模板',order:3,importance:2,tags:['阅读']},
      {id:'p34-ce4',name:'考场作文速成',description:'开头结尾技巧、中间分段方法',order:4,importance:3,tags:['写作']}
    ]},

  // --- 英语 ---
  { id:'p34-english-sync', gradeId:'grade-3-4',gradeName:'小学3-4年级',gradeSlug:'primary-3-4', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'3-4年级英语课内同步', description:'字母单词入门、简单句型、听说基础——英语启蒙关键期', tags:['字母','单词','听说'], order:6,
    knowledgePoints:[
      {id:'p34-es1',name:'26个字母',description:'大小写书写、字母发音规律',order:1,importance:2,tags:['字母']},
      {id:'p34-es2',name:'基础词汇积累',description:'颜色/数字/动物/家庭成员等主题词汇',order:2,importance:2,tags:['词汇']},
      {id:'p34-es3',name:'简单问候句型',description:'Hello/How are you/What is this等日常对话',order:3,importance:2,tags:['句型']},
      {id:'p34-es4',name:'自然拼读入门',description:'元音辅音发音规律、CVC单词拼读',order:4,importance:3,tags:['拼读']},
      {id:'p34-es5',name:'课堂用语',description:'听懂英文课堂指令、简单口语表达',order:5,importance:1,tags:['听说']}
    ]},

  // ================================================================
  //  小学5-6年级
  // ================================================================

  // --- 数学 ---
  { id:'p56-math-sync', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'5-6年级数学课内同步', description:'小数分数运算、方程入门、几何进阶——为初中数学打基础', tags:['小数','分数','方程','几何'], order:1,
    knowledgePoints:[
      {id:'p56-ms1',name:'小数乘除法',description:'小数乘法除法计算规则与简便运算',order:1,importance:2,tags:['计算']},
      {id:'p56-ms2',name:'分数的运算',description:'分数加减乘除、通分约分',order:2,importance:3,tags:['分数']},
      {id:'p56-ms3',name:'简易方程',description:'用字母表示数、解方程、列方程解应用题',order:3,importance:3,tags:['方程']},
      {id:'p56-ms4',name:'多边形面积',description:'三角形梯形平行四边形面积公式推导',order:4,importance:2,tags:['几何']},
      {id:'p56-ms5',name:'长方体和正方体',description:'表面积体积计算',order:5,importance:2,tags:['几何']},
      {id:'p56-ms6',name:'百分数',description:'折扣、利息、税率实际应用',order:6,importance:1,tags:['应用']},
      {id:'p56-ms7',name:'比和比例',description:'比的意义、正比例反比例判断',order:7,importance:2,tags:['比例']}
    ]},
  { id:'p56-math-advance', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'5-6年级数学培优竞赛', description:'小学奥数核心专题：行程、工程、数论、逻辑推理', tags:['奥数','竞赛','小升初'], order:2,
    knowledgePoints:[
      {id:'p56-ma1',name:'行程问题',description:'相遇追及、环形跑道、火车过桥',order:1,importance:3,tags:['行程']},
      {id:'p56-ma2',name:'工程问题',description:'工作效率、合作完成、注水排水',order:2,importance:2,tags:['工程']},
      {id:'p56-ma3',name:'浓度问题',description:'溶液浓度计算、混合配比',order:3,importance:2,tags:['浓度']},
      {id:'p56-ma4',name:'数论初步',description:'整除特征、质数合数、最大公约数最小公倍数',order:4,importance:3,tags:['数论']},
      {id:'p56-ma5',name:'抽屉原理',description:'最不利原则、构造抽屉',order:5,importance:1,tags:['组合']},
      {id:'p56-ma6',name:'逻辑推理',description:'排除法、假设法、列表分析法',order:6,importance:2,tags:['推理']}
    ]},
  { id:'p56-math-exam', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'小升初数学冲刺', description:'全面复习小学阶段核心考点，模拟真题训练', tags:['小升初','总复习','冲刺'], order:3,
    knowledgePoints:[
      {id:'p56-me1',name:'计算综合',description:'整数小数分数四则混合运算',order:1,importance:3,tags:['综合']},
      {id:'p56-me2',name:'应用题分类总复习',description:'十二类经典应用题解题套路',order:2,importance:3,tags:['总结']},
      {id:'p56-me3',name:'几何图形综合',description:'组合图形面积体积综合计算',order:3,importance:2,tags:['几何']},
      {id:'p56-me4',name:'真题模拟',description:'近三年小升初真题解析',order:4,importance:2,tags:['真题']}
    ]},

  // --- 语文 ---
  { id:'p56-chinese-sync', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'5-6年级语文课内同步', description:'阅读理解深化、说明文议论文入门、写作能力全面提升', tags:['阅读','写作','文言文'], order:4,
    knowledgePoints:[
      {id:'p56-cs1',name:'说明文阅读',description:'说明方法识别、说明顺序分析、信息提取',order:1,importance:2,tags:['阅读']},
      {id:'p56-cs2',name:'叙事文深度阅读',description:'人物描写分析、情节梳理、环境描写作用',order:2,importance:3,tags:['阅读']},
      {id:'p56-cs3',name:'文言文启蒙',description:'简单文言文诵读、常见实词虚词',order:3,importance:2,tags:['文言文']},
      {id:'p56-cs4',name:'写人作文',description:'外貌语言动作心理神态描写',order:4,importance:2,tags:['写作']},
      {id:'p56-cs5',name:'读后感写作',description:'读后感的格式与写法',order:5,importance:1,tags:['写作']}
    ]},
  { id:'p56-chinese-exam', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'语文',routeType:'exam',routeTypeName:'考前冲刺专项', title:'小升初语文冲刺', description:'基础满分+阅读模板+作文速成，小升初语文全突破', tags:['小升初','冲刺','阅读'], order:5,
    knowledgePoints:[
      {id:'p56-ce1',name:'基础知识大全',description:'拼音字词句段篇全梳理',order:1,importance:3,tags:['基础']},
      {id:'p56-ce2',name:'阅读理解满分技巧',description:'概括题/赏析题/含义题答题公式',order:2,importance:3,tags:['阅读']},
      {id:'p56-ce3',name:'作文素材积累',description:'人物/事件/景物素材库建立',order:3,importance:2,tags:['写作']},
      {id:'p56-ce4',name:'真题模拟训练',description:'近三年小升初语文真题',order:4,importance:2,tags:['真题']}
    ]},

  // --- 英语 ---
  { id:'p56-english-sync', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'5-6年级英语课内同步', description:'四大时态系统学习、词汇量扩充、简单阅读写作', tags:['时态','词汇','阅读'], order:6,
    knowledgePoints:[
      {id:'p56-es1',name:'一般现在时',description:'三单变化规律、频率副词用法',order:1,importance:3,tags:['时态']},
      {id:'p56-es2',name:'现在进行时',description:'be+V-ing结构、时间标志词',order:2,importance:2,tags:['时态']},
      {id:'p56-es3',name:'一般过去时',description:'规则/不规则动词过去式、yesterday等状语',order:3,importance:3,tags:['时态']},
      {id:'p56-es4',name:'一般将来时',description:'will与be going to的区别',order:4,importance:2,tags:['时态']},
      {id:'p56-es5',name:'基础阅读训练',description:'短文阅读理解、判断正误、选择填空',order:5,importance:2,tags:['阅读']},
      {id:'p56-es6',name:'简单写作',description:'写人写事、日记书信格式',order:6,importance:1,tags:['写作']}
    ]},
  { id:'p56-english-exam', gradeId:'grade-5-6',gradeName:'小学5-6年级',gradeSlug:'primary-5-6', subject:'英语',routeType:'exam',routeTypeName:'考前冲刺专项', title:'小升初英语冲刺', description:'四大时态总复习+词汇分类+阅读写作模板', tags:['小升初','时态','冲刺'], order:7,
    knowledgePoints:[
      {id:'p56-ee1',name:'时态综合练习',description:'四大时态对比辨析、综合填空',order:1,importance:3,tags:['时态']},
      {id:'p56-ee2',name:'词汇分类记忆',description:'名词动词形容词副词分类速记',order:2,importance:2,tags:['词汇']},
      {id:'p56-ee3',name:'句型转换',description:'肯定否定疑问、特殊疑问句',order:3,importance:2,tags:['句型']},
      {id:'p56-ee4',name:'阅读+写作模板',description:'阅读常见题型+写作框架',order:4,importance:2,tags:['综合']}
    ]},

  // ================================================================
  //  初一
  // ================================================================

  // --- 数学 ---
  { id:'g7-math-sync', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'初一数学课内同步（人教版）', description:'有理数到方程组，代数思维过渡关键期', tags:['有理数','整式','方程','几何初步'], order:1,
    knowledgePoints:[
      {id:'g7-ms1',name:'有理数运算',description:'正负数、绝对值、加减乘除乘方混合',order:1,importance:3,tags:['有理数']},
      {id:'g7-ms2',name:'整式加减',description:'单项式多项式、合并同类项、去括号',order:2,importance:2,tags:['代数']},
      {id:'g7-ms3',name:'一元一次方程',description:'解方程五步法、应用题建模',order:3,importance:3,tags:['方程']},
      {id:'g7-ms4',name:'二元一次方程组',description:'代入消元、加减消元',order:4,importance:3,tags:['方程组']},
      {id:'g7-ms5',name:'不等式与不等式组',description:'不等式性质、解集表示、应用',order:5,importance:2,tags:['不等式']},
      {id:'g7-ms6',name:'线与角',description:'线段角、对顶角、平行线判定与性质',order:6,importance:2,tags:['几何']},
      {id:'g7-ms7',name:'平面直角坐标系',description:'坐标概念、点的平移对称',order:7,importance:1,tags:['坐标']}
    ]},
  { id:'g7-math-advance', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'初一数学思维拔高', description:'绝对值综合、含参方程、几何证明入门', tags:['培优','代数思维','几何证明'], order:2,
    knowledgePoints:[
      {id:'g7-ma1',name:'绝对值与数轴综合',description:'绝对值方程不等式、数轴动点问题',order:1,importance:3,tags:['绝对值']},
      {id:'g7-ma2',name:'含参方程与不等式',description:'参数方程求解、分类讨论思想',order:2,importance:2,tags:['参数']},
      {id:'g7-ma3',name:'应用题建模',description:'经济问题、行程问题方程建模',order:3,importance:2,tags:['建模']},
      {id:'g7-ma4',name:'几何证明入门',description:'推理格式、因果关系、辅助线思想',order:4,importance:3,tags:['证明']}
    ]},
  { id:'g7-math-exam', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'初一数学期中期末冲刺', description:'计算+几何+方程三大板块复习，突破易错点', tags:['复习','期末','易错'], order:3,
    knowledgePoints:[
      {id:'g7-me1',name:'计算综合复习',description:'有理数混合运算、整式化简求值',order:1,importance:3,tags:['计算']},
      {id:'g7-me2',name:'方程与应用题',description:'各种应用题类型方程建模',order:2,importance:3,tags:['方程']},
      {id:'g7-me3',name:'几何证明专项',description:'平行线证明、角度计算',order:3,importance:2,tags:['几何']},
      {id:'g7-me4',name:'模拟测试',description:'期中期末模拟卷',order:4,importance:1,tags:['模拟']}
    ]},

  // --- 语文 ---
  { id:'g7-chinese-sync', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'初一语文课内同步', description:'文言文系统学习、现代文深度阅读、记叙文写作提升', tags:['文言文','阅读','写作'], order:4,
    knowledgePoints:[
      {id:'g7-cs1',name:'课内文言文精讲',description:'《世说新语》《论语》逐字逐句翻译',order:1,importance:3,tags:['文言文']},
      {id:'g7-cs2',name:'现代文阅读',description:'散文小说阅读、人物分析、主题探究',order:2,importance:3,tags:['阅读']},
      {id:'g7-cs3',name:'记叙文写作',description:'六要素、详略得当、细节描写',order:3,importance:3,tags:['写作']},
      {id:'g7-cs4',name:'病句修改',description:'常见语病类型与修改方法',order:4,importance:2,tags:['语法']},
      {id:'g7-cs5',name:'名著导读',description:'《朝花夕拾》《西游记》阅读指导',order:5,importance:2,tags:['名著']}
    ]},

  // --- 英语 ---
  { id:'g7-english-sync', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'初一英语课内同步', description:'音标+词汇+语法三位一体，听说读写全面起步', tags:['音标','语法','阅读'], order:5,
    knowledgePoints:[
      {id:'g7-es1',name:'音标系统学习',description:'48个国际音标、拼读规则',order:1,importance:3,tags:['音标']},
      {id:'g7-es2',name:'一般现在时',description:'三单变化、频率副词、日常表达',order:2,importance:3,tags:['时态']},
      {id:'g7-es3',name:'现在进行时',description:'be+V-ing、与一般现在时区别',order:3,importance:2,tags:['时态']},
      {id:'g7-es4',name:'一般过去时',description:'规则/不规则过去式、时间状语',order:4,importance:2,tags:['时态']},
      {id:'g7-es5',name:'基础阅读训练',description:'短文阅读技巧、主旨大意与细节题',order:5,importance:2,tags:['阅读']},
      {id:'g7-es6',name:'书面表达入门',description:'简单书信、日记、介绍类写作',order:6,importance:1,tags:['写作']}
    ]},

  // --- 物理 ---
  { id:'g7-physics-sync', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'物理',routeType:'sync',routeTypeName:'课内同步提升', title:'初一物理启蒙（人教版）', description:'物理入门：声、光、热、力基础概念，培养科学思维', tags:['物理启蒙','声光热力'], order:6,
    knowledgePoints:[
      {id:'g7-ps1',name:'长度与时间测量',description:'刻度尺使用、误差分析、秒表读数',order:1,importance:2,tags:['测量']},
      {id:'g7-ps2',name:'声现象',description:'声音产生与传播、音调响度音色、超声波',order:2,importance:2,tags:['声学']},
      {id:'g7-ps3',name:'光的直线传播',description:'光源、光的直线传播、光速',order:3,importance:1,tags:['光学']},
      {id:'g7-ps4',name:'光的反射',description:'反射定律、镜面反射漫反射、平面镜成像',order:4,importance:2,tags:['光学']},
      {id:'g7-ps5',name:'温度与物态变化',description:'温度计使用、熔化凝固汽化液化升华凝华',order:5,importance:3,tags:['热学']}
    ]},

  // --- 化学 ---
  { id:'g7-chemistry-sync', gradeId:'grade-7',gradeName:'初一',gradeSlug:'junior-1', subject:'化学',routeType:'sync',routeTypeName:'课内同步提升', title:'初一化学启蒙', description:'化学入门：物质的变化、空气组成、基础实验操作', tags:['化学启蒙','实验','物质'], order:7,
    knowledgePoints:[
      {id:'g7-chs1',name:'物质的变化',description:'物理变化与化学变化的区别与判断',order:1,importance:2,tags:['概念']},
      {id:'g7-chs2',name:'空气的组成',description:'氮气氧气稀有气体、空气污染与保护',order:2,importance:2,tags:['空气']},
      {id:'g7-chs3',name:'氧气的性质',description:'氧气的物理化学性质、氧化反应',order:3,importance:3,tags:['氧气']},
      {id:'g7-chs4',name:'基础实验操作',description:'药品取用、加热、仪器连接、洗涤',order:4,importance:2,tags:['实验']}
    ]},

  // ================================================================
  //  初二
  // ================================================================

  // --- 数学 ---
  { id:'g8-math-sync', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'初二数学课内同步', description:'全等三角形、一次函数、分式——初中数学分水岭', tags:['全等','函数','分式','勾股定理'], order:1,
    knowledgePoints:[
      {id:'g8-ms1',name:'三角形与全等',description:'SSS/SAS/ASA/AAS/HL判定、证明书写规范',order:1,importance:3,tags:['全等']},
      {id:'g8-ms2',name:'轴对称',description:'等腰三角形性质与判定、垂直平分线、最短路径',order:2,importance:2,tags:['轴对称']},
      {id:'g8-ms3',name:'整式乘法与因式分解',description:'平方差、完全平方、提公因式/公式法/十字相乘',order:3,importance:3,tags:['代数']},
      {id:'g8-ms4',name:'分式',description:'分式运算、分式方程及增根检验',order:4,importance:2,tags:['分式']},
      {id:'g8-ms5',name:'一次函数',description:'图像性质、k/b几何意义、与方程不等式关系',order:5,importance:3,tags:['函数']},
      {id:'g8-ms6',name:'勾股定理',description:'定理证明、逆定理应用、折叠与最短路径',order:6,importance:3,tags:['勾股']},
      {id:'g8-ms7',name:'平行四边形',description:'性质与判定、矩形菱形正方形综合',order:7,importance:2,tags:['四边形']}
    ]},
  { id:'g8-math-advance', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'初二数学培优拓展', description:'几何证明深化+函数综合+竞赛入门', tags:['几何证明','函数综合','竞赛'], order:2,
    knowledgePoints:[
      {id:'g8-ma1',name:'全等三角形综合',description:'旋转型全等、截长补短、倍长中线',order:1,importance:3,tags:['全等']},
      {id:'g8-ma2',name:'一次函数综合',description:'与面积、等腰三角形、平行四边形综合',order:2,importance:3,tags:['函数']},
      {id:'g8-ma3',name:'因式分解技巧',description:'分组分解、添项拆项、换元法',order:3,importance:2,tags:['代数']},
      {id:'g8-ma4',name:'四边形综合证明',description:'中点四边形、图形变换证明',order:4,importance:2,tags:['几何']}
    ]},
  { id:'g8-math-exam', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'初二数学期中期末冲刺', description:'全等证明+函数图像+计算能力三大板块突破', tags:['复习','期末'], order:3,
    knowledgePoints:[
      {id:'g8-me1',name:'全等证明专项',description:'常见辅助线作法、典型模型归纳',order:1,importance:3,tags:['全等']},
      {id:'g8-me2',name:'一次函数专项',description:'图像信息题、应用题综合',order:2,importance:3,tags:['函数']},
      {id:'g8-me3',name:'计算综合',description:'因式分解、分式化简求值',order:3,importance:2,tags:['计算']},
      {id:'g8-me4',name:'模拟测试',description:'期中期末全真模拟',order:4,importance:1,tags:['模拟']}
    ]},

  // --- 语文 ---
  { id:'g8-chinese-sync', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'初二语文课内同步', description:'说明文系统学习+文言文深化+议论文入门', tags:['说明文','文言文','议论文'], order:4,
    knowledgePoints:[
      {id:'g8-cs1',name:'说明文阅读',description:'说明对象特征、说明方法作用、说明顺序',order:1,importance:3,tags:['说明文']},
      {id:'g8-cs2',name:'课内文言文',description:'《三峡》《答谢中书书》《记承天寺夜游》精讲',order:2,importance:3,tags:['文言文']},
      {id:'g8-cs3',name:'散文阅读',description:'借景抒情、托物言志类散文赏析',order:3,importance:2,tags:['散文']},
      {id:'g8-cs4',name:'议论文写作入门',description:'论点论据论证、议论文结构',order:4,importance:2,tags:['写作']},
      {id:'g8-cs5',name:'名著阅读',description:'《红星照耀中国》《昆虫记》导读',order:5,importance:1,tags:['名著']}
    ]},

  // --- 英语 ---
  { id:'g8-english-sync', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'初二英语课内同步', description:'完成时+比较级+从句入门，语法全面深化', tags:['完成时','比较级','从句'], order:5,
    knowledgePoints:[
      {id:'g8-es1',name:'现在完成时',description:'have/has+过去分词、since与for区别',order:1,importance:3,tags:['时态']},
      {id:'g8-es2',name:'形容词副词比较级',description:'比较级最高级变化规则、句型结构',order:2,importance:3,tags:['语法']},
      {id:'g8-es3',name:'状语从句',description:'时间条件原因让步状语从句',order:3,importance:2,tags:['从句']},
      {id:'g8-es4',name:'情态动词',description:'can/must/should/may用法辨析',order:4,importance:2,tags:['语法']},
      {id:'g8-es5',name:'完形填空技巧',description:'上下文逻辑、词义辨析、固定搭配',order:5,importance:3,tags:['完形']},
      {id:'g8-es6',name:'阅读理解进阶',description:'推理判断、词义猜测、主旨归纳',order:6,importance:2,tags:['阅读']}
    ]},

  // --- 物理 ---
  { id:'g8-physics-sync', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'物理',routeType:'sync',routeTypeName:'课内同步提升', title:'初二物理课内同步', description:'力学核心——运动、力、压强、浮力、简单机械', tags:['力学','运动','压强','浮力'], order:6,
    knowledgePoints:[
      {id:'g8-ps1',name:'机械运动',description:'长度时间测量、速度计算、参照物',order:1,importance:2,tags:['运动']},
      {id:'g8-ps2',name:'力',description:'力的三要素、重力弹力摩擦力',order:2,importance:3,tags:['力学']},
      {id:'g8-ps3',name:'运动和力',description:'牛顿第一定律、二力平衡、惯性',order:3,importance:3,tags:['牛顿']},
      {id:'g8-ps4',name:'压强',description:'固体压强液体压强大气压强综合计算',order:4,importance:3,tags:['压强']},
      {id:'g8-ps5',name:'浮力',description:'阿基米德原理、浮沉条件、浮力应用',order:5,importance:3,tags:['浮力']},
      {id:'g8-ps6',name:'简单机械',description:'杠杆平衡条件、滑轮组机械效率',order:6,importance:2,tags:['机械']},
      {id:'g8-ps7',name:'功和机械能',description:'功、功率、动能势能转化',order:7,importance:2,tags:['能量']}
    ]},

  // --- 化学 ---
  { id:'g8-chemistry-sync', gradeId:'grade-8',gradeName:'初二',gradeSlug:'junior-2', subject:'化学',routeType:'sync',routeTypeName:'课内同步提升', title:'初二化学课内同步', description:'微观粒子、化学式与化合价、质量守恒定律', tags:['微观','化学式','方程式'], order:7,
    knowledgePoints:[
      {id:'g8-chs1',name:'分子和原子',description:'分子原子概念、分子运动、原子结构',order:1,importance:3,tags:['微观']},
      {id:'g8-chs2',name:'元素与元素符号',description:'元素概念、元素符号书写、元素周期表入门',order:2,importance:2,tags:['元素']},
      {id:'g8-chs3',name:'化学式与化合价',description:'化学式书写规则、化合价口诀、根据化合价写化学式',order:3,importance:3,tags:['化学式']},
      {id:'g8-chs4',name:'质量守恒定律',description:'定律内容、验证实验、化学方程式配平',order:4,importance:3,tags:['方程式']},
      {id:'g8-chs5',name:'碳和碳的氧化物',description:'CO与CO₂性质对比、实验室制法',order:5,importance:2,tags:['碳']}
    ]},

  // ================================================================
  //  初三
  // ================================================================

  // --- 数学 ---
  { id:'g9-math-sync', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'初三数学课内同步', description:'二次函数、圆、相似——中考重难点大本营', tags:['二次函数','圆','相似','三角函数'], order:1,
    knowledgePoints:[
      {id:'g9-ms1',name:'一元二次方程',description:'配方法、公式法、因式分解法、韦达定理',order:1,importance:3,tags:['方程']},
      {id:'g9-ms2',name:'二次函数',description:'图像性质、顶点式、最值问题、实际应用',order:2,importance:3,tags:['二次函数']},
      {id:'g9-ms3',name:'圆',description:'圆周角圆心角、切线判定与性质、弧长扇形面积',order:3,importance:3,tags:['圆']},
      {id:'g9-ms4',name:'相似三角形',description:'相似判定、相似比、位似图形',order:4,importance:3,tags:['相似']},
      {id:'g9-ms5',name:'锐角三角函数',description:'正弦余弦正切、解直角三角形应用',order:5,importance:2,tags:['三角函数']},
      {id:'g9-ms6',name:'概率初步',description:'列举法求概率、频率估计概率',order:6,importance:1,tags:['概率']}
    ]},
  { id:'g9-math-advance', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'初三数学培优（中考压轴）', description:'二次函数压轴+圆综合+几何变换——突破中考难题', tags:['压轴','培优','中考'], order:2,
    knowledgePoints:[
      {id:'g9-ma1',name:'二次函数压轴',description:'面积问题、等腰三角形存在性、平行四边形存在性',order:1,importance:3,tags:['压轴']},
      {id:'g9-ma2',name:'圆的综合',description:'圆与相似综合、圆幂定理应用',order:2,importance:3,tags:['圆']},
      {id:'g9-ma3',name:'几何三大变换',description:'平移旋转轴对称综合题',order:3,importance:2,tags:['几何变换']},
      {id:'g9-ma4',name:'新定义题型',description:'自定义概念阅读理解型题目',order:4,importance:2,tags:['创新']}
    ]},
  { id:'g9-math-exam', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'中考数学冲刺', description:'全面梳理中考核心考点，突破压轴题', tags:['中考','压轴','冲刺'], order:3,
    knowledgePoints:[
      {id:'g9-me1',name:'选填速解技巧',description:'特值法、排除法、数形结合速解选填',order:1,importance:3,tags:['技巧']},
      {id:'g9-me2',name:'函数综合压轴',description:'一次二次反比例函数综合',order:2,importance:3,tags:['压轴']},
      {id:'g9-me3',name:'几何综合压轴',description:'圆与相似综合、动态几何',order:3,importance:3,tags:['压轴']},
      {id:'g9-me4',name:'真题模拟训练',description:'近五年中考真题全真模拟',order:4,importance:2,tags:['真题']}
    ]},

  // --- 语文 ---
  { id:'g9-chinese-sync', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'初三语文课内同步', description:'议论文系统训练+小说戏剧阅读+中考写作专项', tags:['议论文','小说','中考写作'], order:4,
    knowledgePoints:[
      {id:'g9-cs1',name:'议论文阅读',description:'论点提取、论证方法分析、论证思路梳理',order:1,importance:3,tags:['议论文']},
      {id:'g9-cs2',name:'小说阅读',description:'人物形象分析、环境描写作用、情节梳理',order:2,importance:3,tags:['小说']},
      {id:'g9-cs3',name:'文言文深化',description:'《岳阳楼记》《醉翁亭记》等长篇文言文',order:3,importance:3,tags:['文言文']},
      {id:'g9-cs4',name:'中考作文',description:'命题作文半命题作文审题立意、素材运用',order:4,importance:3,tags:['写作']}
    ]},
  { id:'g9-chinese-exam', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'语文',routeType:'exam',routeTypeName:'考前冲刺专项', title:'中考语文冲刺', description:'基础满分+阅读模板+作文速成+名著考点', tags:['中考','冲刺'], order:5,
    knowledgePoints:[
      {id:'g9-ce1',name:'基础知识大全',description:'字音字形词语成语病句标点全梳理',order:1,importance:3,tags:['基础']},
      {id:'g9-ce2',name:'古诗文默写与鉴赏',description:'61篇必背古诗文、鉴赏答题模板',order:2,importance:3,tags:['古诗文']},
      {id:'g9-ce3',name:'现代文阅读模板',description:'记叙文说明文议论文答题公式',order:3,importance:3,tags:['阅读']},
      {id:'g9-ce4',name:'名著考点精炼',description:'12部必读名著核心考点',order:4,importance:2,tags:['名著']},
      {id:'g9-ce5',name:'作文冲刺',description:'5大主题素材+开头结尾模板',order:5,importance:3,tags:['作文']}
    ]},

  // --- 英语 ---
  { id:'g9-english-sync', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'初三英语课内同步', description:'被动语态+定语从句+宾语从句，语法终极篇', tags:['被动语态','定语从句','宾语从句'], order:6,
    knowledgePoints:[
      {id:'g9-es1',name:'被动语态',description:'各种时态被动语态构成与使用场景',order:1,importance:3,tags:['语法']},
      {id:'g9-es2',name:'宾语从句',description:'引导词、语序、时态呼应',order:2,importance:3,tags:['从句']},
      {id:'g9-es3',name:'定语从句',description:'关系代词关系副词、限制性与非限制性',order:3,importance:3,tags:['从句']},
      {id:'g9-es4',name:'过去完成时',description:'had+过去分词、与一般过去时区别',order:4,importance:2,tags:['时态']},
      {id:'g9-es5',name:'阅读与完形综合',description:'中考难度阅读理解+完形填空技巧',order:5,importance:3,tags:['综合']}
    ]},
  { id:'g9-english-exam', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'英语',routeType:'exam',routeTypeName:'考前冲刺专项', title:'中考英语冲刺', description:'听力+单选+完形+阅读+写作全题型突破', tags:['中考','全题型'], order:7,
    knowledgePoints:[
      {id:'g9-ee1',name:'听力专项',description:'听前预测、听中关键词、听后检查',order:1,importance:2,tags:['听力']},
      {id:'g9-ee2',name:'单选与语法填空',description:'语法考点全覆盖、解题技巧',order:2,importance:3,tags:['语法']},
      {id:'g9-ee3',name:'完形+阅读',description:'完形逻辑推理、阅读题型分类突破',order:3,importance:3,tags:['阅读']},
      {id:'g9-ee4',name:'书面表达',description:'书信/议论文/记叙文写作模板',order:4,importance:3,tags:['写作']},
      {id:'g9-ee5',name:'真题模拟',description:'近五年中考真题全真训练',order:5,importance:2,tags:['真题']}
    ]},

  // --- 物理 ---
  { id:'g9-physics-sync', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'物理',routeType:'sync',routeTypeName:'课内同步提升', title:'初三物理课内同步', description:'电学核心——从电路基础到电磁感应', tags:['电学','电路','电磁'], order:8,
    knowledgePoints:[
      {id:'g9-ps1',name:'电流和电路',description:'电路组成、串并联识别、电路图绘制',order:1,importance:3,tags:['电路']},
      {id:'g9-ps2',name:'电压与电阻',description:'电压表使用、电阻影响因素、滑动变阻器',order:2,importance:2,tags:['电学']},
      {id:'g9-ps3',name:'欧姆定律',description:'I=U/R、伏安法测电阻、动态电路分析',order:3,importance:3,tags:['欧姆定律']},
      {id:'g9-ps4',name:'电功率',description:'P=UI、额定功率实际功率、焦耳定律',order:4,importance:3,tags:['电功率']},
      {id:'g9-ps5',name:'电与磁',description:'电流磁效应、电磁铁、电动机发电机原理',order:5,importance:2,tags:['电磁']}
    ]},
  { id:'g9-physics-exam', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'物理',routeType:'exam',routeTypeName:'考前冲刺专项', title:'中考物理冲刺', description:'力学+电学双线复习，实验题满分策略', tags:['中考','力学','电学','实验'], order:9,
    knowledgePoints:[
      {id:'g9-pe1',name:'力学综合复习',description:'压强浮力简单机械综合计算',order:1,importance:3,tags:['力学']},
      {id:'g9-pe2',name:'电学综合复习',description:'动态电路、极值问题、电功率综合',order:2,importance:3,tags:['电学']},
      {id:'g9-pe3',name:'实验探究题',description:'控制变量法、实验设计、数据分析、误差分析',order:3,importance:3,tags:['实验']},
      {id:'g9-pe4',name:'作图与计算',description:'力的示意图、电路图、综合计算规范',order:4,importance:2,tags:['综合']},
      {id:'g9-pe5',name:'真题模拟',description:'近五年中考物理真题',order:5,importance:2,tags:['真题']}
    ]},

  // --- 化学 ---
  { id:'g9-chemistry-sync', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'化学',routeType:'sync',routeTypeName:'课内同步提升', title:'初三化学课内同步', description:'金属、溶液、酸碱盐——中考化学核心板块', tags:['金属','溶液','酸碱盐'], order:10,
    knowledgePoints:[
      {id:'g9-chs1',name:'金属材料',description:'金属物理性质、合金、金属活动性顺序',order:1,importance:2,tags:['金属']},
      {id:'g9-chs2',name:'金属的化学性质',description:'金属与氧气酸盐反应、置换反应',order:2,importance:3,tags:['金属']},
      {id:'g9-chs3',name:'溶液',description:'溶解度、溶质质量分数、溶液的配制',order:3,importance:3,tags:['溶液']},
      {id:'g9-chs4',name:'酸和碱',description:'常见酸碱性质、中和反应、pH值',order:4,importance:3,tags:['酸碱']},
      {id:'g9-chs5',name:'盐 化学肥料',description:'复分解反应条件、常见盐的性质、化肥',order:5,importance:3,tags:['盐']}
    ]},
  { id:'g9-chemistry-exam', gradeId:'grade-9',gradeName:'初三',gradeSlug:'junior-3', subject:'化学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'中考化学冲刺', description:'推断题+实验探究+计算题三大题型专项突破', tags:['中考','推断','实验','计算'], order:11,
    knowledgePoints:[
      {id:'g9-che1',name:'物质推断题',description:'颜色特征、反应条件、物质转化关系梳理',order:1,importance:3,tags:['推断']},
      {id:'g9-che2',name:'实验探究题',description:'气体制备、物质检验与鉴别、除杂',order:2,importance:3,tags:['实验']},
      {id:'g9-che3',name:'化学计算',description:'化学方程式计算、溶液计算、综合计算',order:3,importance:3,tags:['计算']},
      {id:'g9-che4',name:'真题模拟',description:'近五年中考化学真题',order:4,importance:2,tags:['真题']}
    ]},

  // ================================================================
  //  高一
  // ================================================================

  // --- 数学 ---
  { id:'g10-math-sync', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'高一数学课内同步', description:'集合、函数、三角函数——概念抽象度飞跃，打好高中数学基础', tags:['集合','函数','三角函数','向量'], order:1,
    knowledgePoints:[
      {id:'g10-ms1',name:'集合与逻辑',description:'集合运算、充分必要条件、全称量词与存在量词',order:1,importance:2,tags:['集合']},
      {id:'g10-ms2',name:'不等式',description:'一元二次不等式、基本不等式(均值不等式)及其应用',order:2,importance:3,tags:['不等式']},
      {id:'g10-ms3',name:'函数概念与性质',description:'定义域值域、单调性奇偶性周期性、复合函数',order:3,importance:3,tags:['函数']},
      {id:'g10-ms4',name:'指数函数与对数函数',description:'指对数运算、图像性质、比较大小、实际应用',order:4,importance:3,tags:['指对数']},
      {id:'g10-ms5',name:'三角函数',description:'任意角与弧度制、诱导公式、图像性质、恒等变换',order:5,importance:3,tags:['三角函数']},
      {id:'g10-ms6',name:'平面向量',description:'向量线性运算、坐标表示、数量积及其应用',order:6,importance:2,tags:['向量']}
    ]},
  { id:'g10-math-advance', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'高一数学竞赛入门', description:'函数方程+不等式证明+竞赛一试内容衔接', tags:['竞赛','函数','不等式'], order:2,
    knowledgePoints:[
      {id:'g10-ma1',name:'函数方程',description:'抽象函数性质推导、函数方程求解方法',order:1,importance:3,tags:['函数']},
      {id:'g10-ma2',name:'不等式证明方法',description:'均值不等式、柯西不等式、排序不等式',order:2,importance:3,tags:['不等式']},
      {id:'g10-ma3',name:'三角函数竞赛题型',description:'三角恒等变换技巧、三角形中的恒等式',order:3,importance:2,tags:['三角']},
      {id:'g10-ma4',name:'向量与几何',description:'向量法解几何问题、奔驰定理',order:4,importance:2,tags:['向量']}
    ]},

  // --- 语文 ---
  { id:'g10-chinese-sync', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'高一语文课内同步', description:'高中语文转型期：古诗文鉴赏+论述类文本+复杂记叙文', tags:['古诗文','论述类','写作'], order:3,
    knowledgePoints:[
      {id:'g10-cs1',name:'古诗鉴赏方法',description:'意象意境、表现手法、情感主旨分析',order:1,importance:3,tags:['古诗']},
      {id:'g10-cs2',name:'文言文精读',description:'《劝学》《师说》《赤壁赋》逐篇精讲',order:2,importance:3,tags:['文言文']},
      {id:'g10-cs3',name:'论述类文本阅读',description:'观点提取、论证分析、逻辑推断',order:3,importance:3,tags:['论述类']},
      {id:'g10-cs4',name:'复杂记叙文写作',description:'记叙文立意深化、夹叙夹议技法',order:4,importance:2,tags:['写作']},
      {id:'g10-cs5',name:'整本书阅读',description:'《乡土中国》核心概念与观点梳理',order:5,importance:2,tags:['名著']}
    ]},

  // --- 英语 ---
  { id:'g10-english-sync', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'高一英语课内同步', description:'高中英语转型：词汇量爆发+复杂语法+阅读深度提升', tags:['词汇','语法','阅读','写作'], order:4,
    knowledgePoints:[
      {id:'g10-es1',name:'时态语态综合',description:'16种时态系统梳理、主动被动灵活转换',order:1,importance:3,tags:['语法']},
      {id:'g10-es2',name:'非谓语动词',description:'不定式动名词分词用法辨析',order:2,importance:3,tags:['语法']},
      {id:'g10-es3',name:'名词性从句',description:'主语宾语表语同位语从句',order:3,importance:3,tags:['从句']},
      {id:'g10-es4',name:'阅读理解提升',description:'主旨大意、推理判断、词义猜测题型训练',order:4,importance:3,tags:['阅读']},
      {id:'g10-es5',name:'应用文写作',description:'书信/通知/邮件/演讲稿写作规范',order:5,importance:2,tags:['写作']}
    ]},

  // --- 物理 ---
  { id:'g10-physics-sync', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'物理',routeType:'sync',routeTypeName:'课内同步提升', title:'高一物理课内同步', description:'必修一+必修二：运动学、力学、牛顿定律——高中物理基石', tags:['运动学','力学','牛顿定律','曲线运动'], order:5,
    knowledgePoints:[
      {id:'g10-ps1',name:'运动的描述',description:'质点、参考系、位移速度加速度、匀变速直线运动规律',order:1,importance:3,tags:['运动学']},
      {id:'g10-ps2',name:'匀变速直线运动',description:'三个基本公式、推论、自由落体竖直上抛',order:2,importance:3,tags:['运动学']},
      {id:'g10-ps3',name:'相互作用——力',description:'重力弹力摩擦力、力的合成与分解、共点力平衡',order:3,importance:3,tags:['力学']},
      {id:'g10-ps4',name:'牛顿运动定律',description:'牛顿三定律、超重失重、连接体问题',order:4,importance:3,tags:['牛顿']},
      {id:'g10-ps5',name:'曲线运动',description:'运动的合成与分解、平抛运动、圆周运动',order:5,importance:3,tags:['曲线']},
      {id:'g10-ps6',name:'万有引力与航天',description:'开普勒定律、万有引力定律应用、宇宙速度',order:6,importance:2,tags:['航天']},
      {id:'g10-ps7',name:'机械能守恒定律',description:'功和功率、动能定理、机械能守恒、功能关系',order:7,importance:3,tags:['能量']}
    ]},

  // --- 化学 ---
  { id:'g10-chemistry-sync', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'化学',routeType:'sync',routeTypeName:'课内同步提升', title:'高一化学课内同步', description:'物质的量+离子反应+氧化还原——高中化学分水岭', tags:['物质的量','离子反应','氧化还原','元素化学'], order:6,
    knowledgePoints:[
      {id:'g10-chs1',name:'物质的量',description:'n/N/NA/M/Vm/c公式体系、阿伏加德罗定律',order:1,importance:3,tags:['计算']},
      {id:'g10-chs2',name:'离子反应',description:'电解质与非电解质、离子方程式书写与正误判断',order:2,importance:3,tags:['离子']},
      {id:'g10-chs3',name:'氧化还原反应',description:'化合价升降、电子转移、氧化性还原性强弱比较',order:3,importance:3,tags:['氧化还原']},
      {id:'g10-chs4',name:'钠及其化合物',description:'Na/Na₂O/Na₂O₂/Na₂CO₃/NaHCO₃性质与转化',order:4,importance:2,tags:['元素']},
      {id:'g10-chs5',name:'氯及其化合物',description:'Cl₂性质、HClO漂白性、氯水成分、实验室制法',order:5,importance:2,tags:['元素']},
      {id:'g10-chs6',name:'铁及其化合物',description:'Fe²⁺/Fe³⁺转化与检验、铁的氧化物氢氧化物',order:6,importance:2,tags:['元素']},
      {id:'g10-chs7',name:'硫及其化合物',description:'SO₂性质与检验、浓硫酸特性、硫酸工业',order:7,importance:2,tags:['元素']}
    ]},

  // --- 生物 ---
  { id:'g10-biology-sync', gradeId:'grade-10',gradeName:'高一',gradeSlug:'senior-1', subject:'生物',routeType:'sync',routeTypeName:'课内同步提升', title:'高一生物课内同步', description:'必修一：细胞的分子组成、结构、代谢——生命科学基础', tags:['细胞','分子','代谢','光合呼吸'], order:7,
    knowledgePoints:[
      {id:'g10-bs1',name:'细胞的分子组成',description:'蛋白质核酸糖类脂质结构与功能',order:1,importance:3,tags:['分子']},
      {id:'g10-bs2',name:'细胞的结构',description:'细胞膜细胞器细胞核、原核与真核细胞区别',order:2,importance:3,tags:['结构']},
      {id:'g10-bs3',name:'物质的跨膜运输',description:'自由扩散协助扩散主动运输胞吞胞吐',order:3,importance:2,tags:['运输']},
      {id:'g10-bs4',name:'酶与ATP',description:'酶的特性、影响酶活性的因素、ATP结构功能',order:4,importance:3,tags:['酶']},
      {id:'g10-bs5',name:'细胞呼吸',description:'有氧呼吸三个阶段、无氧呼吸、影响呼吸的因素',order:5,importance:3,tags:['呼吸']},
      {id:'g10-bs6',name:'光合作用',description:'光反应暗反应、C3C5变化、影响光合的因素',order:6,importance:3,tags:['光合']},
      {id:'g10-bs7',name:'细胞的生命历程',description:'有丝分裂、细胞分化、衰老与凋亡',order:7,importance:2,tags:['分裂']}
    ]},

  // ================================================================
  //  高二
  // ================================================================

  // --- 数学 ---
  { id:'g11-math-sync', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'数学',routeType:'sync',routeTypeName:'课内同步提升', title:'高二数学课内同步', description:'解析几何、数列、导数、立体几何——高考核心四大板块', tags:['解析几何','数列','导数','立体几何','概率'], order:1,
    knowledgePoints:[
      {id:'g11-ms1',name:'空间向量与立体几何',description:'空间直角坐标系、线面角二面角、距离计算',order:1,importance:2,tags:['立体几何']},
      {id:'g11-ms2',name:'直线与圆的方程',description:'直线方程五种形式、圆的方程、位置关系',order:2,importance:2,tags:['解析几何']},
      {id:'g11-ms3',name:'圆锥曲线',description:'椭圆双曲线抛物线定义性质、弦长面积、定点定值',order:3,importance:3,tags:['圆锥曲线']},
      {id:'g11-ms4',name:'数列',description:'等差等比数列、递推求通项、求和、数学归纳法',order:4,importance:3,tags:['数列']},
      {id:'g11-ms5',name:'导数及其应用',description:'导数定义运算、切线、单调性极值最值、恒成立',order:5,importance:3,tags:['导数']},
      {id:'g11-ms6',name:'计数原理',description:'排列组合、二项式定理',order:6,importance:2,tags:['计数']},
      {id:'g11-ms7',name:'随机变量及其分布',description:'条件概率、全概率公式、分布列期望方差',order:7,importance:2,tags:['概率']}
    ]},
  { id:'g11-math-advance', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'数学',routeType:'advance',routeTypeName:'课外培优拓展', title:'高二数学培优（竞赛方向）', description:'不等式证明深化+数列放缩+导数高级技巧', tags:['竞赛','不等式','导数'], order:2,
    knowledgePoints:[
      {id:'g11-ma1',name:'不等式证明进阶',description:'柯西不等式、排序不等式、琴生不等式',order:1,importance:3,tags:['不等式']},
      {id:'g11-ma2',name:'数列放缩法',description:'裂项放缩、等比放缩、均值放缩',order:2,importance:3,tags:['数列']},
      {id:'g11-ma3',name:'导数高级技巧',description:'隐零点、极值点偏移、双变量处理、端点效应',order:3,importance:3,tags:['导数']},
      {id:'g11-ma4',name:'解析几何技巧',description:'齐次化处理、非对称韦达、设而不求',order:4,importance:3,tags:['解析几何']}
    ]},

  // --- 语文 ---
  { id:'g11-chinese-sync', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'语文',routeType:'sync',routeTypeName:'课内同步提升', title:'高二语文课内同步', description:'诗歌鉴赏深化+小说阅读+议论文写作全面提升', tags:['诗歌','小说','议论文','文言文'], order:3,
    knowledgePoints:[
      {id:'g11-cs1',name:'诗歌鉴赏专题',description:'形象语言表达技巧思想情感四大维度系统训练',order:1,importance:3,tags:['诗歌']},
      {id:'g11-cs2',name:'小说阅读专题',description:'人物情节环境主题四要素分析模板',order:2,importance:3,tags:['小说']},
      {id:'g11-cs3',name:'文言文深化',description:'《逍遥游》《陈情表》《项脊轩志》等名篇精讲',order:3,importance:2,tags:['文言文']},
      {id:'g11-cs4',name:'议论文写作进阶',description:'审题立意、论证方法、结构布局',order:4,importance:3,tags:['写作']},
      {id:'g11-cs5',name:'语言文字运用',description:'成语辨析、病句修改、补写句子、图文转换',order:5,importance:2,tags:['语用']}
    ]},

  // --- 英语 ---
  { id:'g11-english-sync', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'英语',routeType:'sync',routeTypeName:'课内同步提升', title:'高二英语课内同步', description:'虚拟语气+倒装+强调+省略——特殊句式全掌握', tags:['虚拟语气','特殊句式','阅读','写作'], order:4,
    knowledgePoints:[
      {id:'g11-es1',name:'虚拟语气',description:'条件虚拟、名词性从句虚拟、wish/as if用法',order:1,importance:3,tags:['语法']},
      {id:'g11-es2',name:'倒装与强调',description:'部分倒装全部倒装、强调句型It is...that...',order:2,importance:2,tags:['语法']},
      {id:'g11-es3',name:'定语从句进阶',description:'介词+关系代词、限定性与非限定性辨析',order:3,importance:3,tags:['从句']},
      {id:'g11-es4',name:'七选五与完形填空',description:'语篇逻辑分析、衔接词判断、语境推理',order:4,importance:3,tags:['阅读']},
      {id:'g11-es5',name:'读后续写',description:'新高考题型——阅读+续写技巧训练',order:5,importance:2,tags:['写作']}
    ]},

  // --- 物理 ---
  { id:'g11-physics-sync', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'物理',routeType:'sync',routeTypeName:'课内同步提升', title:'高二物理课内同步', description:'电磁学核心——电场磁场电磁感应，高考分值占比最大', tags:['电场','磁场','电磁感应','恒定电流'], order:5,
    knowledgePoints:[
      {id:'g11-ps1',name:'静电场',description:'库仑定律、电场强度、电势电势差电势能、电容器',order:1,importance:3,tags:['电场']},
      {id:'g11-ps2',name:'带电粒子在电场中运动',description:'加速与偏转、示波管原理、等效重力场',order:2,importance:3,tags:['电场']},
      {id:'g11-ps3',name:'恒定电流',description:'欧姆定律、闭合电路欧姆定律、电功率、电学实验',order:3,importance:3,tags:['电路']},
      {id:'g11-ps4',name:'磁场',description:'安培力、洛伦兹力、带电粒子在磁场中圆周运动',order:4,importance:3,tags:['磁场']},
      {id:'g11-ps5',name:'电磁感应',description:'法拉第电磁感应定律、楞次定律、动生感生电动势',order:5,importance:3,tags:['电磁感应']},
      {id:'g11-ps6',name:'交变电流与变压器',description:'正弦交流电、理想变压器、远距离输电',order:6,importance:2,tags:['交流电']}
    ]},

  // --- 化学 ---
  { id:'g11-chemistry-sync', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'化学',routeType:'sync',routeTypeName:'课内同步提升', title:'高二化学课内同步', description:'选修一+选修二：化学反应原理+物质结构——理论化学核心', tags:['反应原理','平衡','结构','有机'], order:6,
    knowledgePoints:[
      {id:'g11-chs1',name:'化学反应与能量',description:'反应热、热化学方程式、盖斯定律、燃烧热中和热',order:1,importance:3,tags:['热化学']},
      {id:'g11-chs2',name:'化学反应速率',description:'速率计算、影响因素、有效碰撞理论',order:2,importance:2,tags:['速率']},
      {id:'g11-chs3',name:'化学平衡',description:'平衡常数、勒夏特列原理、等效平衡、图像分析',order:3,importance:3,tags:['平衡']},
      {id:'g11-chs4',name:'水溶液中的离子平衡',description:'弱电解质电离、水的电离、盐类水解、沉淀溶解平衡',order:4,importance:3,tags:['离子平衡']},
      {id:'g11-chs5',name:'原子结构与性质',description:'能层能级、电子排布、电离能电负性',order:5,importance:2,tags:['结构']},
      {id:'g11-chs6',name:'分子结构与晶体',description:'共价键、杂化轨道、VSEPR模型、分子间作用力、晶胞计算',order:6,importance:2,tags:['结构']},
      {id:'g11-chs7',name:'有机化学基础',description:'烃的分类命名、同分异构、取代加成反应',order:7,importance:3,tags:['有机']}
    ]},

  // --- 生物 ---
  { id:'g11-biology-sync', gradeId:'grade-11',gradeName:'高二',gradeSlug:'senior-2', subject:'生物',routeType:'sync',routeTypeName:'课内同步提升', title:'高二生物课内同步', description:'必修二+选择性必修：遗传变异+稳态调节——高考难点', tags:['遗传','变异','稳态','调节'], order:7,
    knowledgePoints:[
      {id:'g11-bs1',name:'遗传的基本规律',description:'分离定律自由组合定律、基因型表现型推断',order:1,importance:3,tags:['遗传']},
      {id:'g11-bs2',name:'伴性遗传',description:'伴X显性/隐性、伴Y遗传、系谱图分析',order:2,importance:3,tags:['遗传']},
      {id:'g11-bs3',name:'DNA复制与基因表达',description:'DNA半保留复制、转录翻译、中心法则',order:3,importance:3,tags:['分子']},
      {id:'g11-bs4',name:'生物的变异',description:'基因突变基因重组染色体变异、育种方法',order:4,importance:2,tags:['变异']},
      {id:'g11-bs5',name:'内环境与稳态',description:'血浆组织液淋巴、pH渗透压体温调节',order:5,importance:2,tags:['稳态']},
      {id:'g11-bs6',name:'神经调节',description:'反射弧、兴奋传导、突触传递',order:6,importance:3,tags:['神经']},
      {id:'g11-bs7',name:'体液调节与免疫',description:'激素调节、血糖调节、特异性免疫过程',order:7,importance:3,tags:['调节']}
    ]},

  // ================================================================
  //  高三
  // ================================================================

  // --- 数学 ---
  { id:'g12-math-exam', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考数学第一轮复习', description:'系统梳理高中数学全部知识点，构建完整知识体系', tags:['高考','一轮复习','基础巩固'], order:1,
    knowledgePoints:[
      {id:'g12-me1',name:'集合与常用逻辑用语',description:'集合运算、充要条件、量词',order:1,importance:1,tags:['基础']},
      {id:'g12-me2',name:'函数',description:'三要素、四大性质、基本初等函数、函数与方程',order:2,importance:3,tags:['核心']},
      {id:'g12-me3',name:'导数及其应用',description:'运算、切线、单调性极值最值、恒成立、零点',order:3,importance:3,tags:['压轴']},
      {id:'g12-me4',name:'三角函数与解三角形',description:'恒等变换、图像性质、正余弦定理应用',order:4,importance:2,tags:['三角']},
      {id:'g12-me5',name:'平面向量与复数',description:'向量运算、坐标表示、复数四则运算',order:5,importance:1,tags:['工具']},
      {id:'g12-me6',name:'数列',description:'等差等比、递推、求和、数学归纳法',order:6,importance:3,tags:['数列']},
      {id:'g12-me7',name:'立体几何',description:'位置关系、空间角与距离、外接球内切球',order:7,importance:2,tags:['立体']},
      {id:'g12-me8',name:'解析几何',description:'直线与圆、圆锥曲线、弦长面积、定点定值范围',order:8,importance:3,tags:['压轴']},
      {id:'g12-me9',name:'概率统计',description:'排列组合、二项式定理、分布列、统计案例',order:9,importance:2,tags:['概率']}
    ]},
  { id:'g12-math-exam2', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'数学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考数学二三轮冲刺', description:'专题突破+模拟训练+查漏补缺，冲刺140+', tags:['高考','冲刺','压轴'], order:2,
    knowledgePoints:[
      {id:'g12-me2-1',name:'选填速解',description:'特值法、排除法、数形结合、极限法',order:1,importance:3,tags:['技巧']},
      {id:'g12-me2-2',name:'导数压轴突破',description:'恒成立求参、极值点偏移、隐零点、双变量',order:2,importance:3,tags:['压轴']},
      {id:'g12-me2-3',name:'解析几何压轴突破',description:'定点定值、范围最值、轨迹方程',order:3,importance:3,tags:['压轴']},
      {id:'g12-me2-4',name:'新定义创新题',description:'阅读理解型、数学文化背景题',order:4,importance:2,tags:['创新']},
      {id:'g12-me2-5',name:'全真模拟',description:'近三年高考真题+名校模拟卷',order:5,importance:2,tags:['真题']}
    ]},

  // --- 语文 ---
  { id:'g12-chinese-exam', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'语文',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考语文系统复习', description:'现代文+古诗文+语用+作文四大板块全面复习', tags:['高考','系统复习','作文'], order:3,
    knowledgePoints:[
      {id:'g12-ce1',name:'论述类与实用类文本',description:'选择题辨析技巧、主观题答题规范',order:1,importance:3,tags:['现代文']},
      {id:'g12-ce2',name:'文学类文本阅读',description:'小说散文鉴赏、作用题/含义题/技巧题答题公式',order:2,importance:3,tags:['现代文']},
      {id:'g12-ce3',name:'文言文阅读',description:'断句、文化常识、翻译、内容概括',order:3,importance:3,tags:['文言文']},
      {id:'g12-ce4',name:'古代诗歌鉴赏',description:'形象/语言/技巧/情感四大考点答题模板',order:4,importance:3,tags:['诗歌']},
      {id:'g12-ce5',name:'名篇名句默写',description:'64篇必背篇目情景式默写训练',order:5,importance:2,tags:['默写']},
      {id:'g12-ce6',name:'语言文字运用',description:'成语、病句、补写、压缩、仿写全题型',order:6,importance:2,tags:['语用']},
      {id:'g12-ce7',name:'高考作文',description:'任务驱动型作文审题立意、素材运用、结构模板',order:7,importance:3,tags:['作文']}
    ]},

  // --- 英语 ---
  { id:'g12-english-exam', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'英语',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考英语系统复习', description:'词汇+语法+阅读+写作+听力全题型突破', tags:['高考','全题型','冲刺'], order:4,
    knowledgePoints:[
      {id:'g12-ee1',name:'高考3500词分类记忆',description:'高频词、一词多义、熟词生义、词块搭配',order:1,importance:3,tags:['词汇']},
      {id:'g12-ee2',name:'语法填空与改错',description:'语法填空考点分布、短文改错规律总结',order:2,importance:3,tags:['语法']},
      {id:'g12-ee3',name:'阅读理解',description:'ABCD四篇阅读解题策略、七选五逻辑分析',order:3,importance:3,tags:['阅读']},
      {id:'g12-ee4',name:'完形填空',description:'上下文线索、词汇复现、逻辑推理',order:4,importance:2,tags:['完形']},
      {id:'g12-ee5',name:'书面表达',description:'应用文写作模板+读后续写技巧',order:5,importance:3,tags:['写作']},
      {id:'g12-ee6',name:'听力专项',description:'短对话长对话独白三大题型训练',order:6,importance:2,tags:['听力']}
    ]},

  // --- 物理 ---
  { id:'g12-physics-exam', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'物理',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考物理系统复习', description:'力学+电磁学双线并进，实验+计算全面突破', tags:['高考','力学','电磁学','实验'], order:5,
    knowledgePoints:[
      {id:'g12-pe1',name:'力与运动',description:'牛顿定律、曲线运动、万有引力综合',order:1,importance:3,tags:['力学']},
      {id:'g12-pe2',name:'功和能',description:'动能定理、机械能守恒、功能关系综合应用',order:2,importance:3,tags:['能量']},
      {id:'g12-pe3',name:'动量与冲量',description:'动量定理、动量守恒、碰撞模型',order:3,importance:3,tags:['动量']},
      {id:'g12-pe4',name:'电场与磁场',description:'带电粒子在电磁场中运动综合',order:4,importance:3,tags:['电磁学']},
      {id:'g12-pe5',name:'电磁感应综合',description:'与电路、力学、能量综合问题',order:5,importance:3,tags:['电磁感应']},
      {id:'g12-pe6',name:'物理实验专题',description:'力学实验+电学实验全部考点、创新实验',order:6,importance:3,tags:['实验']},
      {id:'g12-pe7',name:'选考模块',description:'热学/机械振动与波/光学三选一',order:7,importance:2,tags:['选考']}
    ]},

  // --- 化学 ---
  { id:'g12-chemistry-exam', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'化学',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考化学系统复习', description:'原理+元素+有机+实验四大模块，选择题+大题全覆盖', tags:['高考','原理','元素','有机','实验'], order:6,
    knowledgePoints:[
      {id:'g12-che1',name:'化学反应原理',description:'速率与平衡、溶液中离子平衡、电化学综合',order:1,importance:3,tags:['原理']},
      {id:'g12-che2',name:'元素化合物',description:'Na/Mg/Al/Fe/Cu及其化合物、非金属元素性质',order:2,importance:3,tags:['元素']},
      {id:'g12-che3',name:'有机化学',description:'官能团性质、有机推断与合成路线设计',order:3,importance:3,tags:['有机']},
      {id:'g12-che4',name:'物质结构与性质',description:'电子排布、杂化轨道、晶体结构与计算',order:4,importance:2,tags:['结构']},
      {id:'g12-che5',name:'化学实验专题',description:'气体制备、物质检验、定量实验、实验设计评价',order:5,importance:3,tags:['实验']},
      {id:'g12-che6',name:'化工流程与STSE',description:'工业流程题解题策略、化学与生活',order:6,importance:2,tags:['综合']}
    ]},

  // --- 生物 ---
  { id:'g12-biology-exam', gradeId:'grade-12',gradeName:'高三',gradeSlug:'senior-3', subject:'生物',routeType:'exam',routeTypeName:'考前冲刺专项', title:'高考生物系统复习', description:'五本教材系统梳理，核心概念+实验设计+遗传计算', tags:['高考','系统复习','遗传','实验'], order:7,
    knowledgePoints:[
      {id:'g12-be1',name:'细胞的分子与结构',description:'化合物、细胞器、生物膜系统归纳',order:1,importance:2,tags:['细胞']},
      {id:'g12-be2',name:'细胞代谢',description:'酶、ATP、光合作用与呼吸作用综合',order:2,importance:3,tags:['代谢']},
      {id:'g12-be3',name:'遗传定律与变异',description:'分离自由组合定律、伴性遗传、育种方法',order:3,importance:3,tags:['遗传']},
      {id:'g12-be4',name:'基因表达与生物技术',description:'中心法则、基因工程、PCR、基因编辑',order:4,importance:2,tags:['分子']},
      {id:'g12-be5',name:'稳态与调节',description:'神经-体液-免疫调节网络、植物激素',order:5,importance:3,tags:['调节']},
      {id:'g12-be6',name:'生态与环境',description:'种群群落生态系统、能量流动物质循环',order:6,importance:2,tags:['生态']},
      {id:'g12-be7',name:'实验设计与探究',description:'实验设计原则、变量控制、结果分析表述',order:7,importance:3,tags:['实验']}
    ]}
];

// ==================== B站视频素材 ====================
const materials = [
  // === 小学3-4年级数学 ===
  {id:'m001',knowledgePointId:'p34-ms1',routeId:'p34-math-sync',title:'三年级数学：万以内加法与减法竖式精讲',up:'数学林老师',videoUrl:'https://www.bilibili.com/video/BV1xx001',description:'生动讲解三位数四位数加减法竖式计算，重点讲连续进位和退位',duration:'25分钟',rating:5,suitableFor:'3年级',tags:['计算','基础']},
  {id:'m002',knowledgePointId:'p34-ms2',routeId:'p34-math-sync',title:'多位数乘一位数竖式计算详解（附口诀）',up:'高斯课堂',videoUrl:'https://www.bilibili.com/video/BV1xx002',description:'从乘法口诀过渡到竖式计算，循序渐进配套大量练习',duration:'30分钟',rating:5,suitableFor:'3-4年级',tags:['乘法','竖式']},
  {id:'m003',knowledgePointId:'p34-ma2',routeId:'p34-math-advance',title:'小学奥数经典：鸡兔同笼问题三种解法',up:'清华数学系胡老师',videoUrl:'https://www.bilibili.com/video/BV1xx003',description:'假设法、抬脚法、方程法全解析，培养多角度思考',duration:'35分钟',rating:5,suitableFor:'3-6年级',tags:['奥数','鸡兔同笼']},
  {id:'m004',knowledgePointId:'p34-me2',routeId:'p34-math-exam',title:'小学应用题12种类型全突破（附解题模板）',up:'北大学长陪你学',videoUrl:'https://www.bilibili.com/video/BV1xx004',description:'归一归总、和差倍、行程等12类应用题解题思路总结',duration:'45分钟',rating:5,suitableFor:'3-4年级',tags:['应用题','总结']},

  // === 小学3-4年级语文 ===
  {id:'m005',knowledgePointId:'p34-cs2',routeId:'p34-chinese-sync',title:'小学生必背古诗75首：朗读+逐句讲解',up:'语文大师',videoUrl:'https://www.bilibili.com/video/BV1xx005',description:'逐首讲解诗意、写作背景、重点字词，帮助理解记忆',duration:'每首5分钟',rating:5,suitableFor:'3-6年级',tags:['古诗','背诵']},
  {id:'m006',knowledgePointId:'p34-cs4',routeId:'p34-chinese-sync',title:'小学生记事作文入门：六要素法+细节描写',up:'作文纸条',videoUrl:'https://www.bilibili.com/video/BV1xx006',description:'按事情发展顺序写清楚一件事，加入语言动作心理描写',duration:'25分钟',rating:4,suitableFor:'3-4年级',tags:['作文','记叙文']},
  {id:'m007',knowledgePointId:'p34-ce2',routeId:'p34-chinese-exam',title:'小学语文阅读理解答题模板：概括+赏析+含义',up:'豆神大语文',videoUrl:'https://www.bilibili.com/video/BV1xx007',description:'课内阅读常见题型答题公式，期中期末必备',duration:'30分钟',rating:5,suitableFor:'3-4年级',tags:['阅读','考试']},

  // === 小学3-4年级英语 ===
  {id:'m008',knowledgePointId:'p34-es1',routeId:'p34-english-sync',title:'26个英文字母标准书写+发音教学',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx008',description:'大小写笔顺、字母在单词中的常见发音',duration:'20分钟',rating:5,suitableFor:'3年级',tags:['字母','入门']},
  {id:'m009',knowledgePointId:'p34-es4',routeId:'p34-english-sync',title:'自然拼读入门：CVC单词拼读规律',up:'英语启蒙老师',videoUrl:'https://www.bilibili.com/video/BV1xx009',description:'元音辅音组合发音规律，见词能读听音能写',duration:'30分钟',rating:5,suitableFor:'3-4年级',tags:['拼读','启蒙']},

  // === 小学5-6年级数学 ===
  {id:'m010',knowledgePointId:'p56-ms3',routeId:'p56-math-sync',title:'简易方程入门：从字母表示数到解方程',up:'数学林老师',videoUrl:'https://www.bilibili.com/video/BV1xx010',description:'从算术思维过渡到代数思维的关键一课',duration:'30分钟',rating:5,suitableFor:'5年级',tags:['方程','入门']},
  {id:'m011',knowledgePointId:'p56-ma1',routeId:'p56-math-advance',title:'小学奥数行程问题大全：相遇追及环形火车',up:'清华数学系胡老师',videoUrl:'https://www.bilibili.com/video/BV1xx011',description:'四大类行程问题系统讲解，画图分析法不再害怕',duration:'50分钟',rating:5,suitableFor:'5-6年级',tags:['行程','奥数']},
  {id:'m012',knowledgePointId:'p56-ma4',routeId:'p56-math-advance',title:'数论入门：整除特征、质数与合数',up:'竞赛数学陈老师',videoUrl:'https://www.bilibili.com/video/BV1xx012',description:'小学奥数数论模块核心内容，初中数学重要基础',duration:'40分钟',rating:4,suitableFor:'5-6年级',tags:['数论','基础']},
  {id:'m013',knowledgePointId:'p56-me1',routeId:'p56-math-exam',title:'小升初数学总复习：计算能力专项突破',up:'小学毕业班王老师',videoUrl:'https://www.bilibili.com/video/BV1xx013',description:'整数小数分数混合运算限时训练方法',duration:'35分钟',rating:4,suitableFor:'6年级',tags:['小升初','计算']},

  // === 小学5-6年级语文 ===
  {id:'m014',knowledgePointId:'p56-cs2',routeId:'p56-chinese-sync',title:'记叙文阅读：人物描写+环境描写答题公式',up:'豆神大语文',videoUrl:'https://www.bilibili.com/video/BV1xx014',description:'人物分析四角度、环境描写五作用全掌握',duration:'35分钟',rating:5,suitableFor:'5-6年级',tags:['阅读','记叙文']},
  {id:'m015',knowledgePointId:'p56-ce2',routeId:'p56-chinese-exam',title:'小升初语文阅读满分技巧：所有题型模板化',up:'语文大师',videoUrl:'https://www.bilibili.com/video/BV1xx015',description:'概括题赏析题含义题作用题答题公式总结',duration:'40分钟',rating:5,suitableFor:'5-6年级',tags:['阅读','模板']},

  // === 小学5-6年级英语 ===
  {id:'m016',knowledgePointId:'p56-es1',routeId:'p56-english-sync',title:'一般现在时精讲：三单变化+频率副词',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx016',description:'英语最基础时态，三单变化规律口诀记忆法',duration:'25分钟',rating:5,suitableFor:'5年级',tags:['语法','时态']},
  {id:'m017',knowledgePointId:'p56-es3',routeId:'p56-english-sync',title:'一般过去时：规则与不规则动词全攻略',up:'李阳疯狂英语',videoUrl:'https://www.bilibili.com/video/BV1xx017',description:'动词过去式变化规则+常见不规则动词表记忆',duration:'30分钟',rating:5,suitableFor:'5-6年级',tags:['语法','时态']},

  // === 初一数学 ===
  {id:'m018',knowledgePointId:'g7-ms1',routeId:'g7-math-sync',title:'初一数学：有理数运算全攻略',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx018',description:'从正负数概念到混合运算，建立初中数学计算体系',duration:'40分钟',rating:5,suitableFor:'初一',tags:['有理数','基础']},
  {id:'m019',knowledgePointId:'g7-ms3',routeId:'g7-math-sync',title:'一元一次方程：从入门到精通（八大题型）',up:'数学大师',videoUrl:'https://www.bilibili.com/video/BV1xx019',description:'解方程五步法+八大类应用题建模',duration:'45分钟',rating:5,suitableFor:'初一',tags:['方程','应用']},
  {id:'m020',knowledgePointId:'g7-ms6',routeId:'g7-math-sync',title:'平行线的判定与性质：三线八角模型',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx020',description:'几何证明从这里开始，三线八角+平行线综合',duration:'30分钟',rating:5,suitableFor:'初一',tags:['几何','平行线']},
  {id:'m021',knowledgePointId:'g7-ma4',routeId:'g7-math-advance',title:'几何证明题入门：怎么写、怎么想',up:'复旦数学系李老师',videoUrl:'https://www.bilibili.com/video/BV1xx021',description:'从零教你写几何证明，因果逻辑+辅助线思路',duration:'35分钟',rating:5,suitableFor:'初一-初二',tags:['证明','几何']},

  // === 初一语文 ===
  {id:'m022',knowledgePointId:'g7-cs1',routeId:'g7-chinese-sync',title:'《世说新语》二则精讲：咏雪+陈太丘与友期行',up:'语文大师',videoUrl:'https://www.bilibili.com/video/BV1xx022',description:'逐字逐句翻译+文言现象归纳+人物形象分析',duration:'35分钟',rating:5,suitableFor:'初一',tags:['文言文','精讲']},
  {id:'m023',knowledgePointId:'g7-cs3',routeId:'g7-chinese-sync',title:'初一记叙文写作：六要素+详略+细节描写',up:'作文纸条',videoUrl:'https://www.bilibili.com/video/BV1xx023',description:'从流水账到生动记叙文的进阶写法',duration:'30分钟',rating:5,suitableFor:'初一',tags:['写作','记叙文']},

  // === 初一英语 ===
  {id:'m024',knowledgePointId:'g7-es1',routeId:'g7-english-sync',title:'48个国际音标BBC标准发音教程',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx024',description:'逐个音标拆解口型舌位，配套单词跟读练习',duration:'60分钟',rating:5,suitableFor:'初一',tags:['音标','发音']},
  {id:'m025',knowledgePointId:'g7-es2',routeId:'g7-english-sync',title:'一般现在时+三单变化+频率副词大串讲',up:'李阳疯狂英语',videoUrl:'https://www.bilibili.com/video/BV1xx025',description:'语法基础中的基础，必须100%掌握',duration:'25分钟',rating:4,suitableFor:'初一',tags:['语法','时态']},

  // === 初一物理 ===
  {id:'m026',knowledgePointId:'g7-ps2',routeId:'g7-physics-sync',title:'声现象：从声音的产生到超声波应用',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx026',description:'音调响度音色三要素辨析、波形图分析',duration:'30分钟',rating:5,suitableFor:'初一',tags:['声学','基础']},
  {id:'m027',knowledgePointId:'g7-ps5',routeId:'g7-physics-sync',title:'物态变化全解析：熔化凝固汽化液化升华凝华',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx027',description:'六种物态变化名称+吸放热判断口诀',duration:'35分钟',rating:5,suitableFor:'初一',tags:['热学','物态']},

  // === 初一化学 ===
  {id:'m028',knowledgePointId:'g7-chs3',routeId:'g7-chemistry-sync',title:'氧气的性质与制取：化学入门实验',up:'化学大师',videoUrl:'https://www.bilibili.com/video/BV1xx028',description:'物理性质+化学性质+三种实验室制法对比',duration:'30分钟',rating:5,suitableFor:'初一',tags:['氧气','实验']},
  {id:'m029',knowledgePointId:'g7-chs4',routeId:'g7-chemistry-sync',title:'初中化学实验基本操作规范',up:'化学老师乌莎哈',videoUrl:'https://www.bilibili.com/video/BV1xx029',description:'药品取用、加热、过滤、蒸发、仪器连接洗涤',duration:'25分钟',rating:5,suitableFor:'初一',tags:['实验','操作']},

  // === 初二数学 ===
  {id:'m030',knowledgePointId:'g8-ms1',routeId:'g8-math-sync',title:'全等三角形：五种判定方法精讲+中考真题',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx030',description:'SSS/SAS/ASA/AAS/HL逐一讲解，配套中考真题练习',duration:'50分钟',rating:5,suitableFor:'初二',tags:['全等','证明']},
  {id:'m031',knowledgePointId:'g8-ms5',routeId:'g8-math-sync',title:'一次函数：k和b的几何意义+图像性质',up:'数学大师',videoUrl:'https://www.bilibili.com/video/BV1xx031',description:'与方程不等式的关系、实际应用题',duration:'45分钟',rating:5,suitableFor:'初二',tags:['函数','图像']},
  {id:'m032',knowledgePointId:'g8-ms6',routeId:'g8-math-sync',title:'勾股定理四种证明+折叠与最短路径应用',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx032',description:'赵爽弦图、总统证法等四种经典证明方法',duration:'35分钟',rating:5,suitableFor:'初二',tags:['勾股','应用']},

  // === 初二语文 ===
  {id:'m033',knowledgePointId:'g8-cs1',routeId:'g8-chinese-sync',title:'说明文阅读满分技巧：说明方法+说明顺序',up:'豆神大语文',videoUrl:'https://www.bilibili.com/video/BV1xx033',description:'10种说明方法判断与作用分析、三种说明顺序',duration:'40分钟',rating:5,suitableFor:'初二',tags:['说明文','阅读']},

  // === 初二英语 ===
  {id:'m034',knowledgePointId:'g8-es1',routeId:'g8-english-sync',title:'现在完成时：have/has+过去分词全解析',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx034',description:'since与for区别、have been to与have gone to辨析',duration:'35分钟',rating:5,suitableFor:'初二',tags:['时态','语法']},

  // === 初二物理 ===
  {id:'m035',knowledgePointId:'g8-ps4',routeId:'g8-physics-sync',title:'压强全解：固体液体大气压强综合',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx035',description:'p=F/S与p=ρgh应用场景辨析、托里拆利实验',duration:'45分钟',rating:5,suitableFor:'初二',tags:['压强','力学']},
  {id:'m036',knowledgePointId:'g8-ps5',routeId:'g8-physics-sync',title:'浮力：阿基米德原理+浮沉条件',up:'坤哥物理',videoUrl:'https://www.bilibili.com/video/BV1xx036',description:'四种计算浮力的方法、浮沉应用(密度计潜水艇)',duration:'40分钟',rating:5,suitableFor:'初二',tags:['浮力','力学']},

  // === 初二化学 ===
  {id:'m037',knowledgePointId:'g8-chs3',routeId:'g8-chemistry-sync',title:'化学式与化合价：书写规则+口诀记忆',up:'化学大师',videoUrl:'https://www.bilibili.com/video/BV1xx037',description:'化合价口诀、根据化合价写化学式的方法',duration:'30分钟',rating:5,suitableFor:'初二',tags:['化学式','化合价']},
  {id:'m038',knowledgePointId:'g8-chs4',routeId:'g8-chemistry-sync',title:'质量守恒定律+化学方程式配平方法',up:'化学老师乌莎哈',videoUrl:'https://www.bilibili.com/video/BV1xx038',description:'最小公倍数法、奇偶法、观察法配平技巧',duration:'35分钟',rating:5,suitableFor:'初二',tags:['方程式','配平']},

  // === 初三数学 ===
  {id:'m039',knowledgePointId:'g9-ms2',routeId:'g9-math-sync',title:'二次函数：图像性质+最值问题精讲',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx039',description:'开口对称轴顶点坐标、与x轴交点、中考压轴题',duration:'55分钟',rating:5,suitableFor:'初三',tags:['二次函数','压轴']},
  {id:'m040',knowledgePointId:'g9-ms3',routeId:'g9-math-sync',title:'圆：圆周角+切线+圆幂定理综合',up:'数学大师',videoUrl:'https://www.bilibili.com/video/BV1xx040',description:'圆中常见辅助线+与相似三角形综合',duration:'60分钟',rating:5,suitableFor:'初三',tags:['圆','综合']},
  {id:'m041',knowledgePointId:'g9-me2',routeId:'g9-math-exam',title:'中考数学压轴题：函数综合专题',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx041',description:'一次函数+反比例函数+二次函数综合',duration:'60分钟',rating:5,suitableFor:'初三',tags:['中考','压轴']},

  // === 初三语文 ===
  {id:'m042',knowledgePointId:'g9-cs3',routeId:'g9-chinese-sync',title:'《岳阳楼记》《醉翁亭记》对比精读',up:'语文大师',videoUrl:'https://www.bilibili.com/video/BV1xx042',description:'两篇千古名篇逐段翻译+思想情感对比',duration:'50分钟',rating:5,suitableFor:'初三',tags:['文言文','对比']},
  {id:'m043',knowledgePointId:'g9-ce5',routeId:'g9-chinese-exam',title:'中考作文速成：5大主题素材+开头结尾模板',up:'作文纸条',videoUrl:'https://www.bilibili.com/video/BV1xx043',description:'成长类/亲情类/励志类/文化类/思辨类素材库',duration:'40分钟',rating:5,suitableFor:'初三',tags:['作文','中考']},

  // === 初三英语 ===
  {id:'m044',knowledgePointId:'g9-es3',routeId:'g9-english-sync',title:'定语从句：关系代词与关系副词全解析',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx044',description:'who/whom/which/that/whose/when/where/why用法辨析',duration:'40分钟',rating:5,suitableFor:'初三',tags:['从句','语法']},

  // === 初三物理 ===
  {id:'m045',knowledgePointId:'g9-ps3',routeId:'g9-physics-sync',title:'欧姆定律：I=U/R+动态电路分析',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx045',description:'串并联电路欧姆定律应用、动态电路变化分析',duration:'45分钟',rating:5,suitableFor:'初三',tags:['欧姆定律','电路']},
  {id:'m046',knowledgePointId:'g9-pe3',routeId:'g9-physics-exam',title:'中考物理实验探究题满分策略',up:'坤哥物理',videoUrl:'https://www.bilibili.com/video/BV1xx046',description:'控制变量法、转换法、等效替代法+数据分析',duration:'50分钟',rating:5,suitableFor:'初三',tags:['实验','中考']},

  // === 初三化学 ===
  {id:'m047',knowledgePointId:'g9-chs4',routeId:'g9-chemistry-sync',title:'酸和碱：常见酸碱性质+中和反应',up:'化学大师',videoUrl:'https://www.bilibili.com/video/BV1xx047',description:'HCl/H₂SO₄/NaOH/Ca(OH)₂性质、pH试纸使用',duration:'40分钟',rating:5,suitableFor:'初三',tags:['酸碱','中和']},
  {id:'m048',knowledgePointId:'g9-che1',routeId:'g9-chemistry-exam',title:'中考化学推断题解题大招',up:'化学老师乌莎哈',videoUrl:'https://www.bilibili.com/video/BV1xx048',description:'颜色特征+反应条件+物质转化关系网络图',duration:'45分钟',rating:5,suitableFor:'初三',tags:['推断','中考']},

  // === 高一数学 ===
  {id:'m049',knowledgePointId:'g10-ms3',routeId:'g10-math-sync',title:'高中函数第一课：三要素+四大性质',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx049',description:'定义域值域解析式+单调性奇偶性周期性对称性',duration:'60分钟',rating:5,suitableFor:'高一',tags:['函数','基础']},
  {id:'m050',knowledgePointId:'g10-ms5',routeId:'g10-math-sync',title:'三角函数：从定义到恒等变换',up:'数学大师',videoUrl:'https://www.bilibili.com/video/BV1xx050',description:'弧度制、诱导公式、和差倍半公式系统梳理',duration:'65分钟',rating:5,suitableFor:'高一',tags:['三角函数','变换']},
  {id:'m051',knowledgePointId:'g10-ma2',routeId:'g10-math-advance',title:'不等式证明：均值+柯西+排序不等式',up:'李永乐老师',videoUrl:'https://www.bilibili.com/video/BV1xx051',description:'三大经典不等式的证明与应用，竞赛一试必备',duration:'50分钟',rating:5,suitableFor:'高一-高二',tags:['不等式','竞赛']},

  // === 高一语文 ===
  {id:'m052',knowledgePointId:'g10-cs1',routeId:'g10-chinese-sync',title:'高中古诗鉴赏方法：意象意境+表现手法',up:'语文大师',videoUrl:'https://www.bilibili.com/video/BV1xx052',description:'意象分类、意境分析、修辞手法与表现手法辨析',duration:'45分钟',rating:5,suitableFor:'高一',tags:['古诗','鉴赏']},
  {id:'m053',knowledgePointId:'g10-cs2',routeId:'g10-chinese-sync',title:'《劝学》《师说》精讲：文言现象+论证思路',up:'豆神大语文',videoUrl:'https://www.bilibili.com/video/BV1xx053',description:'逐字翻译+文言虚词归纳+比喻论证与对比论证',duration:'50分钟',rating:5,suitableFor:'高一',tags:['文言文','论证']},

  // === 高一英语 ===
  {id:'m054',knowledgePointId:'g10-es2',routeId:'g10-english-sync',title:'非谓语动词：不定式+动名词+分词全辨析',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx054',description:'to do/doing/done用法场景对比，高考必考难点',duration:'50分钟',rating:5,suitableFor:'高一',tags:['语法','非谓语']},

  // === 高一物理 ===
  {id:'m055',knowledgePointId:'g10-ps2',routeId:'g10-physics-sync',title:'匀变速直线运动：三大公式+推论全推导',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx055',description:'v=v₀+at、x=v₀t+½at²、v²-v₀²=2ax+逐差法',duration:'45分钟',rating:5,suitableFor:'高一',tags:['运动学','公式']},
  {id:'m056',knowledgePointId:'g10-ps4',routeId:'g10-physics-sync',title:'牛顿运动定律：连接体+超重失重',up:'坤哥物理',videoUrl:'https://www.bilibili.com/video/BV1xx056',description:'整体法隔离法、临界问题分析',duration:'50分钟',rating:5,suitableFor:'高一',tags:['牛顿','力学']},

  // === 高一化学 ===
  {id:'m057',knowledgePointId:'g10-chs1',routeId:'g10-chemistry-sync',title:'物质的量：n/N/NA/M/Vm/c公式体系',up:'化学大师',videoUrl:'https://www.bilibili.com/video/BV1xx057',description:'摩尔概念+阿伏加德罗常数+气体摩尔体积全解析',duration:'45分钟',rating:5,suitableFor:'高一',tags:['物质的量','计算']},
  {id:'m058',knowledgePointId:'g10-chs3',routeId:'g10-chemistry-sync',title:'氧化还原反应：化合价升降+电子转移',up:'化学老师乌莎哈',videoUrl:'https://www.bilibili.com/video/BV1xx058',description:'口诀记忆+氧化性还原性强弱比较+配平方法',duration:'40分钟',rating:5,suitableFor:'高一',tags:['氧化还原','核心']},

  // === 高一生物 ===
  {id:'m059',knowledgePointId:'g10-bs5',routeId:'g10-biology-sync',title:'细胞呼吸：有氧呼吸三个阶段+无氧呼吸',up:'生物大师',videoUrl:'https://www.bilibili.com/video/BV1xx059',description:'糖酵解+柠檬酸循环+电子传递链全过程动画讲解',duration:'40分钟',rating:5,suitableFor:'高一',tags:['呼吸','代谢']},
  {id:'m060',knowledgePointId:'g10-bs6',routeId:'g10-biology-sync',title:'光合作用：光反应+暗反应(C3C5变化)',up:'汉水丑生',videoUrl:'https://www.bilibili.com/video/BV1xx060',description:'类囊体薄膜到叶绿体基质全过程，影响光合因素',duration:'45分钟',rating:5,suitableFor:'高一',tags:['光合','代谢']},

  // === 高二数学 ===
  {id:'m061',knowledgePointId:'g11-ms3',routeId:'g11-math-sync',title:'圆锥曲线：椭圆双曲线抛物线全解析',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx061',description:'三大曲线定义性质对比、弦长面积公式',duration:'70分钟',rating:5,suitableFor:'高二',tags:['圆锥曲线']},
  {id:'m062',knowledgePointId:'g11-ms5',routeId:'g11-math-sync',title:'导数入门：从切线到单调性极值',up:'数学大师',videoUrl:'https://www.bilibili.com/video/BV1xx062',description:'导数定义、几何意义、基本求导公式、导数研究函数',duration:'55分钟',rating:5,suitableFor:'高二',tags:['导数']},

  // === 高二语文 ===
  {id:'m063',knowledgePointId:'g11-cs4',routeId:'g11-chinese-sync',title:'高中议论文写作进阶：审题立意+论证方法',up:'作文纸条',videoUrl:'https://www.bilibili.com/video/BV1xx063',description:'因果论证、对比论证、引用论证、比喻论证运用',duration:'45分钟',rating:5,suitableFor:'高二',tags:['写作','议论文']},

  // === 高二英语 ===
  {id:'m064',knowledgePointId:'g11-es1',routeId:'g11-english-sync',title:'虚拟语气全解析：条件虚拟+名词性从句虚拟',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx064',description:'与现在/过去/将来事实相反的虚拟、wish/as if用法',duration:'40分钟',rating:5,suitableFor:'高二',tags:['语法','虚拟']},

  // === 高二物理 ===
  {id:'m065',knowledgePointId:'g11-ps1',routeId:'g11-physics-sync',title:'静电场：从库仑力到电势能',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx065',description:'库仑定律、电场强度叠加、电势电势差、功能关系',duration:'55分钟',rating:5,suitableFor:'高二',tags:['电场']},
  {id:'m066',knowledgePointId:'g11-ps5',routeId:'g11-physics-sync',title:'电磁感应：楞次定律+法拉第定律',up:'坤哥物理',videoUrl:'https://www.bilibili.com/video/BV1xx066',description:'来拒去留增反减同口诀、动生感生电动势计算',duration:'50分钟',rating:5,suitableFor:'高二',tags:['电磁感应']},

  // === 高二化学 ===
  {id:'m067',knowledgePointId:'g11-chs3',routeId:'g11-chemistry-sync',title:'化学平衡：平衡常数+勒夏特列原理',up:'化学大师',videoUrl:'https://www.bilibili.com/video/BV1xx067',description:'Kc计算、平衡移动、等效平衡构建',duration:'50分钟',rating:5,suitableFor:'高二',tags:['平衡']},
  {id:'m068',knowledgePointId:'g11-chs7',routeId:'g11-chemistry-sync',title:'有机化学基础：烃的分类命名+同分异构',up:'化学老师乌莎哈',videoUrl:'https://www.bilibili.com/video/BV1xx068',description:'烷烯炔苯的系统命名法、同分异构体书写',duration:'45分钟',rating:5,suitableFor:'高二',tags:['有机']},

  // === 高二生物 ===
  {id:'m069',knowledgePointId:'g11-bs1',routeId:'g11-biology-sync',title:'遗传定律：分离+自由组合定律解题套路',up:'生物大师',videoUrl:'https://www.bilibili.com/video/BV1xx069',description:'基因型表现型推断、9:3:3:1变式分析',duration:'50分钟',rating:5,suitableFor:'高二',tags:['遗传','定律']},
  {id:'m070',knowledgePointId:'g11-bs6',routeId:'g11-biology-sync',title:'神经调节：兴奋传导+突触传递',up:'汉水丑生',videoUrl:'https://www.bilibili.com/video/BV1xx070',description:'静息电位动作电位、Na⁺-K⁺泵、突触小泡释放',duration:'40分钟',rating:5,suitableFor:'高二',tags:['神经','调节']},

  // === 高三数学 ===
  {id:'m071',knowledgePointId:'g12-me3',routeId:'g12-math-exam',title:'高考导数压轴：恒成立+零点+隐零点',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx071',description:'分离参数法、分类讨论法、端点效应全攻略',duration:'75分钟',rating:5,suitableFor:'高三',tags:['导数','压轴']},
  {id:'m072',knowledgePointId:'g12-me8',routeId:'g12-math-exam',title:'高考解析几何：定点定值+范围最值',up:'数学大师',videoUrl:'https://www.bilibili.com/video/BV1xx072',description:'齐次化、非对称韦达等高级技巧',duration:'80分钟',rating:5,suitableFor:'高三',tags:['解析几何','压轴']},
  {id:'m073',knowledgePointId:'g12-me2-1',routeId:'g12-math-exam2',title:'高考数学选填满分策略：特值法+数形结合',up:'一数老师',videoUrl:'https://www.bilibili.com/video/BV1xx073',description:'快速拿分节省时间做大题的终极技巧',duration:'40分钟',rating:5,suitableFor:'高三',tags:['选填','技巧']},

  // === 高三语文 ===
  {id:'m074',knowledgePointId:'g12-ce4',routeId:'g12-chinese-exam',title:'高考古代诗歌鉴赏：四大考点答题模板',up:'语文大师',videoUrl:'https://www.bilibili.com/video/BV1xx074',description:'形象题/语言题/技巧题/情感题万能答题公式',duration:'50分钟',rating:5,suitableFor:'高三',tags:['诗歌','模板']},
  {id:'m075',knowledgePointId:'g12-ce7',routeId:'g12-chinese-exam',title:'高考作文：任务驱动型作文审题+素材运用',up:'作文纸条',videoUrl:'https://www.bilibili.com/video/BV1xx075',description:'5大主题30个万能素材+开头结尾黄金模板',duration:'55分钟',rating:5,suitableFor:'高三',tags:['作文','高考']},

  // === 高三英语 ===
  {id:'m076',knowledgePointId:'g12-ee5',routeId:'g12-english-exam',title:'高考英语书面表达：应用文模板+读后续写',up:'英语兔',videoUrl:'https://www.bilibili.com/video/BV1xx076',description:'书信/邮件/通知/演讲稿/续写五大题型模板',duration:'50分钟',rating:5,suitableFor:'高三',tags:['写作','高考']},

  // === 高三物理 ===
  {id:'m077',knowledgePointId:'g12-pe3',routeId:'g12-physics-exam',title:'动量守恒定律：碰撞模型+板块模型',up:'坤哥物理',videoUrl:'https://www.bilibili.com/video/BV1xx077',description:'弹性碰撞、完全非弹性碰撞、人船模型',duration:'50分钟',rating:5,suitableFor:'高三',tags:['动量','碰撞']},
  {id:'m078',knowledgePointId:'g12-pe6',routeId:'g12-physics-exam',title:'高考物理实验满分：力电实验全考点',up:'物理大师',videoUrl:'https://www.bilibili.com/video/BV1xx078',description:'打点计时器+探究加速度+伏安法测电阻+测电源E/r',duration:'60分钟',rating:5,suitableFor:'高三',tags:['实验','高考']},

  // === 高三化学 ===
  {id:'m079',knowledgePointId:'g12-che1',routeId:'g12-chemistry-exam',title:'化学反应原理综合：速率+平衡+电化学',up:'化学大师',videoUrl:'https://www.bilibili.com/video/BV1xx079',description:'化学平衡常数计算、原电池电解池综合',duration:'55分钟',rating:5,suitableFor:'高三',tags:['原理','综合']},
  {id:'m080',knowledgePointId:'g12-che3',routeId:'g12-chemistry-exam',title:'有机推断与合成路线：官能团转化网络',up:'化学老师乌莎哈',videoUrl:'https://www.bilibili.com/video/BV1xx080',description:'烃→卤代烃→醇→醛→酸→酯转化全流程',duration:'50分钟',rating:5,suitableFor:'高三',tags:['有机','推断']},

  // === 高三生物 ===
  {id:'m081',knowledgePointId:'g12-be3',routeId:'g12-biology-exam',title:'遗传定律+伴性遗传：系谱图分析+概率计算',up:'生物大师',videoUrl:'https://www.bilibili.com/video/BV1xx081',description:'常染色体/性染色体遗传判断、患病概率计算',duration:'50分钟',rating:5,suitableFor:'高三',tags:['遗传','计算']},
  {id:'m082',knowledgePointId:'g12-be7',routeId:'g12-biology-exam',title:'高考生物实验设计：变量控制+结果分析',up:'汉水丑生',videoUrl:'https://www.bilibili.com/video/BV1xx082',description:'实验设计四原则、单一变量+对照+重复+随机',duration:'45分钟',rating:5,suitableFor:'高三',tags:['实验','设计']}
];

module.exports = { routes, materials };
