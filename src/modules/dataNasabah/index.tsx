import React, { useState, useEffect } from 'react';
import { Col, Table, Typography } from 'antd';

const { Title } = Typography;

interface DataType {
  key: string;
  name: string;
  rt: number;
  alamat: string;
  nomorHp: string;
}

const columns = [
  {
    title: 'Nama',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Alamat',
    dataIndex: 'alamat',
    key: 'alamat',
  },
  {
    title: 'No HP',
    dataIndex: 'nomorHp',
    key: 'nomorHp',
  },
  {
    title: 'RT',
    dataIndex: 'rt',
    key: 'rt',
  },
];

function Index() {
  const [dataNasabah, setDataNasabah] = useState<DataType[]>([]);

  useEffect(() => {
    fetch('https://trash-bank-c639a-default-rtdb.asia-southeast1.firebasedatabase.app/trash-bank.json')
      .then((response) => response.json())
      .then((data) => {
        const nasabahData: DataType[] = Object.keys(data).map((key) => ({
          key,
          name: data[key].nama,
          rt: data[key].rt,
          alamat: data[key].alamat,
          nomorHp: data[key].noHp
        }));
        setDataNasabah(nasabahData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Col className='mb-3'>
      <Title level={3}>Data Nasabah</Title>
      </Col>
      <Table columns={columns} dataSource={dataNasabah} />
    </>
  );
}

export default Index;
