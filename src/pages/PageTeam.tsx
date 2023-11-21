import { Employee } from "../components/Employee";
import employees from "../data/employees.json";
import { useParams } from "react-router-dom";
import { IEmployee } from "../interfaces";

export const PageTeam = () => {
	const { id } = useParams();
	let employee: IEmployee = {} as IEmployee;
	if (id) {
		const tempEmployee = employees.find((m) => m.employeeID === Number(id));
		if (tempEmployee) {
			employee = tempEmployee;
		}
	}

	return (
		<>
			{!id ? (
				<>
					<p>We have {employees.length} team members to serve you:</p>
					{employees.map((employee) => {
						return <Employee employee={employee} />;
					})}
				</>
			) : (
				<>
					<Employee employee={employee} single={true} />
				</>
			)}
		</>
	);
};
