
import './App.css'
import About from './components/sections/About'
import Experiences from './components/sections/experiences'
import Header from './components/sections/Header'
import Projects from './components/sections/projects'
import Skills from './components/sections/skills'
import Contact from './components/sections/Contact'

function App() {

	return (
		<div className='mx-auto md:max-w-[1500px]'> 
			<Header />
			<About />
			<Skills />
			<Experiences />
			<Projects />
			<Contact />
		</div>
	)
}

export default App
