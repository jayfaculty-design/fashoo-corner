import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faArrowDown,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <>
      <div className="flex font-forum font-normal flex-col pt-10 border-t border-t-neutral-300 bg-white p-5 gap-5 lg:pl-24 lg:flex-row lg:justify-between mt-10">
        <div className="cursor-pointer lg:cursor-default">
          <div className="flex items-center justify-between">
            <h1 className="font-bold lg:pb-3">How to Shop</h1>
            <FontAwesomeIcon
              className="w-[12px] font-extralight lg:hidden"
              icon={faAngleDown}
            />
          </div>
          <ul className="hidden gap-2 lg:flex lg:flex-col">
            <li>Fashoo Rewards</li>
            <li>Fashoo Private</li>
            <li>Fashoo Network</li>
          </ul>
        </div>
        <div className="cursor-pointer lg:cursor-default">
          <div className="flex items-center justify-between">
            <h1 className="font-bold lg:pb-3">Shipping & Returns</h1>
            <FontAwesomeIcon
              className="w-[12px] font-extralight lg:hidden"
              icon={faAngleDown}
            />
          </div>
          <ul className="hidden gap-2 lg:flex lg:flex-col">
            <li>Track An Order</li>
            <li>Return An Order</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="cursor-pointer lg:cursor-default">
          <div className="flex items-center justify-between">
            <h1 className="font-bold lg:pb-3">Client Services</h1>
            <FontAwesomeIcon
              className="w-[12px] font-extralight lg:hidden"
              icon={faAngleDown}
            />
          </div>
          <ul className="hidden lg:block">
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="cursor-pointer lg:cursor-default">
          <div className="flex items-center justify-between">
            <h1 className="font-bold lg:pb-3">About Fashoo</h1>
            <FontAwesomeIcon
              className="w-[12px] font-extralight lg:hidden"
              icon={faAngleDown}
            />
          </div>
          <ul className="hidden gap-2 lg:flex lg:flex-col">
            <li>Careers</li>
            <li>About</li>
            <li>Afiliates and Partners</li>
          </ul>
        </div>

        <div className="border-t border-t-neutral-400 lg:w-[50%] pt-5 flex flex-col gap-3 lg:border-none lg:pt-0">
          <h1 className="font-bold w-fit">GET ON THE LIST</h1>
          <p className="text-neutral-600 text-[14px] lg:w-[70%]">
            Receive 10% off* your first app purchase and stay up to date on our
            latest arrivals, exclusive offers, and more with alerts sent
            directly to your inbox
          </p>
          <div className="relative">
            <input
              className="w-[90%] lg:w-[70%] h-12"
              type="email"
              placeholder="Email Address"
            />
            <button className="border border-black bg-black text-white p-1 absolute w-[10%] h-12">
              <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          </div>

          <p className="text-neutral-600 text-[14px]  w-fit">
            <span className="underline underline-offset-2">Terms</span> &{" "}
            <span className="underline underline-offset-2">Conditions</span>{" "}
            Apply
          </p>
        </div>

        <div className="border-t lg:hidden text-neutral-600 text-[20px] border-b-neutral-400 border-b pb-5 border-t-neutral-400 pt-5 pl-5 pr-5 flex justify-between">
          <FontAwesomeIcon className="" icon={faInstagram} />
          <FontAwesomeIcon className="" icon={faXTwitter} />
          <FontAwesomeIcon className="" icon={faFacebook} />
          <FontAwesomeIcon className="" icon={faGithub} />
        </div>

        <div className="flex flex-col gap-5 lg:hidden">
          <ul className="flex text-[14px] justify-between">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Your Privacy Choices</li>
            <li>Legal</li>
          </ul>
          <div className="flex justify-center">
            <p className="text-[14px] text-neutral-700">
              © 2025 Fashoo Corner, Jay Webs Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex border-t border-t-neutral-300 justify-between pl-24 pt-5 pb-5 text-[14px] text-blue-800 font-forum font-bold pr-24">
        <div className="flex gap-5">
          <a href="">Download the mobile app</a>
          <a target="_blank" href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a target="_blank" href="">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a target="_blank" href="https://github.com/jayfaculty-design/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">Terms and Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Your Choices</a>
          <a href="">Legal</a>
        </div>
        <div>
          <p>© 2025 Fashoo Corner, Jay Webs Inc. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
