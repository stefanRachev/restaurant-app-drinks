const handleOrder = (drinkName, price) => {
    const orders = JSON.parse(sessionStorage.getItem("orders")) || [];
    const existingOrderIndex = orders.findIndex(
      (order) => order.name === drinkName
    );
  
    if (existingOrderIndex !== -1) {
      orders[existingOrderIndex].quantity += 1;
      orders[existingOrderIndex].totalPrice += orders[existingOrderIndex].price;
    } else {
      const order = {
        name: drinkName,
        quantity: 1,
        price: Number(price),
        totalPrice: Number(price),
      };
      orders.push(order);
    }
  
    const totalOrderPrice = orders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
  
    sessionStorage.setItem("orders", JSON.stringify(orders));
    alert(
      `Поръчахте напитка "${drinkName}" цена ${price} лв. Общата сума на поръчката е ${totalOrderPrice.toFixed(
        2
      )} лв.`
    );
  };
  
  export default handleOrder