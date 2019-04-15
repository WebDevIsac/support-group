import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from './Container';
// import Loading from './Loading';

class Layout extends Component {
	state = {
		loaded: false
	}

	componentDidMount() {
		this.setState({
			loaded: true
		});
	}

    render() {
		const { children } = this.props;
		if (this.state.loaded) {
			return (
				<Fragment>
					<GlobalStyle/>
					<Head>
						<title>Support Group Network</title>
						<meta name="description" content="This is an example of a meta description. This will show up in search results."/>
						<meta charSet="utf-8"/>
						<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					</Head>
					<Navbar/>
					<Container>
						{children}
					</Container>
					<Footer/>
            	</Fragment>
        	);
		}
		return (
			<h1 style={{textAlign:'center'}}>Loading...</h1>

			// <Fragment>
			// 	<Head>
			// 		<title>Support Group Network</title>
			// 		<meta name="description" content="This is an example of a meta description. This will show up in search results."/>
			// 		<meta charSet="utf-8"/>
			// 		<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			// 	</Head>
			// 	<Loading/>
			// </Fragment>
		);
    }
}

export default Layout;
