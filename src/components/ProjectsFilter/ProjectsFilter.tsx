import React from 'react';
import './ProjectsFilter.styles.sass';

import { ChevronDown } from 'components/svg';

export default function ProjectsFilter () {
	return (<div className="projects-filter">
		<div>
			<div className="projects-filter__title">Название проекта</div>
			<div className="projects-filter__abbreviation">Аббревиатура</div>
		</div>
		<ChevronDown />
	</div>)
}