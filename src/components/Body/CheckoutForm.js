import React, { useState } from 'react'
import '../style/Checkout.css'

export const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            nombre, telefono, correo
        }
        onConfirm(userData)
    }
    return (
        <div className='Contenedor'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre:
                    <input className='Input'
                        type='text'
                        value={nombre}
                        onChange={({ target }) => setNombre(target.value)} />
                </label>
                <label className='Label'>
                    Telefono:
                    <input className='Input'
                        type="text"
                        value={telefono}
                        onChange={({ target }) => setTelefono(target.value)} />
                </label>
                <label className='Label'>
                    Correo:
                    <input className='Input'
                        type="email"
                        value={correo}
                        onChange={({ target }) => setCorreo(target.value)} />
                </label>
            <div className='Generador'>
                <button type='submit' className='BotonGenerador'>Generar Pedido</button>
            </div>
            </form>
        </div>
    )
}
