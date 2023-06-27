// http定义
import defHttp from '@/utils/http'
import { DetailModel } from '../model'

const modelUrl = '/firedata'

enum Api {
  Detail = '/detail/',
}

/**
 * @description: 获取详情页数据
 */
export const getDetailData = () => {
  return defHttp.get<DetailModel>({ url: modelUrl + Api.Detail })
}
