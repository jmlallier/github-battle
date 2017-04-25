var React     = require('react');
var ReactDOM  = require('react-dom');
var PropTypes = require('prop-types');
var USER_DATA = {
	name: 'John-Michael LAllier',
	img: 'https://avatars0.githubusercontent.com/u/15809946?v=3&s=460',
	username: 'jmlallier'
};
require('./index.css');

class App extends React.Component {
	render() {
		return (
			<div>
				<Badge user={USER_DATA}/>
				<Users list={[
					{name: 'Angelique', friend: true},
					{name: 'Stephen', friend: true},
					{name: 'Jonathan', friend: false},
					{name: 'Bryan', friend: true},
				]}
				/>
			</div>
		)
	}
}

class Avatar extends React.Component {
	render() {
		return (
			<img src={this.props.img}/>
		)
	}
}

class Label extends React.Component {
	render() {
		return (
			<h1>Name: {this.props.name}</h1>
		)
	}
}

class ScreenName extends React.Component {
	render() {
		return (
			<h3>Username: {this.props.username}</h3>
		)
	}
}

class Badge extends React.Component {
	render() {
		return (
			<div>
				<Avatar img={this.props.user.img}/>
				<Label name={this.props.user.name}/>
				<ScreenName username={this.props.user.username}/>
			</div>
		)
	}
}

Badge.propTypes = {
	user: PropTypes.shape({
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
	}),
};

class Users extends React.Component {
	render() {
		var friends    = this.props.list.filter(function (user) {
			return user.friend === true;
		});
		var nonFriends = this.props.list.filter(function (user) {
			return user.friend != true;
		});
		return (
			<div>
				<h1>Friends</h1>
				<ul>
					{friends.map(function (user) {
						return <li key={user.name}>{user.name}</li>;
					})
					}
				</ul>
				
				<hr />
				
				<h1> Non Friends </h1>
				<ul>
					{nonFriends.map(function (user) {
						return <li key={user.name}>{user.name}</li>;
					})
					}
				</ul>
			</div>
		)
	}
}

Users.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		friend: PropTypes.bool.isRequired
	})),
}


ReactDOM.render(
	<App />,
	document.getElementById('app')
);
