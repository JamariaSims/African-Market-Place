import { useReducer } from "react";

const initial = {
	username: "",
	password: "",
	email: "",
	Login: false,
	State: "",
};
const Reducer = (user, action) => {
	switch (action.type) {
		case "SignUp": {
			return { user: (user.State = "SignUp") };
		}
		case "Forgot": {
			return { user: (user.State = "Forgot") };
		}
		default:
			break;
	}
};
export default function CustomReducer() {
	const [user, dispatch] = useReducer(Reducer, initial);
	return [user, dispatch];
}
