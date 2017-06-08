// function getDetailDate(){
//   return axios({
//     method: 'post',
//     url:options.url,
//     dataType: "json",
//     data: {
//       "cityId": options.cityId,
//       "appDomain": "purchaser",
//       "cmd": "appOrder\/orderDetails",
//       "token": options.token,
//       "clientIdentifierCode":options.cid,
//       "parameters": {
//         "orderId": options.orderId,
//         "payWay": "",
//         "accountId": options.accountId
//       }
//     }
//   })
// };
import axios from 'axios'
function loginAccount ({phone, password}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'appDomain': 'purchaser',
      'appVersion': '3.3.53',
      'cmd': 'account/login',
      'cityId': '6401',
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'deviceInfo': {'os': 'android', 'model': 'HM NOTE 1LTE', 'osVersion': '4.4.4'},
      'parameters': {
        'phone': phone,
        'password': password
      }
    }
  })
}
function getOpenCityAndMerAddress () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'address/openCityAndMerAddress',
      'token': '46db84cb534f49d4af52dde9e647e5ed',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'cityId': '6401',
      'appVersion': '5.11.2',
      'appDomain': 'purchaser',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'version': '0'
      }
    }
  })
}
function getHomeData () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'homepage/queryAct',
      'parameters': {
        'cityId': '36',
        'lng': '106.27',
        'lat': '38.47'
      }
    }
  })
}

function getDcStores () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store\/dcStores',
      'token': '46db84cb534f49d4af52dde9e647e5ed',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'cityId': '6401',
      'appVersion': '5.11.2',
      'appDomain': 'purchaser',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'statuses': [2, 3],
        'groupByMarket': false
      }
    }
  })
}

function getProfile () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'account/profile',
      'token': '73f841b7b27b4b6686170b7a604a8075',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'parameters': {
        'accountId': '36'
      }
    }
  })
}

function getProductList () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'product/list',
      'cityId': '6401'
    }
  })
}
function getPartproductList ({categoryId, topCategoryId, selected, nameIds, state}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'product/list',
      'cityId': '6401',
      'appVersion': '4.2.19',
      'appDomain': 'purchaser',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'categoryId': categoryId,
        'categoryType': 1,
        'topCategoryId': topCategoryId,
        'type': 1,
        'nameIds': nameIds,
        'selected': selected,
        'pageSize': 15,
        'pageNumber': 0
      },
      'token': state.token,
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617'
    }
  })
}

function getMarketList () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store/market/list4purchaser',
      'cityId': '6401'
    }
  })
}

function getStoreList ({pn}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store/list',
      'cityId': '6401',
      'appVersion': '2.2.19',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': 'aa9009a0ed2a4fd2b83689e240ac1d5e',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'marketId': '',
        'pageNumber': pn,
        'sortProperty': 'name',
        'sortDirection': 'DESC',
        'favorite': '',
        'areaId': ''
      }
    }
  })
}

function getProduct () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'product/load',
      'cityId': '6401',
      'parameters': {
        'productId': 685
      }
    }
  })
}

function getMarketAreas () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store/market/areas',
      'appDomain': 'purchaser',
      'appVersion': '10.0.166',
      'token': '70dccb68211d4402836e4de1e6da2af5',
      'cityId': '36',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'deviceInfo': {
        'osVersion': '5.1',
        'os': 'android',
        'model': 'ZTE C880A'
      },
      'parameters': {
        'id': '2'
      }
    }
  })
}

function getSearchHot () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'search/history/hot',
      'cityId': '31',
      'parameters': {
      }
    }
  })
}

function getMarketLoad (id) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store/market/load',
      'cityId': '6401',
      'appVersion': '2.2.22',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': 'e93587ad1bfc4effb1c3da2fb131b6b4',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'id': id
      }
    }
  })
}

function getMyOrder () {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/myOrder',
      'appVersion': '2.2.22',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': '4bbe6a5050c648beb817c74f62f03245',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'accountId': 36
      }
    }
  })
}

function getOrdersList ({type}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/ordersList',
      'appVersion': '3.2.22',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': 'ff719dc5889c41c1b783f04779a40a52',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'pageNumber': 0,
        'accountId': 36,
        'pageSize': 10,
        'type': type
      }
    }
  })
}

function getSearchOrders ({key}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/searchOrders',
      'appVersion': '2.2.22',
      'cityId': '6401',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': 'e93587ad1bfc4effb1c3da2fb131b6b4',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'pageNumber': 0,
        'accountId': 36,
        'pageSize': 10,
        'key': key,
        'type': ''
      }
    }
  })
}

function getListShoppingCar (store) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/listShoppingCar',
      'appVersion': '3.2.22',
      'cityId': '6401',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': store.token,
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'cityId': 6401,
        'accountId': store.accountId
      }
    }
  })
}

function updateShoppingCarSelected (list) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/updateShoppingCarSelected',
      'appVersion': '2.2.22',
      'cityId': '6401',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': 'e93587ad1bfc4effb1c3da2fb131b6b4',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'list': list
      }
    }
  })
}

