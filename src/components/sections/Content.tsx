import { ScrollArea } from "@/components/ui/scroll-area";
import BucketCard from "../elements/BucketCard";

type ContentProps = {
  className?: string;
};

const Content = (props: ContentProps) => {
  return (
    <div className={props.className ? props.className : undefined}>
      <ScrollArea className="w-full rounded-md border p-4 md:h-[600px]">
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
      </ScrollArea>
    </div>
  );
};

export default Content;
