import type { Degree } from './types';

export const education: Degree[] = [
	{
		degree: 'Ph.D. in Human Computer Interaction',
		institution: 'Carnegie Mellon University',
		location: 'Pittsburgh, PA',
		advisor: 'Dominik Moritz',
		coAdvisor: 'Adam Perer',
		years: 'August 2020 - June 2025',
		coursework: [
			'HCI Process and Theory',
			'Computational Medicine',
			'Human Judgement and Decision Making',
			'Causality and ML',
			'Advanced NLP'
		]
	},
	{
		degree: 'M.S. in Human Computer Interaction',
		institution: 'Carnegie Mellon University',
		location: 'Pittsburgh, PA',
		advisor: 'Dominik Moritz',
		coAdvisor: 'Adam Perer',
		years: 'August 2020 - May 2023'
	},
	{
		degree: 'B.S. in Computer Science',
		years: 'August 2016 — May 2020',
		institution: 'Georgia Institute of Technology',
		location: 'Atlanta, GA',
		description: ['GPA: 4.0, Summa Cum Laude, threads in Intelligence and Modeling/Simulation'],
		institutionUrl: 'https://www.gatech.edu/',
		coursework: [
			'Machine Learning',
			'Deep Learning',
			'Computer Vision',
			'Computer Architecture',
			'Algorithms',
			'Computer Simulation',
			'Information Visualization'
		]
	}
];
