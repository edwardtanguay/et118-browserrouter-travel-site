import { Route, Routes } from "react-router-dom";
import { PageDestinations } from "./pages/PageDestinations";
import { PagePlanner } from "./pages/PagePlanner";
import { PageTeam } from "./pages/PageTeam";
import { PageWelcome } from "./pages/PageWelcome";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/welcome" element={<PageWelcome />}/>
			<Route path="/team" element={<PageTeam />}/>
			<Route path="/destinations" element={<PageDestinations />}/>
			<Route path="/planner" element={<PagePlanner />}/>
		</Routes>
	);
};