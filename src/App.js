import PatternLibrary from "./PatternLibrary"
import './App.scss'

const App = () => {
  return (
    <div className='App container'>
      <div className='App_TitleWrap'>
        <h1 className='App_Title'>
          React Boilerplate
        </h1>
        <p className='App_Author'>
          by Andrew Pungprakearti
        </p>
      </div>
      <PatternLibrary />
      <footer>
        <a className='App_Github' href='https://github.com/pungprakearti/boilerplate-react' target='_blank' rel='noreferrer'>
          Check out the code
        </a>
      </footer>
    </div>
  )
}

export default App
