import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/Card";
import Catalog from "./components/Catalog";
import Basket from "./components/Basket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import './styles/App.css'

function App() {
  /* const [catalog, setCatalog] = React.useState(true); */

  /* const [isBasket, setIsBasket] = React.useState(false); */

  const [product, setProduct] = React.useState('');

  function openCard(item) {
    setProduct(item);
    /* setCatalog(false); */
  }

  /* function openBasket() {
    setProduct('');
    setCatalog(false);
    setIsBasket(true);
  } */

  const [basketProducts, setBasketProducts] = React.useState([]);

  function addBasketProduct(item, num) {
    let cod = item.cod;
    let index = basketProducts.findIndex(e => e.cod === cod);

    if (index === -1) {
      setBasketProducts(prev => {
        console.log('num',num)

        if (num) {
          item.quantity = num
        } else {
          item.quantity = 1
        }

        
        console.log(item)
        return [...prev, item];
      }) 
    } else {
      setBasketProducts(basketProducts.filter(prod => prod.cod !== item.cod));
    }

    

   /*  apdateBasketElement(item.cod, num) */
  }

  const [wasClicked, setWasClicked] = React.useState(0)

  function apdateBasketElement(cod, quantity=1) {
    let index = basketProducts.findIndex(e => e.cod === cod);

    setBasketProducts(prev => {
      prev[index].quantity= quantity
      return prev;
    }) 
    setWasClicked(prev => prev+1)
  }

  console.log(basketProducts)

  const basketSumm = React.useMemo(() => {
    let summ = 0;
    basketProducts.forEach(item => {
      summ += item.price * item.quantity
    })

    return rounded(summ);

  }, [basketProducts, wasClicked]);

  console.log(basketSumm)

function rounded (number){
  return number.toFixed(2);
}

  function clearBasket() {
    setBasketProducts([]);
  }
  
  return (
    <BrowserRouter >
    <div className="App">
      <Header /* handleClick={openBasket} */ number={basketProducts.length} 
        summ={basketSumm} 
      />

      {/* {product && <Card product={product} addBasketProduct={addBasketProduct}  
        apdateBasketElement={apdateBasketElement}
        basketProducts={basketProducts} 
      />} */}

      {/* {catalog && <Catalog handleClick={openCard} addBasketProduct={addBasketProduct}  />} */}

      {/* {isBasket && <Basket products={basketProducts} 
        clearBasket={clearBasket} 
        addBasketProduct={addBasketProduct}
        apdateBasketElement={apdateBasketElement}
        summ={basketSumm} 
      />} */}

          <Routes >
            <Route exact path="/sultan/" element={
              <Catalog handleClick={openCard} addBasketProduct={addBasketProduct}  />} 
            />

            <Route exact path={"/sultan/card" + product.cod} element={
              <Card product={product} addBasketProduct={addBasketProduct}  
                apdateBasketElement={apdateBasketElement}
                basketProducts={basketProducts} 
              />
            } />

            <Route exact path="/sultan/basket" element={
              <Basket products={basketProducts} 
                clearBasket={clearBasket} 
                addBasketProduct={addBasketProduct}
                apdateBasketElement={apdateBasketElement}
                summ={basketSumm} />} 
            />

          
          </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
