import EazyAuth from 'use-eazy-auth'
import { ConfigureRj } from 'react-rocketjump'
import api from './api'

const loginCall = (params) =>
  api
    .mapResponse((r) => ({
      accessToken: r.response.token,
    }))
    .post('/auth-token/', params)
const meCall = (token) => api.auth(token).get('/profile')

function Auth({ children }) {
  return (
    <EazyAuth
      loginCall={loginCall}
      meCall={meCall}
      render={({ callAuthApiObservable }) => (
        <ConfigureRj effectCaller={callAuthApiObservable}>
          {children}
        </ConfigureRj>
      )}
    />
  )
}

export default Auth
