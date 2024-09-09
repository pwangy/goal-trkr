import { useState } from 'react'
import Header from './components/Header'
import Trkr from './pages/Trkr'

const App = () => {
	const [darkMode, setDarkMode] = useState(true)

	function handleDarkModeClick() {
		setDarkMode(darkMode => !darkMode)
	}

	return (
		<main className={'App ' + (darkMode ? 'light' : 'dark')}>
			<Header darkMode={darkMode} onDarkModeClick={handleDarkModeClick} />
			<Trkr />
		</main>
	)
}

export default App
