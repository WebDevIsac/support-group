import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Head from 'next/head';
import GlobalStyle from '../styles';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from './Container';
import Loading from './Loading';

class Layout extends Component {
	state = {
		navbar: [],
		branches: [],
		languages: [],
		loaded: false
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/menus')
		.then(responseMenus => {
			const navbar = responseMenus.data.find(item => item.slug === "navbar");
			const branches = responseMenus.data.find(item => item.slug === "branches");
			const languages = responseMenus.data.find(item => item.slug === "language");
			this.setState({
				navbar: navbar.acf.items,
				branches: branches.acf.items,
				languages: languages.acf.items,
			});
			setTimeout(() => {
				this.setState({
					loaded: true
				})
			}, 2000);
		});
	}

    render() {
		if (!this.state.loaded) {
			return <Loading/>
		}
		return (
			<Fragment>
				<GlobalStyle/>
				<Head>
					<title>Support Group Network</title>
					<meta name="description" content="This is a site for Support Network Group"/>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<script async defer crossorigin="anonymous" src="https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v3.2"></script>
				</Head>
				<Navbar navbar={this.state.navbar} branches={this.state.branches} languages={this.state.languages}/>
				<Container>
					{this.props.children}
				</Container>
				<Footer/>
			</Fragment>
		);
    }
}

export default Layout;
