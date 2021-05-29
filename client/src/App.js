import './index.css';

import Hero from './components/Hero';


function App() {
	return (
		<>
			<Hero />
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<div className="border-4 border-dashed p-2 border-gray-200 rounded-lg h-96">
							Inside
						</div>
					</div>
				</div>
			</main>

			<div className="blogs__wraper  py-20 px-20">

				<div className="flex justify-between items-center">

				<div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center p-4">
						<div>
							<div className="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
								<h3 className="font-serif font-bold text-gray-900 text-xl">Title</h3>
								<img className="w-full rounded-md" src="https://picsum.photos/200/150" alt="motivation" />
								<p className="text-center leading-relaxed">Lorem ipsum dolor pariatur impedit ipsam repellat dignissimos rerum reprehenderit delectus possimus, illo voluptate qui aspernatur maxime sapiente animi excepturi. Illum vitae dignissimos similique repellendus sapiente totam est ducimus.</p>
								<span className="text-center">By Matt Fraser</span>
								<button className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Read article</button>
							</div>
						</div>
					</div>

					<div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center p-4">
						<div>
							<div className="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
								<h3 className="font-serif font-bold text-gray-900 text-xl">Title</h3>
								<img className="w-full rounded-md" src="https://picsum.photos/200/150" alt="motivation" />
								<p className="text-center leading-relaxed">Lorem ipsum dolor sit amas dhasj dhakjsh dkasjh djkahs dkjash dkjahs kjahs djkahs dkjahset consectetur adipisicing elit. Obcaecati laborum tempore recusandae adipisci explicabo maiores dolorum nihil rerum? Libero, culpa.</p>
								<span className="text-center">By Matt Fraser</span>
								<button className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Read article</button>
							</div>
						</div>
					</div>

					<div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center p-4">
						<div>
							<div className="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
								<h3 className="font-serif font-bold text-gray-900 text-xl">Title</h3>
								<img className="w-full rounded-md" src="https://picsum.photos/200/150" alt="motivation" />
								<p className="text-center leading-relaxed">Lorem ipsum dolor, sit amet consectetur adip kas dkjas dkjas dkj isicing elit. Blanditiis nostrum, repellendus dolor hic ipsam expedita corporis, minus molestiae libero officiis nesciunt recusandae totam quae eveniet?</p>
								<span className="text-center">By Matt Fraser</span>
								<button className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Read article</button>
							</div>
						</div>
					</div>


				</div>
			</div>
		</>
	);
}

export default App;
