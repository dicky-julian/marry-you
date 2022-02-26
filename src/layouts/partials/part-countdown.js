import React from 'react'
import CountdownTimer from '../components/headers/CountdownTimer'

export const PartCountDown = () => {
    return (
        <section id="countdown" className="countdown">
            {/* <img className="img-figure" src="img/section-2.webp" />
            <img className="img-figure" src="img/section-2.webp" /> */}
            <img className="img-figure" src="img/section-3.webp" />
            <div className="countdown-content">
                <h3 className='font-great-vibes'>Counting Down to the big day</h3>
                <CountdownTimer />
            </div>
        </section>
    )
}