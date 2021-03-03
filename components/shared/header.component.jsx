/** Dependencies */
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
      <Link href="/portfolios">
        <a>Portfolios</a>
      </Link>
      <style jsx>
        {`
          a {
            color: red;
          }
        `}
      </style>
    </>
  );
};

export default Header;