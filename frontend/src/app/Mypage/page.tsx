import Link from "next/link";
import Return from "../components/Return";

const MyPage: React.FC = () => {
  return (
    <div className="">
      {/* Wallpaper Section */}
      <div className="relative w-full h-80">
        <img className="w-full h-full object-cover" src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="User Wallpaper" />

        {/* Return Button */}

        <Return toPage="/" />

        {/* User Info and Edit Button */}
        <div className="absolute bottom-0 left-0 p-4 flex">
          <h1 className="text-black text-2xl font-bold">userName</h1>
          <button className="ml-4 px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
        </div>
      </div>

      <div className="flex-col mt-24">
        {/* View More Button */}
        <div className="bottom-0 right-0 p-4">
          <Link href="/gallery">
            <span className="text-xl">View more...</span>
          </Link>
        </div>
        {/* Carousel Section */}
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Burger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
