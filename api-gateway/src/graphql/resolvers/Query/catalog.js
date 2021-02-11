const catalog = {
  recipes: [
    {
      id: 'recipe-01',
      title: 'Mashed potatoes',
      createdAt: new Date(),
    },
    {
      id: 'recipe-02',
      title: 'Olivier salad',
      createdAt: new Date(),
    },
    {
      id: 'recipe-03',
      title: 'Garash cake',
      createdAt: new Date(),
    }
  ],
  count: 3,
}; 

const catalogResolver = async () => {
  console.log(catalog);
  return catalog;
};

export default catalogResolver;
