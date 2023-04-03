import Card from "./components/Card/Card"
import Chat from "./components/Chat/Chat"
import Rules from "./components/Rules/Rules"
import './App.css'

const App = () => {
	// const items = [
	//   '1', '2', '3',
	//   '4', '5', '6',
	//   '7', '8', '9',
	// ]

	const items = Array.from({length: 64}, () => Math.floor(Math.random() * 64)).sort();
	
	return (
		<div className="App"> 
			<div className="left-side">
				<Rules />
				<Chat />
			</div>
			<div className="gameboard">
				{items.map((item, id) => <Card key={id} item={item} />)}
			</div>
		</div>
	)
  }
  
  export default App
  