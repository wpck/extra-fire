import defHttp from '@/utils/http'
import { StatisticsModel, HotWordsModel } from '../model'

const modelUrl = '/firedata'

enum Api {
  StatisticsNum = '/count/', // 首页文章统计
  HotWords = '/hot_words/', // 首页热词
}

/**
 * @description: 获取文章统计数量
 */
export const getStatisticsNum = (category?: string) => {
  return defHttp.get<StatisticsModel>({ url: modelUrl + Api.StatisticsNum, params: { category: category || 'all' } })
}

export const getHotWords = () => {
  return defHttp.get<HotWordsModel>({ url: modelUrl + Api.HotWords })
}
