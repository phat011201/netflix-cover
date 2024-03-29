import BillBoard from "@/components/billBoard/BillBoard";
import Header from "@/components/header/Header";
import MovieLists from "@/components/movieLists/MovieLists";
import Sidebar from "@/components/sidebar/Sidebar";

const Home: React.FC = () => {
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
          <div className="w-full flex flex-col gap-4">
            <MovieLists title="Movie List" imageList={itemsList} />
            <MovieLists title="Movie List" imageList={itemsList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const itemsList = [
  {
    title: "Movie 1",
    description: "Description 1",
    image: {
      url: "https://i.pinimg.com/564x/f5/3d/4c/f53d4c85c210ee1240825de347c688f7.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 2",
    description: "Description 2",
    image: {
      url: "https://i.pinimg.com/736x/ef/5c/44/ef5c444c3dccbe675c7654168f8a0f39.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 3",
    description: "Description 3",
    image: {
      url: "https://i.pinimg.com/736x/0b/3c/16/0b3c16298afba9887b1a8f26ec7d4dcd.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 4",
    description: "Description 4",
    image: {
      url: "https://i.pinimg.com/564x/44/21/10/44211000b1f7c5c8af2dc5d82989f286.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 5",
    description: "Description 5",
    image: {
      url: "https://i.pinimg.com/564x/4a/4f/1b/4a4f1b3c1f7b2b4b0a5c8d4b8f4e1e4e.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 6",
    description: "Description 6",
    image: {
      url: "https://i.pinimg.com/564x/6b/6d/4e/6b6d4e8b7c6d8b3d9c7f2b6c7b6c2d6c.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 7",
    description: "Description 7",
    image: {
      url: "https://i.pinimg.com/564x/5b/5f/8e/5b5f8e9f4b3c3d7e8b3a5a5a3e7e3c1f.jpg",
      alt: "movie",
    },
  },
  {
    title: "Movie 8",
    description: "Description 8",
    image: {
      url: "https://i.pinimg.com/564x/2c/7b/0d/2c7b0d9b4b6b9e7e0e5a7b0c8b2b5e6a.jpg",
      alt: "movie",
    },
  },
];
