import Content from 'components/browse/Content';

import { getSession } from 'next-auth/client';

export default function Browse() {
  return <Content />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }
  return { props: { session } };
}