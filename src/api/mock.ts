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
