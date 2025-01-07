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
    <div className="flex flex-col p-5 gap-5 mt-10">
      <div className="cursor-pointer">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">How to Shop</h1>
          <FontAwesomeIcon
            className="w-[12px] font-extralight"
            icon={faAngleDown}
          />
        </div>
        <ul className="hidden">
          <li>Fashoo Rewards</li>
          <li>Fashoo Private</li>
          <li>Fashoo Network</li>
        </ul>
      </div>
      <div className="cursor-pointer">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">Shipping & Returns</h1>
          <FontAwesomeIcon
            className="w-[12px] font-extralight"
            icon={faAngleDown}
          />
        </div>
        <ul className="hidden">
          <li>Track An Order</li>
          <li>Return An Order</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      <div className="cursor-pointer">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">Client Services</h1>
          <FontAwesomeIcon
            className="w-[12px] font-extralight"
            icon={faAngleDown}
          />
        </div>
        <ul className="hidden">
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="cursor-pointer">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">About Fashoo</h1>
          <FontAwesomeIcon
            className="w-[12px] font-extralight"
            icon={faAngleDown}
          />
        </div>
        <ul className="hidden">
          <li>Careers</li>
          <li>About</li>
          <li>Afiliates and Partners</li>
        </ul>
      </div>

      <div className="border-t border-t-neutral-400 pt-5 flex flex-col gap-3">
        <h1>GET ON THE LIST</h1>
        <p className="text-neutral-600 text-[14px]">
          Receive 10% off* your first app purchase and stay up to date on our
          latest arrivals, exclusive offers, and more with alerts sent directly
          to your inbox
        </p>
        <div className="relative">
          <input
            className="w-[90%] h-12"
            type="email"
            placeholder="Email Address"
          />
          <button className="border border-black bg-black text-white p-1 absolute w-[10%] h-12">
            <FontAwesomeIcon icon={faGreaterThan} />
          </button>
        </div>

        <p className="text-neutral-600 text-[14px]">
          <span className="underline underline-offset-2">Terms</span> &{" "}
          <span className="underline underline-offset-2">Conditions</span> Apply
        </p>
      </div>

      <div className="border-t border-b-neutral-400 border-b pb-5 border-t-neutral-400 pt-5 pl-5 pr-5 flex justify-between">
        <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
        <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
        <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
        <FontAwesomeIcon className="text-2xl" icon={faGithub} />
      </div>

      <div>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Your Privacy Choices</li>
          <li>Legal</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
