/**
 * Main JSX file.
 * 
 * (c) 2016. modsoussi.
 */

var Nav = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-light" style={{margin: 15, borderBottom: 2}}>
				<ul className="nav navbar-nav">
					<li className="nav-item active" href="#">modsoussi</li>
				</ul>
				
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item active" href="#">
						<g>
							<i className="fa fa-facebook fa"></i>
						</g>
					</li>
				</ul>
			</nav>
		);
	}
});

ReactDOM.render(
	<Nav />,
	document.getElementById("main")
);