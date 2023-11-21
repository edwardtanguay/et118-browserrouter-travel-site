import { IEmployee } from "../interfaces";

interface IProps {
	employee: IEmployee;
	single?: boolean;
}

export const Employee = ({ employee, single = false }: IProps) => {
	let imagePath = `images/employees/employee_${employee.employeeID}.jpg`;
	if (single) {
		imagePath = "../" + imagePath;
	}
	return (
		<div className="flex gap-3 mt-4">
			<img className="w-24 h-24 rounded" src={imagePath} />
			<div>
				<p className="font-semibold">
					{employee.firstName} {employee.lastName}
				</p>
				<p className="text-xs">{employee.notes}</p>
			</div>
		</div>
	);
};
