import React from "react";
import logo from "../assets/logo.png";
import logoLoggedout from "../assets/logoLoggedout.png";
import { useAuth } from "../context/AuthContext";
import fblogo from "../assets/fblogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
import xlogo from "../assets/xlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isLoggedIn } = useAuth();
  const { userId } = useAuth();

  return (
    <div className="flex flex-col min-h-[10vh]">
      <main className="flex-grow">
        <footer
          className={`${
            isLoggedIn
              ? "bg-[#288037] py-8 text-white"
              : "bg-[#97db51] py-8 text-black"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex-1 flex justify-center pr-10">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Monarch.com</span>
                    <img
                      className="h-16 w-auto"
                      src={isLoggedIn ? logo : logoLoggedout}
                      alt="logo"
                    />
                  </a>
                </div>
                <p
                  className={`${
                    isLoggedIn
                      ? "text-white m-3 mt-10 mb-2 font-semibold"
                      : "text-black m-3 mt-10 mb-2 font-semibold"
                  }`}
                >
                  We are a team of passionate developers dedicated to creating
                  innovative financial solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="m-3 font-bold">Quick Links</h4>
                  <ul
                    className={`${
                      isLoggedIn
                        ? "text-white m-3 mb-2 font-semibold"
                        : "text-black m-3 mb-2 font-semibold"
                    }`}
                  >
                    <li>
                      <Link to={isLoggedIn ? `/${userId}/dashboard` : "/"}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal">Legal</Link>
                    </li>
                    <li>
                      <Link to="/get-help">Get Help</Link>
                    </li>
                    <li>
                      <Link to="/accessibility">Accessibility</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="m-3 font-bold">Contact Us</h4>
                  <ul
                    className={`${
                      isLoggedIn
                        ? "text-white m-3 mb-2 font-semibold"
                        : "text-black m-3 mb-2 font-semibold"
                    }`}
                  >
                    <li>
                      <i className="fas fa-map-marker-alt"></i> 123 Main Street,
                      City, State
                    </li>
                    <li>
                      <i className="fas fa-phone"></i> (123) 456-7890
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i> info@Monarch.com
                    </li>
                  </ul>
                  <div className="footer-social flex justify-start">
                    <a href="facebook.com">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <img className="p-5" src={fblogo} alt="fblogo"></img>
                    <a href="x.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <img className="p-5" src={xlogo} alt="xlogo"></img>
                    <a href="instagram.com">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <img className="p-5" src={linkedinlogo} alt="linkedinlogo"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer-copyright">
                  &copy; {new Date().getFullYear()} Monarch. All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Footer;
