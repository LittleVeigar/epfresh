
import axios from 'axios'
import { Toast } from 'mint-ui'
export let base = 'http://apitest.epfresh.com/cgi'
export let deviceInfo = {'os': 'android', 'model': 'HM NOTE 1LTE', 'osVersion': '4.4.4'}
export let cid = 'ffffffff-9512-f7ac-ffff-fffff71d2617'
let configcityId = '6401'
let config = {
  'appDomain': 'purchaser',
  'appVersion': '2.3.143',
  'cmd': '',
  'cityId': configcityId,
  'clientIdentifierCode': cid,
  'deviceInfo': deviceInfo,
  'parameters': {}
}
const Post = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: base,
      data: Object.assign({}, config, data)
    })
    .then(response => {
      resolve(response)
    }, err => {
      reject(err)
      Toast('请求失败')
    })
    .catch((error) => {
      reject(error)
      Toast('请求错误')
    })
  })
}
/**
 * [loginAccount description]
 * @param  {[type]} options.phone    [手机号]
 * @param  {[type]} options.password [密码]
 * @return {[type]}                  [登录接口]
 * data: Object.assign({}, config, {'cmd': 'account/login', 'parameters': {'phone': phone, 'password': password}})
 */
const loginAccount = (params) => { return Post({'cmd': 'account/login', 'parameters': params}) }
/**
 * [getOpenCityAndMerAddress 开通城市和地址]
 * @return {[version]} [版本]
 */
const getOpenCityAndMerAddress = (params) => { return Post({'cmd': 'address/openCityAndMerAddress', 'parameters': params}) }
/**
 * [getHomeData 获取首页数据]
 * @return {[type]} [城市id 城市经纬度]
 */
const getHomeData = (params) => { return Post({'cmd': 'homepage/queryAct', 'parameters': params}) }

/**
 * [getDcStores 店铺列表 散货代采]
 * @return {[type]} [description]
 */
const getDcStores = (store) => { return Post({'cmd': 'store\/dcStores', 'token': store.token, 'parameters': {'statuses': [2, 3], 'groupByMarket': false}}) }

/**
 * [getProfile 获取个人信息]
 * @param  {[type]} store [状态对象]
 * @return {[type]}       [description]
 */
const getProfile = (store, params) => { return Post({'cmd': 'account/profile', 'token': store.token, 'parameters': params}) }

/**
 * [getProductList 获取商品列表]
 * @return {[type]} [description]
 */
const getProductList = () => { return Post({'cmd': 'product/list'}) }
/**
 * [getPartproductList 分类商品列表]
 * @param  {[type]} options.categoryId    [description]
 * @param  {[type]} options.topCategoryId [description]
 * @param  {[type]} options.selected      [description]
 * @param  {[type]} options.nameIds       [description]
 * @param  {[type]} options.state         [description]
 * @return {[type]}                       [description]
 */
const getPartproductList = (params, store) => { return Post({'cmd': 'product/list', 'token': store.token, 'parameters': params}) }
/**
 * [getMarketList 批发市场列表]
 * @return {[type]} [description]
 */
const getMarketList = () => { return Post({'cmd': 'store/market/list4purchaser'}) }

/**
 * [getStoreList 店铺列表]
 * @param  {[type]} options.pn [第几页]
 * @return {[type]}            [description]
 */
const getStoreList = (params, store) => { return Post({'cmd': 'store/list', 'token': store.token, 'parameters': params}) }

/**
 * [getProduct 商品详情]
 * @return {[type]} [description]
 */
const getProduct = () => { return Post({'cmd': 'product/load', 'parameters': {'productId': 685}}) }

/**
 * [getMarketAreas 市场分区]
 * @return {[type]} [description]
 */
const getMarketAreas = (store, params) => { return Post({'cmd': 'store/market/areas', 'token': store.token, 'parameters': params}) }

/**
 * [getSearchHot 热搜词]
 * @return {[type]} [description]
 */
const getSearchHot = () => { return Post({'cmd': 'search/history/hot'}) }

/**
 * [getMarketLoad 批发市场详情]
 * @param  {[type]} id [市场id]
 * @return {[type]}    [description]
 */
const getMarketLoad = (store, params) => { return Post({'cmd': 'store/market/load', 'token': store.token, 'parameters': params}) }

/**
 * [getMyOrder 我的订单]
 * @return {[type]} [description]
 */
const getMyOrder = () => { return Post({'cmd': 'appOrder\/myOrder', 'token': '70dccb68211d4402836e4de1e6da2af5', 'parameters': {'accountId': 36}}) }

/**
 * [getOrdersList 订单列表]
 * @param  {[type]} options.type [description]
 * @return {[type]}              [description]
 */
const getOrdersList = (store, params) => { return Post({'cmd': 'appOrder\/ordersList', 'token': store.token, 'parameters': params}) }

/**
 * [getSearchOrders 订单搜索]
 * @param  {[type]} options.key [关键字]
 * @return {[type]}             [description]
 */
const getSearchOrders = (store, params) => { return Post({'cmd': 'appOrder\/searchOrders', 'token': store.token, 'parameters': params}) }

/**
 * [getListShoppingCar 购物车列表]
 * @param  {[type]} store [状态对象]
 * @return {[type]}       [description]
 */
const getListShoppingCar = (store, params) => { return Post({'cmd': 'appOrder\/listShoppingCar', 'token': store.token, 'parameters': params}) }

/**
 * [updateShoppingCarSelected 更新已选择]
 * @param  {[type]} list  [列表]
 * @param  {[type]} store [状态树]
 * @return {[type]}       [description]
 */
