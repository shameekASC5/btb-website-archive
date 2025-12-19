"use client"

import { IMAGES } from "@/assets";
import Blob from "@/assets/Blob";
import { ICONS } from "@/assets/icons";
import BannerReachStart from "@/components/BannerReachStart";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FounderMessage from "@/components/FounderMessage";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import Button from "@/components/partial/Button";
import { COMPANY_SLIDER, HOME_CAROUSOL, HOME_WHATS_INCLUDED, TESTIMONIALS, TEXTS_AND_LABELS } from "@/data";
import { Drawer } from "antd";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const onClose = () => setIsContactFormOpen(false);
  return (
    <main className="bg-[#05000F] min-h-screen text-white font-main">
      <Drawer 
      width={'auto'} 
      closeIcon={null} 
      title={null} 
      onClose={onClose} 
      open={isContactFormOpen}
      style={{padding:'0px'}}
      >
        <ContactForm handleClose={onClose} />
      </Drawer>
      {/* Her Section */}
      <div className="h-screen relative">
        <div
          className="absolute z-10"
          style={{
            backgroundImage: `url(${IMAGES.HOME_BANNER_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%"
          }}
        >
        </div>
        <div className="relative w-full h-full z-20 flex items-center justify-center">
          <div className="absolute left-0 top-0 w-full">
            <Navbar />
          </div>

          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4 sm:w-[1200px] w-[90vw] text-center items-center container px-2 mx-auto">
              <h2 className="sm:text-7xl text-2xl font-semibold relative">
              Validate Your Idea and Build <br /> Your Startup. Fast.
              <span className='absolute sm:bottom-[-5px] bottom-[-10px] sm:right-[185px] right-2 -z-[10] sm:scale-110 scale-90'>
                                    <ICONS.Sketch />
                                </span>
              </h2>
              <h5 className="sm:text-lg text-base font-[300] sm:w-[900px] w-[85vw] text-[#E8E8E8]]">
                A full service software development agency built to ensure that 90% of startups DO NOT fail. <br /> Let us build your product while you find the first 1000 users.
              </h5>
            </div>
            <div className="flex justify-center">
              <Button
                outline
                onClick={() => setIsContactFormOpen(true)}
              >
                {TEXTS_AND_LABELS.HOME.MAIN_BUTTON}
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Slider */}
      {/* <div className="-mt-[150px] relative z-[50]">
        <Slider
        >
          <div className="flex items-center gap-5 mr-5">

            {
              HOME_CAROUSOL.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 sm:w-[380px] w-[200px] justify-start">
                  <img className="sm:w-[380px] sm:h-[320px] w-[200px] h-[200px]" src={item.img} alt={item.title} />
                  <div className="flex flex-col sm:gap-[2px] gap-3">
                    <h3 className="text-lg">
                      {item.title}
                    </h3>
                    <p className="text-[10px] whitespace-pre-wrap">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))
            }

          </div>

        </Slider>
      </div> */}

      {/* Company Slider */}
      <div className="bg-[#020202] py-10">
        <Slider>

          <div className="flex items-center gap-10 mr-10">
            {
              COMPANY_SLIDER.map((item, index) => (
                <div key={index}>
                  <img src={item.img} alt={item.name} className="h-[30px] w-fit" />
                </div>
              ))
            }
            {
              COMPANY_SLIDER.map((item, index) => (
                <div key={index}>
                  <img src={item.img} alt={item.name} className="h-[30px] w-fit" />
                </div>
              ))
            }
            {
              COMPANY_SLIDER.map((item, index) => (
                <div key={index}>
                  <img src={item.img} alt={item.name} className="h-[30px] w-fit" />
                </div>
              ))
            }
          </div>
        </Slider>
      </div>

      {/* Why Beyond the boxrg */}
      <div className="container mx-auto px-2 mt-[100px]">
        <div className="flex flex-col gap-6 text-center">
          <h4 className="sm:text-2xl text-lg font-medium">
            WHY BEYOND THE BOX?
          </h4>
          <p className="sm:text-[60px] text-2xl font-semibold text-[#44C7F4]">
            We are equity-free technical co-founders
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 items-center mt-[66px] relative">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-10 blur-3xl sm:block hidden">
            <Blob/>
          </div>
          <div className="border sm:border-[#1A1D4F] rounded-lg p-5 flex flex-col items-center gap-8 text-center z-20">
            <ICONS.ThumbsUp />
            <h4 className="text-[32px] font-semibold">
              Results Driven
            </h4>
            <p className="text-lg">
              Before partnering with BTB Studio, a client begins with an idea, but after our partnership, the client ends with a validated product with dedicated users.
            </p>
          </div>
          <div className="flex flex-col gap-8 z-20">
            <div className="border sm:border-[#44C7F4] rounded-lg p-5 flex flex-col items-center gap-8 text-center">
              <ICONS.BeatOdds />
              <h4 className="text-[32px] font-semibold">
              We Beat the Odds
              </h4>
              <p className="text-lg">
              90% of startups fail, but 90% of our client portfolio are still in operation within 1-5 years after engagement of our services.
              </p>
            </div>
            <div className="border sm:border-[#44C7F4] rounded-lg p-5 flex flex-col items-center gap-8 text-center">
              <ICONS.People />
              <h4 className="text-[32px] font-semibold">
              We’ve Been In Your Shoes
              </h4>
              <p className="text-lg">
              Everyone on our team has either built their own startup or worked at an early-stage startup prior to joining BTB Studio. We know what mistakes to avoid because we’ve made them.
              </p>
            </div>
          </div>
          <div className="border sm:border-[#1A1D4F] rounded-lg p-5 flex flex-col items-center gap-8 text-center z-20">
            <ICONS.Lean />
            <h4 className="text-[32px] font-semibold">
            Purposefully Lean
            </h4>
            <p className="text-lg">
            We only build what you need, when you need it. Our teams use the AGILE method to provide consistent and iterative updates, ensuring speedy delivery.  
            </p>
          </div>
        </div>
      </div>

      {/* Tackle Challenges */}
      <div className="container mx-auto px-2 grid sm:grid-cols-2 grid-cols-1 sm:gap-[100px] gap-10 sm:mt-[200px] mt-[100px]">
        <img src={IMAGES.TACKLE_CHALLENGES} className="w-full" alt="" />
        <div className="flex flex-col gap-[64px]">
          <div className="flex flex-col gap-4">
            <h4 className="text-[40px] font-semibold">
              We tackle the challenges early-stage startups face
            </h4>
            <p className="text-lg font-medium">
              From building a team to ideating a clear product roadmap and helping acquire early users for critical feedback, our services are built to de-risk the process of building your company.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <ICONS.Check />
              Product Validation (Research/User Feedback)
            </div>
            <div className="flex items-center gap-5">
              <ICONS.Check />
              UI/UX Design and Software Development
            </div>
            <div className="flex items-center gap-5">
              <ICONS.Check />
              User Acquisition and Capital Raising
            </div>
          </div>
        </div>
      </div>

      {/* Whats included ? */}
      <div className="sm:mt-[200px] mt-[100px] container px-4 mx-auto">
        <div className="flex flex-col gap-6 text-center">
          <h4 className="text-[#204FFF] sm:text-[60px] text-2xl font-semibold">
            So, how do we do it?
          </h4>
          {/* <p className="sm:text-2xl text-lg font-medium">
            Here is the ultimate design subscription solution with lightning-fast <br /> delivery times and one flat monthly fee
          </p> */}
        </div>
        <div className="sm:mt-[100px] mt-10 flex flex-col sm:gap-[80px] gap-8 items-center">
          {
            HOME_WHATS_INCLUDED.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 items-center">
                <h4 className="sm:text-[50px] text-xl font-medium">{item.title}</h4>
                <div className="flex flex-wrap items-center gap-5 justify-center">
                  {
                    item.children.map((child, index2) => (
                      <div className="rounded-[4px] p-[10px] sm:text-base text-sm font-medium border border-white" key={index2}>
                        {child}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Founder Message Video */}
      <div className="sm:mt-[150px] mt-14">
        <FounderMessage />
      </div>

      {/* Testimonial */}
      <div className="sm:mt-[150px] mt-14">
        <Testimonials />
      </div>

      {/* Last Banner */}
      <div className="sm:mt-[150px] mt-14">
        <BannerReachStart />
      </div>

      {/* News Letter */}
      <div className='sm:mt-[130px] mt-[60px]'>
        <NewsLetter />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
