import {MdMarkEmailRead} from "react-icons/md";
import {IoIosCall} from "react-icons/io";
import {FaBehance, FaGit, FaGithub, FaInstagram} from "react-icons/fa";
import {TiSocialFacebookCircular} from "react-icons/ti";


const Footer = () => {
    return (
        <div className="mt-[100px] lg:mt-[150px] companyBG py-8 px-3">
            <div className="max-w-[1400px] mx-auto ">
                <div className="flex flex-col lg:flex-row gap-4  justify-between items-center ">
                    <h3 className="text-3xl font-semibold">Let’s GET IN <span className="lg:hidden">TOUCE</span>
                    </h3>

                    <div className="flex justify-end gap-5 items-center ">
                        <div className="flex items-center gap-2">
                            <IoIosCall className="companyText" />
                            <h1>01722924089</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdMarkEmailRead className="companyText" />
                            <h1>gazienamu1998@gmail.com</h1>
                        </div>
                    </div>
                </div>

                <div className="mt-3 gap-5 flex items-center lg:justify-between justify-center">
                    <h3 className="text-3xl font-semibold hidden lg:inline-block">TOUCE  </h3>
                    <span className=" flex-shrink-1 w-full  border border-[#FBC76A] hidden lg:inline-block "></span>
                    <div className="py-2 flex items-center gap-4 justify-end">
                        <a className='cursor-pointer' href="https://github.com/enamul90" target={"_blank"}><FaGithub className="text-2xl" /></a>
                        <a className='cursor-pointer' href="https://www.behance.net/mdenamulhossen90" target={"_blank"}><FaBehance className="text-2xl" /></a>
                        <a className='cursor-pointer' href="https://www.facebook.com/gazienamul.hossain/" target={"_blank"}><TiSocialFacebookCircular className="text-2xl" /></a>
                        <a className='cursor-pointer' href="https://www.instagram.com/menamulhfiroz90/" target={"_blank"}><FaInstagram className="text-2xl" /></a>
                    </div>
                </div>

            </div>
        </div>
);
};

export default Footer;