// Home.tsx
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
}
