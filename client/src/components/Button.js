import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Button = ({
	theme,
	children,
	square,
	icon,
	ghost,
	href,
	loading,
	wide,
	type = "button",
	lg = false,
	...rest
}) => {
	let color;

	switch (theme) {
		case "danger":
			color = "-red-";
			break;
		case "success":
			color = "-green-";
			break;
		case "primary":
			color = "-indigo-";
			break;
		case "warning":
			color = "-yellow-";
			break;
		default:
			color = "-gray-";
	}

	const disabled = "disabled:opacity-50 disabled:cursor-not-allowed";
	const focus = `outline-none focus:ring-4 focus:ring${color}300 focus:ring-opacity-50`;
	const hover = `hover:bg${color}200 hover:text-gray-900 hover:scale-110`;
	const size = `${square ? "w-10 h-10" : lg ? "px-8 py-4" : "px-4 py-2 h-10"} ${
		wide ? "w-full" : ""
	}`;
	const colors = `${
		ghost
			? `text${color}300 bg-transparent hover:bg${color}300`
			: `text-gray-900 bg${color}300`
	}`;

	const styles = `${focus} ${hover} ${size} ${colors} ${disabled} transition-all font-bold rounded-lg inline-flex items-center justify-center space-x-2 text-center`;

	if (href) {
		return (
			<Link to={href} className={styles} {...rest}>
				{icon && icon}
				<span>{children}</span>
			</Link>
		);
	} else {
		return (
			<button className={styles} {...rest} disabled={loading} type={type}>
				{loading ? (
					<>
						<FontAwesomeIcon icon={faCircleNotch} spin />
					</>
				) : (
					<>
						{icon && icon}
						<span>{children}</span>
					</>
				)}
			</button>
		);
	}
};

export default Button;
