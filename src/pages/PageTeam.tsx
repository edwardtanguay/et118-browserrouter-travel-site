import { Employee } from "../components/Employee";
import employees from "../data/employees.json";

export const PageTeam = () => {
	return (
		<>
			<p>We have {employees.length} team members to serve you:</p>
			{employees.map((employee) => {
				return (
					<Employee employee={employee}/>
				);
			})}
		</>
	);
};
