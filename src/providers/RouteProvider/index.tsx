import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { ErrorBoundary } from 'react-error-boundary'
import RouteErrorBoundary from './RouteErrorBoundary'
import RouteLoading from './RouteLoading'
import PrivateRoute from './PrivateRoute'

import routes from './routes'

const RouteProvider = () => {
  return (
    <ErrorBoundary FallbackComponent={RouteErrorBoundary}>
      <Router>
        <React.Suspense fallback={<RouteLoading />}>
          <Switch>
            {routes.map((route, index) => {
              if (route.private) return <PrivateRoute key={index} {...route} />
              return <Route key={index} {...route} />
            })}
          </Switch>
        </React.Suspense>
      </Router>
    </ErrorBoundary >
  )
}
export default RouteProvider