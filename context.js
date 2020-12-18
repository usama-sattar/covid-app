import React, { Component } from "react";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    save: 0,
    price: 0,
    discount: 0,
    history: [{}],
  };
  setPrice = (e) => {
    const regex = /^[0-9\b]+$/;
    let bool = regex.test(e);
    if (bool) {
      this.setState({
        price: e,
      });
    }
  };
  setDiscount = (e) => {
    const regex = /^[0-9\b]+$/;
    let bool = regex.test(e);
    if (bool) {
      this.setState({
        discount: e,
      });
    }
  };
  printPrice = () => {
    let saveTotal = this.state.price * (this.state.discount / 100);
    let total =
      this.state.price - this.state.price * (this.state.discount / 100);
    return this.setState({
      price: total,
      save: saveTotal,
    });
  };
  saveData = (total) => {
    let record = {
      total: this.state.price,
      disc: this.state.discount,
      discAmount: total,
    };
    if (this.state.history.length < 1) {
      this.setState({
        history: [record],
      });
    } else {
      this.setState({
        history: [...this.state.history, record],
      });
    }
  };
  removeItem = ()=>{
    
  }

  render() {
    return (
      <ProductContext.Provider value={{
          saveAmount : this.state.save,
          totalPrice : this.state.price,
          discount : this.state.discount,
          history : this.state.history,
          setPrice: this.setPrice,
          setDiscount: this.setDiscount,
          printPrice: this.printPrice,
          saveData: this.saveData,
          removeCell:this.removeItem

      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
