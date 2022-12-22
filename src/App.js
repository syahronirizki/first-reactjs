// import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Todo from "./pages/Todo";

function App() {
	return (
		<div className='container'>
			<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
				<ul className='nav nav-pills'>
					<li className='nav-item'>
						<Link to='/' className='nav-link'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/profile' className='nav-link'>
							Profile
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/blog' className='nav-link'>
							Blog
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/contact' className='nav-link'>
							Contact
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/todo' className='nav-link'>
							Todo Apps
						</Link>
					</li>
				</ul>
			</header>

			<div className='container col-xxl-8 px-4 py-5'>
				<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
					<div className='col'>
						<h1 className='display-5 fw-bold lh-1 mb-3'>My Blogspot.</h1>
						<p className='lead mb-2'>
							<b>
								Your time is limited, so don't waste it living someone else's life.
								Don't be trapped by dogma — which is living with the results of
								other people's thinking.
							</b>{" "}
							-Steve Jobs
						</p>
					</div>
				</div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='profile' element={<Profile />} />
					<Route path='blog' element={<Blog />} />
					<Route path='blog/:id' element={<BlogDetail />} />
					<Route path='contact' element={<Contact />} />
					<Route path='todo' element={<Todo />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
