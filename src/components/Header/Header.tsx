import React from 'react';
import './Header.styles.sass';

import { Menu, Back } from 'components/svg';

export default function Header() {
	return (
		<header className="header">
			<div className="header-wrapper">
				<div className="header__buttons header-buttons-wrapper">
					<Menu />
					<Back />
				</div>
				<div className="header__tabs header-tabs">
					<div className="header-tabs__item">
					Просмотр
					</div>
					<div className="header-tabs__item header-tabs__item--active">
					Управление
					</div>
				</div>
			</div>
		</header>
	)
}
