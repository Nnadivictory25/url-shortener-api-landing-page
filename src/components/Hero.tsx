import illustration from '../assets/illustration-working.svg';

const Hero = () => {
	return (
		<section className='lg:flex items-center flex-row-reverse gap-x-5 w-[90%] max-w-5xl mx-auto pb-28' >
			<img className='lg:w-[55%] md:mt-5' src={illustration} alt='working illustration' />

			<div className='writeUp mt-7 md:mt-0 text-center lg:text-left'>
				<h1 className='text-3xl lg:text-5xl font-bold'>More than just shorter links</h1>
				<p className='py-3 text-greyishV'>
					Build your brand's recognition and get detailed insights on how your
					links are performing
				</p>
				<button className='text-white bg-cyan py-3 px-9 rounded-full hover:opacity-60'>
					Get Started
				</button>
			</div>
		</section>
	);
};

export default Hero;
