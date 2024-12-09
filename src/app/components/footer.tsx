import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-[1440px] border-t border-gray-200">
      <div className="container mx-5 py-10 px-6 lg:px-0">
        <div className="lg:flex lg:justify-between">
          {/* Logo & Description */}
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center">
              <h1 className="text-[32px] font-bold text-[#3563E9]">MORENT</h1>
            </div>
            <p className="mt-4 text-gray-600 font-medium text-base">
              Our vision is to provide convenience<br/> and help increase your sales
              business.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">About</h2>
              <ul className="text-gray-600 space-y-4 font-medium text-base">
                <li><p className="hover:underline cursor-pointer">How it works</p></li>
                <li><p className="hover:underline cursor-pointer">Featured</p></li>
                <li><p className="hover:underline cursor-pointer">Partnership</p></li>
                <li><p className="hover:underline cursor-pointer">Business Relation</p></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Community</h2>
              <ul className="text-gray-600 space-y-4 font-medium text-base">
                <li><p className="hover:underline cursor-pointer">Events</p></li>
                <li><p className="hover:underline cursor-pointer">Blog</p></li>
                <li><p className="hover:underline cursor-pointer">Podcast</p></li>
                <li><p className="hover:underline cursor-pointer">Invite a friend</p></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Socials</h2>
              <ul className="text-gray-600 space-y-4 font-medium text-base">
                <li><p className="hover:underline cursor-pointer">Discord</p></li>
                <li><p className="hover:underline cursor-pointer">Instagram</p></li>
                <li><p className="hover:underline cursor-pointer">Twitter</p></li>
                <li><p className="hover:underline cursor-pointer">Facebook</p></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-gray-600 text-base font-semibold">
            © 2022 <Link href="#">MORENT</Link>. All Rights Reserved.
          </span>
          <div className="flex space-x-6 text-gray-600 mt-4 sm:mt-0 text-base font-semibold">
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
