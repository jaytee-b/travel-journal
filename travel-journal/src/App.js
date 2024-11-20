
import './App.css';
import Header from "./components/Header"
import Card from './components/Card';
import data from './data';


function App() {
  const cardElements = data.map((item) =>{
    return (
      <Card 
      key={item.id}
      img ={item.imageUrl} 
      location={item.location}
      heading={item.title}
      googleMapsUrl={item.googleMapsUrl}
      start={item.startDate}
      end={item.endDate}
      description={item.description} />
    )
  })
  return (
    <div className="App">
      <Header  />
      {cardElements}
      
    </div>
  );
}

export default App;
