import React from 'react';
import Container from '../../components/Container';
import PageLoading from 'react-page-loading';

const NotFound = () => {
	return(
		<PageLoading loader={"bar"} color={"#6a56a5"} size={10}>
			<Container>
				<div>
					<h6>Not found</h6>
				</div>
			</Container>
		</PageLoading>
	);
}

export default NotFound;