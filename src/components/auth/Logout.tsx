import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase"

const Logout = () => {
	const navigate = useNavigate();

	return (
		<button onClick={() => {
			navigate("/");
			auth.signOut();
		}}>Logout</button>
	)
}

export default Logout