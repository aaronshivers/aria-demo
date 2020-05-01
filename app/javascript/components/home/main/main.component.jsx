import React from 'react'
import dog from '../../../../assets/images/dog.svg'
import './main.component.scss'

const Main = () => (
  <main className='main'>
    <img
      className='main__image'
      src={ dog }
      alt="man on phone while walking dog"
    />
    <section className='main__body-section'>
      <h2 className="main__heading">Lorem ipsum dolor sit amet</h2>
      <p className='main__body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        cupiditate id libero, natus optio rerum ullam? Architecto assumenda atque
        beatae error, esse id illo iusto, neque porro, quo repellendus sed!</p>
      <button className="main__button">Sign Up!</button>
    </section>

  </main>
)

export default Main
