import {FaArrowDown} from "react-icons/fa";


const Nave = ()=>{
    return (
        <div className="w-full fixed top-0 left-0  py-3 px-3 bg-[#3D3E42] lg:bg-opacity-90 z-50
        ">
            <div className="flex justify-between items-center max-w-[1400px] mx-auto ">
                <h1 className="mt-1 text-2xl lg:text-3xl font-semibold  ">Enamul.</h1>
                <a
                    href="/files/cvMdEnamulHossen.pdf" download
                >
                    <button
                        className="flex w-fit ms-auto  justify-center items-center gap-4 text-white companyText font-semibold px-2  lg:px-5 py-2 rounded-lg border border-[#FBC76A]
                    hover:scale-105 transition-transform duration-300
                    ">
                        <span className="hidden lg:block">Download CV</span>
                        <FaArrowDown/>
                    </button>
                </a >
            </div>
        </div>
    )
}

export default Nave;