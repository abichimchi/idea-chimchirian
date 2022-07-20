
import NavBar from './components/navBar/navBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';


function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
