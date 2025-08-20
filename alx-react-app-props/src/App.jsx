import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ✅ استدعاء الكومبوننتس
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'
import Counter from './components/Counter'

// ✅ استدعاء الـ Context
import ProfilePage from './ProfilePage'
import UserContext from './UserContext'

function App() {
  const [count, setCount] = useState(0)

  // ✅ بيانات المستخدم اللي هتتبعت عن طريق Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }

  return (
    <div className="App">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Content */}
      <MainContent />

      {/* ✅ User Profile (props عادي) */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      {/* ✅ Counter */}
      <Counter />

      {/* ✅ Welcome Message */}
      <WelcomeMessage />

      {/* ✅ مثال على Vite */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* ✅ تجربة الـ Context: هنغلف ProfilePage */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      {/* ✅ Footer */}
      <Footer />
    </div>
  )
}

export default App
