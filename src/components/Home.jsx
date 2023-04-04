import react from 'react';
import { images } from '../constants';
import { CurrencyFormat } from '../lib';
import { MdArrowDropDown } from 'react-icons/md';
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import {  BsCheckCircle } from 'react-icons/bs';
import { GrFacebook, GrLinkedin } from 'react-icons/gr';


const Navigator = () => {
    return(
<nav className="navbar bg-color-top">
    <div className="container flex justify-between">
      <a className="" href="#">
        <img className="w-[150px] my-5" src={images.logo} alt="C" />
       
      </a>


          <ul className="flex gap-2 items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          
      <div className="flex items-center justify-center gap-5 transform -translate-y-2">
        {/* <button type="button" className="btn-gray">Sign In</button> */}
        <button type="button" className="btn">Get A Quote</button>
      </div>
    </div>
  </nav>
    );
}

const Hero = () => {
    return(
        <section className="relative pb-[6rem] pt-[4rem]">
            <div className="hero__gradient-bg -top-[7rem]">
                <img className="" src={images.bg} alt="Background Gradient Hero" />
            </div>
            {/* <div className="hero__gradient-bg top-[0rem] backdrop-blur-[20px] opacity-5">
                <img className="" src={images.bg2} alt="Background Pattern Hero" />
            </div> */}
            {/* <div className="hero__gradient-bg  ">
                <img className="" src={images.bg3} alt="Background Gradient Hero" />
            </div> */}
            {/* <div className="hero__gradient-bg top-[20rem]">
                <img className="" src={images.bg4} alt="Background Pattern Hero" />
            </div> */}
            <div className="container flex justify-between">
                <div className="w-full  flex flex-col items-start justify-start mt-10">
                    <h1 className="text-5xl text-left font-extrabold leading-tight">We provide the perfect infra instructure with our cutting-edge solutions.</h1>
                    <p className="text-[1.1rem] my-5 text-[#999]">Blockchain technology is revolutionizing the way businesses operate. With its secure, distributed ledger system, blockchain offers unprecedented levels of transparency and trust. Companies can now securely store and transfer data without the need for third-party intermediaries. This makes it easier to track transactions, reduce costs, and increase efficiency. Invest in blockchain today and unlock the potential of a more secure and efficient future!</p>
                    <button className="btn text-[1.1rem] font-extrabold px-10 py-6 ">Read More</button>
                </div>
                <img src={images.imghero1} className="w-1/2" />
            </div>
    </section>
    );

   
}

const Services = () => {
    return(
        <div className="container grid grid-cols-4 justify-between p-10 rounded-lg mb-10 relative">
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="https://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/07/c-1.png" />
                <h2 className="text-[3rem] font-bold mt-5">356</h2>
                <p className="text-[1.3rem] mt-5 font-bold">Cybersecurity Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="https://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/07/c-3.png" />
                <h2 className="text-[3rem] font-bold mt-5">986</h2>
                <p className="text-[1.3rem] mt-5 font-bold">Clients Protections</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="https://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/07/c-4.png" />
                <h2 className="text-[3rem] font-bold mt-5">100%</h2>
                <p className="text-[1.3rem] mt-5 font-bold">Service Guarantee</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="https://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/07/2.png" />
                <h2 className="text-[3rem] font-bold mt-5">50+</h2>
                <p className="text-[1.3rem] mt-5 font-bold">Expert Engineers</p>
            </div>
            <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/07/c-bg.jpg" className="absolute z-[1] w-full rounded-[1.5rem]" />
        </div>
    );
}

const Security = () => {
    return(
        <div className="container mx-auto p-10 grid grid-cols-2 justify-between items-start">
            <img src="https://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/about-img-1.png" className="" />
            <div className="flex flex-col w-full gap-4">
                <div className="text-[#493ae3]  flex gap-5 items-center mb-3">
                    <div className="bg-[#493ae3] rounded-full w-3 h-3"></div>
                    <span className="text-[1.3rem] font-bold">Cyber Security Solutions for</span>
                </div>
                <h1 className="text-[3rem] mb-3">Advanced Cyber Security</h1>
                <p className="text-[#999999]">productize alternative platforms through virtual competently morph answer economically sound markets customized bandwidth cyber security world in indeliver world the great.</p>
                <p className="text-[#999999]">
                Productize alternative platforms through virtual competently morph wonder
                economically sound markets customized bandwidth cyber security matter
                world indeliver world-class scenarios with best breed technologies. Intrinsicly maintain viral internal.</p>
                <button className="btn bg-gradient-services rounded-lg w-1/2 text-[1.2rem] font-extrabold px-10 py-6 ">Get A Quote</button>
            </div>
        </div>
    );
}

