import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
require("firebase/auth");

//Sign Up
function SignUp(email, password, userName, setAction) {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			const newUser = {
				userName: userName,
				email: email,
				password: password,
				key: uuidv4(),
			};
			firebase.database().ref(`${userName}/${newUser.key}`).set(newUser);
			setAction("SignedIn");
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
			setAction(errorMessage);
		});
}
//Sign In
function SignIn(email, password, userName, setAction) {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			// Signed in
			console.log(`Welcome ${userName},`);
			document.getElementById("form").classList.toggle("hide");
			setAction("SignedIn");
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
			setAction(errorMessage);
		});
}
export { SignIn, SignUp };
