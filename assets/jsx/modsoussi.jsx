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
					<li className="nav-item inactive"><a style={{fontSize: 36}}>modsoussi</a></li>
					<li className="nav-item active"><a href="#" style={{marginLeft: 25, marginTop: 5}}>skillz</a></li>
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

var Content = React.createClass({
	getInitialState: function(){
		return {tab: this.props.tab};
	},
	render: function(){
		if(this.state.tab === "home"){
			return(
				<div className="container" style={{marginTop: 50, fontSize: 25}}>
					<div className="row">
						<div className="col-md-6 center-block">
							<p>Hi there, friend! My name is Mohamed, and I go by Mo. I was born
								and raised in Bizerte, Tunisia, before life led me to a wonderful piece of
								land in western Massachussetts that people call the Purple Bubble, and there stood
								the top liberal arts college in the country, Williams College. In this bubble in the
								middle of the Berkshires, I majored in Physics and Computer Science and set out to change
								the world. My belief is that humanity's future lies in its expansion outside of planet Earth.
								I'm only 24, and I'm going to do everything I can to see it happen in my lifetime. @elonmusk ;)
							 </p>
						</div>
					</div>
				</div>
			);
		} else if(this.state.tab === "about"){
			return(
				<div className="container">
					<div className="row">
						<div className="col-md-6 center-block">
							<h2> Hello, about! </h2>
						</div>
					</div>
				</div>
			);
		} else return(
				<div className="container">
					<div className="row">
						<div className="col-md-6 center-block">
							<h2> Hello, projects! </h2>
						</div>
					</div>
				</div>
		);
	}
})

var Body = React.createClass({
	render: function(){
		return(
			<Content tab="home"/>
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