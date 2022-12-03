import React from 'react'
import CV from '../../assets/__2022SimranResume.pdf'

function CTA() {
    return (
    <div className='cta'>
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className='btn btn-prmary'>Lets Talk</a>
    </div>
    )
}

export default CTA