import React from 'react';
import './Sidebar.styles.sass';

import { ProjectsFilter } from 'components/ProjectsFilter';
import { Project } from 'components/svg';

export default function Sidebar () {
	const projects = [
	{id: 0, title: 'По проекту'},
	{id: 1, title: 'Объекты'},
	{id: 2, title: 'РД'},
	{id: 3, title: 'МТО'},
	{id: 4, title: 'СМР'},
	{id: 5, title: 'График'},
	{id: 6, title: 'МиМ'},
	{id: 7, title: 'Вложения'},
	{id: 8, title: 'Капремонт'},
	{id: 9, title: 'Финансирование'},
	{id: 10, title: 'Панорамы'},
	{id: 11, title: 'Камера'},
	]

	return (
		<nav className="sidebar">
			<ProjectsFilter />
			{projects.map((project, i) => 
				<div key={project.id} 
					className={i === 4 ? "sidebar__project-item sidebar__project-item--active" : "sidebar__project-item"}
				>
					<Project />
				<div>{project.title}</div>
				</div>
			)}
		</nav>)
}