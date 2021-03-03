/** Dependencies */
import { useRouter } from 'next/router';
import axios from 'axios';

/** Components */
import BaseLayout from '../../components/layouts/base-layout.component';

const Portfolio = ({ post: { title, body } }) => {
  const {
    query: { id },
  } = useRouter();
  return (
    <BaseLayout>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>ID: {id}</p>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async ({ query: { id } }) => {
  let post = {};
  try {
    const req = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = req.data;
  } catch (err) {
    console.log(err);
  }

  return { post };
};

export default Portfolio;
