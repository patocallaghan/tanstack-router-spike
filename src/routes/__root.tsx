import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (<div>
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Tanstack Router Spike</h1>
      <ul style={{display: "flex", justifyContent: "space-between"}}>
        <li>
          <Link to="/waterfall/grandparent">Waterfall Grandparent</Link>
        </li>
        <li>
          <Link to="/waterfall/grandparent/parent">Waterfall Parent</Link>
        </li>
        <li>
          <Link to="/waterfall/grandparent/parent/child">Waterfall Child</Link>
        </li>
        <li>
          <Link to="/blocking/grandparent">Blocking Grandparent</Link>
        </li>
        <li>
          <Link to="/blocking/grandparent/parent">Blocking Parent</Link>
        </li>
        <li>
          <Link to="/blocking/grandparent/parent/child">Blocking Child</Link>
        </li>
      </ul>
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </div>),
})