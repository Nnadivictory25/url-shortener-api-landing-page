
import bgImgMobile from '../assets/bg-boost-mobile.svg'
import bgImgDesktop from '../assets/bg-boost-desktop.svg'
import useWindowWide from '../hooks/useWindowWidth';

const Boost = () => {
    const isWideScreen = useWindowWide(976)

    return (
        <section style={{backgroundImage: `url(${isWideScreen ? bgImgDesktop : bgImgMobile})`}} className='bg-center bg-no-repeat bg-cover bg-darkViolet text-white'> 
            <div className="text-center py-14">
                <h2 className='text-2xl font-bold py-3 tracking-wide'>Boost your links today</h2>
                <button className='text-white bg-cyan py-3 px-9 rounded-full'>
					Get Started
				</button>
            </div>
        </section>
    );
};

export default Boost;