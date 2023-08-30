import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:p-4 lg:dark:bg-zinc-800/30">
	 		<strong><span className='font-bold text-4xl title'>@Milan</span></strong>&nbsp;
		</p>
		<div className="bottom-0 left-0 flex  w-full items-end justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
		<ThemeSwitcher />
		</div>
  	</div>
  )
}
