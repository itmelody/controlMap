import { builder, getBody, getQueryParameters } from '../util'
import Mock from 'mockjs'

const getAllWaterQMMacTreeData = options => {
  console.log('getAllWaterQMMacTreeData options', options)
  const queryParameters = getQueryParameters(options)
  console.log('getAllWaterQMMacTreeData query', queryParameters)
  let data = {
    treeData: [
      {
        id: 'jianche1',
        isLeaf: false,
        name: '监测点1名称',
        children: [
          {
            id: '33092104001320015992',
            name: '设备0001',
            isLeaf: true,
            online: true,
            phValue: 7.5,
            phUnit: '',
            turbidityValue: 4.6,
            turbidityUnit: 'NTU',
            rcValue: 2.3,
            rcUnit: 'mg/L',
            x: '122.202261',
            y: '30.247886'
          },
          {
            id: '33092104001320010677',
            name: '设备0002',
            isLeaf: true,
            online: false,
            phValue: 7.0,
            phUnit: '',
            turbidityValue: 4.0,
            turbidityUnit: 'NTU',
            rcValue: 2.0,
            rcUnit: 'mg/L',
            x: '30.247886',
            y: '122.202261'
          }
        ]
      },
      {
        id: 'jiance2',
        isLeaf: false,
        name: '监测点2名称',
        children: [
          {
            id: '33092104001320011640',
            name: '设备0001',
            isLeaf: true,
            online: false,
            phValue: 6.5,
            phUnit: '',
            turbidityValue: 5.6,
            turbidityUnit: 'NTU',
            rcValue: 3.3,
            rcUnit: 'mg/L',
            x: '30.245140',
            y: '122.208213'
          },
          {
            id: '33092104001320011641',
            name: '设备0002',
            isLeaf: true,
            online: false,
            phValue: 7.5,
            phUnit: '',
            turbidityValue: 4.6,
            turbidityUnit: 'NTU',
            rcValue: 2.3,
            rcUnit: 'mg/L',
            x: '30.245140',
            y: '122.208213'
          },
          {
            id: '33092104001320011642',
            name: '设备0003',
            isLeaf: true,
            online: true,
            phValue: 6.5,
            phUnit: '',
            turbidityValue: 4.2,
            turbidityUnit: 'NTU',
            rcValue: 2.8,
            rcUnit: 'mg/L',
            x: '30.252779',
            y: '122.220688'
          },
          {
            id: '33092104001320011643',
            name: '设备0004',
            isLeaf: true,
            online: false,
            phValue: 7.1,
            phUnit: '',
            turbidityValue: 3.1,
            turbidityUnit: 'NTU',
            rcValue: 4.3,
            rcUnit: 'mg/L',
            x: '30.252779',
            y: '122.220688'
          },
          {
            id: '33092104001320011644',
            name: '设备0005',
            isLeaf: true,
            online: false,
            phValue: 8.5,
            phUnit: '',
            turbidityValue: 3.6,
            turbidityUnit: 'NTU',
            rcValue: 2.9,
            rcUnit: 'mg/L',
            x: '30.245192',
            y: '122.206967'
          },
          {
            id: '33092104001320011645',
            name: '设备0006',
            isLeaf: true,
            online: false,
            phValue: 7.5,
            phUnit: '',
            turbidityValue: 4.6,
            turbidityUnit: 'NTU',
            rcValue: 2.3,
            rcUnit: 'mg/L',
            x: '30.240435',
            y: '122.203112'
          },
          {
            id: '33092104001320011646',
            name: '设备0007',
            isLeaf: true,
            online: false,
            phValue: 1.5,
            phUnit: '',
            turbidityValue: 8.6,
            turbidityUnit: 'NTU',
            rcValue: 6.3,
            rcUnit: 'mg/L',
            x: '30.247607',
            y: '122.202172'
          }
        ]
      }
    ],
    total: 9
  }

  return builder(
    {
      code: 0,
      data: data,
      msg: '操作成功'
    },
    '请求成功',
    0,
    { 'Custom-Header': Mock.mock('@id') }
  )
}
Mock.mock(/\/@test\/getAllWaterQualityMacTreeData/, 'get', getAllWaterQMMacTreeData)

const getOneWaterQMMacData = options => {
  console.log('getOneWaterQMMacData options', options)
  const queryParameters = getQueryParameters(options)
  console.log('getOneWaterQMMacData query', queryParameters)
  let data = [
    {
      name: 'PH',
      yty: -0.1,
      mtm: 0.1
    },
    {
      name: '浊度',
      yty: -0.4,
      mtm: 0.5
    },
    {
      name: '余氯',
      yty: -0.7,
      mtm: 1.6
    }
  ]

  return builder(
    {
      code: 0,
      data: data,
      msg: '操作成功'
    },
    '请求成功',
    0,
    { 'Custom-Header': Mock.mock('@id') }
  )
}
Mock.mock(/\/@test\/getOneWaterQualityMacData/, 'get', getOneWaterQMMacData)

const getWaterQualityTrendDataForOneMac = options => {
  console.log('getWaterQualityTrendDataForOneMac options', options)
  const queryParameters = getQueryParameters(options)
  console.log('getWaterQualityTrendDataForOneMac query', queryParameters)
  let data = [
    {
      dayTime: '2020-03-19 07:00',
      phValue: 6.9,
      turbidityValue: 5.6,
      rcValue: 1.9
    },
    {
      dayTime: '2020-03-19 07:30',
      phValue: 7.2,
      turbidityValue: 6.1,
      rcValue: 1.9
    },
    {
      dayTime: '2020-03-19 08:00',
      phValue: 7.2,
      turbidityValue: 5.1,
      rcValue: 2.1
    },
    {
      dayTime: '2020-03-19 08:30',
      phValue: 7.0,
      turbidityValue: 4.6,
      rcValue: 2.2
    },
    {
      dayTime: '2020-03-19 09:00',
      phValue: 6.9,
      turbidityValue: 4.6,
      rcValue: 2.0
    },
    {
      dayTime: '2020-03-19 09:30',
      phValue: 6.8,
      turbidityValue: 5.0,
      rcValue: 2.1
    },
    {
      dayTime: '2020-03-29 10:00',
      phValue: 7.0,
      turbidityValue: 4.6,
      rcValue: 2.2
    }
  ]

  return builder(
    {
      code: 0,
      data: data,
      msg: '操作成功'
    },
    '请求成功',
    0,
    { 'Custom-Header': Mock.mock('@id') }
  )
}
Mock.mock(/\/@test\/getWaterQualityTrendDataForOneMac/, 'get', getWaterQualityTrendDataForOneMac)