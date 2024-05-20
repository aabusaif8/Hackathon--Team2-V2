import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {Fragment } from "react";
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; 
import {Dialog, Disclosure, Popover, Transition } from "@headlessui/react"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#97db51]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Monarch.com</span>
            <img href="../" className="h-14 w-auto" src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex justify-end rounded-md p-2.5 text-white "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 flex justify-end"
              aria-hidden="true"
            />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Investment Assistant
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Manual Investment
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Dashboard Overview
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Learning Resources
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/signin"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full 
        overflow-y-auto bg-[#97db51] px-6 py-6 sm:max-w-sm sm:ring-1 
        sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Monarch</span>
              <img className="h-8 w-auto" src={logo} alt="" />
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white 
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white 
                        hover:bg-[#97db51]"
                        >
                          Investment Assistant
                        </a>

                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white 
                        hover:bg-[#97db51]"
                >
                  Manual Investment
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white 
                        hover:bg-[#97db51]"
                >
                  Dashboard Overview
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white 
                        hover:bg-[#97db51]"
                >
                  Learning Resources
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white
                      hover:bg-[#97db51]"
                >
                  Sign In/Sign Up
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
