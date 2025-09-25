// src/App.jsx
import { useAuth } from './components/AuthProvider';
import LoginForm from './components/LoginForm';
import Home from './components/Home'; // Assuming you have this component
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      <Header />
      {currentUser ? <Home /> : <LoginForm />}
      <Footer />
    </div>
  );
}

export default App;