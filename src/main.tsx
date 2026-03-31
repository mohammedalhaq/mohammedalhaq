import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, createRoute, createRootRoute, RouterProvider } from '@tanstack/react-router'
import './index.css'
import App from './App.tsx'
import Work from './Work/index.tsx'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: Work,
})

const routeTree = rootRoute.addChildren([indexRoute, workRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
