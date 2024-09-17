import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

// Define categories for the skills
const categories = {
	"Front-End": ["HTML", "CSS", "Javascript", "React Js", "Next Js", "Tailwind CSS"],
	"Back-End": ["Node Js", "Express.js", "MongoDB", "MySQL"], // Add your backend skills
	Design: ["Figma", "Canva", "Wix Studio"], // Add design tools here
	Others: ["C", "Java","Javascript","Git", "Npm","Linux","VS Code","Salesforce", "Vercel", "Netlify","JSON"], // Others tools and services
};

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	const renderIcons = (category) => {
		return SkillsData.filter((el) => categories[category].includes(el.name)).map(
			(el, index) => (
				<div className="skill-icon" key={index}>
					{el.icon}
				</div>
			)
		);
	};

	return (
		<>
			<div className="skills" id="skills">
				<div className="container">
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className="heading"
					>
						<p className="heading-sub-text">What I work with</p>
						<p className="heading-text">My Skills</p>
					</motion.div>
					<div className="skills-grid">
						{/* Front-End Card */}
						<motion.div className="skill-card">
							<div className="card-inner">
								<div className="card-front">
									<h3>Front-End</h3>
									<p>
										Building responsive user interfaces with modern web
										technologies.
									</p>
								</div>
								<div className="card-back">{renderIcons("Front-End")}</div>
							</div>
						</motion.div>

						{/* Back-End Card */}
						<motion.div className="skill-card">
							<div className="card-inner">
								<div className="card-front">
									<h3>Back-End</h3>
									<p>
										Developing scalable back-end services and APIs with robust
										databases.
									</p>
								</div>
								<div className="card-back">{renderIcons("Back-End")}</div>
							</div>
						</motion.div>

						{/* Design Card */}
						<motion.div className="skill-card">
							<div className="card-inner">
								<div className="card-front">
									<h3>Design</h3>
									<p>
										Crafting user-friendly designs and prototypes using modern
										tools.
									</p>
								</div>
								<div className="card-back">{renderIcons("Design")}</div>
							</div>
						</motion.div>

						{/* Others Card */}
						<motion.div className="skill-card">
							<div className="card-inner">
								<div className="card-front">
									<h3>Others</h3>
									<p>
										Other essential tools and platforms for modern web
										development.
									</p>
								</div>
								<div className="card-back">{renderIcons("Others")}</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
