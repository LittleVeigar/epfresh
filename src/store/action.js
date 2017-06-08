import {
  HOME_ACTIVE,
  LIST_ACTIVE,
  SHOPCART_ACTIVE,
  MY_ACTIVE,
  HIDE_MENU,
  CITY_LOCATION,
  ACCOUNT_LOGIN,
  REMEMBER_PHONE
} from './mutation-types.js'
const Cookie = require('js-cookie')
export default {
  async setHomeActive ({
    commit,
    state
  }) {
    commit(HOME_ACTIVE)
  },
  async setListActive ({
    commit,
    state
  }) {
    commit(LIST_ACTIVE)
  },
  async setShopcartActive ({
    commit,
    state
  }) {
    commit(SHOPCART_ACTIVE)
  },
  async setMyActive ({
    commit,
    state
  }) {
    commit(MY_ACTIVE)
  },
  async setMenuHide ({
    commit,
    state
  }) {
    commit(HIDE_MENU)
  },
  async setCityLocation ({
    commit,
    state
  }) {
    commit(CITY_LOCATION)
  },
  async setAccountLogin ({
    commit,
    state
  }, account) {
    console.log('actiontoken', account)
    commit(ACCOUNT_LOGIN, { login: true, accountId: account.accountId, token: account.token })
  },
  async setAccountLogout ({
    commit,
    state
  }) {
    Cookie.set('accountDetail', '')
    commit(ACCOUNT_LOGIN, { login: false, accountId: '', token: '' })
  },
  async rememberLastPhone ({
    commit,
    state
  }, phone) {
    commit(REMEMBER_PHONE, {phone: phone})
  }
}
