import React from "react";
import { Empty } from "antd";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

function DataSampah() {
	interface DataType {
		title: string;
		key: React.Key;
		berat: string;
		harga: string;
	}

	const categories = ["Kertas", "Plastik", "Logam", "Kaca", "Jlantah"];

	const data: DataType[] = [
		{
			title: "Kertas",
			key: "1",
			berat: "1kg",
			harga: "1000",
		},
		{
			title: "Plastik",
			key: "2",
			berat: "10kg",
			harga: "30.000",
		},
		{
			title: "Logam",
			key: "3",
			berat: "5kg",
			harga: "10.000",
		},
		{
			title: "Kaca",
			key: "3",
			berat: "5kg",
			harga: "10.000",
		},
		{
			title: "Jlantah",
			key: "3",
			berat: "5kg",
			harga: "10.000",
		},
	];

	return (
		<>
			{data ? (
				<Table dataSource={data}>
					<ColumnGroup title='Kertas'>
						<Column title='Berat' dataIndex='berat' key='berat' />
						<Column title='Harga' dataIndex='harga' key='harga' />
					</ColumnGroup>

					<ColumnGroup title='Plastik'>
						<Column title='Berat' dataIndex='berat' key='berat' />
						<Column title='Harga' dataIndex='harga' key='harga' />
					</ColumnGroup>

					<ColumnGroup title='Logam'>
						<Column title='Berat' dataIndex='berat' key='berat' />
						<Column title='Harga' dataIndex='harga' key='harga' />
					</ColumnGroup>

					<ColumnGroup title='Kaca'>
						<Column title='Berat' dataIndex='berat' key='berat' />
						<Column title='Harga' dataIndex='harga' key='harga' />
					</ColumnGroup>

					<ColumnGroup title='Jlantah'>
						<Column title='Berat' dataIndex='berat' key='berat' />
						<Column title='Harga' dataIndex='harga' key='harga' />
					</ColumnGroup>
				</Table>
			) : (
				<div
					style={{ height: "75vh" }}
					className='d-flex align-items-center justify-content-center'
				>
					<Empty />
				</div>
			)}
		</>
	);
}

export default DataSampah;
