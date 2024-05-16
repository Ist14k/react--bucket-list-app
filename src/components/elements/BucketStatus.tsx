import { useStore } from "@/store";

const BucketStatus = () => {
  const items = useStore((state) => state.items);

  const completedItems = items.filter((item) => item.completed).length;
  const totalItems = items.length;
  return (
    <p>
      Completed <span className="text-green-700">{completedItems}</span>/
      <span className="text-red-700">{totalItems}</span>
    </p>
  );
};

export default BucketStatus;
