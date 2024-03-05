
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Update from './App/Components/Update'
import CompetionDetails from './App/Components/CompetionDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import Competitions from './App/Components/Competitions'
import AddCompetition from './App/Components/AddCompetition'
import NotFound from './App/Components/NotFound'


function App() {

  return (
    
     <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}> </Route>
        <Route path="/competition" element={<Competitions/>}> </Route>
       <Route path="/add" element={<AddCompetition/>}> </Route>
        <Route path="/update/:id" element={<Update/>}> </Route>
        <Route path="/read/:id" element={<CompetionDetails/>}> </Route>
        <Route path="*" element={<NotFound/>}> </Route>
      </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App
