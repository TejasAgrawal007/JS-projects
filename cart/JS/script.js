let products = [
  {
    name: "Wireless-headphones",
    heading: "headphones for your Style",
    price: "5600",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lumin",
    heading: "Charcole Clinser",
    price: "3400",
    image:
      "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Curology",
    heading: "The Rich Moisurizer",
    price: "3400",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let popular = [
  {
    name: "White Chair",
    heading: "A comfort",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "13,000",
  },
  {
    name: "Relaxing Chair",
    heading: " Chair ",
    image:
      "https://images.unsplash.com/photo-1600093328589-39ed150b382b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "24,000",
  },
];

let cart = [];

// Show Popular Products
function showProducts() {
  let clutter = "";
  products.forEach(function (e, index) {
    clutter += `   <div class="product w-fit rounded-xl p-2 bg-white">
                      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                      <img class="h-full w-full object-cover" src="${e.image}" alt="">
                      </div>
                      <div class="data w-full px-2 py-5">
                        <h1 class="font-semibold text-xl leading-none tracking-tight">
                        ${e.name}
                        </h1>
                        <div class="flex justify-between w-full items-center mt-2">
                          <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${e.heading}</h3>
                            <h4 class="font-semibold mt-2">₹ ${e.price}</h4>
                          </div>
                          <button data-index="${index}"
                            class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"
                          >
                            <i data-index="${index} class="add ri-add-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

let clutter = "";
function showPopularProducts() {
  popular.forEach(function (e) {
    clutter += `<div
    class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div
      class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        src="${e.image}"
        alt=""
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${e.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
        ${e.heading}
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">$${e.price}</h4>
    </div>
  </div>`;
  });

  document.querySelector(".populars").innerHTML = clutter;
}

// Add To Cart
function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
      }
    });
}

addToCart();
showProducts();
showPopularProducts();
