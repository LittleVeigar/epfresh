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

export default {
  [HOME_ACTIVE] (state, {
    id
  }) {
    state.menuIndex = id
  },
  [LIST_ACTIVE] (state, {
    id
  }) {
    state.menuIndex = id
  },
  [SHOPCART_ACTIVE] (state, {
    id
  }) {
    state.menuIndex = id
  },
  [MY_ACTIVE] (state, {
    id
  }) {
    state.menuIndex = id
  },
  [HIDE_MENU] (state, {
    hidemenu
  }) {
    state.hidemenu = hidemenu
  },
  [CITY_LOCATION] (state, {
    city
  }) {
    state.city_name = city
  },
  [REMEMBER_PHONE] (state, {
    phone
  }) {
    state.phone = phone
  },
  [ACCOUNT_LOGIN] (state, {
    login,
    accountId,
    token
  }) {
    state.login = login
    state.accountId = accountId
    state.token = token
  }
}
