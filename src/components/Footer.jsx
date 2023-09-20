'use client';

import { Footer } from 'flowbite-react';

const DefaultFooter =() =>{
  return (
    <Footer container className='text-slate-800'>
      <Footer.Copyright
        by="by Next Blog"
        href="#"
        year={2023}
        className='my-2'
      />
      <Footer.LinkGroup className='my-2'>
        <Footer.Link href="#" className='mr-3'>
          Inicio
        </Footer.Link>
        <Footer.Link href="#" className='mr-3'>
          Contacto
        </Footer.Link>
        <Footer.Link href="#" className='mr-3'>
          Inmuebles
        </Footer.Link>
        <Footer.Link href="#" className='mr-3'>
          Equipo
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default DefaultFooter;
