import BillBoard from "@/components/billBoard/BillBoard";
import Header from "@/components/header/Header";
import MovieLists from "@/components/movieLists/MovieLists";
import Sidebar from "@/components/sidebar/Sidebar";

const Browse = () => {
  return (
    <>
      <header>
        <title>Networld - Browse</title>
      </header>
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 h-[max-content] flex flex-col gap-4 items-center absolute top-0 right-0">
          <Header />
          <div className="w-full z-0">
            <BillBoard />
          </div>
          <div className="w-full flex flex-col">
            <MovieLists />
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
