import { VAxios } from './axios'

function createAxios() {
  return new VAxios()
}

const axiosInstance = createAxios()

export default axiosInstance

export const setBaseUrl = (url: string) => {
  axiosInstance.setBaseURL(url)
}
