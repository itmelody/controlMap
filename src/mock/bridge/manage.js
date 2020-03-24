import { builder, getBody, getQueryParameters } from '../util'
import Mock from 'mockjs'

const getAllCameraTreeDataForBridge = options => {
  console.log('getAllCameraTreeDataForBridge options', options)
  const queryParameters = getQueryParameters(options)
  console.log('getAllCameraTreeDataForBridge query', queryParameters)
  let data = [
    {
      id: 'testStandardId',
      isLeaf: false,
      name: '桥梁001',
      children: [
        {
          ip: '192.168.100.46',
          isLeaf: true,
          mpid: '33092104001320015992',
          mpname: '三江购物-球',
          puid: '33092104001320015992',
          typename: '高空瞭望',
          x: '30.247886',
          y: '122.202261'
        },
        {
          ip: '192.168.100.46',
          isLeaf: true,
          mpid: '33092104001320010677',
          mpname: '三江购物-全景',
          puid: '33092104001320010677',
          typename: '高空瞭望',
          x: '30.247886',
          y: '122.202261'
        },
        {
          ip: '192.168.100.55',
          isLeaf: true,
          mpid: '33092104001320015002',
          mpname: '新区广电大楼楼顶-球',
          puid: '33092104001320015002',
          typename: '高空瞭望',
          x: '30.265587',
          y: '122.218019'
        },
        {
          ip: '192.168.100.55',
          isLeaf: true,
          mpid: '33092104001320011649',
          mpname: '新区广电大楼楼顶-全景',
          puid: '33092104001320011649',
          typename: '高空瞭望',
          x: '30.265587',
          y: '122.218019'
        }
      ]
    },
    {
      id: 'testStandardId2',
      isLeaf: false,
      name: '桥梁002',
      children: [
        {
          ip: '192.168.100.70',
          isLeaf: true,
          mpid: '33092104001320013870',
          mpname: '蓬莱公园铁塔-球',
          puid: '33092104001320013870',
          typename: '高空瞭望',
          x: '30.245140',
          y: '122.208213'
        },
        {
          ip: '192.168.100.70',
          isLeaf: true,
          mpid: '33092104001320017369',
          mpname: '蓬莱公园铁塔-全景',
          puid: '33092104001320017369',
          typename: '高空瞭望',
          x: '30.245140',
          y: '122.208213'
        },
        {
          ip: '192.168.100.77',
          isLeaf: true,
          mpid: '33092104001320010611',
          mpname: '交通大楼全景-球',
          puid: '33092104001320010611',
          typename: '高空瞭望',
          x: '30.252779',
          y: '122.220688'
        },
        {
          ip: '192.168.100.77',
          isLeaf: true,
          mpid: '33092104001320012341',
          mpname: '交通大楼全景',
          puid: '33092104001320012341',
          typename: '高空瞭望',
          x: '30.252779',
          y: '122.220688'
        },
        {
          ip: '192.168.110.2',
          isLeaf: true,
          mpid: '3309211001320012383',
          mpname: '无人机Camera 01',
          puid: '330921100',
          typename: '无人机',
          x: '30.245192',
          y: '122.206967'
        },
        {
          ip: '192.168.100.26',
          isLeaf: true,
          mpid: '33092104001320010656',
          mpname: '蓬莱路山外路路口-枪',
          puid: '33092104001320010656',
          typename: '老区监控',
          x: '30.240435',
          y: '122.203112'
        },
        {
          ip: '192.168.100.20',
          isLeaf: true,
          mpid: '33092104001320016924',
          mpname: '蓬莱路邮政银行门口-枪',
          puid: '33092104001320016924',
          typename: '老区监控',
          x: '30.247607',
          y: '122.202172'
        },
        {
          ip: '192.168.100.74',
          isLeaf: true,
          mpid: '33092104001320013662',
          mpname: '蓬莱路延伸段绿化带-枪1',
          puid: '33092104001320013662',
          typename: '老区监控',
          x: '30.252497',
          y: '122.201541'
        },
        {
          ip: '192.168.100.75',
          isLeaf: true,
          mpid: '33092104001320018885',
          mpname: '蓬莱路延伸段绿化带-枪2',
          puid: '33092104001320018885',
          typename: '老区监控',
          x: '30.252497',
          y: '122.201541'
        },
        {
          ip: '192.168.100.73',
          isLeaf: true,
          mpid: '33092104001320016549',
          mpname: '蓬莱路延伸段绿化带-球',
          puid: '33092104001320016549',
          typename: '老区监控',
          x: '30.252497',
          y: '122.201541'
        },
        {
          ip: '192.168.100.22',
          isLeaf: true,
          mpid: '33092104001320015586',
          mpname: '新河路与虹采路路口-球',
          puid: '33092104001320015586',
          typename: '老区监控',
          x: '30.249877',
          y: '122.199427'
        },
        {
          ip: '192.168.100.21',
          isLeaf: true,
          mpid: '33092104001320011228',
          mpname: '新河路与虹采路路口-枪',
          puid: '33092104001320011228',
          typename: '老区监控',
          x: '30.249877',
          y: '122.199427'
        },
        {
          ip: '192.168.100.25',
          isLeaf: true,
          mpid: '33092104001320012068',
          mpname: '长河路梅地亚宾馆口-枪',
          puid: '33092104001320012068',
          typename: '老区监控',
          x: '30.247042',
          y: '122.196388'
        },
        {
          ip: '192.168.100.19',
          isLeaf: true,
          mpid: '33092104001320017996',
          mpname: '长河路育才路路口-球',
          puid: '33092104001320017996',
          typename: '老区监控',
          x: '30.248168',
          y: '122.197457'
        },
        {
          ip: '192.168.100.76',
          isLeaf: true,
          mpid: '33092104001320017022',
          mpname: '长河路图书馆楼顶',
          puid: '33092104001320017022',
          typename: '老区监控',
          x: '30.249334',
          y: '122.200670'
        },
        {
          ip: '192.168.100.16',
          isLeaf: true,
          mpid: '33092104001320015689',
          mpname: '长河路五叉路口-枪1',
          puid: '33092104001320015689',
          typename: '老区监控',
          x: '30.248119',
          y: '122.201928'
        },
        {
          ip: '192.168.100.17',
          isLeaf: true,
          mpid: '33092104001320010524',
          mpname: '长河路五叉路口-枪2',
          puid: '33092104001320010524',
          typename: '老区监控',
          x: '30.248119',
          y: '122.201928'
        },
        {
          ip: '192.168.100.18',
          isLeaf: true,
          mpid: '33092104001320010947',
          mpname: '长河路五叉路口-枪3',
          puid: '33092104001320010947',
          typename: '老区监控',
          x: '30.248119',
          y: '122.201928'
        },
        {
          ip: '192.168.100.44',
          isLeaf: true,
          mpid: '33092104001320015224',
          mpname: '长河路康嘉路路口-球',
          puid: '33092104001320015224',
          typename: '老区监控',
          x: '30.24911',
          y: '122.20647'
        },
        {
          ip: '192.168.100.12',
          isLeaf: true,
          mpid: '33092104001320013605',
          mpname: '长河路康健路路口-球',
          puid: '33092104001320013605',
          typename: '老区监控',
          x: '30.248482',
          y: '122.204192'
        },
        {
          ip: '192.168.100.13',
          isLeaf: true,
          mpid: '33092104001320015199',
          mpname: '康嘉路-嘉和幼儿园对面-球',
          puid: '33092104001320015199',
          typename: '老区监控',
          x: '30.249963',
          y: '122.205757'
        },
        {
          ip: '192.168.100.14',
          isLeaf: true,
          mpid: '33092104001320015004',
          mpname: '康嘉路虹采路路口-球',
          puid: '33092104001320015004',
          typename: '老区监控',
          x: '30.249987',
          y: '122.203774'
        },
        {
          ip: '192.168.100.99',
          isLeaf: true,
          mpid: '33092104001320015469',
          mpname: '人民路邮电支路路口-球',
          puid: '33092104001320015469',
          typename: '老区监控',
          x: '30.243885',
          y: '122.198980'
        }
      ]
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
Mock.mock(/\/@test\/getAllCameraTreeDataForBridge/, 'get', getAllCameraTreeDataForBridge)

const getCameraUrl = options => {
  console.log('getCameraUrl options', options)
  const queryParameters = getQueryParameters(options)
  console.log('getCameraUrl query', queryParameters)
  let data =
    'rtmp://115.231.81.231:1935/service/PuId-ChannelNo=123724000100000005-01&PlayMethod=0&StreamingType=0&NetType=1&FCode=12'

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
Mock.mock(/\/@test\/getCameraUrl/, 'get', getCameraUrl)

