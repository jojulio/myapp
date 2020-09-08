import React from 'react';

function PageTitle(props) {
	return (
		<div className="page-title-area">
			<div className="row align-items-center">
				<div className="col-sm-6">
					<div className="breadcrumbs-area clearfix">
						<h4 className="page-title float-left">{props.pageTitle}</h4>
						<ul className="breadcrumbs float-left">
							<li><a href="index.html">Home</a></li>
							<li><span>{props.pageTitle}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
  }

export default PageTitle;