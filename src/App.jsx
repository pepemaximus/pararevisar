import './App.css';
import { Helmet } from 'react-helmet';
import MainRouter from './routes/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MainRouter/>
      <Helmet>
        <title>Tech Store | Home</title>
      </Helmet>
        <div>
        </div>
    </div>
  );
}

export default App;
