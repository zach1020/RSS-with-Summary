import './App.css'
import FeedView from './FeedView'
import ArticleView from './ArticleView'
import TextView from './TextView'
import SummaryView from './SummaryView'

function App() {

  return (
    <>
      <div>
        <div class="row">
          <div class="column">
            <FeedView />
          </div>

          <div class="column">
            <ArticleView />
          </div>

          <div class="column">
            <TextView />
          </div>

          <div class="column">
            <SummaryView />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
