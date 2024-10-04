"use client";

import Image from "next/image";
import Link from "next/link";

const Fooder: React.FC = () => {
  return (
    <section className="w-full px-6 pb-12 antialiased bg-white">
      <div className="mx-auto max-w-7xl">
        <nav className="relative z-50 h-24 select-none">
          <div className="container relative flex items-center justify-between h-24 mx-auto font-medium border-b border-gray-200">
            {/* 左端のImage */}
            <Link href="/">
              <div className="flex items-center justify-start h-full">
                <Image src="/images/人物アイコン　チーム.png" alt="left" width={50} height={50} />
              </div>
            </Link>

            {/* 真ん中のロゴ */}
            <div className="flex items-center justify-center h-full">
              <Link href="/" className="text-3xl font-black text-gray-900">
                PictLog
              </Link>
            </div>

            {/* 右端のImage */}
            <Link href="/">
              <div className="flex items-center justify-end h-full">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Fooder;
