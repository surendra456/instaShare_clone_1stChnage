import {BsGrid3X3} from 'react-icons/bs'

import UserStories from '../UserStories'
import UserPostsList from '../UserPostsList'

import './index.css'

const ProfileCard = props => {
  const {data, my} = props

  const {profile} = data
  const {
    userName,
    profilePic,
    followersCount,
    followingCount,
    userBio,
    posts,
    stories,
  } = profile

  return (
    <>
      <div className="Profile-card">
        <div className="image-user-details">
          <img src={profilePic} alt={`${my} profile`} className="Profile-pic" />
          <div className="user-detail-container">
            <h1 className="profile-head">{userName}</h1>
            <div className="count">
              <p className="count-follower">
                <span className="highlight">{posts.length}</span>Posts
              </p>
              <p className="count-follower">
                <span className="highlight">{followersCount} </span> Followers
              </p>
              <p className="count-follower">
                <span className="highlight">{followingCount} </span> Following
              </p>
            </div>
            <p className="bio-name">{userName}</p>
            <p className="bio">{userBio}</p>
          </div>
        </div>
        <ul className="user-stories">
          {stories.map(each => (
            <UserStories key={each.id} item={each} my={my} />
          ))}
        </ul>
        <hr className="line" />
        <div className="posts-container">
          <div className="head-container">
            <BsGrid3X3 className="post-logo" />
            <h1 className="post-head">Posts</h1>
          </div>
          <UserPostsList posts={posts} my={my} />
        </div>
      </div>
    </>
  )
}

export default ProfileCard