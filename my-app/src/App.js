import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

//Императивный стиль
const yearNow = new Date().getFullYear();

function Creation({ logo, year }) {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'h1',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit',
				createElement('code', null, 'src/App.js'),
				'and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: 'blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, year),
		),
	);
}

export const App = () => {
	return createElement(Creation, { logo: logo, year: yearNow });
};
