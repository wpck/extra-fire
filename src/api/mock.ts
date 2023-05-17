import Mock, { Random } from 'mockjs'

console.log('mockjs')

const list: any = []
function genList() {
  for (let i = 0; i < 20; i++) {
    list.push({ title: Random.ctitle(), type: Random.natural(1, 4), desc: Random.cparagraph() })
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
