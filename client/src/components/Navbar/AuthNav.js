import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faTint,
	faListUl,
	faCalendarAlt,
	faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

const Item = ({ text, icon, href }) => {
	return (
		<NavLink
			to={href}
			data-tip={text}
			className={({ isActive }) =>
				`${
					isActive
						? "bg-indigo-300 text-gray-900 focus:ring-indigo-300"
						: "hover:bg-gray-700 hover:text-white transition-color focus:ring-gray-200"
				} flex items-center space-x-2 text-gray-400 w-12 h-12 m-2 rounded-lg justify-center outline-none focus:ring-4 focus:ring-opacity-50 transition-colors`
			}
		>
			{icon}
		</NavLink>
	);
};

const AuthNav = () => {
	return (
		<nav className="w-16 bg-gray-900 border-r border-gray-800 fixed top-0 bottom-0 flex flex-col z-50">
			<Link
				to="/dashboard"
				className="font-bold text-xl text-white flex space-x-2 items-center justify-center p-4 outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 ring-inset"
			>
				<Logo />
			</Link>
			<Item
				text="Overview"
				icon={<FontAwesomeIcon icon={faHome} fixedWidth size="lg" />}
				href="/dashboard"
			/>
			<Item
				text="Calendar"
				icon={<FontAwesomeIcon icon={faCalendarAlt} fixedWidth size="lg" />}
				href="/calendar"
			/>
			<Item
				text="Daily Tasks"
				icon={<FontAwesomeIcon icon={faListUl} fixedWidth size="lg" />}
				href="/tasks"
			/>
			<Item
				text="Water"
				icon={<FontAwesomeIcon icon={faTint} fixedWidth size="lg" />}
				href="/water"
			/>
			<Item
				text="Journals"
				icon={<FontAwesomeIcon icon={faPencilAlt} size="lg" />}
				href="/journals"
			/>
			<ReactTooltip
				place="right"
				effect="solid"
				textColor="white"
				backgroundColor="rgba(55, 65, 81)"
				className="tooltip"
			/>
		</nav>
	);
};

export default AuthNav;
