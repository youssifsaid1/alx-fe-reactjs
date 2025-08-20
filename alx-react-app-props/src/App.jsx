import './App.css';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  // البيانات اللي هنبعتها
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // نوفر البيانات للـ Context
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
