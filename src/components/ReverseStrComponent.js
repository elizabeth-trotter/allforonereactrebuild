import React from 'react'
import { ReverseStrEndpoint } from '../services/DataServices.js'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function ReverseStrComponent() {
    const [numOne, setNumOne] = useState('');
    const [result, setResult] = useState('');
    
    const submitClick = async () => {
        if(numOne){
            const response = await ReverseStrEndpoint(numOne);
            setResult(response);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setNumOne(e.target.value);
            submitClick();
        }
    };

  return (
    <>
      
    <header class="w-screen h-[8vh] bg-[#D65A31] flex">
        <h2 class="text-white font-amatic tracking-wide text-4xl my-auto ps-5 sm:ps-10 md:ps-20">AFO: Reverse String</h2>
    </header>

    <main class="w-[screen] h-[84vh] bg-[#222831] text-white px-10 sm:px-20 xl:px-50 py-14">
        <section class="h-full flex flex-col justify-between">
            <h1 class="font-amatic text-7xl font-bold text-center pb-5 pt-10"><span class="sm:hidden">Lvl.</span><span class="hidden sm:inline-block">Level</span> 6</h1>
            
            <div class="flex font-josefin font-bold">
                <div class="mx-auto hidden xl:block">
                    <img src="../assets/Swap.png" alt="Swap icon"/>
                </div>
                <div class="mx-auto">
                    <label class="block pb-5 text-2xl" htmlFor="input">Enter a random string:</label>
                    <input onChange={e => setNumOne(e.target.value)} onKeyDown={handleKeyDown} class="text-black text-lg rounded-lg border-0 w-[230px] min-[375px]:w-[300px] sm:w-[400px]" type="text" id="input" maxLength="10" placeholder="Can have letters and numbers" required/>
                </div>
                <div class="mx-auto hidden xl:block">
                    <img src="../assets/ASymbol.png" alt="A symbol icon"/>
                </div>
            </div>

            <div class="my-10 mx-auto font-josefin font-bold text-4xl">{result}</div>
            
            <button onClick={() => submitClick()} class="text-white font-bold text-2xl font-amatic tracking-widest rounded-lg bg-[#393E46] h-[5vh] w-[230px] min-[375px]:w-[300px] sm:w-[400px] mx-auto">Submit</button>
        </section>
    </main>

    <footer class="w-screen h-[8vh] bg-[#D65A31] columns-3 flex justify-center gap-20">
        <div class="flex">
            <Link to={'/level5'} class="my-auto">
                <img class="sm:hidden" src="../assets/faChevronCircleLeftMobile.png" alt="Back Button"/>
                <img class="hidden sm:block" src="../assets/faChevronCircleLeft.png" alt="Back Button"/>
            </Link>
        </div>
        <div class="flex md:px-48">
            <Link to={'/'} class="my-auto">
                <img class="sm:hidden" src="../assets/faHomeMobile.png" alt="Home Button"/>
                <img class="hidden sm:block" src="../assets/faHome.png" alt="Home Button"/>
            </Link>
        </div>
        <div class="flex">
            <Link to={'/level7'} class="my-auto">
                <img class="sm:hidden" src="../assets/faChevronCircleRightMobile.png" alt="Next Button"/>
                <img class="hidden sm:block" src="../assets/faChevronCircleRight.png" alt="Next Button"/>
            </Link>
        </div>
    </footer>

    </>
  )
}
