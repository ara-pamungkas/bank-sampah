import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
	return (
		<Navbar id="navbar" expand='lg'>
			<Container>
				<Navbar.Brand className="navbar-text">
					<FontAwesomeIcon icon={faBars} />
				</Navbar.Brand>
				<Navbar.Brand className="navbar-text">Bank Sampah</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
