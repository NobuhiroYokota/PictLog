import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white py-4">
      <div className="flex justify-center space-x-8">
        {/* Image 1 */}
        <Image src="/images/image1.png" alt="Image 1" width={50} height={50} />

        {/* Image 2 */}
        <Image src="/images/image2.png" alt="Image 2" width={50} height={50} />

        {/* Image 3 */}
        <Image src="/images/image3.png" alt="Image 3" width={50} height={50} />
      </div>
    </footer>
  );
};

export default Footer;
