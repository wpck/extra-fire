import Mock, { Random } from 'mockjs'

console.log('mockjs')

const list: any = []
const typeList = ['news', 'report', 'standard', 'preplan']
function genList() {
  for (let i = 0; i < 20; i++) {
    list.push({ title: Random.cparagraph(), category: typeList[Random.natural(0, 3)], content: Random.cparagraph(), time: '2023-04-12', picture: '' })
  }
}
genList()

Mock.mock('/firedata/recommend/', { status: 200, data: { list } })

Mock.mock('/firedata/count/?category=all', {
  success: true,
  code: 20000,
  message: '成功',
  data: {
    list: [
      { category: 'report', count: '5' },
      { category: 'news', count: '6' },
      { category: 'standard', count: '7' },
      { category: 'preplan', count: '8' },
    ],
  },
})

Mock.mock('/firedata/hot_words/', {
  status: 200,
  data: [
    { value: '北京火灾最新消息2023' },
    { value: '北京火灾' },
    { value: '医院火灾' },
    { value: '火灾应急预案' },
    { value: '大火' },
    { value: '火灾分类' },
    { value: '火灾事故' },
    { value: '火灾逃生方案' },
    { value: '森林火灾' },
    { value: '失火' },
  ],
})

Mock.mock('/firedata/detail/', {
  success: true,
  code: 20000,
  message: '成功',
  data: {
    title: "防城港市防城区自建房“6·18”较大火灾事故调查报告",
    content: {
      file: 'http://localhost:5173/testdata/%E9%98%B2%E5%9F%8E%E6%B8%AF%E5%B8%82%E9%98%B2%E5%9F%8E%E5%8C%BA%E8%87%AA%E5%BB%BA%E6%88%BF%E2%80%9C6%C2%B718%E2%80%9D%E8%BE%83%E5%A4%A7%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A.pdf'
    },
    pics: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png','8.png','9.png', '10.png','11.png','12.png'],
    categories: [{name: '火灾性质'}, {name:'经济损失'}, {name:'标准法律规范'}, {name:'责任人员'}, {name:'原因'}, {name:'火灾时间'}, {name:'火灾地点'},{name: '火灾等级'},{name:'起火物'},{name:'人员伤亡'}],
    nodes: [
      {
        id:"1",
        name:"广西防城港市防城区自建房“6·18”较大火灾事故",
        // category: 0
      },
      {
        id:"2",
        name:"非生产经营性的较大火灾事故",
        category: 0
      },
      {
        id:"3",
        name:"45.63万元",
        category: 1
      },
      {
        id:"4",
        name:"《住宿与生产储存经营合用场所消防安全技术要求》",
        category: 2
      },
      {
        id:"5",
        name:"《国务院办公厅关于印发消防安全责任制实施办法的通知》",
        category: 2
      },
      {
        id:"6",
        name:"6人死亡",
        category: 10
      },
      {
        id:"7",
        name:"罗荣德(起火建筑一层防城港市防城区成有配件修理店经营者)从铺面大门中间立柱上日常生活使用的插座转换器上接出一个电源插排给自用电动自行车进行充电过程中电源插排与插座转换器之间因电气故障打火，引燃下方纸箱等可燃物引发火灾",
        category: 4
      },
      {
        id:"8",
        name:"李伟东将事发建筑一层出租给罗荣德作为店铺，未明确消防安全职责，未落实消防安全防范措施，在建筑内设置了影响灭火救援和逃生的防盗网且未开设逃生窗，违反《广西壮族自治区实施＜中华人民共和国消防法＞》第二十六条之规定，造成火灾发生后影响被困人员疏散逃生，也延误了消防救援人员灭火救援时机。"
        ,category: 4
      },
      {
        id:"9",
        name:"政府及职能部门对辖区自建民房消防安全监管不力。防城区人民政府先后印发了《关于进一步加强乡镇街道消防工作的通知》（防区政办函〔2018〕35 号）和《防城区“三合一”场所、群租房屋和沿街铺面消防安全专项整治工作方案》（防区政办函〔2019〕15号），防城区安全生产委员会办公室下发了《关于开展“防风险保平安迎大庆”消防安全执法检查专项行动的通知》（防区安委办发〔2019〕24 号），部署安全生产和消防安全工作，要求对“三小”场所、“三合一”场所开展消防隐患大排查大整治，但落实消防安全责任制不到位，贯彻落实自治区、市关于安全生产和消防安全工作专项行动和法律法规不力，对文昌街道办、城东派出所、火车站社区等相关部门整治火灾事故隐患工作方面检查不深入、监管不力等问题失察；未能督促有关部门抓好对社会和群众的消防安全知识宣传教育工作。2020 年 3 月 24 日文昌街道办印发了《文昌街道开展消防安全突出风险专项治理工作方案》，但未落实消防安全“网格化”管理，未开展消防安全检查、督促整改火灾隐患，未指导村（居）委员会开展群众性的消防工作、确定消防安全管理人、制定防火公约、并保障必要的消防工作经费等要求。防城区公安分局城东派出所不认真履行消防安全职责，对起火建筑及所在社区实施日常消防监督检查和开展消防安全宣传教育不到位。火车站社区自 2014 年以来未严格落实火灾隐患排查整治责任，开展消防安全整治工作不力，2020 年 6 月 18 日前在综治平台上未录入有关消防安全管理的事项"
        ,category: 4
      },
      {
        id:"10",
        name:"事发建筑属于“三合一”场所，店铺经营者罗荣德在一层店铺内停放电动车、堆放电动车配件及生活用品等易燃物品，且该场所住宿与非住宿部分未设置独立的疏散设施、通往住宿区域的疏散楼梯未设置防火分隔、未设置自动喷水灭火系统或自动喷水局部应用系统，不符合中华人民共和国公共安全行业标准《住宿与生产储存经营合用场所消防安全技术要求》（GA703-2007），但罗荣德仍在该店铺内通过日常生活使用的插座转换器上接出一个电源插排给自用电动自行车进行充电，导致起火后火势迅速扩大，烟气沿楼梯向上快速蔓延。"
        ,category: 4
      },
      {
        id:"11",
        name:"2020年6月18日",
        category: 5
      },
      {
        id:"12",
        name:"防城区中新路3号一自建民房",
        category: 6
      },
      {
        id:"13",
        name:"较大火灾事故",
        category: 8
      },
      {
        id:"14",
        name:"4个灭火编队，8辆消防车、31名指战员",
        category: 3
      },
      {
        id:"15",
        name:"蔡始宽",
        category: 3
      },
      {
        id:"16",
        name:"黄祖国",
        category: 3
      },
      {
        id:"17",
        name:"韩国艾",
        category: 3
      },
      {
        id:"18",
        name:"李兰禧",
        category: 3
      },
      {
        id:"19",
        name:"防城区文昌街道办国土规建环保安监交通站常务副站长",
        category: 3
      },
      {
        id:"20",
        name:"《广西壮族自治区实施＜中华人民共和国消防法＞》",
        category: 2
      },
      {
        id:"21",
        name:"第二十六条　任何单位和个人不得擅自改变建筑物、构筑物的防火条件，不得设置影响逃生和灭火救援的障碍物。建筑物疏散通道、安全出口安装防盗设施或者建筑物设置楼体户外广告的，应当符合消防安全规定，不得影响人员疏散和灭火救援。高层建筑应当按规定设置人员避难逃生设施和配置避难逃生器材，并保持完好有效。避难逃生设施和器材不得擅自挪作他用，严禁堵塞、占用消防车通道和消防登高扑救面。"
        ,category: 2
      },
        {
        id:"22",
        name:"电动车",
        category: 9
      },
      {
        id:"23",
        name:"三合一场所",
        category: 6
      },
      {
        id:"24",
        name:"安徽省阜阳市颍上县2020.3.23较大火灾事故",
        category: 0
      },
      {
        id:"25",
        name:"深圳市宝安区沙井街道马安山社区二区14-15号出租屋“8·29”火灾事故调查",
        category: 0
      },
    ],
    links: [
      {
        source:'1',
        target:'2',
        label:"火灾性质"
        },
        {
        source:'1',
        target:'3',
        label:"经济损失"
        },
        {
        source:'1',
        target:'4',
        label:"标准法律规范"
        },
        {
        source:'1',
        target:'5',
        label:"标准法律规范"
        },
        {
        source:'1',
        target:'6',
        label:"人员伤亡"
        },
        {
        source:'1',
        target:'7',
        label:"直接原因"
        },
        {
        source:'1',
        target:'8',
        label:"间接原因"
        },
        {
        source:'1',
        target:'9',
        label:"间接原因"
        },
        {
        source:'1',
        target:'10',
        label:"间接原因"
        },
        {
        source:'1',
        target:'11',
        label:"火灾时间"
        },
        {
        source:'1',
        target:'12',
        label:"火灾地点"
        },
        {
        source:'1',
        target:'13',
        label:"火灾等级"
        },
        {
        source:'1',
        target:'14',
        label:"消防部门救援情况-消防队伍"
        },
        {
        source:'1',
        target:'15',
        label:"责任人员"
        },
        {
        source:'1',
        target:'16',
        label:"责任人员"
        },
        {
        source:'1',
        target:'17',
        label:"责任人员"
        },
        {
        source:'1',
        target:'18',
        label:"责任人员"
        },
        {
        source:'1',
        target:'19',
        label:"责任人员"
        },
        {
        source:'20',
        target:'21',
        label:"条款"
        },
        {
        source:'12',
        target:'23',
        label:"场所类型"
        },
        {
        source:'1',
        target:'22',
        label:"起火物"
        },
        {
        source:'24',
        target:'22',
        label:"起火物"
        },
        {
        source:'25',
        target:'22',
        label:"起火物"
        }
    ],
    recList: [
      {
        title: '广西壮族自治区实施《中华人民共和国消防法》办法',
        children: [
          {
            title: '第一章 总则',
            content: '第一条 根据《中华人民共和国消防法》，结合本自治区实际，制定本办法。第二条 消防工作贯彻预防为主、防消结合的方针，按照政府统一领导、部门依法监管、单位全面负责、公民积极参与的原则，实行消防安全责任制，建立健全社会化的消防工作网络。第三条 任何单位和个人都有维护消防安全、保护消防设施、预防火灾、报告火警的义务，对发现的消防安全违法行为都有举报、投诉和制止的权利。'
          }, {
            title: '第二章 消防安全责任',
            content: '第七条 各级人民政府、各部门的主要负责人对本行政区域、本部门消防工作负领导责任，分管消防工作的负责人是消防安全责任人，负直接领导责任。机关、团体、企业、事业等单位的主要负责人或者法定代表人是本单位的消防安全责任人。第八条 县级以上人民政府履行下列消防职责：（一）将消防工作纳入国民经济和社会发展规划及政府年度工作计划；（二）定期组织研究解决消防工作的重大问题；（三）将公共消防经费纳入本级财政预算；（四）制订并组织实施全民消防安全宣传教育计划，建立健全消防宣传网络和工作机制；'
          }
        ],
        file: 'http://localhost:5173/testdata/%E5%B9%BF%E8%A5%BF%E5%A3%AE%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8C%BA%E5%AE%9E%E6%96%BD%EF%BC%9C%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B6%88%E9%98%B2%E6%B3%95%EF%BC%9E.pdf'
      }
    ]
  }
})
