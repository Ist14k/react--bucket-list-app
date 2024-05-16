import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "../ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ItemType } from "@/store/item-slice";
import { useStore } from "@/store";

const ItemCard = (props: ItemType) => {
  const { id, title, description, completed } = props;
  const toggleItemState = useStore((state) => state.toggleItem);
  const removeItem = useStore((state) => state.removeItem);

  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  const handleCheckBoxEvent = () => {
    toggleItemState(id);
  };

  const handleRemoveItem = () => {
    removeItem(id);
    toast({
      variant: "destructive",
      description: "Item has been removed from the list.",
    });
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
        <div className="flex flex-grow items-center gap-3">
          <Checkbox checked={isCompleted} onClick={handleCheckBoxEvent} />
          {description ? (
            <div className="flex-grow">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <CollapsibleTrigger asChild>
                      <h4 className={completedClass}>{title}</h4>
                    </CollapsibleTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to see more</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ) : (
            <h4 className={completedClass}>{title}</h4>
          )}
        </div>

        <Button
          variant="ghost"
          className="place-self-end"
          onClick={handleRemoveItem}
        >
          <X />
        </Button>
      </div>
      <CollapsibleContent className="flex flex-col gap-2 space-y-2">
        <p className={"font-mono text-sm dark:text-white/75" + completedClass}>
          {description ? description : undefined}
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ItemCard;
