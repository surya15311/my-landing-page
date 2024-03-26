import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="w-full h-[255rem] object-cover overflow-hidden relative">
      <div className="h-[33rem] relative">
        {/* First Image */}
        <Image
          src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_.jpg"
          alt="Working in company"
          height={700}
          width={1500}
          className="hidden md:block h-[40rem]"
        />
        {/* Second Image */}
        <Image
          src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_.jpg"
          alt="Working in company"
          height={700}
          width={1200}
          className="block md:hidden h-[33rem] absolute top-0 left-0"
        />

        {/* Content */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-full py-28 pl-5 sm:pl-6 md:pl-20 lg:pl-10 xl:pl-20 z-10">
          <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl pt-[2rem] text-black font-bold max-w-xl"></h1>
          <span className="text-center font-['Syne'] text-3xl font-bold text-text-primary lg:text-left lg:text-[3.2rem]">
            Launch your career
          </span>
          <div className="my-4 text-center font-['Syne'] text-lg font-bold text-text-primary lg:text-left lg:text-xl">
            with a single click!
          </div>
          <div className="relative z-10 flex !w-full flex-row justify-around border border-gray-400 rounded-lg lg:rounded-lg lg:border-2">
            <form className="ant-form ant-form-horizontal css-1rqnfsa">
              <div className="mb-6 max-w-[35rem] rounded-lg  p-3 max-sm:-mx-2 md:p-8">
                <div className="ant-spin-nested-loading css-1rqnfsa">
                  <div className="ant-spin-container">
                    <h1 className="pb-3 font-syne text-xl font-bold text-left">
                      Candidate Login/Sign up
                    </h1>
                    <div className="flex flex-col max-w-[35rem] items-center">
                      <div className="flex">
                        <select className="h-[3.25rem] w-[30%] rounded-l-lg pl-4 font-['syne'] text-sm font-semibold text-text-teritary focus:outline-btn-primary lg:text-lg">
                          <option
                            value="+91"
                            className="h-[3.25rem] !w-[5rem] rounded-l-lg pl-4 font-['syne'] text-sm font-semibold text-text-teritary focus:outline-btn-primary lg:text-lg"
                          >
                            +91
                          </option>
                        </select>
                        <input
                          type="text"
                          className="h-[3.25rem] w-full rounded-r-lg border-0 pl-3 pr-5 font-['syne'] text-sm font-semibold text-text-primary focus:outline-btn-primary lg:text-lg"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <button className="h-[3rem] !w-[100%] rounded-lg pl-1 font-['syne'] text-sm font-semibold text-black text-center focus:outline-btn-primary lg:text-lg bg-green-500 hover:bg-green-600 text-black mt-2">
                        Log in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-[35rem] object-cover overflow-hidden relative">
        <div className="h-[40rem] relative">
          <Image
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/08/29095314/20-Fortune-500-Companies-That-Hire-for-Remote-Jobs-1024x512.jpg"
            alt="Working in company"
            height={600}
            width={2500}
            layout="responsive"
            className="hidden md:block h-[40rem]"
          />

          <Image
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2023/08/29095314/20-Fortune-500-Companies-That-Hire-for-Remote-Jobs-1024x512.jpg"
            alt="Working in company"
            height={700}
            width={1500}
            className="block md:hidden h-[31rem] absolute top-0 left-0"
          />
          {/* Content */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 h-full py-28 pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12 z-10">
            <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl pt-[2rem] text-black font-bold max-w-xl"></h1>
            <span className="text-center font-['Syne'] text-3xl font-bold text-text-primary lg:text-left lg:text-[3.2rem]">
              Launch your opportunity
            </span>
            <div className="my-6 text-center font-['Syne'] text-lg font-bold text-text-primary lg:text-left lg:text-xl">
              with a single click!
            </div>
            <div className="relative z-10 flex !w-full flex-row justify-around border border-gray-400 rounded-lg lg:rounded-lg lg:border-2">
              <form className="ant-form ant-form-horizontal css-1rqnfsa">
                <div className="mb-6 max-w-[35rem] rounded-lg border-[#bffbf] p-3 max-sm:-mx-2 md:p-8">
                  <div className="ant-spin-nested-loading css-1rqnfsa">
                    <div className="ant-spin-container">
                      <h1 className="pb-3 font-syne text-xl font-bold text-left">
                        Employee Login/Sign up
                      </h1>
                      <div className="flex flex-col max-w-[35rem] items-center">
                        <div className="flex">
                          <select className="h-[3.25rem] w-[30%] rounded-l-lg pl-4 font-['syne'] text-sm font-semibold text-text-teritary focus:outline-btn-primary lg:text-lg">
                            <option
                              value="+91"
                              className="h-[3.25rem] !w-[5rem] rounded-l-lg pl-4 font-['syne'] text-sm font-semibold text-text-teritary focus:outline-btn-primary lg:text-lg"
                            >
                              +91
                            </option>
                          </select>
                          <input
                            type="text"
                            className="h-[3.25rem] w-full rounded-r-lg border-0 pl-3 pr-5 font-['syne'] text-sm font-semibold text-text-primary focus:outline-btn-primary lg:text-lg"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <button className="h-[3rem] !w-[100%] rounded-lg pl-1 font-['syne'] text-sm font-semibold text-black text-center focus:outline-btn-primary lg:text-lg bg-green-500 hover:bg-green-600 text-black mt-2">
                          Log in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-fill-purple-100 no-scrollbar md:h-auto  md:w-auto h-screen w-full overflow-y-auto md:overflow-hidden bg-white  p-4">
        <h1 className="w-full py-8 text-center font-Syne text-lg font-bold text-text-primary  md:text-3xl lg:text-[3.2rem] ">
          Companies that Hire from us
        </h1>
        <div className="grid gap-10 w-screen grid-cols-2 place-items-center md:grid-cols-4 p-4 lg:grid-cols-6 bg-white">
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Flix.ae4e3dc7.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/ACT_Fibernet.4e104666.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Ajanta.c14f5889.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Altrust.9a065144.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Amazon.b926fcec.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Au.d61eeb99.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/axis-bank.b27e7078.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/BharatPe.457b56a0.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Bigbasket.5bd17d84.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Blinkit.6336f9d4.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/Bounce-Logo.6592ec4f.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Byjus.04dba0cf.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/crm.5fcd68f7.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/DairyDay.d036202f.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Delivery.com.9e23b158.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/equitas.7b354071.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Hathway.71297858.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Homefirst.466412fd.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/Hrhnext.039e4f5a.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Hypersupermarket%20.44a46226.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/IDFC.b3556ecc.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/InnovativePayments.450d567e.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/Instamart.b74e9d70.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/JanaSmallFinanceBank.6b0151b9.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/JapanGrabTechnologies.96ecd73e.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/Katerra_Primary_Logo.22c20d88.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src=" https://joboxhire.com/_next/static/media/KbxDigital.4f82c570.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/LandT.5c4e40cb.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/oppo-mobile-logo.fb3714a7.svg"
            />
          </div>
          <div className="flex items-center justify-center rounded-md shadow-lg bg-white">
            <img
              alt="Companies"
              draggable="false"
              loading="lazy"
              width="133"
              height="43"
              decoding="async"
              data-nimg="1"
              className=" aspect-[4/3] h-[4rem] w-[12rem] object-contain px-1 py-2 mix-blend-multiply"
              src="https://joboxhire.com/_next/static/media/Qconnect.5ecfac0a.svg"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 border border-gray-200 rounded-lg p-8">
        <div
          id="landJob"
          className="container flex flex-col items-center py-16 font-syne"
        >
          <h1 className="font-bold underline underline-offset-8 lg:text-[3rem]">
            Jobs
          </h1>
          <div className="pt-20"></div>
          <div className="lg:flex">
            <div className="w-full lg:w-1/2">
              <img
                alt="job Section"
                loading="lazy"
                width="923"
                height="730"
                decoding="async"
                data-nimg="1"
                src="https://joboxhire.com/_next/static/media/Landing__job-section'.d6454052.svg"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
              <p className="w-72 py-4 text-center font-syne text-lg font-semibold text-text-primary">
                Discover your dream job today and take the next step in your
                career!
              </p>
              <a
                className="flex items-center justify-center rounded-md border-2 border-green-500 bg-green-500 text-white px-4 py-2 font-syne text-sm font-bold transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black lg:text-lg"
                href="/#candCard"
              >
                Apply Jobs
              </a>
            </div>
          </div>
        </div>
        <div
          id="landPart"
          className="container flex flex-col items-center  py-8 font-syne"
        >
          <h1 className="font-bold underline  underline-offset-8 lg:text-[2.5rem]">
            Part Time Jobs
          </h1>
          <div className="pt-20"></div>
          <div className="flex flex-col">
            <div className="w-full">
              <img
                alt="job Section"
                loading="lazy"
                width="1376"
                height="458"
                decoding="async"
                data-nimg="1"
                src="https://joboxhire.com/_next/static/media/Landing__part-time-job-section.553aabf9.svg"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <p className="w-72 pb-4 pt-16 text-center font-syne text-lg font-semibold text-text-primary">
                Start your job search journey now and unlock new opportunities!
              </p>
              <a
                className="flex items-center justify-center rounded-md border-2 border-green-500 bg-green-500 text-white px-4 py-2 font-syne text-sm font-bold transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black lg:text-lg"
                href="/#empCard"
              >
                Post Job
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-[100%] min-w-[100%] py-11 lg:py-40">
        <div className="container flex flex-col lg:flex-row items-center lg:pl-24">
          <div className="lg:w-1/2 lg:order-2 lg:text-right">
            <img
              alt="arrow"
              draggable="false"
              loading="lazy"
              width="433"
              height="474"
              decoding="async"
              data-nimg="1"
              className="mb-10 lg:mb-0 w-[50%] lg:w-auto mx-auto lg:mx-40"
              src="https://joboxhire.com/_next/static/media/WhyUs.266522cd.svg"
            />
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <h1 className="text-center font-syne text-xl font-bold text-text-primary lg:text-left lg:text-[2.625rem]">
              Why choose Jobox Hire?
            </h1>
            <p className="pb-11 pt-6 text-center font-syne text-base md:text-lg lg:text-xl lg:text-left lg:pl-6 sm:pl-12">
              "Welcome to your one-stop hub for Verified Talent and Trusted
              Companies. Unleash your potential with exclusive opportunities,
              all backed by a secure and transparent platform. Join today and
              take a confident stride towards your dream career!"
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center justify-center rounded-md border-2 border-green-500 bg-green-500 text-white px-5 py-3 font-syne text-sm font-bold transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black lg:text-lg">
                Download Brochure
                <img
                  alt="arrow"
                  draggable="false"
                  loading="lazy"
                  width="15"
                  height="13"
                  decoding="async"
                  data-nimg="1"
                  className="ml-2"
                  src="https://joboxhire.com/_next/static/media/Green_Arrow.d81215df.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
