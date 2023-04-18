interface NavBarProps {
  label: string;
}

const NavBar: React.FC<NavBarProps> = ({label}) => {
  return (
    <div className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 flex items-center justify-center py-6 h-20">
      <span className="self-center text-2xl font-semibold whitespace-nowrap ">{label}</span>
    </div>
  )
}

export default NavBar;