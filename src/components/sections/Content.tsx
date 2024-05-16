import ItemList from "../elements/ItemList";
import { useStore } from "@/store";

type ContentProps = {
  className?: string;
};

const Content = (props: ContentProps) => {
  const items = useStore((state) => state.items);
  console.log(items);
  return (
    <div className={props.className ? props.className : undefined}>
      <ItemList />
    </div>
  );
};

export default Content;
