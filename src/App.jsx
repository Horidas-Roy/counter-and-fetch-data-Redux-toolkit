
import './App.css'
import CounterView from './features/counter/CounterView'
import PostView from './features/posts/PostView'

function App() {

  return (
    <>
     <h2>Counter app for Redux-Toolkit</h2>
     <CounterView/>
     <hr className='my-5'/>
     <PostView/>
    </>
  )
}

export default App
