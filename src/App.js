import React from "react";
import Card from './Card';
import Carddata from './Carddata';

const App = () =>{
  return(
  <>
    <h1 className="text-center">Netflix App</h1>
    <div className='row justify-content-around'>
    <Card
    featured={Carddata[0].featured} 
    title={Carddata[0].title}
    text={Carddata[0].text}  
    link={Carddata[0].link}
    />
    <Card 
    featured={Carddata[1].featured} 
    title={Carddata[1].title}
    text={Carddata[1].text}  
    />
    <Card
    featured={Carddata[2].featured} 
    title={Carddata[2].title}
    text={Carddata[2].text}  
    />
    </div>
    <div className='row justify-content-around my-3'>
    <Card 
    featured={Carddata[2].featured} 
    title={Carddata[3].title}
    text={Carddata[3].text}  
    />
    <Card 
    featured={Carddata[2].featured} 
    title={Carddata[4].title}
    text={Carddata[4].text}  
    />
    <Card 
    featured={Carddata[2].featured} 
    title={Carddata[5].title}
    text={Carddata[5].text}  
    />
    </div>
  </>
  )
}

export default App;