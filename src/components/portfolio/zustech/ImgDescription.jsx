import { Image } from "antd";
import "./imgDescription.css";
import { zustech } from '../../../assets'

const ImgDescription = ({ title, image, description }) => {
	return (
		<div className="gif-container">
			<div className="img-container">
				<Image src={image} alt={title} fallback={zustech} />
			</div>
			<div className="outline-container">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ImgDescription;
