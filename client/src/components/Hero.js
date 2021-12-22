import React from "react";
import { Button } from "./";

const Hero = () => {
	return (
		<div
			className="min-h-screen flex items-stretch bg-cover bg-bottom"
			style={{
				backgroundImage:
					"url('./images/patrick-hendry-w5SgojGZooI-unsplash.jpg')",
			}}
		>
			<div className="bg-gray-900 bg-opacity-70 w-full flex items-center">
				<div className="container mx-auto p-5">
					<div className="md:w-1/2 space-y-5">
						<h1 className="text-3xl md:text-6xl font-bold">
							Health & Productivity Made Easy
						</h1>
						<p className="md:text-lg">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
							libero! Eaque assumenda harum itaque, facere necessitatibus
						</p>
						<Button href="register" theme="primary">
							Create An Account
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
