import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id:0,
    name: "Product 1",
    price: 120,
    category: "Category 1",
    image: "https://ih1.redbubble.net/image.5362116032.1700/tst,small,507x507-pad,600x600,f8f8f8.jpg"
  },
  {
    id:1,
    name: "Product 1",
    price:1000,
    category: "Category 1",
    image: "https://ih1.redbubble.net/image.5362116032.1700/tst,small,507x507-pad,600x600,f8f8f8.jpg"
  }
]

function App() {
  return (
    <div>
      {
        products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;
