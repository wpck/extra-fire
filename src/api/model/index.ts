import { Result } from './common'

export interface DataListModel {
  title: string
  desc: string
}

export interface Statistics {
  malfunction: number
  standard: number
  reserve: number
  information: number
}

export interface HotWords {
  value: string
}

export type DeviceListModel = Result<DataListModel>

export type StatisticsModel = Result<Statistics>

export type HotWordsModel = Result<HotWords>
