import magikApi from 'magik-api'

// Configure your API Backend
const api = magikApi()
  // Django trailing slash
  .trailingSlash(true)
  .authHeaders((token) => ({
    Authorization: `Bearer ${token}`,
  }))

export default api
