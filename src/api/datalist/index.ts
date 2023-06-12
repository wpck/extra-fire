// http定义
import defHttp from '@/utils/http'
import { DataListModel } from '../model'

const modelUrl = '/firedata'

enum Api {
  RecommendList = '/recommend/', // 获取首页推荐列表
  Search = '/search/',
}

/**
 * @description: 获取推荐列表
 */
export const getRecommendList = () => {
  return defHttp.get<DataListModel>({ url: modelUrl + Api.RecommendList })
}

/**
 * @description: 获取搜索列表
 */
export const getSearchList = (params?: { query?: string; category?: string }) => {
  return defHttp.get<DataListModel>({ url: modelUrl + Api.Search, params: { query: params?.query || '', category: params?.category || 'all' } })
}
