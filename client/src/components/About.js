import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPencilAlt, faTint } from "@fortawesome/free-solid-svg-icons";

const AboutItem = ({ icon, title, description }) => {
	return (
		<div className="p-5 space-y-5">
			<FontAwesomeIcon icon={icon} size="2x" />
			<h3 className="text-white font-bold text-lg">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</div>
	);
};

const About = () => {
	return (
		<div className="bg-gray-900 py-10">
			<div className="container mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
				<AboutItem
					icon={faList}
					title="Daily Tasks"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aperiam nisi dolorem! Earum accusamus incidunt sequi rerum cupiditate nostrum id architecto, soluta amet, molestias vitae delectus, reprehenderit veniam ab enim."
				/>
				<AboutItem
					icon={faTint}
					title="Water Intake"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aperiam nisi dolorem! Earum accusamus incidunt sequi rerum cupiditate nostrum id architecto, soluta amet, molestias vitae delectus, reprehenderit veniam ab enim."
				/>
				<AboutItem
					icon={faPencilAlt}
					title="Daily Journals"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aperiam nisi dolorem! Earum accusamus incidunt sequi rerum cupiditate nostrum id architecto, soluta amet, molestias vitae delectus, reprehenderit veniam ab enim."
				/>
				<AboutItem
					icon={faTint}
					title="Water Intake"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aperiam nisi dolorem! Earum accusamus incidunt sequi rerum cupiditate nostrum id architecto, soluta amet, molestias vitae delectus, reprehenderit veniam ab enim."
				/>
			</div>
		</div>
	);
};

export default About;
