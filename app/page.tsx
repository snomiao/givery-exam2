import { create } from "zustand";
const initialData = {
  items: [
    {
      id: "coffee",
      price: 480,
      count: 0,
    },
    {
      id: "tea",
      price: 280,
      count: 0,
    },
    {
      id: "milk",
      price: 180,
      count: 0,
    },
    {
      id: "coke",
      price: 190,
      count: 0,
    },
    {
      id: "beer",
      price: 580,
      count: 0,
    },
  ],
};
const useStore = create(() => initialData);

export default function HomePage() {
  const items = useStore((s) => s.items);

  return (
    <div
      className="center"
    >
      {items.map(({ id }) => <Product key={id} id={id} />)}
    </div>
  );
}
function Product({ id }: { id: string }) {
  const prod = useStore((s) => s.items.find((item) => item.id === id));
  if (!prod) return null
  const { price, count } = prod
  return (
    <div>
      <button id={id}>{price}</button>
      <button id={id + '-count'} className='bg-red-600 rounded-full'>{count}</button>
    </div>
  );
}
