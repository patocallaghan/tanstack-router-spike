import { Await, createFileRoute, useParentMatches } from '@tanstack/react-router'

export const Route = createFileRoute('/waterfall copy/grandparent/parent/child')({
  loader: async () => {
    console.log('started: loader in waterfall.grandparent.parent.child.tsx');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ firstName: 'Jimmy', lastName: 'Doe' });
        console.log('finished: loader in waterfall.grandparent.parent.child.tsx');
      }, 6000);
    });
  },
  pendingComponent: () => (<div>Waterfall Child Loading...</div>),
  component: () => {
    const child = Route.useLoaderData();
    const matches = useParentMatches();
    console.log('matches in grandparent.parent.child.tsx:', matches);
    const grandparent = matches.find((match) => match.pathname === '/waterfall/grandparent')?.loaderData;
    console.log('grandparent in grandparent.parent.child.tsx:', grandparent);
    return (
      <div>
        <>
          <h1>Waterfall Child</h1>
          <p>
            {child.firstName} {child.lastName}
          </p>
          <hr />
          <h1>My grandparent's name is:</h1>
          <p>
            {grandparent.firstName} {grandparent.lastName}
          </p>
        </>
      </div>
    );
  }
})