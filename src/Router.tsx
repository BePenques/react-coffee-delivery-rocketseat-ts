import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/index'
import { Checkout } from './pages/Checkout/index'
import { Success } from './pages/Success/index'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route
        path="/react-coffee-delivery-rocketseat-ts"
        element={<DefaultLayout />}
      >
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success/:id" element={<Success />} />
      </Route>
    </Routes>
  )
}
