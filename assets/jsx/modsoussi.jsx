/**
 * Main JSX file.
 * 
 * (c) 2016. modsoussi.
 */

var Nav = React.createClass({
	handleClick: function(e){
		return this.props.handleClick(e);
	},
	render: function(){
		return(
			<nav id="b-override" className="navbar navbar-light" style={{marginTop: 15, marginLeft: 25, marginRight: 25, fontSize: 20}}>
				<ul className="nav navbar-nav">
					<li className="nav-item active">
						<a href="#" style={{fontSize: 36}} onClick={this.handleClick}>
							modsoussi
						</a>
					</li>
					<li className="nav-item active" onClick={this.handleClick}>
						<a href="#" style={{marginLeft: 25, marginTop: 5}}>
							skillz
						</a>
					</li>
					<li className="nav-item active" onClick={this.handleClick}>
						<a href="#" style={{marginTop: 5}}>
							projects
						</a>
					</li>
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
		if(this.props.tab === "modsoussi"){
			return(
				<div className="container" style={{marginTop: 50, fontSize: 25}}>
					<div className="row">
						<div className="col-md-6 center-block">
							<p>Hello there, friend! My name is Mohamed, and I go by Mo. I was born
								and raised in Bizerte, Tunisia, before life led me to a wonderful piece of
								land in western Massachussetts that people call the Purple Bubble, and there stood
								the top liberal arts college in the country, Williams College. In this bubble in the
								middle of the Berkshires, I majored in Physics and Computer Science and set out to change
								the world. My belief is that Humanity's future lies in its expansion outside of planet Earth.
								I'm only 24, and I'm going to do everything I can to see it happen in my lifetime. @elonmusk ;)
								For the time being, I'm working on <a href="http://daycationapp.com" target="_blank">
								Daycation</a>, while I improve my software and aerospace engineering skills.
							 </p>
						</div>
					</div>
				</div>
			);
		} else if(this.props.tab === "skillz"){
			return(
				<div className="container">
					<div className="row">
						<div className="col-md-6 center-block">
							<h2> Hello, skillz! </h2>
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
});

var Container = React.createClass({
	getInitialState: function(){
		return {tab: "modsoussi"};
	},
	handleClick: function(e){
		this.setState({tab: e.target.text});
	},
	render: function(){
		return(
			<div>
				<Nav handleClick={this.handleClick}/>
				<Body tab={this.state.tab}/>
			</div>
		);
	}
});

ReactDOM.render(
	<Container />,
	document.getElementById("main")
);