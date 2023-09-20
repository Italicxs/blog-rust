import Logo from "@/public/logo.png";
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center h-16">
        <div className="w-16 h-16 flex items-center">
          <Image src={Logo} alt="Tu imagen" className=" object-cover" width={60} height={40} />
        </div>
      </div>
    </div>
  );
}
