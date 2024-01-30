import './App.css';
import Welcome from './menu';
import searchInput from './Search/searchComponent';


const App = () => {
    return (
      <div className = "App">
        <searchInput placeholder = "Enter a city..."/>               
      </div>
    )
}



export default App;
