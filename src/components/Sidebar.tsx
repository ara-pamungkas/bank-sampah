import "../style/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarHeader from "./sub-component/SidebarHeader";
import SidebarBody from "./sub-component/SidebarBody";
import NavbarComponent from "./sub-component/Navbar";

function Sidebar({ children }: any) {
	return (
		<div id='container' className='d-flex'>
			{/* Sidebar Start */}
			<div id='sidebar'>
				{/* Header Start */}
				<SidebarHeader />
				{/* Header End */}

				{/* Body Start */}
				<SidebarBody />
				{/* Body End */}
			</div>
			{/* Sidebar End */}

			{/* Main Content Start */}
			<div id='main'>
				<div>
					<NavbarComponent />
				</div>
				<div className='p-3'>{children}</div>
			</div>
			{/* Main Content End */}
		</div>
	);
}

export default Sidebar;
