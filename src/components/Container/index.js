import React from 'react';

function Container(props) {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 mt-3">
					<div className="card">
						<div className="card-body"> 
						{props.children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
  }

export default Container;
