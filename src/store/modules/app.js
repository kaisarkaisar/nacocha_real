const state = {
  drawer: true,
  gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  items: [
    { title: '사용자관리', icon: 'mdi-view-dashboard', to: '/usermanage/basic-table' },
    { title: '센터관리', icon: 'mdi-view-dashboard', to: '/centermanage/basic-table' },
    { title: '코치관리', icon: 'mdi-view-dashboard', to: '/coatchmanage/basic-table' },
    { title: '강의관리', icon: 'mdi-view-dashboard', to: '/lecturemanage/basic-table' },
    { title: '수강관리', icon: 'mdi-view-dashboard', to: '/classmanage/basic-table' },
    { title: '대여관리', icon: 'mdi-view-dashboard', to: '/rentalmanage/basic-table' },
    { title: '종목관리', icon: 'mdi-view-dashboard', to: '/sportmanage/basic-table' },
    /*
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
    { title: 'Pages', icon: 'mdi-menu', items: [
      { title: 'Authentication', icon: 'mdi-login', items: [
        { title: 'SignIn', to: '/authentication/sign-in' },
        { title: 'SignUp', to: '/authentication/sign-up' },
      ]},
      { title: 'ProductList', to: '/page/product-list' },
    ]},
    { title: 'Grid System', icon: 'mdi-grid', to: '/grid-system' },
    { title: 'Breakpoints', icon: 'mdi-responsive', to: '/breakpoints' },
    { title: 'Grid List Page', icon: 'mdi-view-list-outline', to: '/grid-list-page' },
    { title: 'Typography', icon: 'mdi-format-text-variant-outline', to: '/typography' },
    { title: 'Tables', icon: 'mdi-table-settings', items: [
      { title: 'Basic Table', to: '/tables/basic-table' },
      { title: 'App Table', to: '/tables/app-table' },
    ] },
    { title: 'Forms', icon: 'mdi-form-select', items: [
      { title: 'Validation Form', to: '/forms/validation-form' },
      { title: 'App Form', to: '/forms/app-form' },
    ] },
    { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
    { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },
    */
  ],
}

const getters = {
  getDrawer: state => state.drawer
}

const mutations = {
  setDrawer (state, data) {
    state.drawer = data
  }
}

const actions = {
  toggleDrawer ({ commit }, value) {
    commit('setDrawer', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
