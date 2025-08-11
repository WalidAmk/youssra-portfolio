
import './App.css'
import About from './components/sections/About'
import Experiences from './components/sections/Experiences'
import Header from './components/sections/Header'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
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

