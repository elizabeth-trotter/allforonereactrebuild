import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <>

    <header className="w-screen h-[8vh] bg-[#2E4750] flex">
        <h2 className="text-white font-amatic tracking-wide text-4xl my-auto ps-5 sm:ps-10 md:ps-20">AFO: Menu</h2>
    </header>

    <main className="w-[screen] h-[84vh] bg-[#303841] grid grid-cols-3 grid-rows-5 gap-x-12 gap-y-16 sm:gap-x-20 sm:gap-y-14 px-10 sm:px-20 xl:px-80 py-14">
        <h1 className="font-amatic text-white text-7xl font-bold text-center col-span-3">All For One</h1>
        <Link to={'level1'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">1</span><span className="hidden md:block">Level 1</span></p>
        </Link>
        <Link to={'level2'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">2</span><span className="hidden md:block">Level 2</span></p>
        </Link>
        <Link to={'level3'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">3</span><span className="hidden md:block">Level 3</span></p>
        </Link>
        <Link to={'level4'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">4</span><span className="hidden md:block">Level 4</span></p>
        </Link>
        <Link to={'level5'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">5</span><span className="hidden md:block">Level 5</span></p>
        </Link>
        <Link to={'level6'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">6</span><span className="hidden md:block">Level 6</span></p>
        </Link>
        <Link to={'level7'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">7</span><span className="hidden md:block">Level 7</span></p>
        </Link>
        <Link to={'level8'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">8</span><span className="hidden md:block">Level 8</span></p>
        </Link>
        <Link to={'level9'} className="bg-[#F6C90E] flex rounded-lg">
            <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">9</span><span className="hidden md:block">Level 9</span></p>
        </Link>
        <div className="grid grid-cols-subgrid col-span-3">
            <Link to={'level0'} className="bg-[#F6C90E] flex rounded-lg col-start-2">
                <p className="m-auto font-josefin text-6xl md:text-3xl font-bold"><span className="md:hidden">0</span><span className="hidden md:block">Level 0</span></p>
            </Link>
        </div>
    </main>

    <footer className="w-screen h-[8vh] bg-[#2E4750] columns-3 flex justify-center gap-20">
        <div className="flex">
            <Link to={'/level9'} className="my-auto">
                <img className="sm:hidden" src="./assets/faChevronCircleLeftMobile.png" alt="Back Button" />
                <img className="hidden sm:block" src="./assets/faChevronCircleLeft.png" alt="Back Button" />
            </Link>
        </div>
        <div className="flex md:px-48">
            <Link to={'/'} class="my-auto">
                <img className="sm:hidden" src="./assets/faHomeMobile.png" alt="Home Button" />
                <img className="hidden sm:block" src="./assets/faHome.png" alt="Home Button" />
            </Link>
        </div>
        <div className="flex">
            <Link to={'/level0'} class="my-auto">
                <img className="sm:hidden" src="./assets/faChevronCircleRightMobile.png" alt="Next Button" />
                <img className="hidden sm:block" src="./assets/faChevronCircleRight.png" alt="Next Button" />
            </Link>
        </div>
    </footer>

    </>
  )
}
