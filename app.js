let elMostrarBtn = document.getElementById("mostrarBtn");

const isOk = true;
const productos = [
  {
    id: 1,
    title: "Agua con gas 1.5L",
    price: 50,
    stock: 90,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 2,
    title: "Vino Santiago",
    price: 45,
    stock: 100,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 3,
    title: "Manzana",
    price: 10,
    stock: 60,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 4,
    title: "Pera",
    price: 15,
    stock: 10,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 5,
    title: "Naranja",
    price: 20,
    stock: 60,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 6,
    title: "Banana",
    price: 25,
    stock: 10,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 7,
    title: "Cebolla",
    price: 5,
    stock: 90,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
  {
    id: 8,
    title: "Tomate",
    price: 30,
    stock: 70,
    image:
      "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/zero-sugar/zero-sugar-bottle.png",
  },
];

const customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(task);
      } else {
        reject("Error");
      }
    }, time);
  });
};
/*const mostrarProductos = () => {
  let lista = document.createElement("ul");
  for (let i = 0; i < productos.length; i++) {
    let p = document.createElement("li");
    p.innerHTML = productos[i].title;
    lista.append(p);
  }
  document.getElementById("root").append(lista);
};*/

const mostrarProductos = () => {
  customFetch(2000, productos).then((data) => {
    let elRoot = document.getElementById("root");
    for (let i = 0; i < data.length; i++) {
      let p = document.createElement("div");
      p.innerHTML = data[i].title;
      elRoot.append(p);
    }
  });
};

elMostrarBtn.addEventListener("click", mostrarProductos);
