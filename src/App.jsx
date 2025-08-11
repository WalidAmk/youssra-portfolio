
import './App.css'
import About from './components/sections/About'
import Experiences from './components/sections/Experiences'
import Header from './components/sections/Header'
import Projects from './components/sections/Projects'
import SkillsSection from './components/sections/SkillsSection'
import Contact from './components/sections/Contact'

function App() {

	return (
		<div className='mx-auto md:max-w-[1500px]'> 
			<Header />
			<About />
			<SkillsSection />
			<Experiences />
			<Projects />
			<Contact />
		</div>
	)
}

export default App

