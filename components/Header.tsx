import Image from "next/image"

function Header() {
  return (
    <header className="fixed w-full md:w-[360px] px-4 py-4 z-30 flex items-center justify-between">
      <div className="logo">
        <Image
          src="/images/rings.png"
          alt="Shubham & Shweta"
          width={200}
          height={200}
          className="h-20 w-auto"
        />
        <div className="curved-text">
          <svg viewBox="0 0 200 80" width="200" height="80" className="h-12">
            <title>Shubham & Shweta</title>
            <defs>
              <path id="curve" d="M 20 30 Q 100 80 180 30" />
            </defs>
            <text className="text-lg font-bold fill-[#DA5373]">
              <textPath href="#curve" startOffset="0%">
                Shubham & Shweta
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      {/* <button>
        <Menu size={30} />
      </button> */}
    </header>
  )
}
export default Header
