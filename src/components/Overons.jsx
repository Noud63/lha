import React from "react";
import books from "../assets/images/books.png"
import { Link } from "react-router-dom";
import gathering from "../assets/images/gathering.png"

const Overons = () => {
  return (
    <div className="w-full flex items-center mt-[180px] justify-center px-8 z-10 relative max-lg:px-8 max-bracket:px-4 max-xxsm:px-4">
      <div className="w-full">
        <div className="overons flex flex-col ">
          <div className="w-full flex flex-row justify-between text-black font-normal rounded-lg z-5 max-lg:flex-col ">
            <div className="flex flex-1 flex-col justify-center items-center leading-2 pb-4 text-lg max-lg:w-full">
              <div className="w-full flex justify-between border-b border-black mb-4">
                <span className="flex text-black text-2xl font-semibold pb-2">
                  # Over het Leerhuis
                </span>
              </div>

              <div className="w-full max-w-[1100px] flex flex-col items-end justify-center py-8 relative mt-10 max-xxl:mt-0 max-xmd:flex-row max-xmd:items-center max-xmd:mt-0 max-xmd:py-0">
                <div className="w-full max-w-[600px] flex justify-center max-xmd:flex-col max-xmd:max-w-full">
                  <div className="w-full mb-12 mt-7 max-xmd:mt-0 max-xmd:mb-0">
                    <div className="overons_text w-full italic max-lg:w-full bg-white rounded-xl text-black px-8 pt-6 pb-8 max-xmd:rounded-b-none">
                      <span className="flex justify-center text-xl font-semibold pb-2 text-amber-600">
                        "Leven in een complexe wereld"
                      </span>
                      Het Leerhuis Amsterdam richt zich op zinvol samen leven in
                      een complexe wereld die ons voor veel vragen stelt.
                      <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie
                      en de hedendaagse wereld van kunst en cultuur zoeken wij
                      hierover het gesprek.
                      <br /> We organiseren daarom bijeenkomsten, dialogen en
                      cursussen, in de Muiderkerk, waarin deze werelden elkaar
                      ontmoeten.
                    </div>
                  </div>

                  <div className="absolute -z-10 top-0 left-0 max-xmd:relative">
                    <img
                      src={gathering}
                      alt=""
                      className="gathering rounded-t-xl rounded-b-xl w-full max-w-[700px] shadow-lg max-xmd:rounded-t-none max-xmd:rounded-b-xl max-xmd:max-w-full"
                    />
                  </div>
                </div>
              </div>

              <Link
                to="/overonspage"
                className="w-full flex justify-center mt-12 max-xxl:mt-8"
              >
                <button
                  type="button"
                  className="btn w-[150px] rounded-full justify-center bg-white/50 items-center text-black border-2 border-neutral-400 gap-2 pb-1 leading-8 pt-1 font-semibold"
                >
                  Lees meer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overons;
