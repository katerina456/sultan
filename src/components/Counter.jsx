import React from "react";

const Counter = function(props) {
  const [quantity, setQuantity] = React.useState(1)

  function increment() {
    let num = quantity + 1
    setQuantity(num)
    props.apdateBasketElement(props.cod, num)
  }

  function decrement() {
    let num = quantity -1 < 1 ? 1 : quantity -1;
    setQuantity(num)  
    props.apdateBasketElement(props.cod, num)
  }

  return (
    <div className="card-info-item-counter">
      <div className="item-counter" onClick={decrement}>-</div>
      <p>{quantity}</p>
      <div className="item-counter" onClick={increment}>+</div>
    </div>   
  )
}

export default Counter;