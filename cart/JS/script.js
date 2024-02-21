let product = [
  {
    name: "Black Product",
    heading: "The Best Eye liner",
    image:
      "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "12,000",
  },
  {
    name: "Serum",
    heading: "The Best Your Body",
    image:
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "3000",
  },
  {
    name: "Black Product",
    heading: "The Best Eye liner",
    image:
      "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "12,000",
  },
  {
    name: "Serum",
    heading: "The Best Your Body",
    image:
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "3000",
  },
];

let cart = [];

function showCards() {
  let clutter = "";
  product.forEach(function (e, index) {
    clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
            <img class="h-full w-full object-cover" src="${e.image}" alt="">
        </div>
        <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">
            ${e.name}
          </h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
              <h3 class="font-semibold opacity-20">${e.price}</h4>
            </div>
            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
              <i data-index="${index}" class="add ri-add-line"></i>
            </button>
          </div>
        </div>
      </div>
     `;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(product[details.target.dataset.index]);
        console.log(cart);
      }
    });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    let clutter = "";
    cart.forEach(function (product, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                <img class="h-full w-full object-cover" src="${product.image}" alt="">
            </div>
            <div>
                <h3 class="text-semibold">${product.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
            </div>
        </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });
}

showCart();
addToCart();
showCards();
