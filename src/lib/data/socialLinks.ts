import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
	faAddressCard,
	faEnvelope,
	faGraduationCap,
	faHome
} from '@fortawesome/free-solid-svg-icons';
import type { SocialLink } from './types';

export const socialLinks: SocialLink[] = [
	{
		id: 'home',
		description: 'willepperson.com',
		color: '#515151',
		icon: faHome,
		url: '/',
		onHomepage: false,
		cvGroup: 1
	},
	{
		id: 'email',
		description: 'willepp@live.com',
		color: '#515151',
		icon: faEnvelope,
		url: 'mailto:willepp@live.com',
		onHomepage: true,
		cvGroup: 1
	},
	{
		id: 'twitter',
		description: '@w_epperson',
		color: '#1da1f2',
		icon: faTwitter,
		url: 'https://twitter.com/w_epperson',
		onHomepage: true,
		cvGroup: 2
	},
	{
		id: 'github',
		description: '@willeppy',
		color: '#6e5494',
		icon: faGithub,
		url: 'https://github.com/willeppy',
		onHomepage: true,
		cvGroup: 2
	},
	{
		id: 'scholar',
		description: 'Google Scholar',
		color: '#515151',
		icon: faGraduationCap,
		url: 'https://scholar.google.com/citations?user=jgBHxR4AAAAJ&hl=en',
		onHomepage: true,
		cvGroup: 2
	},
	{
		id: 'linkedin',
		description: 'LinkedIn',
		color: '#515151',
		icon: faLinkedinIn,
		url: 'https://www.linkedin.com/in/willepperson/',
		onHomepage: true,
		cvGroup: 1
	},
	{
		id: 'cv-web',
		description: "Here's my CV",
		color: '#515151',
		icon: faAddressCard,
		url: '/cv/',
		onHomepage: false
	}
];
