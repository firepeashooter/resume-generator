import './App.css'
import PersonalSection from './Components/PersonalSection'
import Resume from './Components/Resume'

function App() {

	return (

		<div className="app">

			<div className="edit-side">

				<PersonalSection />


			</div>

			<div className="display-side">

				<Resume />

			</div>

		</div>

	)
}

export default App
