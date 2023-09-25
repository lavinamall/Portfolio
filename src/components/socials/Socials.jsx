import './socials.scss'

export default function socials() {
    const socials = {
        linkedin: 'https://www.linkedin.com/in/lavina-mall',
        github: 'https://github.com/lavinamall',
        instagram: 'https://www.instagram.com/ms.lavina_',
        facebook: 'https://www.facebook.com/LAVINA.MALL',
    }
    return (
        <div className='socials' id='socials'>
            <a href={socials.linkedin}>
                <div className='movingBg'>
                    <i className='fa fa-linkedin'></i>
                </div>
            </a>
            <a href={socials.github}>
                <div className='movingBg'>
                    <i className='fa fa-github'></i>
                </div>
            </a>
            <a href={socials.instagram}>
                <div className='movingBg'>
                    <i className='fa fa-instagram'></i>
                </div>
            </a>
            <a href={socials.facebook}>
                <div className='movingBg'>
                    <i className='fa fa-facebook'></i>
                </div>
            </a>
        </div>
    )
}
