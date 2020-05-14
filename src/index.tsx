import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from 'providers/RelayProvider/environment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './providers/ThemeProvider/theme'

import { SnackbarProvider } from 'notistack'

import RouteProvider from 'providers/RouteProvider'

const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(
  <RelayEnvironmentProvider environment={environment}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <RouteProvider />
      </SnackbarProvider>
    </ThemeProvider>
  </RelayEnvironmentProvider>
)

serviceWorker.unregister()