import InfoContainer from "./InfoContainer.jsx"


function Resume() {


	return (

		<div className="resume">

			<div className="resume--header">

				<h2 className="name">Benjamin Braun</h2>
				<div className="info">
					<span>(226-224-9308)</span>
					<span>benjamin.braun2003@gmail.com</span>
					<span>Kingston Jamaica</span>
				</div>

			</div>

			<div className="sub--section">

				<h3 className="resume--sub--header">Education</h3>

				<InfoContainer />


			</div>
			<div className="sub--section">

				<h3 className="resume--sub--header">Experience</h3>
				<InfoContainer />

			</div>



		</div>
	)

}

export default Resume
