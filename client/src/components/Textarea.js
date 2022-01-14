import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Textarea = ({ label, name, errors, ...rest }) => {
	const focus = `outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50`;
	const hover = ``;
	const size = `px-4 py-2`;

	const styles = `${focus} ${hover} ${size} transition-colors rounded-lg border-gray-600 text-white bg-transparent rounded-lg py-2 px-4 border resize-y`;

	const error = errors?.find((error) => error.param === name);

	return (
		<div className="flex flex-col flex-1">
			{label && (
				<label htmlFor={label} className="text-sm text-white mb-2">
					{label}
				</label>
			)}
			<textarea className={styles} name={name} id={label} {...rest} rows={4} />
			{error && (
				<label className="text-sm mt-2 normal-case text-red-300 flex items-center space-x-2">
					<FontAwesomeIcon icon={faExclamationCircle} size="sm" />
					<span>{error.msg}</span>
				</label>
			)}
		</div>
	);
};

export default Textarea;
