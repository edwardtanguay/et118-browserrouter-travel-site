import { NavLink } from "react-router-dom"

export const Nav = () => {
	return (
		<ul className="flex gap-3 bg-blue-300 mb-3 py-2 px-4 rounded">
			<ul><NavLink to="welcome">Welcome</NavLink></ul>
			<ul><NavLink to="team">Team</NavLink></ul>
			<ul><NavLink to="destinations">Destinations</NavLink></ul>
			<ul><NavLink to="planner">Planner</NavLink></ul>
		</ul>
	)
}