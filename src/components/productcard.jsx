// write product card here
import React from 'react'
import Button from './button'

const productcard = () => {
    const productName = "Wireless Headphones";
    const productImage = "https://www.bhphotovideo.com/images/images2000x2000/sony_whch700n_b_ch700n_wireless_noise_cancelling_headphones_1389412.jpg";
    const productPrice = "$99.99";
  return (
    <div className="border p-4 rounded-lg shadow-md max-w-sm bg-white">
    <img style={{height: '180px', width: '100%'}} src={productImage} alt={productName} className="w-full h-48 object-cover rounded-md" />
    <h2 className="text-lg font-semibold mt-2">{productName}</h2>
    <p className="text-gray-600 text-sm">Price: {productPrice}</p>
    <Button />
    </div>
  )
}

export default productcard