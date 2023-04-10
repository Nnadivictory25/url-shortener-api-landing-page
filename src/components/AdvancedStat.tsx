
import brandRecIcon from '../assets/icon-brand-recognition.svg'
import detailIcon from '../assets/icon-detailed-records.svg'
import customizeIcon from '../assets/icon-fully-customizable.svg'

const AdvancedStat = () => {

    return (
        <section className="bg-slate-100 py-40 px-2">
            <div className="header text-center w-[90%] max-w-xl mx-auto">
                <h2 className="font-bold text-2xl py-3">Advanced Statistics</h2>
                <p className="text-darkBlue">
                    Track how your links are performing accross the web with out advanced statistics dashboard.
                </p>
            </div>

            <div className="cardsCtn mt-14 flex flex-col lg:flex-row gap-x-8 gap-y-20 justify-center items-center relative">
                <div className="card max-w-xs z-30 bg-white rounded-md w-[85%] pt-12 pb-9 px-6 text-center relative">
                    <img className='absolute lg:right-52 bg-darkViolet rounded-full p-4 top-[-2.2rem] inset-x-0 mx-auto' src={brandRecIcon} alt="" />
                    <h3 className="font-bold text-xl py-2">Brand Recognition</h3>
                    <p className="text-darkBlue">
                        Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content
                    </p>
                </div>

                <div className="card max-w-xs z-30 bg-white rounded-md w-[85%] pt-12 pb-9 px-6 text-center relative lg:translate-y-10">
                    <img className='absolute lg:right-52 bg-darkViolet rounded-full p-4 top-[-2.2rem] inset-x-0 mx-auto' src={detailIcon} alt="" />
                    <h3 className="font-bold text-xl py-2">Detailed Records</h3>
                    <p className="text-darkBlue">
                        Gain insights into who is clicking your links. Knowing when and where people  enegage with your content helps inform better decisions.
                    </p>
                </div>

                <div className="card max-w-xs z-30 bg-white rounded-md w-[85%] pt-12 pb-9 px-6 text-center relative lg:translate-y-20">
                    <img className='absolute lg:right-52 bg-darkViolet rounded-full p-4 top-[-2.2rem] inset-x-0 mx-auto' src={customizeIcon} alt="" />
                    <h3 className="font-bold text-xl py-2">Fully Customizable</h3>
                    <p className="text-darkBlue">
                        Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </div>
                <hr className='border-4 border-cyan w-full rotate-90 lg:rotate-0 lg:w-1/2 absolute' />
            </div>
        </section>
    );
};

export default AdvancedStat;