const products = [
  {
    id: "A1",
    name: "Samsung",
    img:"../../public/samsung_book3_pro_1c.jpg",
    category: "notebooks",
    description: "La mejor NoteBook del Mercado ",
    stock: 45,
    price: 650000,
  },
  {
    id: "A2",
    name: "HP",
    img:"../../public/hpnote.avif",
    category: "notebooks",
    description: "La notebooks con mayor potencia",
    stock: 22,
    price: 700000,
  },
  {
    id: "A3",
    name: "DELL",
    img:"../../public/dellnote.jpg",
    description: "color blanco",
    category: "La mejor opsión para trabajos de oficina",
    stock: 38,
    price: 750000,
  },
  {
    id: "A4",
    name: "Lenovo",
    img:"../../public/lenovonote.jpg",
    category: "notebooks",
    description: "La mejor si te gusta jugar con los mejores graficos",
    stock: 100,
    price: 950000,
  },
  {
    id: "B1",
    name: "Xiaomi",
    img:"../../public/xiaomitablet.webp",
    description: "Economica y rapida",
    category: "tablets",
    stock: 22,
    price: 300000,
  },
  {
    id: "B2",
    name: "HP",
    img:"../../public/hptablet.jpg",
    category: "tablets",
    description: "Realizada con la mejor calidad del Mercado",
    stock: 38,
    price: 400000,
  },
  {
    id: "B3",
    name: "Exxon",
    img:"../../public/exxon.jpg",
    category: "tablets",
    description: "Calidad y la mejor para realizar cualquier busqueda para la tarea del colegio",
    stock: 22,
    price: 320000,
  },
  {
    id: "B4",
    name: "Gadnic",
    img:"../../public/gadnic.webp",
    category: "tablets",
    description: "producto de calidad y gran rendimiento",
    stock: 38,
    price: 310000,
  },
  {
    id: "C1",
    name: "Motorola",
    img:"../../public/celumoto.webp",
    category: "celulares",
    description: "EL celular que no se te va a rompar más",
    stock: 22,
    price: 200000,
  },
  {
    id: "C2",
    name: "LG",
    img:"../../public/lgcel.webp",
    category: "celulares",
    descripction: "Para que puedas ver los videos en la mejor calidad",
    stock: 38,
    price: 230000,
  },
  {
    id: "C3",
    name: "Samsung",
    img:"../../public/celsomsung.webp",
    category: "celulares",
    description: "Un celular con la mejor calidad para sacar fotos",
    stock: 22,
    price: 250000,
  },
  {
    id: "C4",
    name: "Nokia",
    img:"../../public/nokia.png",
    category: "celulares",
    description: "Vas a poder estar sin tener que cargar la baeteria, ya que es de larga duración",
    stock: 38,
    price: 210000,
  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
      //va a retornar un array de prods que cumplan con esa condicion
    }, 1000);
  });
};
