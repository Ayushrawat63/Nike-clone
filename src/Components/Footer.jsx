import React from "react";
import { socialMedia, footerLinks } from "../Constants/Contents";
import SocialCard from "./socialCard";
import FooterCardLink from "./FooterCardLink";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";


const Footer = () => {
    return (
        <footer className=" max-container ">
            <div className="flex justify-between items-start gap-20 flex-wrap  max-lg:flex-col">
                <div className=" flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo}
                            alt="Nike Logo"
                            width={150}
                            height={46}
                        />
                    </a>
                    <p className="text-base text-white-400  mt-6 leading-7 font-montserrat  sm:max-w-sm ">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in store. Get Rewards</p>
                <div className="flex items-center gap-5 mt-8">
                    {socialMedia.map((item) => (
                        <SocialCard Key={item.src}
                          data={item} />
                    ))}
                </div>
                </div>
                <div className=" flex justify-between lg:gap-10 gap-20 flex-wrap ">
                    {
                        footerLinks.map((link) => (
                            <div className="flex  mt-10">
                                <FooterCardLink Key={link.title}
                                 
                                    value={link} />
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className=" flex justify-between text-white-400 mt-24 max-sm:items-center max-sm:flex-col">
                <div className="flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer">
                <img src={copyrightSign} 
                    alt="copyright"
                    width={20}
                    height={20}
                    className="rounded-full m-0"
                />

                <p >  Copyright All rights reserved</p>
                </div>
                <p className='font-montserrat cursor-pointer'>Terms and Conditions</p>
            </div>


        </footer>
    )
}


export default Footer;