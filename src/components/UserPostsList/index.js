import {AiFillCamera} from 'react-icons/ai'
import './index.css'

const UserPostsList = props => {
  const {posts, my} = props

  const postsView = () => (
    <ul className="user-posts-container">
      {posts.map(each => (
        <li className="post-image-container" key={each.id}>
          <img src={each.image} alt={`${my} post`} className="post-image" />
        </li>
      ))}
    </ul>
  )

  const noPostView = () => (
    <div className="no-post-container">
      <AiFillCamera className="no-post-image" />
      <p className="no-post-head">No Posts Yet</p>
    </div>
  )

  const correctView = () => {
    if (posts.length === 0) {
      return noPostView()
    }
    return postsView()
  }

  return correctView()
}

export default UserPostsList
