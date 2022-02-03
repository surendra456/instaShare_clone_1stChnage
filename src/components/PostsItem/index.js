import {BsHeart} from 'react-icons/bs'
import {BiShareAlt} from 'react-icons/bi'
import {FaRegComment} from 'react-icons/fa'

import {Link} from 'react-router-dom'

import './index.css'

const PostsItem = props => {
  const {item} = props
  const {
    userId,
    userName,
    profilePic,
    postDetails,
    likesCount,
    comments,
    createdAt,
  } = item

  return (
    <li className="post-item">
      <div className="pic-name">
        <div className="image-circle">
          <img
            src={profilePic}
            alt="post author profile"
            className="profile-pic-p"
          />
        </div>
        <Link to={`/users/${userId}`} className="link">
          <p className="username-p">{userName}</p>
        </Link>
      </div>
      <img src={postDetails.imageUrl} alt="post" className="post-image-h" />
      <div className="components-container">
        <div className="button-container">
          <button className="button-reacts" testid="likeIcon" type="button">
            <BsHeart className="react-image" />
          </button>
          <button className="button-reacts" testid="likeIcon" type="button">
            <FaRegComment className="react-image" />
          </button>
          <button className="button-reacts" testid="likeIcon" type="button">
            <BiShareAlt className="react-image" />
          </button>
        </div>
        <p className="likes">{likesCount} likes</p>
        <p className="caption">{postDetails.caption}</p>
        <ul className="comment-container">
          {comments.map(each => (
            <li className="comment" key={each.userId}>
              <p className="com">
                <span className="comment-name">{each.userName}</span>
                {each.comment}
              </p>
            </li>
          ))}
        </ul>
        <p className="time">{createdAt}</p>
      </div>
    </li>
  )
}

export default PostsItem
