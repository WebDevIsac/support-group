import React from 'react'
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layout'), {
	ssr: false
});

const NotFound = dynamic(import('../components/NotFound'), {
	ssr: false
});

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Layout>
          <NotFound/>
      </Layout>
    )
  }
}

export default Error