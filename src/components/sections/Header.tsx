import { ModeToggle } from "../elements/ThemeToggle";
import BucketStatus from "../elements/BucketStatus";

type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div className={props.className ? props.className : undefined}>
      <main className="flex items-center justify-between rounded-md border px-4 py-3">
        <div>
          <h1 className="text-xl font-bold">
            Bucket<span className="text-red-600">List</span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <BucketStatus />
        </div>
      </main>
    </div>
  );
};

export default Header;
