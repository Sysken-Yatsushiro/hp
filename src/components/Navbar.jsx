import SyskenIcon from "./SyskenIcon"
import { useState, useEffect } from "react"
import GithubIcon from "./GithubIcon"

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true)

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsTransparent(false)
    } else if (window.scrollY < 50) {
      setIsTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={"navbar flex w-full h-20 fixed top-0 z-30 bg-opacity-90 backdrop-blur transition-all duration-200 " + (isTransparent ? "text-primary-content" : "bg-base-100 text-base-content shadow")}>
      <div className="flex-grow">
        <button onClick={goTop} className="btn btn-lg btn-ghost text-xl">
          <SyskenIcon />
          <span className="ml-2">シス研</span>
        </button>
      </div>
      <div className="flex flex-grow-0">
        <a href="https://chonai-flora.github.io/p5-sketches" className="btn btn-ghost normal-case">Processingゲーム</a>
        <a href="https://github.com/Sysken-Yatsushiro" className="btn btn-ghost"><GithubIcon /></a>
      </div>
    </div>
  )
}