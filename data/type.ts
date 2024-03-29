import { StaticImageData } from 'next/image';

export interface project {
	name: string;
	deployed: string;
	github: string;
	thumbnail: Array<string>;
	description: string;
	techs: Array<techStack>;
}

export interface techStack {
	name: string;
	icon: StaticImageData;
}
