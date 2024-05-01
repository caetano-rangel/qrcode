import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import '../src/styles/app.sass';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, (error, url) => {
      setDownload(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
   <div className="container">
    <h1 className='txt'>Gerador de QrCode do Caetano</h1>
    <QRCode value={link}/>
    <input placeholder="digite seu link..." className="input" value={link} onChange={ (e) => handleQrcode(e)}/>

    <a href={qrcodeLink} download={'qrcode.png'}>baixar QrCode</a>
   </div>
  )
}

export default App
