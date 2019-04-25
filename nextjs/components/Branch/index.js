import React, { Fragment } from 'react';
import styled from 'styled-components';

import Activities from '../Activities';
import Contact from '../Contact';
import InstagramFeed from './InstagramFeed';
import GoogleMaps from './GoogleMaps';
import FacebookFeed from './FacebookFeed';

const BranchStyled = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 48px 0;

	div {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 96px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
`;

const Branch = ({ branch }) => {
	return (
		<Fragment>
			<BranchStyled>
				<div>
					<h1>{branch.title.rendered}</h1>
				</div>
			</BranchStyled>
			<FacebookFeed/>
			<Activities activities={branch.acf.activities}/>
			<InstagramFeed/>
			<GoogleMaps branch={branch}/>
			<Contact/>
		</Fragment>
	);
};

export default Branch;