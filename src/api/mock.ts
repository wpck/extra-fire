import Mock, { Random } from 'mockjs'

console.log('mockjs')

const list: any = []
function genList() {
  for (let i = 0; i < 20; i++) {
    list.push({ title: Random.cparagraph(), type: Random.natural(1, 4) })
  }
}
genList()

Mock.mock('/api/recommend_list/', { status: 200, data: list })
