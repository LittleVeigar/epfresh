import Vue from 'vue'
import Router from 'vue-router'
const Login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const FastSign = r => require.ensure([], () => r(require('@/page/login/children/fastSign')), 'fastSign')
const ForgetCode = r => require.ensure([], () => r(require('@/page/login/children/forgetCode')), 'forgetCode')
const Hello = r => require.ensure([], () => r(require('@/components/Hello')), 'Hello')
const Index = r => require.ensure([], () => r(require('@/components/Index')), 'Index')
const Order = r => require.ensure([], () => r(require('@/page/order/order')), 'order')
const Store = r => require.ensure([], () => r(require('@/page/store/store')), 'store')
const SearchOrder = r => require.ensure([], () => r(require('@/page/order/children/searchOrder')), 'searchOrder')
const Home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const Recommend = r => require.ensure([], () => r(require('@/page/home/children/recommend')), 'recommend')
const Profile = r => require.ensure([], () => r(require('@/page/profile/profile')), 'profile')
const MyInfo = r => require.ensure([], () => r(require('@/page/profile/children/myInfo')), 'myInfo')
const BeiHuan = r => require.ensure([], () => r(require('@/page/home/children/beihuan')), 'beihuan')
const MarketDetail = r => require.ensure([], () => r(require('@/page/home/children/marketdetail')), 'marketdetail')
const Search = r => require.ensure([], () => r(require('@/page/home/children/search')), 'search')
const Searchyellow = r => require.ensure([], () => r(require('@/page/searchyellow/search')), 'search')
const ProductList = r => require.ensure([], () => r(require('@/page/productlist/productlist')), 'productlist')
const StoreList = r => require.ensure([], () => r(require('@/page/storelist/storelist')), 'storelist')
const Product = r => require.ensure([], () => r(require('@/page/product/product')), 'product')
const ShoppingCart = r => require.ensure([], () => r(require('@/page/shoppingCart/shoppingCart')), 'shoppingCart')
const allProduct = r => require.ensure([], () => r(require('@/page/allProduct/allproduct')), 'allproduct')
const Mock = r => require.ensure([], () => r(require('@/page/mocktest/mock')), 'mock')
const Alloytouch = r => require.ensure([], () => r(require('@/page/mocktest/alloytouch')), 'alloytouch')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      redirect: '/home/id'
    },
    {
      path: '/home/:id',
      component: Home,
      children: [
        {
          path: '',
          component: Recommend
        },
        {
          path: 'marketdetail',
          component: MarketDetail
        }
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/beihuan',
      name: 'BeiHuan',
      component: BeiHuan
    },
    {
      path: '/marketdetail',
      name: 'MarketDetail',
      component: MarketDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchyellow',
      name: 'searchyellow',
      component: Searchyellow
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/fastSign',
      name: 'fastSign',
      component: FastSign
    },
    {
      path: '/forgetCode',
      name: 'forgetCode',
      component: ForgetCode
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile/myinfo',
      name: 'myinfo',
      component: MyInfo
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/store/:id',
      name: 'Store',
      component: Store
    },
    {
      path: '/searchorder',
      name: 'SearchOrder',
      component: SearchOrder
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/storelist',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/allproduct',
      name: 'allProduct',
      component: allProduct
    },
    {
      path: '/mock',
      name: 'mock',
      component: Mock
    },
    {
      path: '/alloytouch',
      name: 'Alloytouch',
      component: Alloytouch
    }
  ]
})
