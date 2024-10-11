import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-[rgba(255,255,255,0.9)] py-5 z-20">
      <div className="flex justify-center gap-72">
        <Link href={"/"}>
          <Image src="/images/home_24dp_000000.png" alt="home" width={40} height={40} />
        </Link>

        <Link href={"/PostDiary"}>
          <Image src="/images/auto_stories_25dp_000000.png" alt="diary" width={40} height={40} />
        </Link>

        <Link href={"/VeiwPost"}>
          <Image src="/images/calendar_month_25dp_000000.png" alt="calender" width={40} height={40} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
