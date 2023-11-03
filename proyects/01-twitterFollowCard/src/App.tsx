import './styles/App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

function App() {

  return (
    <main>
      <TwitterFollowCard isFollowing={true} userName='daninavagar' name='Daniel Navarro García'/>
      <TwitterFollowCard isFollowing={true} userName='nacho19' name='Ignacio García Núñez'/>
      <TwitterFollowCard isFollowing={false} userName='osvena' name='Óscar Vela Navarro'/>
    </main>
  )
}

export default App
