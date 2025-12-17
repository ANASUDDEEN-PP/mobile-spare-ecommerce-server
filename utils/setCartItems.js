const cartModel = require("../Models/addToChart");

const setCartItems = async (cart = [], userId) => {
  try {
    if (!Array.isArray(cart) || !userId) return;

    const items = cart.map(item => ({
      UserId: userId,
      Date: item.date,
      Item: item.itemId,
      Qty: item.quantity,
    }));

    await cartModel.insertMany(items);
  } catch (error) {
    console.error("Error while setting cart items:", error);
    throw error;
  }
};

module.exports = setCartItems;
