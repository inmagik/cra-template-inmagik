import { AuthRoute, GuestRoute } from 'use-eazy-auth/routes'
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Login from './pages/Login'
import List from './pages/List'
import Create from './pages/Create'
import Update from './pages/Update'

function App() {
  return (
    <Auth>
      <Router>
        <Switch>
          <GuestRoute path='/login'>
            <Login />
          </GuestRoute>
          <AuthRoute path='/create' exact>
            <Create />
          </AuthRoute>
          <AuthRoute path='/list' exact>
            <List />
          </AuthRoute>
          <AuthRoute path='/list/:id' exact>
            <Update />
          </AuthRoute>
          <Redirect to='/list' />
        </Switch>
      </Router>
    </Auth>
  )
}

export default App
