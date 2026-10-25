const image = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=85`;

const productCategories = [
  {
    title: "Fashion",
    products: [
      {
        title: "Everyday Cotton T-Shirt",
        image: image("1521572163474-6864f9cf17ab"),
        alt: "Folded white cotton t-shirt",
      },
      {
        title: "Printed Summer Dress",
        image: image("1496747611176-843222e1e57c"),
        alt: "Summer clothing in a fashion display",
      },
      {
        title: "Casual Denim Jacket",
        image: image("1543076447-215ad9ba6923"),
        alt: "Casual apparel displayed on a clothing rack",
      },
    ],
  },
  {
    title: "Accessories",
    products: [
      {
        title: "Classic Shoulder Bag",
        image: image("1548036328-c9fa89d128fa"),
        alt: "A classic shoulder bag",
      },
      {
        title: "Everyday Wristwatch",
        image: image("1523275335684-37898b6baf30"),
        alt: "Minimal wristwatch",
      },
      {
        title: "Leather Wallet",
        image: image("1627123424574-724758594e93"),
        alt: "Leather wallet",
      },
    ],
  },
  {
    title: "Gadgets",
    products: [
      {
        title: "Smartphone",
        image: image("1511707171634-5f897ff02aa9"),
        alt: "Smartphone viewed from the back",
      },
      {
        title: "Notebook Computer",
        image: image("1496181133206-80ce9b88a853"),
        alt: "Notebook computer on a desk",
      },
      {
        title: "Wireless Headphones",
        image: image("1505740420928-5e560c06d30e"),
        alt: "Over-ear wireless headphones",
      },
    ],
  },
  {
    title: "Sports Gear",
    products: [
      {
        title: "Training Shoes",
        image: image("1542291026-7eec264c27ff"),
        alt: "Red athletic training shoe",
      },
      {
        title: "Basketball",
        image: image("1519861531473-9200262188bf"),
        alt: "Basketball on a court",
      },
      {
        title: "Fitness Equipment",
        image: image("1534438327276-14e5300c3a48"),
        alt: "Equipment in a fitness gym",
      },
    ],
  },
  {
    title: "Snacks",
    products: [
      {
        title: "Mixed Nuts & Seeds",
        image: image("1505576633757-0ac1084af824"),
        alt: "A selection of fresh ingredients and snacks",
      },
      {
        title: "Chocolate Snack Bites",
        image: image("1606313564200-e75d5e30476c"),
        alt: "Chocolate pieces",
      },
      {
        title: "Dried Fruit Selection",
        image: image("1559181567-c3190ca9959b"),
        alt: "A selection of dried fruit",
      },
    ],
  },
].map((category) => ({
  ...category,
  image: category.products[0].image,
  alt: category.products[0].alt,
}));

export default productCategories;
