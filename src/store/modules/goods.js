import { goodsList, goodsListAll } from "@/api/goods";

const actions = {
  async getGoodsList ({commit},data) {
    let { page, limit } = data
    let result = await goodsList(page, limit)
    if (result.status === 200) {
      commit('GOODSLIST',result.data)
    }
  },
  async getTotal({commit}) {
    let result = await goodsListAll()
    if (result.status === 200) {
      commit('TOTAL',result.data)
    } 
  }
}

const mutations = {
  GOODSLIST (state,data) {
    state.goodsList = data
  },
  TOTAL (state, data) {
    state.total = data
  }
}

const state = {
  goodsList: [],
  total: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}