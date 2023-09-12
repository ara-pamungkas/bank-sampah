import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Information from "./pages/Information";
import DataTransaction from "./pages/DataTransaction";
import DataSampah from "./pages/DataSampah";
import DataNasabah from "./pages/DataNasabah";

function App() {
	return (
		<Sidebar>
			<Routes>
				<Route index element={<Beranda />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/informasi" element={<Information />} />
				<Route path="/data-transaksi" element={<DataTransaction />} />
				<Route path="/data-sampah" element={<DataSampah />} />
				<Route path="/data-nasabah" element={<DataNasabah />} />
			</Routes>
		</Sidebar>
	);
}

export default App;
