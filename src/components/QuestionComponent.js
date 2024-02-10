import React from 'react'
import { QuestionEndpoint } from '../services/DataServices.js'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function QuestionComponent() {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [result, setResult] = useState('');
    
    const submitClick = async () => {
        if(inputOne && inputTwo){
            const response = await QuestionEndpoint(inputOne, inputTwo);
            setResult(response);
        }
    };

    const handleKeyDownOne = (e) => {
        if (e.key === 'Enter') {
            setInputOne(e.target.value);
            submitClick();
        }
    };

    const handleKeyDownTwo = (e) => {
        if (e.key === 'Enter') {
            setInputTwo(e.target.value);
            submitClick();
        }
    };

  return (
    <>
      
    <header className="w-screen h-[8vh] bg-[#E1F4F3] flex">
        <h2 className="text-black font-bold font-amatic tracking-wide text-4xl my-auto ps-5 sm:ps-10 md:ps-20">AFO: Asking Questions</h2>
    </header>

    <main className="w-[screen] h-[84vh] bg-[#333333] text-white px-10 sm:px-20 xl:px-50 py-14">
        <section className="h-full flex flex-col justify-between">
            <h1 className="font-amatic text-7xl font-bold text-center pb-5 pt-10"><span className="sm:hidden">Lvl.</span><span className="hidden sm:inline-block">Level</span> 2</h1>
            
            <div className="flex font-josefin font-bold">
                <div className="mx-auto hidden xl:block">
                    <img src="../assets/MoonStars.png" alt="Moon stars icon"/>
                </div>
                <div className="mx-auto">
                    <div className="pb-5">
                        <label className="block pb-5 text-2xl" htmlFor="time">When did you wake up?</label>
                        <input onChange={e => setInputTwo(e.target.value)} onKeyDown={handleKeyDownTwo} className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]" type="text" id="time" maxLength="10" placeholder="Can be a whole integer or string" required/>
                    </div>
                    <div className="pt-5">
                        <label className="block pb-5 text-2xl" htmlFor="name">What is your first name?</label>
                        <input onChange={e => setInputOne(e.target.value)} onKeyDown={handleKeyDownOne} className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]" type="text" id="name" maxLength="10" placeholder="10 characters max" required/>
                    </div>
                </div>
                <div className="mx-auto hidden xl:block">
                    <img src="../assets/SunHorizon.png" alt="Sun horizon icon"/>
                </div>
            </div>

            <div className="my-10 mx-auto font-josefin font-bold text-4xl">{result}</div>
            
            <button onClick={() => submitClick()} className="text-white font-bold text-2xl font-amatic tracking-widest rounded-lg bg-[#706C61] h-[5vh] w-[230px] min-[375px]:w-[300px] sm:w-[400px] mx-auto">Submit</button>
        </section>
    </main>

    <footer className="w-screen h-[8vh] bg-[#E1F4F3] columns-3 flex justify-center gap-20">
        <div className="flex">
            <Link to={'/level1'} className="my-auto">
                <img className="sm:hidden" src="../assets/dark-faChevronCircleLeftMobile.png" alt="Back Button"/>
                <img className="hidden sm:block" src="../assets/dark-faChevronCircleLeft.png" alt="Back Button"/>
            </Link>
        </div>
        <div className="flex md:px-48">
            <Link to={'/'} className="my-auto">
                <img className="sm:hidden" src="../assets/dark-faHomeMobile.png" alt="Home Button"/>
                <img className="hidden sm:block" src="../assets/dark-faHome.png" alt="Home Button"/>
            </Link>
        </div>
        <div className="flex">
            <Link to={'/level3'} className="my-auto">
                <img className="sm:hidden" src="../assets/dark-faChevronCircleRightMobile.png" alt="Next Button"/>
                <img className="hidden sm:block" src="../assets/dark-faChevronCircleRight.png" alt="Next Button"/>
            </Link>
        </div>
    </footer>

    </>
  )
}
