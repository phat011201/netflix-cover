import BillBoard from "@/components/billBoard/BillBoard";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="w-5/6 flex flex-col items-center">
          <Header />
          <div className="w-full overflow-y-scroll no-scrollbar">
            <BillBoard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
