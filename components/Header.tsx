import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		<p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:p-4 lg:dark:bg-zinc-800/30">
	 		Milan&nbsp;
		</p>
		<ThemeSwitcher />
		<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
			By @i-am-milan
		</div>
  	</div>
  )
}
