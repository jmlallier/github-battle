var React = require('react');
var ReactDOM = require('react-dom');
var USER_DATA = {
	name: 'John-Michael LAllier',
	img: 'https://avatars0.githubusercontent.com/u/15809946?v=3&s=460',
	username: 'jmlallier'
}
require('./index.css');

class App extends React.Component {
	render() {
		return (
			<div>
				<Badge user={USER_DATA} />
				<FriendsContainer />
				<Users list={[
						{ name: 'Tyler', friend: true },
						{ name: 'Ryan', friend: true },
						{ name: 'Michael', friend: false },
						{ name: 'Mikenzi', friend: false },
						{ name: 'Jessica', friend: true },
						{ name: 'Dan', friend: false } ]} 
					/>
			</div>
		)
	}
}

class Avatar extends React.Component {
	render() {
		return (
			<img src={this.props.img} />
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
				<Avatar img={this.props.user.img} />
				<Label name={this.props.user.name} />
				<ScreenName username={this.props.user.username} />
			</div>
		)
	} 
}

class FriendsContainer extends React.Component {
	render() {
		var myName = 'John-Michael';
		var friends = ['Angelique', 'Stephen', 'Bryan'];
		return (
			<div>
				<h3>{myName}'s friends: </h3>
				<ShowList names={friends} />
			</div>
		)
	}	
}

class ShowList extends React.Component {
	render() {
		return (
		<div>
			<ul>
				{this.props.names.map(function(friend){
					return <li> {friend} </li>;
				})}
			</ul>
		</div>
			)
	}
}

class Users extends React.Component {
	render() {
		var friends = this.props.list.filter(function(user) {
			return user.friend===true;
		});
		var nonFriends = this.props.list.filter(function(user) {
			return user.friend!=true;
		});
		return (
			<div>
			<h1>Friends</h1>
			<ul>
			{friends.map(function(user) {
			 return <li key={user.name}>{user.name}</li>;
			})
	}
	</ul>

		<hr />

		<h1> Non Friends </h1>
			<ul>
			{nonFriends.map(function(user) {
			 return <li key={user.name}>{user.name}</li>;
})
}
	</ul>        
		</div>
	)
}
}


ReactDOM.render(
	<App />,
	document.getElementById('app')
);
