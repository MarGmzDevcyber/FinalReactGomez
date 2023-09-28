import React, { useState } from 'react'
import '../styles/Checkout.css'

const CheckoutForm = ({ onConfirm }) => {
    const [namecheck, setNamecheck] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (t) => {
        t.preventDefault()

        const userData = {
            namecheck, phone, email
        }
        onConfirm(userData)
    }
    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                <h1>Nombre:</h1>
                    <input className='Input'
                        type='text'
                        value={namecheck}
                        onChange={({ target }) => setNamecheck(target.value)} />
                </label>
                <label className='Label'>
                <h1>Telefono:</h1>
                    <input className='Input'
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className='Label'>
                <h1>Email:</h1>
                    <input className='Input'
                        type="email-cont"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </label>
            <div className='Generator'>
                <button type='submit' className='Generator-button'>Crear Pedido</button>
            </div>
            </form>
        </div>
    )
}

export default CheckoutForm