const Obj_Options = [
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/icon1.png",
        Name: "Business Analysis",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/icon2.png",
        Name: "Machine Learning",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/icon3.png",
        Name: "Data Analysis",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/icon1.png",
        Name: "Technology",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const Options = ({obj}) => {

    return(
        <div className="container grid grid-cols-4 justify-between items-center gap-4 mb-10 mt-10">
        {
        obj.map((item) => 
        <button className="bg-[#0f1e32] border-0 btn  rounded-lg flex flex-col gap-6 p-10">
            <img src={item.Image} className="" />
            <div className="text-[1.4rem] font-bold">{item.Name}</div>
            <div className="text-[1.1rem] text-[#999999]">{item.Text}</div>
        </button>)
        }
      </div>
       
    )
}

const Logs = () => {
    return(
        <div className="container grid grid-cols-4 justify-between items-center p-10 rounded-lg my-[8rem] relative">
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/brand3.png" className="cursor-pointer transition animation-all transform hover:scale-110 opacity-30 hover:opacity-100" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/brand4.png"  className="cursor-pointer transition animation-all transform hover:scale-110 opacity-30 hover:opacity-100" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/brand1.png"  className="cursor-pointer transition animation-all transform hover:scale-110 opacity-30 hover:opacity-100" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 z-[2]">
                <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/brand2.png"  className="cursor-pointer transition animation-all transform hover:scale-110 opacity-30 hover:opacity-100"/>
            </div>
            <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/brand-bg.jpg" className="absolute z-[1] w-full rounded-[1.5rem]" />
        </div>
    );
}

const Business = () => {

    return(
        <div className="grid grid-cols-2 justify-between container mt-[8rem] mb-10">
            <div className="flex flex-col gap-[2.0rem]">
                <h1 className="text-[#FFF] text-[2.5rem] font-bold">Business Analysis</h1>
                <p className="text-[#999] text-[1.1rem] w-10/12">Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing you eleifend dictum potenti mattis viverra quam lacus enim porttitor bibendum elit nisl cyber security.</p>
                <div className="flex items-center gap-10 ">
                    <div className="flex gap-5 items-center"><BsCheckCircle className="text-[#493ae3] text-[1.5rem]" /> <p className="text-[1.2rem] text-[#FFF]">Focus on the Basics</p></div>
                    <div className="flex gap-5 items-center"><BsCheckCircle className="text-[#493ae3] text-[1.5rem]" /> <p className="text-[1.2rem] text-[#FF]">Focus on the Basics</p></div>
                </div>
                <p className="text-[#999] text-[1.1rem] w-10/12">Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing you eleifend dictum potenti mattis viverra quam lacus enim porttitor bibendum elit nisl cyber security.</p>
                <button type="button" className="btn bg-gradient-services rounded-lg w-3/12 text-[1.1rem] font-bold px-3 py-4 ">Read More</button>
            </div>
            <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/image.png"  className="cursor-pointer transition animation-all transform hover:scale-104 opacity-80 hover:opacity-100" />
        </div>
    );
}

const Reviews = () => {
    return(
        <>
        <div className="w-full relative pt-20 pb-10 bg-[url('http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/testi-bg-1.jpg')] bg-cover transform -translate-y-[12rem]">
            <div className="container grid grid-cols-2 items-start justify-between my-[10rem]">
                <div className="flex flex-col w-full gap-4">
                    <div className="text-[#493ae3]  flex gap-5 items-center mb-3">
                        <div className="bg-[#493ae3] rounded-full w-3 h-3"></div>
                        <span className="text-[1.3rem] font-bold">What Our Customars Say</span>
                    </div>
                    <h1 className="text-[3rem] mb-3 font-extrabold">What They Say About Us.</h1>
                    <p className="text-[#999999]">Productize alternative platforms through virtual competently morph answer economically sound markets customized bandwidth cyber security world in indeliver world the great.</p>
                    <div className="flex gap-10 items-center">
                        <div className=""><img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/quote-img.png" className="" /></div>
                        <div className="flex flex-col">
                            <span className="text-[2rem] font-extrabold text-[#FFF]">John Anderson</span>
                            <span className="text-[1rem] font-bold text-[#999] transform -translate-y-4">Web Developer</span>
                        </div>
                    </div>
                </div>
                <img src="https://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/07/testi-people.png" className="mx-auto" />
            </div>
            {/* <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/testi-bg-1.jpg" className="absolute w-full z-[1]" /> */}
        </div>
        </>
    );
}
const Obj_Team = [
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/team1.png",
        Name: "John Anderson",
        Text: "Security Technologist"
    },
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/team2.png",
        Name: "Makr Ruffalo",
        Text: "Security Executive"
    },
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/team3.png",
        Name: "Dave Dudley",
        Text: "Project Managar"
    },
    {
        Image: "http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/team4.png",
        Name: "Johan Roy",
        Text: "Security Technologist"
    }
]

