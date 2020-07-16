import React from "react";
import {Link} from "react-router-dom";

let opacity = 1; // gradually decrease colour of span award
const inlineLinkStyle = {
  "display": "inline-flex",
  "justifyContent": "center",
  "alignContent": "center",
  "lineHeight": "1.5",
  "marginBottom": "20px",
  "height": "6rem",
}
// loop through users and create table data
const userTableData = (listOfUsers) => {
  return listOfUsers.map((eachUser, i) => {
    return (
      <div className="Lb_details" key={i}>
        <div className="Lb_rank">
          <p className="Lb_rank__userank">
            {
              (i < 5) ? <span className="trophy"><i className="fas fa-trophy"></i></span> :
              (i === 6 || i < 20) ? <span className="medal"><i className="fas fa-star"></i></span> :
                  <span className="award" style={{ "color":`rgb(54, 6, 95,${opacity !== 0 ? opacity-=.005 : 0})`}}>
                    <i className="fas fa-award"></i>
                  </span>
            }
            <span className='Lb_rank__position'>{eachUser.position}</span>
          </p>
        </div>
        <div className="Lb_user">
          <p className="Lb_user__username">{eachUser.username}</p>
        </div>
        <div className="Lb_points">
          <p className="Lb_points__userpoints">{eachUser.score}</p>
        </div>
      </div>
    );
  })
}

const Leaderboard = ({allUsers, user, refresh}) => {
  
  const getUserPosition = (listUsers, currUser) => {
    const i = listUsers.findIndex(user => user.id === currUser.id);
    //! new user is not on leaderboard so will result in undefined - will refresh for new users
    if (listUsers[i] === undefined) {
      return (<span style={{ color: "red" }}>Click refresh to view yourself on leaderboard</span>)
    } else if (listUsers[i].id === currUser.id) {
      return listUsers[i].position;
    }
  }

  return (
      <div className="Lb">
        <h1 className="title fs--1">Leaderboard</h1>
        <p className="user__info fs--3">
          Your rank is <span className="user__rank--score">{getUserPosition(allUsers,user)}</span> on the leaderboard
				</p>
        <Link to='/home'>
          <span className="btn btn__ghost user__btn" style={inlineLinkStyle}>Go back</span>
        </Link>
        <button className="btn btn__ghost user__btn" onClick={() => refresh()}>
          Refresh leaderboard
              <span><i className="fas fa-sync-alt"></i></span>
        </button>
        <div className="Lb_headers">
          <div className="Lb_headers__rank"><p>RANK</p></div>
          <div className="Lb_headers__user"><p>USER</p></div>
          <div className="Lb_headers__points"><p>POINTS</p></div>
        </div>
        <div className="Lb_data">
          {userTableData(allUsers)}
        </div>
        
      </div>
  );
}

export default Leaderboard;