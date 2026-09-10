import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Publication {
	id: string;
	title: string;
	authors: string[];
	venue: string;
	venueShorthand?: string;
	location?: string;
	year: number;
	date: string;
	type: 'thesis' | 'conference' | 'workshop' | 'preprint' | 'blog';
	url: `/papers/${string}`;
	image: string;
	featured: boolean;
	featureTitle: string;
	summary: string;
	caption: string;
	abstract: string;
	demo?: string;
	pdf?: string;
	blog?: string;
	recording?: string;
	code?: string;
	slides?: string;
	bibtex?: string;
	award?: string;
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
	icon: IconDefinition;
	url: string;
	onHomepage: boolean;
	cvGroup?: 1 | 2;
}
