import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Main } from 'app/layout/Main/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main>
        <span>My HomePage</span>
      </Main>
    </>
  );
}