const Team = ({obj}) => {

    return(
        <div className="w-full bg-[#0F1E32] translate -translate-y-[12rem] py-20">
        <div className="mx-auto text-center flex flex-col gap-2">
            <div className="text-[#493ae3]  flex gap-5 items-center justify-center">
                <div className="bg-[#493ae3] rounded-full w-3 h-3"></div>
                <span className="text-[1.1rem] font-bold">Team Members</span>
            </div>
            <h1 className="text-[2rem] mb-3 font-extrabold">Meet our Team</h1>
        </div>
        <div className="container grid grid-cols-4 justify-between items-center gap-4 mb-0 mt-10">
        {
            obj.map((item) => 
            
            <div className="bg-[#021327] border-0 hover:bg-gradient-team  rounded-lg flex flex-col items-center gap-0 p-10">
            <img src={item.Image} className="mb-5" />
            <div className="text-[1.4rem] leading-tight mb-1 p-0 m-0 font-bold">{item.Name}</div>
            <div className="text-[1.1rem] leading-tight text-[#999999] mb-5">{item.Text}</div>
            <div className="flex gap-2">
                <GrFacebook className="text-[#1f3654] cursor-pointer text-[1.9rem] hover:text-[#FFF] transition transition-all"/>
                {/* <FaInstagram className="text-[#1f3654] cursor-pointer text-[1.9rem] hover:text-[#FFF] transition transition-all"/> */}
            </div>
        </div>)
        
    }
      </div>
    </div>
       
    )
}

const Contact = () => {

    return(
        <div className="w-full bg-[#0F1E32] translate -translate-y-[12rem] py-20">
            <div className="container grid grid-cols-1 justify-between items-center p-10 rounded-lg my-[8rem] relative">
                <div className="z-[2] mx-auto flex gap-3 flex-col items-center justify-center w-full">
                    <h1 className="text-[2.3rem] font-extrabold">Let’s Talk About How Cane Help You</h1>
                    <h1 className="text-[2.3rem] font-extrabold">Securely Advance</h1>
                    <button className="bg-transparent border border-[1px] border-[#FFF] hover:border-[#000] hover:opacity-90 duration-500 hover:bg-[#cfcfcf] p-4 text-[1.2rem] hover:text-[#000] rounded-lg transform translate-y-10" type="button">Get Started Now</button>
                </div>
                <img src="http://wp.dreamitsolution.net/zomia-multipurpose/cyber-security/wp-content/uploads/2022/06/call-to-action-bg.jpg" className="absolute z-[1] w-full rounded-[1.5rem]" />
            </div>
        </div>
    );
}

