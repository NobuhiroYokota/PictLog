// Home.tsx
import Post from "./components/Post";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-screen mb-32">
        <Post
          username="Username"
          timestamp="2024/8/32 0:00"
          imageUrl="https://github.com/user-attachments/assets/233e9cf9-efa6-4810-abe9-4365dfd47f0b"
          profilePicUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
        <Post
          username="Username"
          timestamp="2024/2/30 0:00"
          imageUrl="https://github.com/user-attachments/assets/8dbfa74b-757e-4f15-83a8-a5ae0242070a"
          profilePicUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
        <Post
          username="Username"
          timestamp="2024/4/1 0:00"
          imageUrl="https://github.com/user-attachments/assets/25fda8d5-16a3-477f-8665-42a3c0e00170"
          profilePicUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
      <Footer />
    </>
  );
}
