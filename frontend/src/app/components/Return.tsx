import Image from "next/image";
import Link from "next/link";

interface ReturnProps {
  toPage: string;
}

const Return: React.FC<ReturnProps> = ({ toPage }) => {
  return (
    <div className="absolute top-0 left-0 m-4">
      <Link href={toPage}>
        <Image src="/images/chevron_left_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Return" width={40} height={40} />
      </Link>
    </div>
  );
};

export default Return;
