export const paginate = (menuItems) => {
  const itemsPerPage = 6;
  const pages = Math.ceil(menuItems.length / itemsPerPage);
  const newMenuItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return menuItems.slice(start, start + itemsPerPage);
  });
  return newMenuItems;
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getPrice = (initialPrice, size, toppings) => {
  var oldPrice = +initialPrice;
  var newPrice = "";
  if (size === "Small") newPrice = oldPrice;
  if (size === "Medium") newPrice = oldPrice + 300;
  if (size === "Large") newPrice = oldPrice + 500;
  if (toppings.length > 0) newPrice += 100 * toppings.length;
  return newPrice;
};
