import { Environment, RecordSource, Store } from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware
} from 'react-relay-network-modern'

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: (req) => Promise.resolve('https://videotest.endataclaims.com/midgard/graphql'),
    })
  ],
  { noThrow: true }
)

export default new Environment({
  network,
  store: new Store(new RecordSource())
})