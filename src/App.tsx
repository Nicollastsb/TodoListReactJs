import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <div>
      <Header />
      <div>
        <main>
          <ToDoList/>
        </main>
      </div>

    </div>
  )
}

export default App
