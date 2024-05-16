import Header from "@/components/sections/Header";
import Content from "@/components/sections/Content";
import Sidebar from "@/components/sections/Sidebar";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <div className="flex items-center justify-center p-4 md:h-screen md:p-0">
      <div className="grid grid-cols-custom-6 gap-2">
        <Header className="col-span-full" />
        <Content className="col-span-full md:col-span-4 md:col-start-1 xl:w-[600px]" />
        <Sidebar className="col-span-full md:col-span-2 md:col-start-5 md:row-start-2 md:row-end-3" />
        <Footer className="col-span-full" />
      </div>
    </div>
  );
};

export default App;
