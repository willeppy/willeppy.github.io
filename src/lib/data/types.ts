export interface Publication {
	id: string;
	title: string;
	authors: string[];
	venue: string;
	venueShorthand?: string;
	location?: string;
	year: number;
	date: string;
	type: 'thesis' | 'conference' | 'workshop';
	url: `/papers/${string}`;
	image: string;
	featured: boolean;
	featureOrder: number;
	featureTitle: string;
	summary: string;
	caption: string;
	abstract: string;
	comingSoon?: boolean;
	link?: string;
	demo?: string;
	pdf?: string;
	blog?: string;
	video?: string;
	recording?: string;
	preview?: string;
	talk?: string;
	code?: string;
	slides?: string;
	poster?: string;
	data?: string;
	bibtex?: string;
	award?: string;
	equalContribution?: string[];
}

export interface Degree {
	degree: string;
	institution: string;
	location: string;
	years: string;
	institutionUrl?: string;
	advisor?: string;
	coAdvisor?: string;
	description?: string[];
	coursework?: string[];
}

export interface Experience {
	institution: string;
	location: string;
	position: string;
	year: string;
	description: string;
	institutionUrl: string;
	type: 'industry' | 'academic';
	group?: string;
	groupUrl?: string;
	mentors?: string[];
}

export interface Talk {
	title: string;
	location: string;
	month: string;
	year: number;
}

export interface Award {
	name: string;
	description: string;
	year: number;
}

export interface Mentee {
	name: string;
	year: string;
	description: string;
}

export interface Teaching {
	institution: string;
	position: string;
	location: string;
	year: string;
	class: string;
	instructor: string;
	description: string;
	ta: boolean;
	institutionUrl?: string;
	classUrl?: string;
}

export interface Reviewer {
	conference: string;
	year: number;
}

export interface Activity {
	group: string;
	title: string;
	year: string;
	desc: string;
}

export interface Skill {
	name: string;
	type: 'lang' | 'fwork' | 'flang';
}

export interface SocialLink {
	id: string;
	description: string;
	color: string;
	class: string;
	url: string;
	onHomepage: boolean;
	cvGroup?: 1 | 2;
}
