import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/aj2967/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/aj2967/" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials