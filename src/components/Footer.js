import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Entre no nosso boletim informativo de Aventura para receber nossos melhores acordos de viagem
                </p>
                <p className='footer-subscription-text'>
                    Você pode desincrever a qualquer momento
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Seu email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Se inscreva</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Sobre nós</h2>
                        <Link to='/sign-up'>Como funciona</Link> 
                        <Link to='/'>Testemunhos</Link>
                        <Link to='/'>Carreiras</Link>
                        <Link to='/'>Investidores</Link>
                        <Link to='/'>Termos de serviço</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contato</h2>
                        <Link to='/'>Contato</Link> 
                        <Link to='/'>Suporte</Link>
                        <Link to='/'>Destinos</Link>
                        <Link to='/'>Patrocínios</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Vídeos</h2>
                        <Link to='/'>Enviar vídeo</Link> 
                        <Link to='/'>Embaixadores</Link>
                        <Link to='/'>Âgencia</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Redes Sociais</h2>
                        <Link to='/'>Instagram</Link> 
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRAVER <i className='fas fa-compass footer-icon'/>
                        </Link>
                    </div>
                    <small className='website-rights'>TRAVER {new Date().getFullYear()}</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link youtube' target='_blank' aria-label='Youtube'>
                            <i className='fab fa-youtube'></i>
                        </Link>
                        <Link className='social-icon-link twitter' target='_blank' aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link linkedin' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
