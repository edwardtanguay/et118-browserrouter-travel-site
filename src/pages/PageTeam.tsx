import employees from "../data/employees.json";

export const PageTeam = () => {
	return (
		<>
			<p>We have {employees.length} team members to serve you:</p>
			{employees.map((emp) => {
				return (
					<div className="flex gap-3 mt-4">
						<img className="w-24 h-24 rounded"
							src={`images/employees/employee_${emp.employeeID}.jpg`}
						/>
						<div>
							<p className="font-semibold">{emp.firstName} {emp.lastName}</p>
						<p className="text-xs">{emp.notes}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};
