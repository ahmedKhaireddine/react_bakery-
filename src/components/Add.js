import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Add extends React.Component{
    //creation du constucteur
    constructor(props){
        super(props);
        //création du state qui contient le cle de name
        this.state ={
          name:"",
          price:0
        }
    }
    render(){
        return(
            <div>
                {/* creation de l'input et utiliser la function onChange 
            pour recuprer ca valeur et l'enregistrer dans le state */}
                <input 
                    type="text" 
                    onChange={(event) => this.setState({ name: event.target.value})}
                />
                {/* executer la function addProductFn on cliquant sur le boutant add */}
                <Slider 
                    min={1} 
                    max={10} 
                    onChange={(value) => this.setState({price : value})}
                />
                <button 
                    onClick={() => this.props.addItemFn(this.state)}>
                    add
                </button>
            </div>
        );
    }
}

export default Add;
//promess
//fetch("https://restcountries.eu/rest/v2/name/france")
//.then((res)=> res.json())  1 promess
//.then((data) => console.log(data[0].capital)) 2 promess