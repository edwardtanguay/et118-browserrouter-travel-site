import { NavLink } from "react-router-dom"

export const PageWelcome = () => {
	return (
		<p className="p-1 leading-8">
			Welcome to our travel agency! Get to know our <NavLink to="/team">team</NavLink>, find your next travel <NavLink to="/destinations">destination</NavLink> and <NavLink to="/planner">plan</NavLink> your trip!
		</p>
	)
}