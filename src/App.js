import './App.css';
import ContactComponent from './components/container/contact';

function App() {
  return (
    <div className="App">
      <ContactComponent firstName="Miguel"
                        lastName="Carreras"
                        email="carreras@gmail.com"
                        conected={false}
      />
    </div>
  );
}

export default App;
