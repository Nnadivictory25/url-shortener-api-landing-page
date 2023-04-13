import { useState } from 'react';
import { UrlData } from '../App';
import useWindowWide from '../hooks/useWindowWidth';


interface Props {
	link: UrlData
}

const Link = ({ link }: Props) => {
	const isWideScreen = useWindowWide(976);
	const [isCopied, setIsCopied] = useState(false);

	async function copyTextToClipboard(text: string) {
	  if ('clipboard' in navigator) {
		return await navigator.clipboard.writeText(text);
	  } else {
		return document.execCommand('copy', true, text);
	  }
	}
  
	const handleCopyClick = (copyText: string) => {
	  copyTextToClipboard(copyText)
		.then(() => {
		  setIsCopied(true);
		  setTimeout(() => {
			setIsCopied(false);
		  }, 1500);
		})
		.catch((err) => {
		  console.log(err);
		});
	}


	return (
		<div className='rounded-md bg-white text-black lg:p-3 pb-4 lg:flexCenter flex justify-between flex-col lg:flex-row'>
			<div className='left p-3 w-[95%] lg:w-full overflow-hidden'>
				<p>{link.original_link}</p>
			</div>
			{!isWideScreen && <hr className='relative w-full'></hr>}
			<div className='right px-3 pt-3 lg:flexCenter gap-x-8'>
				<p className='shortLink text-cyan mb-3 lg:mb-0'>{link.full_short_link}</p>
				<button
					onClick={() => handleCopyClick(link.full_short_link)}
					className={`${isCopied ? 'bg-VdarkViolet pointer-events-none' : 'bg-cyan'} text-white py-3 lg:py-2 px-9 lg:px-7 rounded-md w-full`}>
					{isCopied ? 'Copied!' : 'Copy'}
				</button>
			</div>
		</div>
	);
};

export default Link;