function updateShoppingCarProductCount ({ id, num }) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/updateShoppingCarProductCount',
      'appVersion': '4.2.22',
      'cityId': '6401',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': 'a221cdf11e734914a8e5571628b88f1c',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'id': id,
        'productCount': num
      }
    }
  })
}

function delFromShoppingCar (ids) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder\/delFromShoppingCar',
      'appVersion': '2.2.22',
      'cityId': '6401',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': '787936b38fd54b3987f9facfe856349b',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'ids': ids,
        'cityId': 6401,
        'accountId': 36
      }
    }
  })
}
function getTree4purchaser (ids, state) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'category/tree4purchaser',
      'appVersion': '3.2.22',
      'cityId': '6401',
      'appDomain': 'purchaser',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': state.token,
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'marketIds': ids
      }
    }
  })
}
function getMarketlist4purchaser (ids) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store/market/list4purchaser',
      'appVersion': '3.2.22',
      'cityId': '6401',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'parameters': {
        'marketIds': ids
      }
    }
  })
}

function getShoppingCarCntNew (state) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder/shoppingCarCntNew',
      'appVersion': '3.2.22',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'token': state.token,
      'parameters': {
        'cityId': '6401',
        'accountId': state.accountId
      }
    }
  })
}

function addToShoppingCarNew ({
  productCount,
  productUnitPrice,
  productId,
  salesType,
  versionId
}, state) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'appOrder/addToShoppingCarNew',
      'appVersion': '3.2.22',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'token': state.token,
      'parameters': {
        'salesType': salesType,
        'accountId': state.accountId,
        'productCount': productCount,
        'cityId': '6401',
        'productUnitPrice': productUnitPrice,
        'versionId': versionId,
        'productId': productId
      }
    }
  })
}

function getNames ({categoryId, topCategoryId}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'category/getNames',
      'appVersion': '3.2.22',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'token': 'a221cdf11e734914a8e5571628b88f1c',
      'parameters': {
        'categoryId': categoryId,
        'categoryType': 1,
        'topCategoryId': topCategoryId,
        'storeId': 1
      }
    }
  })
}

function getStoreload (storeId) {
  return axios({
    method: 'post',
    url: 'http://apifort.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'cmd': 'store/load',
      'appVersion': '3.2.22',
      'appDomain': 'purchaser',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'cityId': 31,
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'token': 'e454bf6f72de4d5a846b6ea9efcf511d',
      'parameters': {
        'storeId': storeId
      }
    }
  })
}

function getCoupon ({isV, isA, arrS}) {
  return axios({
    method: 'post',
    url: 'http://apifort.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'appDomain': 'supplier',
      'appVersion': '3.1.47',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': '316a95ae061b4aa4aa40dcbcc7538a14',
      'cmd': 'account/coupon/list',
      'parameters': {
        'isValid': isV,
        'isAvailable': isA,
        'storeIds': arrS
      }
    }
  })
}

function getAdvise ({con, Aid}) {
  return axios({
    method: 'post',
    url: 'http://apifort.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'appDomain': 'supplier',
      'appVersion': '3.1.47',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'token': '316a95ae061b4aa4aa40dcbcc7538a14',
      'cmd': 'account/suggest/save',
      'parameters': {
        'content': con,
        'accountId': Aid
      }
    }
  })
}

function getWallet () {
  return axios({
    method: 'post',
    url: 'http://apifort.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'appDomain': 'purchaser',
      'appVersion': '3.1.47',
      'cmd': 'account/wallet',
      'token': 'c2b527fff7e04ffea26719f54f210b1d',
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'parameters': {
      }
    }
  })
}

function getWalletRecord ({day}) {
  return axios({
    method: 'post',
    url: 'http://apifort.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'appDomain': 'purchaser',
      'appVersion': '3.1.47',
      'token': 'c2b527fff7e04ffea26719f54f210b1d',
      'clientIdentifierCode': 'ffffffff-9512-f7ac-ffff-fffff71d2617',
      'cmd': 'account/wallet/records',
      'parameters': {
        'days': day
      }
    }
  })
}

function getLogin ({a, b}) {
  return axios({
    method: 'post',
    url: 'http://apitest.epfresh.com/cgi',
    dataType: 'json',
    data: {
      'appDomain': 'purchaser',
      'appVersion': '3.1.47',
      'clientIdentifierCode': 'ffffffff-9d19-0419-0000-00005a3e0e69',
      'cmd': 'account/login',
      'deviceInfo': {
        'os': 'android',
        'osVersion': '5.1',
        'model': 'x86_64'
      },
      'cityId': '6401',
      'parameters': {
        'phone': a,
        'password': b
      }
    }
  })
}

function getMock () {
  return axios({
    method: 'get',
    url: 'http://g.cn',
    dataType: 'json',
    data: {}
  })
}
export {
  getCoupon,
  getAdvise,
  getWallet,
  getWalletRecord,
  getLogin,
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
