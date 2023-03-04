import CardList from "./CardList/CardList";
import userData from '../utils/userDB.json'

const App = () => {
  return (
    <div>
      <CardList userData={userData}/>
    </div>
)
}

export default App