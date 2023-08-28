'use client';
import { ThemeProvider } from "next-themes";
export const ThemeContext = (props:any) => {
	return(
		<ThemeProvider>{props.children}</ThemeProvider>
	)
}
