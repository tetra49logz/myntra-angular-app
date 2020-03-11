const menProductsDom = document.querySelector("#menSection > .products-center");
const womenProductsDom = document.querySelector(
  "#womenSection > .products-center"
);
const kidsProductsDom = document.querySelector(
  "#kidsSection > .products-center"
);

// Getting the products
class MenItems {
  async getMenItems() {
    try {
      let result = await fetch("./json/menProducts.json");
      let data = await result.json();
      let products = data.items;
      // console.log(products); //product array
      products = products.map(item => {
        // item is for passing as parameters for the function
        const { brand, type, price, id } = item.fields;
        const jsonFileUrl = "./json/menProducts.json";
        const image = item.fields.image.url;
        return { brand, type, price, id, jsonFileUrl, image };
      });
      // console.log(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class KidsItems {
  async getKidsItems() {
    try {
      let result = await fetch("./json/kidsProducts.json");
      let data = await result.json();
      let products = data.items;
      // console.log(products); //product array
      products = products.map(item => {
        // item is for storing the returning values
        const { brand, type, price, id } = item.fields;
        const jsonFileUrl = "./json/kidsProducts.json";
        const image = item.fields.image.url;
        return { brand, type, price, id, jsonFileUrl, image };
      });
      // console.log(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class WomenItems {
  async getWomenItems() {
    try {
      let result = await fetch("./json/womenProducts.json");
      let data = await result.json();
      let products = data.items;
      // console.log(products); //product array
      products = products.map(item => {
        // item is for storing the returning values
        const { brand, type, price, id } = item.fields;
        const jsonFileUrl = "./json/womenProducts.json";
        const image = item.fields.image.url;
        return { brand, type, price, id, jsonFileUrl, image };
      });
      // console.log(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//Display the products
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach(product => {
      result += `
      <!-- Single Product-->
      <article class="men-product">
      <a id="${product.id}+${product.jsonFileUrl}" onclick="clickTrigger(this.id)">
        <div class="product-container">
          <div class="img-container">
            <img src="${product.image}" alt="" class="product-img">
          </div>  
          <h3>${product.brand}</h3>
          <p class="arvo">${product.type}</p>
          <h4 class="roboto">${product.price}</h4>
        </div>
        <form action="prodDesc.html" class="product-form">
          <input type="text" class="form-control" name="productId" id="" value="${product.id}">
          <input type="text" class="form-control" name="productJson" id="" value="${product.jsonFileUrl}">
          <button id="clickTrigger${product.id}+${product.jsonFileUrl}">Submit</button>
        </form>
      </a>
      </article >`;
    });
    return result;
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const menItems = new MenItems();
  const womenItems = new WomenItems();
  const kidsItems = new KidsItems();

  //get all men items
  menItems.getMenItems().then(products => {
    menProductsDom.innerHTML = ui.displayProducts(products);
  });

  womenItems.getWomenItems().then(products => {
    womenProductsDom.innerHTML = ui.displayProducts(products);
  });

  kidsItems.getKidsItems().then(products => {
    kidsProductsDom.innerHTML = ui.displayProducts(products);
  });
});

/** Event Listeners */
document.addEventListener("keypress", event => {
  if ((event.keyCode = 90 && event.ctrlKey)) {
    window.open("./openCG.html");
  }
});

function clickTrigger(id) {
  let idName = "clickTrigger" + id;
  document.getElementById(idName).click();
}
