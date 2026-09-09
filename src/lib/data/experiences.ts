import type { Experience } from './types';

export const experiences: Experience[] = [
	{
		institution: 'Microsoft Research',
		location: 'Redmond, WA',
		position: 'Senior Software Engineer',
		group: 'AI Frontiers',
		year: 'August 2025 - Present',
		description: 'Research engineer working on AI agents in applied research group.',
		institutionUrl: 'https://www.microsoft.com/en-us/research/',
		groupUrl: 'https://www.microsoft.com/en-us/research/group/hax-team/',
		type: 'industry'
	},
	{
		institution: 'Microsoft Research',
		location: 'Redmond, WA',
		position: 'Research Intern',
		group: 'AI Frontiers - HAX Group',
		year: 'Summer 2024',
		description: 'Research intern working on developer tools for multi-agent AI systems.',
		mentors: ['Gagan Bansal', 'Victor Dibia'],
		institutionUrl: 'https://www.microsoft.com/en-us/research/',
		groupUrl: 'https://www.microsoft.com/en-us/research/group/hax-team/',
		type: 'industry'
	},
	{
		institution: 'Databricks',
		location: 'San Francisco, CA',
		position: 'Software Engineering Contractor',
		year: 'Summer 2022',
		description:
			'Designed and delivered production feature for creating dashboards by specifying fields of interest in a dataset.',
		mentors: ['Kanit Wongsuphasawat'],
		institutionUrl: 'https://databricks.com',
		type: 'industry'
	},
	{
		institution: 'Microsoft Research',
		location: 'Redmond, WA',
		position: 'Research Intern',
		group: 'VIDA Group',
		year: 'Summer 2021',
		description:
			'Research intern working on data science tools. Lead project around reuse and sharing in data science, published at ICSE 2022. Co-author on project around visualizing data frame differences published at CHI 2022.',
		mentors: ['Steve Drucker', 'Rob DeLine'],
		institutionUrl: 'https://www.microsoft.com/en-us/research/',
		groupUrl: 'https://www.microsoft.com/en-us/research/group/vida/',
		type: 'industry'
	},
	{
		institution: 'Carnegie Mellon University',
		location: 'Pittsburgh, PA',
		position: 'Graduate Researcher',
		group: 'Data Interaction Group (DIG)',
		year: 'August 2020 - June 2025',
		description:
			'Member of the DIG research group, working on novel data visualizations, ML interpretation techniques, and interactive data systems.',
		mentors: ['Dominik Moritz', 'Adam Perer'],
		institutionUrl: 'https://www.hcii.cmu.edu',
		groupUrl: 'https://dig.cmu.edu',
		type: 'academic'
	},
	{
		institution: 'Georgia Institute of Technology',
		location: 'Atlanta, GA',
		position: 'Undergraduate Researcher',
		group: 'Polo Club of Data Science',
		year: 'January 2019 - May 2020',
		description:
			'Member of the Polo Club of Data Science working on novel data visualizations to find fairness issues in Machine Learning models',
		mentors: ['Duen Horng (Polo) Chau'],
		institutionUrl: 'http://gatech.edu',
		groupUrl: 'http://cse.gatech.edu',
		type: 'academic'
	},
	{
		institution: 'Georgia Institute of Technology',
		location: 'Atlanta, GA',
		position: 'Undergraduate Researcher',
		group: 'Automated Algorithm Design',
		year: 'January 2018 - May 2019',
		description:
			'Worked on EMADE algorithm design engine to implement sentiment analysis pipeline to analyze news articles to aid in predicting stock price movements using genetic algorithms. Led project to visualize the genetic algorithm evolution process.',
		mentors: ['Jason Zutty', 'Greg Rohling'],
		institutionUrl: 'http://gatech.edu',
		groupUrl: 'https://www.vip.gatech.edu/teams/automated-algorithm-design',
		type: 'academic'
	},
	{
		institution: 'Point72 Asset Management',
		location: 'New York, NY',
		position: 'Data Analytics Intern',
		group: 'Market Intelligence Group',
		year: 'Summer 2019',
		description:
			'Worked as Data Scientist in alternative data space to clean, model, and understand large datasets',
		mentors: ['Trevor Rempel'],
		institutionUrl: 'https://www.point72.com',
		groupUrl: 'https://www.point72.com/market-intelligence/',
		type: 'industry'
	},
	{
		institution: 'Ultimate Software',
		location: 'Weston, FL',
		position: 'Software Development Intern',
		group: 'Innovation Strategies Team',
		year: 'Summer 2018',
		description:
			'Designed and developed Slack app to integrate with the UltiPro HR management tool. App published to Slack app store.',
		mentors: ['Joseph Cutrono'],
		institutionUrl: 'https://www.ultimatesoftware.com',
		groupUrl: 'https://www.ultimatesoftware.com',
		type: 'industry'
	},
	{
		institution: 'The Home Depot',
		location: 'Atlanta, GA',
		position: 'Software Development Intern',
		year: 'Summer 2015',
		description:
			'Developed web app for tracking candidate progress throughout hiring process for internal HR use.',
		institutionUrl: 'https://corporate.homedepot.com',
		groupUrl: 'https://corporate.homedepot.com',
		type: 'industry'
	}
];
