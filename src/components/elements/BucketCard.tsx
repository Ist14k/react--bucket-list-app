import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BucketCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckBoxEvent = () => {
    setIsCompleted((prev) => !prev);
    console.log("Checkbox clicked!");
  };

  const completedClass = isCompleted
    ? " line-through text-gray-500 hover:no-underline"
    : "";

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="mt-2 w-full space-y-2 rounded-md border p-4 first-of-type:mt-0"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox checked={isCompleted} onClick={handleCheckBoxEvent} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger onClick={handleCheckBoxEvent}>
                <h4 className={completedClass}>Item Title</h4>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mark as complete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2 space-y-2">
        <p className={"font-mono text-sm dark:text-white/75" + completedClass}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rem,
          a, obcaecati ex necessitatibus quod officiis voluptate amet unde eaque
          iste libero assumenda. Non, nihil debitis necessitatibus pariatur et
          architecto numquam magnam dolor animi atque doloremque reprehenderit
          unde ut aut quisquam eum aliquam culpa totam voluptas natus
          asperiores, assumenda velit.
        </p>
        <Button variant="destructive" className="place-self-end">
          Delete
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default BucketCard;
