import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<div>
			<nav className="navBar">
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
					) : (
						<FiMenu
							style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
						/>
					)}
				</button>
				<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}></ul>
			</nav>
		</div>
	);
}
