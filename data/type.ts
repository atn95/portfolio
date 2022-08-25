import { StaticImageData } from 'next/image';

export interface project {
	name: string;
	deployed: string;
	github: string;
	thumbnail: string;
	description: string;
}

export interface techStack {
	name: string;
	icon: StaticImageData;
}
