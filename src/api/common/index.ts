import defHttp from '@/utils/http'
import { StatisticsModel, HotWordsModel } from '../model'

const modelUrl = '/api'

enum Api {
  StatisticsNum = '/statistics_num/', // 首页文章统计
  HotWords = '/hot_words/', // 首页热词
}

/**
 * @description: 获取文章统计数量
 */
export const getStatisticsNum = () => {
  return defHttp.get<StatisticsModel>({ url: modelUrl + Api.StatisticsNum })
}

export const getHotWords = () => {
  return defHttp.get<HotWordsModel>({ url: modelUrl + Api.HotWords })
}
