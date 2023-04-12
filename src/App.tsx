import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdvancedStat from './components/AdvancedStat';
import Boost from './components/Boost';
import Footer from './components/Footer';

interface urlDataFetch {
	result: {
		full_short_link: string;
		original_link: string;
	};
}

export interface UrlData {
	full_short_link: string;
	original_link: string;
}

interface UrlQuery {
	url: string;
}

function App() {
	const [links, setLinks] = useState<UrlData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const data = localStorage.getItem('links');

		const storedLinks = data ? JSON.parse(data) : [];
		console.log(storedLinks);
		storedLinks.length > 0 && setLinks(storedLinks);
	}, []);

	const getUrlData = (url: string) => {
		const controller = new AbortController();

		axios
			.get<urlDataFetch>('https://api.shrtco.de/v2/shorten', {
				signal: controller.signal,
				params: {
					url: url,
				},
			})
			.then((res) => {
				const { data } = res;
				const { original_link, full_short_link } = data.result;
				setLinks([{ original_link, full_short_link }, ...links]);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err.message !== 'canceled') {
					alert('something went wrong ' + err.message);
					setError(true);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		localStorage.setItem('links', JSON.stringify(links));
	}, [links]);

	const handleSubmit = (url: string) => {
		console.log(url);
		getUrlData(url);
	};

	return (
		<main>
			<header>
				<Navbar />
			</header>
			<Hero />
			<AdvancedStat onFormSubmit={handleSubmit} links={links} />
			<Boost />
			<Footer />
		</main>
	);
}

export default App;