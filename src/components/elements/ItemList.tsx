import { ScrollArea } from "../ui/scroll-area";
import ItemCard from "./ItemCard";
import { useStore } from "@/store";

const ItemList = () => {
  const items = useStore((state) => state.items);
  const renderedItems = items.map((item) => (
    <ItemCard key={item.id} {...item} />
  ));

  return (
    <ScrollArea className="w-full rounded-md border p-4 md:h-[600px]">
      {renderedItems}
    </ScrollArea>
  );
};

export default ItemList;
