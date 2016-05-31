/**
 * Main JSX file.
 * 
 * (c) 2016. modsoussi.
 */

var Nav = React.createClass({
	render: function(){
		return(
			<nav id="b-override" className="navbar navbar-light" style={{marginTop: 15, marginLeft: 25, marginRight: 25, fontSize: 20}}>
				<ul className="nav navbar-nav">
					<li className="nav-item inactive"><a href="#" style={{fontSize: 36}}>modsoussi</a></li>
					<li className="nav-item active"><a href="#" style={{marginLeft: 25, marginTop: 5}}>about</a></li>
					<li className="nav-item active"><a href="#" style={{marginTop: 5}}>projects</a></li>
				</ul>
				
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item active">
						<a target="_blank" href="https://twitter.com/modsoussi">
							<g>
								<i className="fa fa-twitter"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active">
						<a target="_blank" href="https://github.com/modsoussi">
							<g>
								<i className="fa fa-github"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active">
						<a target="_blank" href="https://linkedin.com/in/mohameddsoussi">
							<g>
								<i className="fa fa-linkedin"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active">
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