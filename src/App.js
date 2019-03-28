import React, { Component } from 'react';
import Add from "./components/Add";
import Button from './components/Button';
import './App.css';

class App extends Component {
  //Creation du constructor 
  constructor(props){
    super(props);
    //creation du state qui va contenir un tableau de produits en format d'objet
    this.state ={
      activeTab: "add",
      items:[]
    }
    //declaration du methode pour la performence de l'appli
    this.addItem = this.addItem.bind(this);
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
  }

  onClickTabAdd(){
    this.setState({
      activeTab: "add"
    });
  }
  onClickTabList(){
    this.setState({
      activeTab: "list"
    });
  }
  onClickTabPay(){
    this.setState({
      activeTab: "pay"
    });
  }

  //methode qui ajoute le produit au tableau state.products
  addItem(item){
    //variable qui contient une copie de state.products
    let newitem = this.state.items;
    //ajouter un produit 
    newitem.push(item);
    //changer le state.products par newProduct
    this.setState({items : newitem});
    console.log('new product : ', this.state.items);
  }

  render() {
    // 1 etape la facon de afficher un state format tableau on commence
    //par creer le structure de l'affichage
    // const items = this.state.items.map(item =>
    //   <div className="item">
    //       <h3>{item.name} coute {item.price} €</h3>
    //   </div>
    // )
    return (
      <div className="App">
        {/* afficher le tableau au formt json */}
        <p>{JSON.stringify(this.state.items)}</p>
        <Button onChangeTab={this.onClickTabAdd}>Add</Button>
        <Button onChangeTab={this.onClickTabList}>List</Button>
        <Button onChangeTab={this.onClickTabPay}>pay</Button>
        {console.log('@ active table : ', this.state.activeTab)}
        {/* appel a la conponent aui contient l'input et on envoi
        le function addProduct comme parametre */}
          {this.state.activeTab === "add" ? <Add 
            addItemFn={this.addItem}
          /> : null }
          
        {/* {this.state.items.map((item)=>{
          return(
            <li>
              <h3>{item.name} coute {item.price} €</h3>
            </li>
          );
        })} */}
        {/* 2 etape on appele le stucture ici  */}
          {/* {items} */}
      </div>
    );
  }
}

export default App;