const updateShoppingCarSelected = (params, store) => { return Post({'cmd': 'appOrder\/updateShoppingCarSelected', 'token': store.token, 'parameters': params}) }

/**
 * [updateShoppingCarProductCount 更改购物车商品数量]
 * @param  {[type]} options.id  [description]
 * @param  {[type]} options.num [description]
 * @param  {[type]} store       [description]
 * @return {[type]}             [description]
 */
const updateShoppingCarProductCount = (params, store) => { return Post({'cmd': 'appOrder\/updateShoppingCarProductCount', 'token': store.token, 'parameters': params}) }

/**
 * [delFromShoppingCar 从购物车删除商品]
 * @param  {[type]} ids   [description]
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */
const delFromShoppingCar = (params, store) => { return Post({'cmd': 'appOrder\/delFromShoppingCar', 'token': store.token, 'parameters': params}) }

/**
 * [getTree4purchaser 分类三级联动]
 * @param  {[type]} ids   [description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const getTree4purchaser = (ids, state) => { return Post({'cmd': 'category/tree4purchaser', 'token': state.token, 'parameters': {'marketIds': ids}}) }

/**
 * [getMarketlist4purchaser 批发市场列表]
 * @param  {[type]} ids [description]
 * @return {[type]}     [description]
 */
const getMarketlist4purchaser = (store, params) => { return Post({'cmd': 'store/market/list4purchaser', 'token': store.token, 'parameters': params}) }

/**
 * [getShoppingCarCntNew 获取购物车最新数据]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const getShoppingCarCntNew = (store, params) => { return Post({'cmd': 'appOrder/shoppingCarCntNew', 'token': store.token, 'parameters': params}) }

/**
 * [addToShoppingCarNew 购物车添加商品]
 * @param {[type]} options.productCount     [description]
 * @param {[type]} options.productUnitPrice [description]
 * @param {[type]} options.productId        [description]
 * @param {[type]} options.salesType        [description]
 * @param {[type]} options.versionId        [description]
 * @param {[type]} state                    [description]
 */
const addToShoppingCarNew = ({
  productCount,
  productUnitPrice,
  productId,
  salesType,
  versionId
}, state) => { return Post({'cmd': 'appOrder/addToShoppingCarNew', 'token': state.token, 'parameters': {'salesType': salesType, 'accountId': state.accountId, 'productCount': productCount, 'cityId': '6401', 'productUnitPrice': productUnitPrice, 'versionId': versionId, 'productId': productId}}) }

/**
 * [getNames 散货店铺页面获取筛选条件]
 * @param  {[type]} options.categoryId    [description]
 * @param  {[type]} options.topCategoryId [description]
 * @return {[type]}                       [description]
 */
const getNames = ({categoryId, topCategoryId}) => { return Post({'cmd': 'category/getNames', 'token': 'ffffffff-9512-f7ac-ffff-fffff71d2617', 'parameters': {'categoryId': categoryId, 'categoryType': 1, 'topCategoryId': topCategoryId, 'storeId': 1}}) }

/**
 * [getStoreload 店铺详情]
 * @param  {[type]} storeId [店铺id]
 * @return {[type]}         [description]
 */
const getStoreload = (store, params) => { return Post({'cmd': 'store/load', 'token': store.token, 'parameters': params}) }

/**
 * [getCoupon 优惠券列表]
 * @param  {[type]} options.isV  [description]
 * @param  {[type]} options.isA  [description]
 * @param  {[type]} options.arrS [description]
 * @return {[type]}              [description]
 */
const getCoupon = (store, {isV, isA, arrS}) => { return Post({'cmd': 'account/coupon/list', 'token': store.token, 'parameters': {'isValid': isV, 'isAvailable': isA, 'storeIds': arrS}}) }
/**
 * [getAdvise 意见反馈]
 * @param  {[type]} options.con [description]
 * @param  {[type]} options.Aid [description]
 * @return {[type]}             [description]
 */
const getAdvise = (store, {con, Aid}) => { return Post({'cmd': 'account/suggest/save', 'token': store.token, 'parameters': {'content': con, 'accountId': Aid}}) }

/**
 * [getWallet 钱包]
 * @return {[type]} [description]
 */
const getWallet = (store) => { return Post({'cmd': 'account/wallet', 'token': store.token, 'parameters': {}}) }

/**
 * [getWalletRecord 钱包记录]
 * @param  {[type]} options.day [description]
 * @return {[type]}             [description]
 */
const getWalletRecord = (store, {day}) => { return Post({'cmd': 'account/wallet/records', 'token': store.token, 'parameters': {'days': day}}) }

function getMock () {
  return axios({
    method: 'get',
    url: 'http://g.cn',
    data: {}
  })
}

export {
  getCoupon,
  getAdvise,
  getWallet,
  getWalletRecord,
  // asd
  loginAccount,
  getHomeData,
  getDcStores,
  getMarketAreas,
  getProductList,
  getPartproductList,
  getStoreList,
  getProduct,
  getProfile,
  getSearchHot,
  getMarketList,
  getMarketLoad,
  getMyOrder,
  getOrdersList,
  getSearchOrders,
  getListShoppingCar,
  updateShoppingCarSelected,
  updateShoppingCarProductCount,
  delFromShoppingCar,
  getOpenCityAndMerAddress,
  getTree4purchaser,
  getMarketlist4purchaser,
  getShoppingCarCntNew,
  addToShoppingCarNew,
  getNames,
  getStoreload,
  getMock
}
