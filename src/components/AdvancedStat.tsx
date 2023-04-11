import { z } from 'zod';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import brandRecIcon from '../assets/icon-brand-recognition.svg';
import detailIcon from '../assets/icon-detailed-records.svg';
import customizeIcon from '../assets/icon-fully-customizable.svg';
import bgShortenDesktop from '../assets/bg-shorten-desktop.svg';
import bgShortenMobile from '../assets/bg-shorten-mobile.svg';

import useWindowWide from '../hooks/useWindowWidth';
import { UrlData } from '../App';
import Link from './Link';

interface Props {
    onFormSubmit: (url: string) => void;
    links: UrlData[];
}

const FormSchema = z.object({
	url: z.string().url({ message: 'Please add a link' }),
});

type FormData = z.infer<typeof FormSchema>;

const AdvancedStat = ({ onFormSubmit, links }: Props) => {
	const isWideScreen = useWindowWide(976);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
    } = useForm<FormData>({ resolver: zodResolver(FormSchema) });
    
    const handleQuery = (data: FieldValues) => {
        console.log(data)
        onFormSubmit(data.url)
        reset()
    }

	return (
        <section className='bg-slate-100 pb-40 px-2'>
            

			{/* url shortener elements container */}
			<div className='w-[90%] max-w-5xl mx-auto'>
				<div
					style={{
						backgroundImage: `url(${
							isWideScreen ? bgShortenDesktop : bgShortenMobile
						})`,
					}}
					className='inpuCtn bg-center bg-no-repeat bg-cover bg-VdarkViolet rounded-md py-5 lg:py-10 lg:px-10 relative top-[-5rem] lg:top-[-4rem]'>
                    <form
                        onSubmit={handleSubmit(handleQuery)}
						action='#'
						method='post'
						className='w-[90%] mx-auto flex flex-col lg:flex-row gap-y-8 justify-between relative'>
                        <input
                            {...register('url')}
							className={`bg-white border-2 rounded p-3 outline-none lg:w-[78%] ${errors.url && 'border-red placeholder:text-red'}`}
							placeholder='Shorten a link here...'
                        />
                        {errors.url && <p className="text-red absolute top-[3.2rem] text-sm italic">{errors.url.message}</p>}
						<button className='bg-cyan text-white py-3 px-9 rounded-md'>
							Shorten It!
						</button>
					</form>
                </div>
                

                {/* Shortened links componenet */}
				<div className='relative top-[-4rem] lg:top-[-3rem] flex flex-col gap-y-8'>
                    {links.map(link => (
                        <Link link={{ ...link }} key={link.full_short_link} />
                    ))}
                </div>
                

			</div>

			{/* rest of section content */}
			<div className='header text-center w-[90%] max-w-xl mx-auto mb-20 mt-10'>
				<h2 className='font-bold text-2xl py-3'>Advanced Statistics</h2>
				<p className='text-greyishV'>
					Track how your links are performing accross the web with out advanced
					statistics dashboard.
				</p>
			</div>

			<div className='cardsCtn mt-14 flex flex-col lg:flex-row gap-x-8 gap-y-20 justify-center items-center relative'>
				<div className='card max-w-xs z-30 bg-white rounded-md w-[85%] pt-12 pb-9 px-6 text-center lg:text-left relative'>
					<img
						
						className='absolute lg:right-52 bg-darkViolet rounded-full p-4 top-[-2.2rem] inset-x-0 mx-auto'
						src={brandRecIcon}
						alt='icon '
					/>
					<h3 className='font-bold text-xl py-3'>Brand Recognition</h3>
					<p className='text-greyishV'>
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instil confidence in your content
					</p>
				</div>

				<div className='card max-w-xs z-30 bg-white rounded-md w-[85%] pt-12 pb-9 px-6 text-center lg:text-left relative lg:translate-y-10'>
					<img
						
						className='absolute lg:right-52 bg-darkViolet rounded-full p-4 top-[-2.2rem] inset-x-0 mx-auto'
						src={detailIcon}
						alt='icon '
					/>
					<h3 className='font-bold text-xl py-3'>Detailed Records</h3>
					<p className='text-greyishV'>
						Gain insights into who is clicking your links. Knowing when and
						where people enegage with your content helps inform better
						decisions.
					</p>
				</div>

				<div className='card max-w-xs z-30 bg-white rounded-md w-[85%] pt-12 pb-9 px-6 text-center lg:text-left relative lg:translate-y-20'>
					<img
						
						className='absolute lg:right-52 bg-darkViolet rounded-full p-3 top-[-2.2rem] inset-x-0 mx-auto'
						src={customizeIcon}
						alt='icon '
					/>
					<h3 className='font-bold text-xl py-3'>Fully Customizable</h3>
					<p className='text-greyishV'>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>
				<hr className='border-4 border-cyan w-full rotate-90 lg:rotate-0 lg:w-1/2 absolute' />
			</div>
		</section>
	);
};

export default AdvancedStat;
