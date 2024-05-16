import { Button } from "../ui/button";
import BucketForm from "../elements/BucketForm";
import { useStore } from "@/store";

type SidebarProps = {
  className?: string;
};

const Sidebar = (props: SidebarProps) => {
  const { openDialog } = useStore();

  return (
    <div className={props.className ? props.className : undefined}>
      <main className="flex h-full flex-col justify-between rounded-md border p-4">
        <div className="flex flex-col">
          <p className="pb-2">Add a new item to bucket</p>
          <Button onClick={openDialog}>Add Item</Button>
          <BucketForm />
        </div>
        <div>
          <p className="pb-2">More Actions</p>
          <div className="flex flex-col gap-1">
            <Button disabled className="bg-green-500 hover:bg-green-500/90">
              Mark all as complete
            </Button>
            <Button disabled className="bg-blue-500 hover:bg-blue-500/90">
              Mark all as incomplete
            </Button>
            <Button disabled variant="secondary">
              Reset to initial
            </Button>
            <Button disabled variant="destructive">
              Clear Bucket
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
