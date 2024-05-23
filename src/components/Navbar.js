import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Popover } from "@headlessui/react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoLoggedout from '../assets/logoLoggedout.png'
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className={`${isLoggedIn ? 'bg-[#288037]' : 'bg-[#97db51]'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex lg:hidden pr-10">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 flex justify-center pr-10">
            <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Monarch.com</span>
            <img
               className="h-16 w-auto"
                src={isLoggedIn ? logo : logoLoggedout} // Render the appropriate logo image
                alt="logo"
            />
          </a>
        </div>
          <div className="flex lg:hidden">
            <Link to={isLoggedIn ? "/myaccount" : "/signin"} className="text-sm font-semibold leading-6 text-white">
              <span className="sr-only">{isLoggedIn ? "My Account" : "Sign In"}</span>
              <img className="h-10 pr-5" src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png" alt="Profile" />
            </Link>
          </div>
        </div>

        <Popover.Group className={`${isLoggedIn ? 'text-white hidden lg:flex lg:gap-x-12 ml-auto pl-10' : 'text-black hidden lg:flex lg:gap-x-12 ml-10 pl-10'}`}>
          {isLoggedIn && (
            <Link to="/manual-investment" className="text-sm font-semibold leading-6 ">
              Manual Investment
            </Link>
          )}
          <Link to="/account-features" className="text-sm font-semibold leading-6 ">
            Account Features
          </Link>
          <Link to="/learning-resources" className="text-sm font-semibold leading-6 ">
            Learning Resources
          </Link>
          <Link to="/about-us" className="text-sm font-semibold leading-6 ">
            About Us
          </Link>
        </Popover.Group>

        <div className={`${isLoggedIn ? 'hidden lg:flex lg:flex-1 lg:justify-end text-white' : 'hidden lg:flex lg:flex-1 lg:justify-end text-black'}`}>
          {isLoggedIn ? (
            <>
              <Link to="/:userId/dashboard" className="text-sm font-semibold leading-6 pl-2 ">
                My Dashboard <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/myaccount" className="text-sm font-semibold leading-6 pl-4 ">
                My Account <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/:userId/logout"
                className="text-sm font-semibold leading-6 pl-4 "
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/newsign" className="text-sm font-semibold leading-6 text-black">
              Sign In / Sign Up<span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className={`${isLoggedIn ? 'text-white fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#288037] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10': ' text-black fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#97db51] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'}`}>
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Monarch</span>
              <img
                className="h-14 w-auto"
                src={isLoggedIn ? logo : logoLoggedout}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {isLoggedIn && (
                  <Link
                    to="/manual-investment"
                    className={`${isLoggedIn ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-orange' : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-red-orange'}`}
                  >
                    Manual Investment
                  </Link>
                )}
                <Link
                  to="/account-features"
                  className={`${isLoggedIn ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-orange' : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-red-orange'}`}
                >
                  Account Features
                </Link>
                <Link
                  to="/learning-resources"
                  className={`${isLoggedIn ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-orange' : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-red-orange'}`}
                >
                  Learning Resources
                </Link>
                <Link
                  to="/about-us"
                  className={`${isLoggedIn ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-orange' : '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-red-orange'}`}
                >
                  About Us
                </Link>
              </div>
              <div className="py-6">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/myaccount"
                      className="-mx-3 block rounded-lg px-2 py-2.5 text-base font-semibold leading-7 text-white hover:bg-red-orange"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/:userId/dashboard"
                      className="-mx-3 block rounded-lg px-2 py-2.5 text-base font-semibold leading-7 text-white hover:bg-red-orange"
                    >
                      My Dashboard
                    </Link>
                    <Link
                      to="/:userId/logout"
                      className="-mx-3 block rounded-lg px-2 py-2.5 text-base font-semibold leading-7 text-white hover:bg-red-orange"
                    >
                      Log Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/newsign"
                      className="-mx-3 block rounded-lg px-2 py-2.5 text-base font-semibold leading-7 text-white hover:bg-red-orange"
                    >
                      Sign In / Sign Up

                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;