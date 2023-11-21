import { NavLink, Routes, Route } from "react-router-dom";
import { AreaFrance } from "../areas/AreaFrance";
import { AreaGermany } from "../areas/AreaGermany";
import { AreaSpain } from "../areas/AreaSpain";

export const PageDestinations = () => {
	return (
		<>
			<div className="submenu flex gap-3 mb-4">
				<NavLink to="germany">Germany</NavLink>
				<NavLink to="france">France</NavLink>
				<NavLink to="spain">Spain</NavLink>
			</div>

			<Routes>
				<Route path="germany/*" element={<AreaGermany />} />
				<Route path="france" element={<AreaFrance />} />
				<Route path="spain" element={<AreaSpain />} />
			</Routes>
		</>
	);
};
