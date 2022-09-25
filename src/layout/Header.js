import logoSrc from '../assets/jCloud.svg'

function Header () {
  return (
    <div className="absolute w-screen top-0 px-5 flex justify-between items-center z-10">
      <div className="name">
        iPhone 14
      </div>
      <div className="Logo w-32">
        <img src={ logoSrc } alt="logo" />
      </div>
    </div>
  )
}

export default Header
