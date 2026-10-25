const image = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=85`;

const productCategories = [
  {
    title: "A4 Paper",
    description: "Paper products and everyday office essentials.",
    products: [
      { title: "A4 Copy Paper", image: image("1455390582262-044cdead277a"), alt: "Paper and writing supplies on a desk" },
      { title: "Premium Printer Paper", image: image("1517842645767-c639042777db"), alt: "Open notebook and paper stationery" },
      { title: "Office Paper Supplies", image: image("1453738773917-9c3eff1db985"), alt: "Writing materials arranged on a desk" },
    ],
  },
  {
    title: "Clothes",
    description: "Everyday clothing and apparel for a range of styles.",
    products: [
      { title: "Cotton T-Shirt", image: image("1521572163474-6864f9cf17ab"), alt: "Folded white cotton t-shirt" },
      { title: "Seasonal Dress", image: image("1496747611176-843222e1e57c"), alt: "Seasonal fashion clothing" },
      { title: "Casual Apparel", image: image("1543076447-215ad9ba6923"), alt: "Casual clothes displayed on a rack" },
    ],
  },
  {
    title: "Jewelry",
    description: "Jewelry pieces and accessories for different occasions.",
    products: [
      { title: "Everyday Earrings", image: image("1611652022419-a9419f74343d"), alt: "Decorative jewelry and earrings" },
      { title: "Statement Jewelry", image: image("1617038220319-276d3cfab638"), alt: "Statement jewelry pieces" },
      { title: "Classic Accessories", image: image("1605100804763-247f67b3557e"), alt: "Jewelry accessories arranged together" },
    ],
  },
  {
    title: "Food",
    description: "Food products and ingredients for sourcing enquiries.",
    products: [
      { title: "Bakery Products", image: image("1509440159596-0249088772ff"), alt: "Fresh bread and bakery products" },
      { title: "Packaged Food Options", image: image("1546069901-ba9599a7e63c"), alt: "A colourful prepared food bowl" },
      { title: "Food Ingredients", image: image("1547592180-85f173990554"), alt: "A meal prepared with fresh ingredients" },
    ],
  },
  {
    title: "Machinery",
    description: "Industrial equipment and machinery for business needs.",
    products: [
      { title: "Industrial Equipment", image: image("1581091226825-a6a2a5aee158"), alt: "Industrial equipment and technical work" },
      { title: "Workshop Machinery", image: image("1567789884554-0b844b597180"), alt: "Machinery in an industrial workspace" },
      { title: "Production Equipment", image: image("1581092160562-40aa08e78837"), alt: "Industrial production equipment" },
    ],
  },
  {
    title: "Toys",
    description: "Toys, games and play products for different age groups.",
    products: [
      { title: "Creative Play Toy", image: image("1558060370-d644479cb6f7"), alt: "Colourful toys arranged for play" },
      { title: "Toy Car", image: image("1560961911-ba7ef651a56c"), alt: "Toy vehicle" },
      { title: "Kids' Play Set", image: image("1599623560574-39d485900c95"), alt: "Children's toys and play items" },
    ],
  },
  {
    title: "Stationery",
    description: "Writing, organizing and school or office stationery.",
    products: [
      { title: "Notebook", image: image("1455390582262-044cdead277a"), alt: "Notebook and writing supplies" },
      { title: "Desk Organizer", image: image("1517842645767-c639042777db"), alt: "Organized stationery on a desk" },
      { title: "Writing Essentials", image: image("1453738773917-9c3eff1db985"), alt: "Writing and stationery essentials" },
    ],
  },
  {
    title: "Decoration",
    description: "Decorative accessories to add character to homes and spaces.",
    products: [
      { title: "Decorative Home Accent", image: image("1618221195710-dd6b41faaea6"), alt: "Decorative accents in a home interior" },
      { title: "Interior Decor", image: image("1616486338812-3dadae4b4ace"), alt: "Styled interior with decorative details" },
      { title: "Living Space Decor", image: image("1600210492486-724fe5c67fb0"), alt: "Decorated living room interior" },
    ],
  },
].map((category) => ({
  ...category,
  image: category.products[0].image,
  alt: category.products[0].alt,
}));

export default productCategories;
