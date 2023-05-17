import defHttp from '@/utils/http'
import { StatisticsModel } from '../model'

const modelUrl = '/api'

enum Api {
  StatisticsNum = '/statistics_num/', // 首页文章统计
}

/**
 * @description: 获取文章统计数量
 */
export const getStatisticsNum = () => {
  return defHttp.get<StatisticsModel>({ url: modelUrl + Api.StatisticsNum })
}
