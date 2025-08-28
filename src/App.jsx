import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Rowina Tamer Hemida" age="25" bio="Frontend Developer & Engineer" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
