/*
 * @Author: Mo.xuejuan
 * @Date: 2019-11-26 09:12:20
 */

import request from '@/plugins/axios/axios'

/**
 * @description 获取所有地区数据(联级结构)
 * @author moxuejuan
 * @date 2019-12-05 09:26
 * @param 无
 * @method：GET
 * @response：{
 *     联级结构数据
 * }
 */

export function getAllAddressData(data) {
  console.log('api:getAllAddressData', data)
  return request({
    url: '@test/getAllAddressData_t=' + new Date().getTime(),
    method: 'get',
    params: data
  })
}

/**
 * @description 获取当页案卷数据
 * @author moxuejuan
 * @date 2019-12-05 09:28:26
 * @param {Number} statusId 请求参数 :案卷状态ID
 * @param {Number} timeTypeId 请求参数 :查询时间范围，今日、当月、历史
 * @param {Array} address 请求参数 :地区
 * @param {Number} pageNo页数
 * @param {Number} pageSize每页显示条数
 * @method：GET
 * @response：{
 *    {String} id: 案卷ID,
 *    {Number} code: 案卷编号,
 *    {String}typeName: 案卷类型,
 *    {String}description: 案卷描述,
 *    {String}photoUrl: 照片URL
 * }
 */
export const getAllRecordsDataList = data => {
  console.log('api:getAllRecordsDataList', data)
  return request({
    url: `@test/getAllRecordsDataList_t=` + new Date().getTime(),
    method: 'get',
    params: data
  })
}

/**
 * @description 获取某个案卷的详细数据
 * @author moxuejuan
 * @date 2019-12-05 14:53:20
 * @param {String} code 请求参数 :案卷code
 * @method：GET
 * @response：{
 *
 * }
 */
export const getRecordDetailData = data => {
  console.log('api:getRecordDetailData', data)
  return request({
    url: `@test/getRecordDetailData?_t=` + new Date().getTime(),
    method: 'get',
    params: data
  })
}

/**
 * @description 获取某个案卷处理前、处理后的照片数据
 * @author moxuejuan
 * @date 2019-12-05 15:13:26
 * @param {String} code 请求参数 :案卷code
 * @method：GET
 * @response：{
 *
 * }
 */
export const getRecordPhotosData = data => {
  console.log('api:getRecordPhotosData', data)
  return request({
    url: `@test/getRecordPhotosData?_t=` + new Date().getTime(),
    method: 'get',
    params: data
  })
}

/**
 * @description 获取某个案卷日志数据
 * @author moxuejuan
 * @date 2019-12-05 15:33:26
 * @param {String} code 请求参数 :案卷code
 * @method：GET
 * @response：{
 *
 * }
 */
export const getRecordLogsData = data => {
  console.log('api:getRecordLogsData', data)
  return request({
    url: `@test/getRecordLogsData?_t=` + new Date().getTime(),
    method: 'get',
    params: data
  })
}