// http定义
import defHttp from '@/utils/http'
import { DataListModel } from '../model'

const modelUrl = '/api'

enum Api {
  RecommendList = '/recommend_list/', // 获取首页推荐列表
}

/**
 * @description: 获取推荐列表
 */
export const getRecommendList = () => {
  return defHttp.get<DataListModel>({ url: modelUrl + Api.RecommendList })
}
