import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blocking/grandparent/parent/child')({
  loader: async () => {
    console.log('started: loader in blocking.grandparent.parent.child.tsx');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ firstName: 'Jimmy', lastName: 'Doe' });
        console.log('finished: loader in blocking.grandparent.parent.child.tsx');
      }, 6000);
    });
  },
  component: () => {
    const child = Route.useLoaderData();
    return (
      <div>
        <>
          <h1>Blocking Child</h1>
          <p>
            {child.firstName} {child.lastName}
          </p>
          <hr />
        </>
      </div>
    );
  }
})