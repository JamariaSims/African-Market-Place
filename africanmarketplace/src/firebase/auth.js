import firebase from "firebase";
require("firebase/auth");

//Sign Up
function SignUp(email, password) {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			// Signed in
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
		});
}
//Sign In
function SignIn(email, password) {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((responce) => {
			// Signed in
			console.log(`${email} has logged in!`);
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
		});
}
export { SignIn, SignUp };
