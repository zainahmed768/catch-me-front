import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.scss";
import PublicRoutes from "./routes/PublicRoutes";
import ReactLoading from "react-loading";

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		// loading starts here
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		// loading starts here
	}, []);
	return (
		<>
			{loading ? (
				<div className="loading-wrapper">
					<ReactLoading type="spokes" color="#fff" height={200} width={200} />
				</div>
			) : (
				<PublicRoutes />
			)}
		</>
	);
}

export default App;
