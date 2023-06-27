import { Result } from './common'

export interface DataList {
  title: string
  category: string
  content: string
  picture: string
  time: string
}

export interface Statistics {
  category: string
  count: number
}

export interface HotWords {
  value: string
}

export type DataListModel = Result<{ list: Array<DataList> }>

export type DeviceListModel = Result<DataListModel>

export type StatisticsModel = Result<{ list: Array<Statistics> }>

export type HotWordsModel = Result<HotWords>

export type DetailModel = Result<any>
