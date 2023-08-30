import React from 'react'
import { MediaConnect } from './MediaConnect'

export const Footer = () => {
  return (
	<div className=' z-10 max-w-5xl w-full items-center footer-container'>
	<hr className='mb-10 lg:max-w-5xl lg:w-full' />
	<div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
	<p>Copyright &copy; 2023 by @milan</p>
		<div className="bottom-0 mt-6 left-0 flex  w-full items-end justify-cente dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
		<MediaConnect/>
		</div>
  	</div>
	</div>
  )
}
