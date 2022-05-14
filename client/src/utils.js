export const paginate = (menuItems) => {
  const itemsPerPage = 6;
  const pages = Math.ceil(menuItems.length / itemsPerPage);
  const newMenuItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return menuItems.slice(start, start + itemsPerPage);
  });
  return newMenuItems;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => {
    if (item.type) {
      return item[type];
    } else {
      return "all";
    }
  });
  return [...new Set([...unique, "all"])];
};
