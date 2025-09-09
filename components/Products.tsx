import ProductsList from "./ProductsList";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
};

const spicyPizzas: Product[] = [
  {
    id: "1",
    name: "Diavola",
    description: "Spicy salami, hot peppers, mozzarella, tomato sauce",
    price: "$12.00",
    available: true,
    image: "/images/cheese-1.webp",
  },
  {
    id: "2",
    name: "Jalapeño Fire",
    description: "Jalapeños, spicy chicken, red onions, hot sauce",
    price: "$7.00",
    available: true,
    image: "/images/cheese-1.webp",
  },
  {
    id: "3",
    name: "Inferno",
    description: "Ghost pepper sauce, spicy pepperoni, habaneros, cheese",
    price: "$9.00",
    available: true,
    image: "/images/cheese-1.webp",
  },
  {
    id: "4",
    name: "Sriracha Supreme",
    description: "Sriracha sauce, spicy beef, red peppers, mozzarella",
    price: "$17.00",
    available: false,
    image: "/images/cheese-1.webp",
  },
];

export default function Products() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16
               bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 
               bg-clip-text text-transparent 
               tracking-wide drop-shadow-md text-center"
        >
          SPICY PIZZAS
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {spicyPizzas.map((pizza) => (
            <ProductsList key={pizza.id} {...pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}
