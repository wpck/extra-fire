import Mock, { Random } from 'mockjs'

console.log('mockjs')

const list: any = []
const typeList = ['事故报告', '消防资讯', '标准规范', '预案']
function genList() {
  for (let i = 0; i < 20; i++) {
    list.push({ title: Random.cparagraph(), type: typeList[Random.natural(0, 3)], desc: Random.cparagraph(), date: '2023-04-12' })
  }
}
genList()

Mock.mock('/api/recommend_list/', { status: 200, data: list })

Mock.mock('/api/statistics_num/', {
  status: 200,
  data: {
    malfunction: Random.natural(200, 600),
    standard: Random.natural(200, 600),
    reserve: Random.natural(200, 600),
    information: Random.natural(200, 600),
  },
})

Mock.mock('/api/hot_words/', {
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
