/** Dependencies */
import React from 'react';
import axios from 'axios';
import Link from 'next/link';

/** Components */
import BaseLayout from '../components/layouts/base-layout.component';

const Portfolios = ({ posts }) => {
  return (
    <BaseLayout>
      <h1>Portfolios Page</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id} style={{ fontSize: '20px' }}>
            <Link as={`/portfolios/${id}`} href={`/portfolios/[id]`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data.slice(0, 10);
  } catch (err) {
    console.log(err);
  }

  return { posts };
};

export default Portfolios;