const Tokens = () => {

    const TokensList = [
        {
            Name: "Bitcoin",
            Symbol: "BTC",
            Price: 24000.24,
            Image: images.btc,
            Chart: images.chart1,
            Increase: 2.5
        },
        {
            Name: "Ethereum",
            Symbol: "ETH",
            Price: 2200.24,
            Image: images.eth,
            Chart: images.chart2,
            Increase: -2.5
        },
        {
            Name: "Binance Coin",
            Symbol: "BNB",
            Price: 335.65,
            Image: images.bnb,
            Chart: images.chart1,
            Increase: 6.5
        },
        {
            Name: "Ethereum",
            Symbol: "ETH",
            Price: 2200.24,
            Image: images.eth,
            Chart: images.chart2,
            Increase: -2.5
        },
        {
            Name: "Binance Coin",
            Symbol: "BNB",
            Price: 335.65,
            Image: images.bnb,
            Chart: images.chart1,
            Increase: 6.5
        }
    ]
    return(
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    {TokensList.map((item, i) => (
                        <div className={`bg-[rgba(47,50,65,.5)] col-span-4 p-6 backdrop-blur-[2px] ${(i == 0) && 'rounded-tl-[2rem]'} ${(i == 3) && 'rounded-bl-[1rem]'} ${(i == 2) && 'rounded-tr-[2rem]'} ${(i == TokensList.length) && 'rounded-br-[2rem]'} `} key={i}>

                        <div className="flex justify-between items-start">
                            <img src={item.Image} alt="Logo" className="w-[45px] mr-5" />
                            <div className="flex-1">
                                <span className="text-[#a5adcf] text-base block">{item.Name}</span>
                                <span className="text-2xl block font-extrabold">USD {CurrencyFormat(item.Price)}</span>
                            </div>
                            <span className="text-[#a5adcf]">{item.Symbol}</span>
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <img src={item.Chart} alt="Chart" />
                            <div className="flex gap-1 items-center justify-center">
                                <img src={item.Increase > 0 ? images.arrow_up : images.arrow_down} alt="Chart" />
                                <span className={`${item.Increase > 0 ? 'text-[#11cabe]' : 'text-[#fa2256]'}`}>{item.Increase}%</span>
                            </div>
                        </div>
                    </div>

                    ))}
                    <div className="bg-[rgba(47,50,65,.5)] col-span-4 p-6 filter-[blur(2px)] flex items-center justify-center">
                        <button type="button" className="btn-gray transform -translate-y-2">View All Assets</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Card = () => {
    return(
        <section className="relative w-full ">
     
            <img className="absolute overflow-hidden right-0 my-0 mx-auto pointer-events-none z-[-10] opacity-75 block w-[80%]" src={images.bg6} alt="Background Pattern Feature" />
            <img className="absolute overflow-hidden right-0 my-0 mx-auto pointer-events-none z-[-1] block w-[70%]" src={images.bg5} alt="Background Pattern Feature" />
            <div className="container mt-[10rem]">
                <div className="mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl w-2/5 text-center font-extrabold leading-tight mx-auto">One click, instant payout with credit or debit card.</h1>
                    <p className="fb-lg mx-auto w-2/5 text-1xl my-5 text-center">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</p>
                </div>

                <div className="grid grid-cols-12 gap-10 w-10/12 mx-auto mt-10">

                    <div className="bg-[rgba(47,50,65,.5)]  w-full col-span-4 p-6 backdrop-blur-[2px] rounded-lg">
                        <div className="flex flex-col items-center justify-center gap-7 mb-10">
                            <div className="bg-[#34384c] rounded-full p-5 mb-5 backdrop-blur-3xl my-3">
                                <img src={images.btc} alt="Logo" className="" />
                            </div>
                            <h1 className="text-3xl block text-center font-extrabold">Portfolio Manager</h1>
                            <h5 className="text-[#a5adcf] leading-tight block text-center">Buy and sell popular digital currencies, keep track of them in the one place.</h5>
                        </div>
                    </div>

                    <div className="bg-[rgba(47,50,65,.5)]  w-full col-span-4 p-6 backdrop-blur-[2px] rounded-lg transform translate-y-12">
                        <div className="flex flex-col items-center justify-center gap-7 mb-10">
                            <div className="bg-[#34384c] rounded-full p-5 mb-5 backdrop-blur-3xl">
                                <img src={images.eth} alt="Logo" className="" />
                            </div>
                            <h1 className="text-3xl block text-center font-extrabold">Mobile Apps</h1>
                            <h5 className="text-[#a5adcf] leading-tight block text-center">Buy and sell popular digital currencies, keep track of them in the one place.</h5>
                        </div>
                    </div>

                    <div className="bg-[rgba(47,50,65,.5)]  w-full col-span-4 p-6 backdrop-blur-[2px] rounded-lg">
                        <div className="flex flex-col items-center justify-center gap-7 mb-10">
                            <div className="bg-[#34384c] rounded-full p-5 mb-5 backdrop-blur-3xl">
                                <img src={images.bnb} alt="Logo" className="" />
                            </div>
                            <h1 className="text-3xl block text-center font-extrabold">Vault protection</h1>
                            <h5 className="text-[#a5adcf] leading-tight block text-center">For added security, store your funds in a vault with time delayed withdrawals.</h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const Buy = () => {
    return(
        <section className="mx-auto container mt-[10rem]">
            <div className="text-center w-1/2 mx-auto">
                <h1 className="text-5xl font-extrabold mb-4 leading-tight">One click, instant payout with credit or debit card.</h1>
                <h5 className="text-1xl">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</h5>
            </div>
            <div className="relative w-[25rem] mx-auto border-0 mt-10">
                <img src={images.card} alt="card" className="absolute mx-auto transform -translate-x-[7rem] translate-y-[3.5rem]" />
                <div className="bg-[rgba(47,50,65,.5)] p-6 backdrop-blur-[25px] rounded-[1.25rem]">
                    <div className="flex justify-between w-8/12 mx-auto">
                        <button type="button" className="text-[#1a82ff]">Comprar</button>
                        <span className="bg-[#34384c] w-[1px]  h-[2rem]">&nbsp;</span>
                        <button type="button" className="text-[#5d6588] hover:text-[#1a82ff] transition-all">Vender</button>
                    </div>
                    <div className="w-full mx-auto border-0 mt-[2rem]">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <span className="text-1xl leading-tight">1 BTC roughtly</span>
                            <span className="text-2xl font-extrabold leading-tight">24,000.45 <span className="text-sm text-[#5d6588]">USD</span></span>
                        </div>
                        <div className="mt-[2rem] w-full">
                            <div className="bg-[rgba(47,50,65,.5)] py-[1rem] px-[2rem] rounded-[6.25rem] flex w-full border-[1px] border-[#34384c] justify-between items-center ">
                                <input type="text" className="appearance-none bg-transparent w-24 outline-none text-2xl mr-5" placeholder='0' />
                                <span className="bg-[#34384c] w-[1px]  h-[2rem]">&nbsp;</span>
                                <div className="">
                                    <button type="button" className="flex items-center justify-center gap-3 hover:text-[#1a82ff]">
                                        <img src={images.eth} alt="Logo" className="w-[1.7rem]" />
                                        <span>USD</span>
                                        <MdArrowDropDown className="text-2xl transform -translate-x-1" />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-[rgba(47,50,65,.5)] py-[1rem] px-[2rem] rounded-[6.25rem] flex w-full border-[1px] border-[#34384c] mt-10 justify-between items-center ">
                                <input type="text" className="appearance-none bg-transparent w-24 outline-none text-2xl mr-5" placeholder='0' />
                                <span className="bg-[#34384c] w-[1px]  h-[2rem]">&nbsp;</span>
                                <div className="">
                                    <button type="button" className="flex items-center justify-center gap-3 hover:text-[#1a82ff]">
                                        <img src={images.btc} alt="Logo" className="w-[1.7rem]" />
                                        <span>BTC</span>
                                        <MdArrowDropDown className="text-2xl transform -translate-x-1" />
                                    </button>
                                </div>
                            </div>
                            <button className="btn text-[1.1rem] w-full font-extrabold px-10 py-6 mt-10 mb-5">Comprar</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

const WhyUs = () => {
    return(
        <section>
            <div className="relative w-full">
                <img className="absolute transform -translate-y-[80rem] rotate-180 left-0 my-0 mx-auto pointer-events-none z-[-10] opacity-75" src={images.bg6} alt="Background Pattern Feature" />
                <img src={images.bg7} alt="bg" className="absolute transform w-1/3 translate-y-[45rem] " />
                <img src={images.bg8} alt="bg" className="absolute " />
            </div>
            <div className="mx-auto container mt-[10rem]">
                <div className="text-center w-1/2 mx-auto">
                <h1 className="text-5xl font-extrabold mb-4 leading-tight">We are the most trusted cryptocurrency platform.</h1>
                <h5 className="text-1xl">We believe Cryptolly is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</h5>
            </div>
            
            <div className="grid grid-cols-12 justify-between items-center mx-auto gap-3 w-8/12 mt-[5rem]">
                <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="bg-[rgba(47,50,65,.5)] w-fit rounded-[0.75rem] p-10 mb-5 backdrop-blur-3xl">
                    <img src={images.img3} alt="Logo" className="" />
                </div>
                <span className="text-2xl font-extrabold mb-4 leading-tight mt-5">Clarity</span>
                <p className="text-base leading-tight text-[#a5adcf] text-center p-3">We help you make sense of the coins, the terms, the dense charts and market changes.</p>

                </div>
                <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="bg-[rgba(47,50,65,.5)] w-fit rounded-[0.75rem] p-10 mb-5 backdrop-blur-3xl">
                    <img src={images.img4} alt="Logo" className="" />
                </div>
                <span className="text-2xl font-extrabold mb-4 leading-tight mt-5">Confidence</span>
                <p className="text-base leading-tight text-[#a5adcf] text-center p-3">Our markets are always up to date, sparking curiosity with</p>

                </div>
                <div className="col-span-4 flex flex-col items-center justify-center">
                <div className="bg-[rgba(47,50,65,.5)] w-fit rounded-[0.75rem] p-10 mb-5 backdrop-blur-3xl">
                    <img src={images.img5} alt="Logo" className="" />
                </div>
                <span className="text-2xl font-extrabold mb-4 leading-tight mt-5">Community</span>
                <p className="text-base leading-tight text-[#a5adcf] text-center p-3">We supports the crypto community, putting data in the hands which need it most.</p>

                </div>
            </div>

            </div>
        </section>
    );
}

const Download = () => {
    return(
        <section>
            <div className="relative w-full">
                <img className="absolute overflow-hidden right-0 my-0 mx-auto pointer-events-none z-[-10] opacity-75 block w-[60%] -translate-y-[30rem]" src={images.bg6} alt="Background Pattern Feature" />
                <img className="absolute overflow-hidden right-0 my-0 mx-auto pointer-events-none z-[-1] block w-[40%] transform scale-180" src={images.bg5} alt="Background Pattern Feature" />
            </div>
            <div className="mx-auto container mt-[10rem]">
                <div className="text-center w-6/12 mx-auto">
                    <h1 className="text-5xl font-extrabold mb-4 leading-tight">Build your crypto portfolio anywhere.</h1>
                    <h5 className="text-1xl mx-auto w-8/12">A powerful cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.</h5>
                </div>
            </div>
                <img src={images.img6} className="w-8/12 mx-auto mt-[2rem]" alt="image" />
                <div className="mx-auto block p-5 text-1xl w-6/12 text-center">
                    <span>Get the Cryptolly Wallet Mobile App Now!</span>
                    <div className="flex justify-around w-8/12 mx-auto">

                        <button type="button" className="flex btn-gray py-3">
                        <div className="mx-3"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1166_375)"><path d="M23.8517 21.3902C27.9092 19.3087 30.9851 17.7226 31.2502 17.5993C32.0984 17.1779 32.9742 16.0626 31.2502 15.1962C30.6936 14.9238 27.6967 13.3871 23.8517 11.4053L18.5215 16.4348L23.8517 21.3901V21.3902Z" fill="#FFD900"></path><path d="M18.521 16.4346L1.54883 32.4162C1.9472 32.4655 2.39695 32.3668 2.9272 32.0945C4.04045 31.5251 15.842 25.5037 23.8512 21.3912L18.521 16.4346Z" fill="#F43249"></path><path d="M18.5219 16.4351L23.8522 11.4303C23.8522 11.4303 4.12194 1.37006 2.92819 0.776189C2.47844 0.527313 1.97444 0.453386 1.52344 0.527313L18.5219 16.4351Z" fill="#00EE76"></path><path d="M18.5214 16.437L1.52287 0.529297C0.833 0.678319 0.25 1.24778 0.25 2.41239V30.5356C0.25 31.6015 0.701125 32.3693 1.54925 32.4433L18.5214 16.437Z" fill="#00D3FF"></path></g><defs><clipPath id="clip0_1166_375"><rect width="32" height="32" fill="white" transform="translate(0.25 0.5)"></rect></clipPath></defs></svg></div>
                        <div className="flex flex-col mr-5 justify-start items-start">
                            <span className="text-[.6rem]">Download on the</span>
                            <span className="font-extrabold">Google Play</span>
                        </div>
                        </button>
                        <button type="button" className="flex btn-gray py-3">
                        <div className="mx-3">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1166_319)"><path d="M7.758 0.5H25.742C29.6125 0.5 32.75 3.6375 32.75 7.508V25.492C32.75 29.3625 29.6125 32.5 25.742 32.5H7.758C3.8875 32.5 0.75 29.3625 0.75 25.492V7.508C0.75 3.6375 3.8875 0.5 7.758 0.5Z" fill="url(#paint0_linear_1166_319)"></path><path d="M11.0045 23.7266L11.0075 23.7276L9.91333 25.6226C9.51395 26.3143 8.62945 26.5513 7.9377 26.152C7.24608 25.7526 7.00895 24.8681 7.40833 24.1763L8.21433 22.7803L8.2917 22.6463C8.42983 22.4478 8.7707 22.1051 9.45258 22.1696C9.45258 22.1696 11.0572 22.3437 11.1733 23.1777C11.1733 23.1777 11.1891 23.4521 11.0045 23.7266ZM26.5223 18.8866H23.1106C22.8782 18.871 22.7768 18.788 22.7368 18.7397L22.7343 18.7353L19.0822 12.4096L19.0775 12.4127L18.8585 12.0987C18.4995 11.5497 17.9295 12.9537 17.9295 12.9537C17.2488 14.5182 18.0261 16.2968 18.297 16.8345L23.3697 25.6207C23.769 26.3123 24.6535 26.5495 25.3453 26.15C26.037 25.7506 26.2741 24.8661 25.8746 24.1743L24.6062 21.9773C24.5816 21.9241 24.5388 21.7796 24.799 21.779H26.5223C27.3211 21.779 27.9686 21.1315 27.9686 20.3327C27.9686 19.534 27.3211 18.8865 26.5223 18.8865V18.8866ZM19.8956 20.8526C19.8956 20.8526 20.0777 21.779 19.3731 21.779H6.7607C5.96195 21.779 5.31445 21.1315 5.31445 20.3327C5.31445 19.534 5.96195 18.8865 6.7607 18.8865H10.0032C10.5267 18.8562 10.6507 18.554 10.6507 18.554L10.6537 18.5555L14.8862 11.2245L14.885 11.2242C14.9621 11.0826 14.8978 10.9487 14.8867 10.9276L13.4888 8.50645C13.0895 7.81483 13.3265 6.9302 14.0182 6.53095C14.71 6.13158 15.5945 6.36845 15.9938 7.0602L16.6421 8.18308L17.2892 7.0622C17.6886 6.37058 18.5731 6.13345 19.2648 6.53295C19.9566 6.93233 20.1936 7.8167 19.7942 8.50845L13.9045 18.7097C13.8787 18.7718 13.8708 18.8693 14.0625 18.8865H17.583L17.5837 18.9208C17.5837 18.9208 19.6185 18.9525 19.8956 20.8526Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_1166_319" x1="16.75" y1="0.5" x2="16.75" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#17C9FB"></stop><stop offset="1" stopColor="#1A74E8"></stop></linearGradient><clipPath id="clip0_1166_319"><rect width="32" height="32" fill="white" transform="translate(0.75 0.5)"></rect></clipPath></defs></svg>                            </div>
                        <div className="flex flex-col mr-5 justify-start items-start">
                            <span className="text-[.6rem]">Download on the</span>
                            <span className="font-extrabold">Apple Store</span>
                        </div>
                        </button>
                    </div>

                </div>

        </section>
    );
}

const Earn = () => {
    return(
        <section>
            <div className="bg-[rgba(47,50,65,.5)] backdrop-blur-[8px] rounded-[.75rem] p-10 w-10/12 mx-auto text-center mt-[4rem]">
                <h5 className="text-2xl mx-auto w-8/12 leading-tight mb-3">Ready to start trading cryptocurrency?</h5>
                <h1 className="text-4xl font-extrabold mb-4 leading-tight">New users can earn up to $80 in crypto rewards.</h1>
                <div className="border-[1px] mt-[3rem] mb-[2rem] border-[#34384c]  bg-[rgba(47,50,65,.5)] p-2 w-6/12 mx-auto rounded-[6.25rem] leading-[1.5rem] flex justify-between items-center">
                    <input type="text" className="appearance-none bg-transparent w-full px-3 outline-none" placeholder='Enter your e-mail address' />
                    <button type="button" className="btn mt-0">Submit</button>
                </div>
            </div>
        </section>
    );    
}

const Footer = () => {
    return(
        <footer className="w-full bg-[#0F1E32]  py-20">

            <div className="container mx-auto ≈ ">
                <div className="grid grid-cols-12 justify-between items-start">
                    <div className="flex-col gap-2 col-span-4 border-0">
                    <a className="flex gap-2 items-center" href="#">
                        <img className="w-[200px]" src={images.logo} alt="C" />
                    </a>
                    <div className="mt-3 text-[1.1rem]">Your best crypto partner.</div>
                    <div className="flex gap-5 justify-between items-center w-1/2 mt-5 text-[#606688] text-5xl">
                        <FaWhatsapp className="hover:text-hover cursor-pointer transform transition-all hover:-translate-y-[0.1rem]" />
                        <FaTelegramPlane className="hover:text-hover transform cursor-pointer transition-all hover:-translate-y-[0.1rem]" />
                        <FaInstagram className="hover:text-hover transform transition-all cursor-pointer hover:-translate-y-[0.1rem]" />
                    </div>
                    </div>
                    <div className="border-0 col-span-4">
                        <div className="text-2xl">Quick Links</div>
                        <ul className="grid grid-cols-2 gap-3 mt-5">
                        <a href="" className="text-[#a5adcf] hover:text-hover text-1xl transform transition-all hover:-translate-y-[0.1rem]">Trades</a>
                        <a href="" className="text-[#a5adcf] hover:text-hover text-1xl transform transition-all hover:-translate-y-[0.1rem]">Buy / Sell</a>
                        <a href="" className="text-[#a5adcf] hover:text-hover text-1xl transform transition-all hover:-translate-y-[0.1rem]">Pricing</a>
                        <a href="" className="text-[#a5adcf] hover:text-hover text-1xl transform transition-all hover:-translate-y-[0.1rem]">Wallet</a>
                        <a href="" className="text-[#a5adcf] hover:text-hover text-1xl transform transition-all hover:-translate-y-[0.1rem]">Company</a>
                        </ul>
                    </div>
                    <div className="col-span-4">
                        <div className="text-2xl">Submit for updates.</div>
                        <div className="text-sm text-[#a5adcf] leading-tight w-12/12 mt-5">Subscribe to get update and notify our exchange and products</div>
                        <div className="">
                            <div className="mx-0 border-[1px] mt-[3rem] mb-[2rem] border-[#34384c]  bg-[rgba(47,50,65,.5)] p-2 w-12/12 rounded-[6.25rem] leading-[1.5rem] flex justify-between items-center">
                                <input type="text" className="appearance-none bg-transparent w-full px-3 outline-none text-[.8rem]" placeholder='Enter your e-mail address' />
                                <button type="button" className="btn btn-gradient-team mt-0 text-[.8rem]">Send</button>
                            </div>               
                        </div>
                    </div> 
                </div>

            </div>
        </footer>
    );
}

const Home = () => {
    return(
        <>
        <Navigator />
        <Hero />
        <Services />
        <Security />
        <Options obj={Obj_Options} />
        <Business />
        <Logs />
        <Reviews />
        <Team obj={Obj_Team} />
        <Contact />
        <Footer /> 
        {/* <Tokens /> */}
        {/* <Card />
        <Buy />
        <WhyUs />
        <Download />
        <Earn />*/}
        </>

    )
}
export default Home;