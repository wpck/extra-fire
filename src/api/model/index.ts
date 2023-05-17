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

export type DeviceListModel = Result<DataListModel>

export type StatisticsModel = Result<Statistics>
