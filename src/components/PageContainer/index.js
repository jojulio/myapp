import React from 'react';

function PageContainer(props) {
	return (
		<div className="page-container">
			{ props.children }
		</div>
	);
}

export default PageContainer;