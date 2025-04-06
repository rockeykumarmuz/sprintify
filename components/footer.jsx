// components/Footer.js
import { GithubIcon, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-gray-800 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Left Section: Branding */}
					<div className='flex flex-col items-center md:items-start'>
						<h2 className='text-3xl font-semibold gradient-title'>Sprintify</h2>
						<p className='mt-4 text-lg'>A productivity tool to keep you on track with your projects.</p>
					</div>

					{/* Middle Section: Links */}
					<div className='flex flex-col items-center md:items-start'>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul>
							<Link href='/' className='hover:text-gray-400'>
								Home
							</Link>
						</ul>
					</div>

					{/* Right Section: Social Media & Contact */}
					<div className='flex flex-col items-center md:items-start'>
						<h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
						<div className='flex space-x-6 mb-4'>
							<a href='https://www.linkedin.com/in/rockey-kumar707/' target='_blank' rel='noopener noreferrer'>
								<Linkedin className='text-2xl hover:text-blue-700' />
							</a>
							<a href='https://github.com/rockeykumarmuz' target='_blank' rel='noopener noreferrer'>
								<GithubIcon className='text-2xl hover:text-gray-400' />
							</a>
						</div>
						<a href='mailto:rockeykumarmuz@gmail.com' className='text-blue-400 hover:text-blue-600'>
							rockeykumarmuz@gmail.com
						</a>
					</div>
				</div>

				{/* Bottom Section: Copyright */}
				<div className='text-center mt-8 border-t pt-4'>
					<p className='text-sm text-gray-400'>&copy; {currentYear} Sprintify. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
