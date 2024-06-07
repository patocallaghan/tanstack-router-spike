import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waterfall copy/grandparent/parent')({
  loader: async () => {
    console.log('started: loader in waterfall.grandparent.parent.tsx');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ firstName: 'Jane', lastName: 'Doe' });
        console.log('finished: loader in waterfall.grandparent.parent.tsx');
      }, 2000);
    }); 
  },
  pendingComponent: () => (<div>Waterfall Parent Loading...</div>),
  component: () => {
    const parent = Route.useLoaderData();
    return (
      <div>
        <>
          <h1>Waterfall Parent</h1>
          <p>
            {parent.firstName} {parent.lastName}
          </p>
          <hr />
        </>
        <Outlet />
      </div>);
    }
})