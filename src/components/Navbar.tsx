import { useState } from 'react';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import useWindowWide from '../hooks/useWindowWidth';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const isWideScreen = useWindowWide(976)

	return (
		<>
			<nav className='flexCenter justify-between py-6 w-[90%] max-w-5xl mx-auto'>
				<div className='left flexCenter gap-x-9'>
					<img src={logo} alt='logo iamge' />
					<ul className='smHidden md:flexCenter gap-x-5 text-greyishV'>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
				</div>

				<div className='right'>
					<RxHamburgerMenu size={25} className='lgHidden cursor-pointer' onClick={() => setNavActive(!navActive)} />

					<div className='btns smHidden md:flexCenter gap-x-7'>
						<button className='text-greyishV hover:text-black transition-colors'>Login</button>
						<button className='text-white bg-cyan py-2 px-6 rounded-full hover:opacity-60'>
							Sign Up
						</button>
					</div>
				</div>
			</nav> 

            <div className={`mobileNav z-30 w-[90%] transition-all ax-w-5xl mx-auto absolute ${navActive ? 'active' : 'notActive'} ${isWideScreen && 'hidden'}`}>
				<div className='w-full rounded-lg bg-darkViolet text-white text-center font-bold py-8'>
					<ul className='flexCenter flex-col gap-y-7'>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
					<hr className='w-[90%] mx-auto border border-greyishV my-4 opacity-90' />

					<div className='flex flex-col gap-y-7'>
						<button className=''>Login</button>
						<button className='text-white bg-cyan py-3 px-6 rounded-full hover:opacity-60 w-[90%] mx-auto'>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
