import Header from '../Header'
import Stories from '../Stories'
import PostsList from '../PostsList'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-color">
      <Stories />
      <PostsList />
    </div>
  </>
)

export default Home
