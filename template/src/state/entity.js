import { rj } from 'react-rocketjump'
import rjList, {
  nextPreviousPaginationAdapter,
} from 'react-rocketjump/plugins/list'
import api from '../api'
import { PAGE_SIZE } from '../consts'

export const ListState = rj(rjList({
  pagination: nextPreviousPaginationAdapter,
  pageSize: PAGE_SIZE,
}), {
  mutations: {
    removeEntity: {
      effect: (t) => (entity) => api.auth(t)
        .mapResponse(() => entity)
        .delete(`/entity/${entity.id}`),
      updater: 'deleteItem',
      // Uncomment to make delete optimistic
      // optimistiResult: entity => entity,
    }
  },
  name: 'List',
  effectCaller: rj.configured(),
  effect: (t) => (params = {}) => api.auth(t).get('/entity', params),
})

export const DetailState = rj({
  name: 'Detail',
  effectCaller: rj.configured(),
  mutations: {
    updateEntity: {
      effect: (t) => (id, entity) => api.auth(t).put(`/entity/${id}`, entity),
      updater: 'updateData',
    },
  },
  effect: (t) => (id) => api.auth(t).get(`/entity/${id}`),
})

export const CreateState = rj({
  name: 'Create',
  effectCaller: rj.configured(),
  effect: t => (entity) => api.auth(t).post('/entity', entity)
})
