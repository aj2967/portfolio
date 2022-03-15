import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download='CV.pdf' className='btn'>Download CV</a>
        <a href="#about" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA