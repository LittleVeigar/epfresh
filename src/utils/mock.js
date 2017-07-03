import Mock from 'mockjs'

export default Mock.mock('http://g.cn', {
  'object|4': {
    'name': '@name',
    'age|+1': 100,
    'color': '@color'
  }
})
