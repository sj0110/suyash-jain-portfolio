import React from 'react'
import SearceLogo from '../../assets/images/searce.svg';

const Quote = () => {
    return (
        <div className='pt-3'>
            <blockquote className="border-l-4 border-[#0064ff] pl-5 italic">
                <p>
                    I thrive in fast-paced environments—bridging frontend & backend, driving performance, and delivering robust solutions. Open to Frontend, Backend, or Full Stack Engineer roles.
                </p>
                <div className="mt-6">
                    <cite className="not-italic font-medium text-white">
                        Suyash Jain<br />Software Engineer @
                    </cite>
                    <div className="flex items-center gap-2 mt-2">
                        <img
                            className="h-6 w-auto"
                            src={SearceLogo}
                            alt="Searce Logo"
                        />
                    </div>
                </div>
            </blockquote>
        </div>
    )
}

export default Quote
