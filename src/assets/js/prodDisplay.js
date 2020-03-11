let url_String = window.location.href;
let url_Obj = new URL(url_String);
let url_QueryString = url_Obj.search;
let url_Params = new URLSearchParams(url_QueryString);
let id = url_Params.get("productId");
let jsonFileUrl = url_Params.get("productJson");
console.log(id);
console.log(jsonFileUrl);

class ProdDesc {
  async getItemDesc() {
    let result = await fetch(jsonFileUrl);
    let data = await result.json();
    let productDesc = data.items;
    let resultItem;
    productDesc.forEach(item => {
      if (item.fields.id == id) {
        const { brand, type, price, id } = item.fields;
        const image = item.fields.image.url;
        resultItem = { brand, type, price, id, image };
      }
    });
    // console.log(resultItem);
    return resultItem;
  }
}

class UI {
  displayProdDesc(displayObj) {
    let result = `<img src="${displayObj.image}" alt="" width="150px">
                  <br>
                  <h5>Brand : ${displayObj.brand} <br>
                      Type : ${displayObj.type} <br>          
                      Price : ${displayObj.price} <br> </h5>`;
    return result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const prodDesc = new ProdDesc();
  const ui = new UI();

  prodDesc.getItemDesc().then(resultItem => {
    document.getElementById("itemBody").innerHTML = ui.displayProdDesc(
      resultItem
    );
  });
});
