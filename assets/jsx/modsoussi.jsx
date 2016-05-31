/**
 * Main JSX file.
 * 
 * (c) 2016. modsoussi.
 */

var Nav = React.createClass({
	render: function(){
		return(
			<nav id="b-override" className="navbar navbar-light" style={{marginTop: 15, marginLeft: 25, marginRight: 25, fontSize: 24}}>
				<ul className="nav navbar-nav">
					<li className="nav-item active"><a href="#">modsoussi</a></li>
				</ul>
				
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item active" href="#">
						<a href="#">
							<g>
								<i className="fa fa-twitter"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active" href="#">
						<a href="#">
							<g>
								<i className="fa fa-linkedin"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active" href="#">
						<a href="#">
							<g>
								<i className="fa fa-envelope" style={{marginRight: 15}}></i>
							</g>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
});

var Body = React.createClass({
	render: function(){
		return(
			<div className="container" style={{margin: 50}}>
				<p>Hi there, friend!</p>
			</div>
		);
	}
});

var Container = React.createClass({
	render: function(){
		return(
			<div>
				<Nav />
				<Body />
			</div>
		);
	}
});

ReactDOM.render(
	<Container />,
	document.getElementById("main")
);