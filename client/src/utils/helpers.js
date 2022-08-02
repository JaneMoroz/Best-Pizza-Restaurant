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
