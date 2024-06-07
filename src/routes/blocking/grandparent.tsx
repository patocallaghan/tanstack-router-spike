import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blocking/grandparent')({
  loader: async () => {
    console.log('started: loader in blocking.grandparent.tsx');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ firstName: 'John', lastName: 'Doe' });
        console.log('finished: loader in blocking.grandparent.tsx');
      }, 1000);
    });
  },
  component: () => {
    const grandparent = Route.useLoaderData()
    return <>
      <div>
        <>
          <h1>Blocking Grandparent</h1>
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