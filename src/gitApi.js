// import React from 'react'
//
// //import SearchProfile from './searchProfile'
// //import Profile from './profile'
//
// //const API = 'https://api.github.com/users';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.fetchUser = this.fetchUser.bind(this);
//     this.state = {
//       users: [],
//       username: 'nabilcnpe',
//       name:'',
//       avatar:'',
//       location:'',
//       repos:'',
//       followers: '',
//       following:'',
//       homeUrl:'',
//       notFound:''
//     }
//   }
//
//     fetchUser() {
//       fetch(API)
//       .then((res) => res.json() )
//       .then((data1) => {
//         console.log(data1.map(user => user.login));
//         console.log(data1);
//         this.setState({
//           users: data1
//         })
//       })
//       .catch((error) => console.log('Oops! . There Is A Problem') )
//     }
//
//   fetchProfile(username) {
//     let url = `${API}/${username}`;
//     fetch(url)
//       .then((res) => res.json() )
//       .then((data) => {
//         this.setState({
//           id: data.id,
//           username: data.login,
//           name: data.name,
//           avatar: data.avatar_url,
//           location: data.location,
//           repos: data.public_repos,
//           followers: data.followers,
//           following: data.following,
//           homeUrl: data.html_url,
//           notFound: data.message
//         })
//       })
//       .catch((error) => console.log('Oops! . There Is A Problem') )
//   }
//
//   componentDidMount() {
//     this.fetchProfile(this.state.username);
//     this.fetchUser();
//   }
//
//   handleEntityChange() {
//
//   }
//
//   render() {
//     return (
//       <div>
//          <section id="card">
//            <h2 className="subtitle">
//                <strong>Entité : </strong>
//                {/* <span>{this.state.training.currentEntity.city}</span> */}
//                <div className="dropdown">
//                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//                        Changer d'USER
//                    {/* <span className="caret"></span> */}
//                    </button>
//                    <ul className="dropdown-menu">
//                        {this.state.users.map(user =>
//                            <li key={user.id}><a role="button" onClick={this.handleEntityChange.bind(this, user.id)}> {user.login} <small>{user.login}</small></a></li>
//                        )}
//                    </ul>
//                </div>
//            </h2>
//            <SearchProfile fetchProfile={this.fetchProfile.bind(this)}/>
//            <Profile data={this.state} />
//          </section>
//       </div>
//     )
//   }
// }
//
// export default App;
