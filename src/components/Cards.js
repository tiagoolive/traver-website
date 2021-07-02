import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Confira esses destinos ÉPICOS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='/src/images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='/src/images/img-2.jpg'
                            text='Viaje pelas ilhas de Bali em um Cruzeiro Privado'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='/src/images/img-3.jpg'
                            text='Visite o Oceano Atlantico e explore águas misteriosas'
                            label='Mistério'
                            path='/services'
                        />
                        <CardItem 
                            src='/src/images/img-4.jpg'
                            text='Experiencie o campo de futebol no topo da montanha do Himalaia'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='/src/images/img-8.jpg'
                            text='Ande no deserto do Sahara com guia e camelos'
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
