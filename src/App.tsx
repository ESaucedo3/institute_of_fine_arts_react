import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <div className="App" id="app">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
