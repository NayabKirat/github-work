
import React, { Component } from "react";

const Api_Key = "f477ff22a97cc7bbd1643b5fd83c8841";

class Slider extends React.Component{
    state={
        data:{}
    }
    // constructor(){
    //     this.getWeather=this.getWeather.bind(this)
    // }
    
    getWeather = (e) => {
        e.preventDefault()
        const city=e.target.elements.name.city.value;
        const country=e.target.elements.name.country.value;
      fetch(`http://api.openweathermap.org/data/2.5/find?q=London&appid=${Api_Key}`)
      .then(res => res.json())
      .then(res => this.setState({
            data:res    
        }))
        
    }

 

    render(){
        if(this.state.data.list){
            var temphtml=this.state.data.list.map((v,i)=>{
                return(
                    <div key={i}>
                        <h1>{v.name}</h1>
                        <p>Temprature:{v.main.temp} Pressure: {v.main.pressure} Humidity:{v.main.humidity}</p>
                        <p>Weather : {v.weather.main} {v.weather.description}</p>
                    </div>
                )
                
            })
        }
        console.log(this.state.data);
return (
    <div className="h1">
    <form onSubmit={this.getWeather}>
        
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
    
    </form>
    <div>
        {temphtml}
    </div>
    </div>
)
    }
}
export default Slider;