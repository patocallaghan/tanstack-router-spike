import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blocking/grandparent/parent')({
  loader: async () => {
    console.log('started: loader in blocking.grandparent.parent.tsx');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ firstName: 'Jane', lastName: 'Doe' });
        console.log('finished: loader in blocking.grandparent.parent.tsx');
      }, 2000);
    }); 
  },
  component: () => {
    const parent = Route.useLoaderData();
    return (
      <div>
        <>
          <h1>Blocking Parent</h1>
          <p>
            {parent.firstName} {parent.lastName}
          </p>
          <hr />
        </>
        <Outlet />
      </div>);
    }
})