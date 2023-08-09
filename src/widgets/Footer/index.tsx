import Link from "next/link";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

export default function Footer() {
  return (
    <footer className="border-t px-4 sm:px-12 md:px-24 lg:px-48">
      <Wrapper>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-9 sm:grid-cols-2 lg:grid-cols-4 py-6 sm:py-12 md:py-24 lg:py-36">
          {/* Column 1 */}
          <div>
            <p className="text-xl sm:text-1xl md:text-1xl lg:text-2xl font-extrabold mb-1 text-gray-800">
              Quality cleaning for your home
            </p>
            <div className="mb-5 sm:mb-7 md:mb-8 lg:mb-10">
              <BodyText>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </BodyText>
            </div>
            <div className="flex flex-row mt-2 sm:mt-3 md:mt-4 lg:mt-5">
              {/* <span>Icon</span>
              <span>Icon</span>
              <span>Icon</span>
              <span>Icon</span> */}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <p className="text-lg sm:text-1xl md:text-1xl lg:text-1xl font font-extrabold mb-3 sm:mb-5 md:mb-6 lg:mb-7 text-gray-800">
              Contact Us
            </p>
            <p className="mb-1.5 sm:mb-2 md:mb-3 lg:mb-3.5 text-gray-700">
              1827 Nickel Road, Los Angeles, CA, 90017, United States
            </p>
            <p className="mb-1.5 sm:mb-2 md:mb-3 lg:mb-3.5 text-gray-700">
              (000)-000-0000
            </p>
            <p className="w-auto mb-1.5 sm:mb-2 md:mb-3 lg:mb-3.5 text-gray-700">
              contact@cleaning.com
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-lg sm:text-1xl md:text-1xl lg:text-1xl font font-extrabold mb-3 sm:mb-5 md:mb-6 lg:mb-7 text-gray-800">
              Hours
            </p>

            <div className="flex flex-col mb-2 sm:mb-3 md:mb-3 lg:mb-4">
              <p className="text-lg sm:text-1xl md:text-1xl lg:text-1xl font font-extrabold mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 text-gray-700">
                Monday to Friday
              </p>

              <BodyText> 6:00 AM - 9:00 PM</BodyText>
            </div>

            <div className="flex flex-col">
              <p className="text-lg sm:text-1xl md:text-1xl lg:text-1xl font font-extrabold mb-0.5 sm:mb-1 md:mb-1 lg:mb-1 text-gray-700">
                Saturday & Sunday
              </p>
              <div className="mb-2 sm:mb-3 md:mb-3 lg:mb-4">
                <BodyText> 6:00 AM - 9:00 PM</BodyText>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-lg sm:text-1xl md:text-1xl lg:text-1xl font font-extrabold mb-3 sm:mb-5 md:mb-6 lg:mb-7 text-gray-700">
              Get a Free Estimate
            </p>

            <p className="text-xl sm:text-1xl md:text-2xl lg:text-2xl font text-blue-500 font-extrabold ">
              (000)-000-0000
            </p>

            <div className="mb-3 sm:mb-5 md:mb-6 lg:mb-7">
              <BodyText>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </BodyText>
            </div>

            <Link href="/#contact">
              <Button> Request a free quote </Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
