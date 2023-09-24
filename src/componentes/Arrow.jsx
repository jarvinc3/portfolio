

export default function Arrow() {
  return (
    <div className="hidden fixed gap-5 right-4 top-[30%] md:flex flex-col justify-center items-center">
        <a className="flex items-center" href="#inicio">
            Home
            <img className="w-[50px]" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/thick-arrow-pointing-up--v2.png" alt="thick-arrow-pointing-up--v2"/>
        </a>
        <a className="flex items-center" href="#about">
            About
            <img className="w-[50px]" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/resize-vertical.png" alt="resize-vertical"/>
        </a>
        <a className="flex items-center" href="#works">
            Works
            <img className="w-[50px]" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/thick-arrow-pointing-down--v2.png" alt="thick-arrow-pointing-down--v2"/>
        </a>
    </div>
  )
}
