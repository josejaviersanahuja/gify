import './App.css';
import {Route, Link} from "wouter"
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import staticContext from './context/staticContext';
import {GifContextProvider} from './context/GifsContext';


function App() {
 //const [keyword, setKeyword] = useState("michael jordan")

  return (
    <staticContext.Provider value={{}}>
    <div className="App-header">Giffy
      <header className="App-header">
      
        <Link to="/">Home</Link>
        <GifContextProvider>    
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail}/>
        </GifContextProvider>
      </header>
    </div>
    </staticContext.Provider>
  );
}

export default App;
