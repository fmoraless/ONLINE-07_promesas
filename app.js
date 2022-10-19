let elMostrarBtn = document.getElementById("mostrar-btn");

const isOk = true;
const productos = [
  {
    id: 1,
    name: "Plátano",
    price: 500,
    stock: 90,
    image:
      "https://jumbo.vtexassets.com/arquivos/ids/424556/Platano-granel.jpg?v=637521224867200000",
  },
  {
    id: 2,
    name: "Melon",
    price: 450,
    stock: 100,
    image: "https://cdn.alsuper.com/products/20.png",
  },
  {
    id: 3,
    name: "Manzana roja",
    price: 900,
    stock: 60,
    image:
      "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/manzana-pink-lady.png?fit=600%2C600&ssl=1",
  },
  {
    id: 4,
    name: "Pera",
    price: 750,
    stock: 10,
    image:
      "https://jumbo.vtexassets.com/arquivos/ids/424557/Pera-Packam-s-granel.jpg?v=637521224872970000",
  },
  {
    id: 5,
    name: "Naranja",
    price: 2000,
    stock: 60,
    image:
      "https://jumbo.vtexassets.com/arquivos/ids/416123/Naranja-granel.jpg?v=637479989555470000",
  },
  {
    id: 6,
    name: "Piña",
    price: 2500,
    stock: 10,
    image:
      "https://jumbo.vtexassets.com/arquivos/ids/415957/Pi%C3%B1a-un.jpg?v=637479988438830000",
  },
  {
    id: 7,
    name: "Chirimolla",
    price: 5000,
    stock: 90,
    image:
      "https://i0.wp.com/procamp.cl/wp-content/uploads/2020/07/chirimoya.png?fit=600%2C600&ssl=1",
  },
  {
    id: 8,
    name: "Frutilla",
    price: 3000,
    stock: 70,
    image:
      "https://jumbo.vtexassets.com/arquivos/ids/320032/Frutilla-500-gr-1-387299.jpg?v=637111641721400000",
  },
  {
    id: 9,
    name: "Durazno",
    price: 1000,
    stock: 70,
    image: "https://procamp.cl/wp-content/uploads/2020/07/durazno-platano.png",
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

/* Guia html
*       <div class="product" data-name="p-1">
            <img src="https://picsum.photos/200/300" alt="product">
            <h3>Producto 1</h3>
            <div class="price">100</div>
        </div>
*
* */

const mostrarProductos = () => {
  customFetch(2000, productos).then((data) => {
    console.log(data, "data");
    let productsContainer = document.getElementById("products-container");
    console.log(productsContainer, "productsContainer");

    for (let i = 0; i < data.length; i++) {
      let divProduct = document.createElement("div");
      divProduct.classList.add("product");
      divProduct.setAttribute("data-name", `p-${data[i].id}`);
      productsContainer.append(divProduct);

      let img = document.createElement("img");
      img.classList.add("img");
      console.log(img.src); /*  <div>Agua con gas 1.5L</div> */
      img.src = data[i].image;
      divProduct.append(img);

      let h3 = document.createElement("h3");
      h3.innerHTML = data[i].name;
      divProduct.append(h3);

      let divPrice = document.createElement("div");
      divPrice.classList.add("price");
      divPrice.innerHTML = Number(data[i].price).toLocaleString("es-CL");
      divPrice.classList.add("currSign");
      divProduct.append(divPrice);
    }
  });
};

elMostrarBtn.addEventListener("click", mostrarProductos);
