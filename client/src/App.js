import './index.css';

import Hero from './components/Hero';


function App() {
	return (
		<>
			<Hero/>
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<div className="border-4 border-dashed p-2 border-gray-200 rounded-lg h-96">
							Inside
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
