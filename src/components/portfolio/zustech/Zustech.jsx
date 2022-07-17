import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import manageCourse from "./shared/manageCourse.gif";
import manageCourseSearch from "./shared/manageCourseSearch.gif";
import player from "./shared/player.gif";
import playerExtra from "./shared/playerExtra.gif";
import responsiveness from "./shared/responsiveness.gif";
import debounce from "./shared/debounce.gif";
import ImgDescription from "./ImgDescription";
import "./zustech.css";

const Zustech = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div className="container">
			<div className="portfolio-page-header">
				<Link to="/" className="link-home">
					<IoIosArrowRoundBack className="back-icon" />
					Back
				</Link>
				<h1>Zustech</h1>
			</div>

			<div className="portfolio-page-container">
				<div className="portfolio-page-summary">
					<p>
						Zustech Ltd is currently developing a learning
						management system (LMS). On this platform once
						completed, users after subscribing will be able to use
						their membership to access and complete any course from
						any given category.
					</p>
					<p>
						My role as a Frontend React Developer was to work
						closely with the team and the clients to develop the
						vision of the team into an effective user experience, as demonstrated below.
					</p>
					<p></p>
				</div>

				<div className="gifs-container">
					<ImgDescription
						title="Play Curated Content"
						image={player}
						description="Created the video player and sidebar functionality where students consume the content of their desired course, the sidebar contains all modules and lessons related to the course and the student may play a video based on the lesson they selected to watch."
					/>
					<ImgDescription
						title="Additional Course Information"
						image={playerExtra}
						description="Implemented tabs under the player that contain all relevant information related to the course such as; the course overview, any new course announcements or lesson transcripts if available."
					/>
					<ImgDescription
						title="Manage Instructor's Courses"
						image={manageCourse}
						description="Developed the instructor interface for managing courses with the team. Resolved issues where details of the course were not being displayed when clicked on the edit button and added popups and implemented delete course endpoint to confirm deletion."
					/>
					<ImgDescription
						title="Search For Courses"
						image={manageCourseSearch}
						description="Allow instructors to view all courses they have created and to fetch courses they search for and display on the webpage."
					/>

					<ImgDescription
						title="Optimised for any screen"
						image={responsiveness}
						description="Fixed styling issues on most of the pages and optimised for mobile responsiveness for a friendlier user experience."
					/>

					<ImgDescription
						title="Debouncing Search"
						image={debounce}
						description="Implemented requirements for filtering and searching all the courses available on the website to be displayed at the course marketplace, using debouncing function for reducing load on each api call and ease burden off the server."
					/>
				</div>
			</div>
		</div>
	);
};

export default Zustech;
