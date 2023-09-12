import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function SidebarHeader() {
	return (
		<div id='sidebar-header' className='d-flex'>
			<div className='sidebar-header-container d-flex'>
				<div className='sidebar-header-icon'>
					<FontAwesomeIcon icon={faUser} />
				</div>
				<div className='sidebar-header-username'>Ara Pamungkas</div>
			</div>
		</div>
	);
}

export default SidebarHeader;
