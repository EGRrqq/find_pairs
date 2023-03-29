import Card from "./components/Card"
import './App.css'

const App = () => {
	const items = [
	  '1', '2', '3',
	  '4', '5', '6',
	  '7', '8', '9',
	]
  
	return (
	  <div className="App"> 
		<div className="gameboard">
			{items.map((item, id) => <Card key={id} item={item} />)}
		</div>
	  </div>
	)
  }
  
  export default App
  