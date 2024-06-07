import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waterfall copy/grandparent')({
  loader: async () => {
    console.log('started: loader in waterfall.grandparent.tsx');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ firstName: 'John', lastName: 'Doe' });
        console.log('finished: loader in waterfall.grandparent.tsx');
      }, 1000);
    });
  },
  pendingComponent: () => (<div>Waterfall Grandparent Loading...</div>),
  component: () => {
    const grandparent = Route.useLoaderData()
    return <>
      <div>
        <>
          <h1>Waterfall Grandparent</h1>
          <p>
            {grandparent.firstName} {grandparent.lastName}
          </p>
          <hr />
        </>
        <Outlet />
      </div>
    </>
  }
})