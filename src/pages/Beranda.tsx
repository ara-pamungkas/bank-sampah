import React from 'react'
import "../style/Beranda.css"

function Beranda() {
  return (
    <div id='beranda' className='col'>
      <div>
      <h5>
        Beranda
      </h5>
      </div>
      <div id='beranda-main' className='container p-2 bg-success'>
        <div className='blok col-md-3 bg-warning'>
          Total Nasabah
        </div>
        <div className='blok col-md-3 bg-secondary'>
          Pengurus
        </div>
        <div className='blok col-md-3 bg-primary'>
          Transaksi
        </div>
      </div>
    </div>
  )
}

export default Beranda