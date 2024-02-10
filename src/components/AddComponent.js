import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { AddEndpoint } from '../services/DataServices.js';


export default function AddComponent() {
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [result, setResult] = useState('');
    
    const submitClick = async () => {
        if(numOne && numTwo){
            const response = await AddEndpoint(numOne, numTwo);
            setResult(response);
        }
    };

    const handleKeyDownOne = (e) => {
        if (e.key === 'Enter') {
            setNumOne(e.target.value);
            submitClick();
        }
    };

    const handleKeyDownTwo = (e) => {
        if (e.key === 'Enter') {
            setNumTwo(e.target.value);
            submitClick();
        }
    };

  return (
    <>
      
    <header className="w-screen h-[8vh] bg-[#D65A31] flex">
        <h2 className="text-white font-amatic tracking-wide text-4xl my-auto ps-5 sm:ps-10 md:ps-20">AFO: Adding Numbers</h2>
    </header>

    <main className="w-[screen] h-[84vh] bg-[#222831] text-white px-10 sm:px-20 xl:px-50 py-14">
        <section className="h-full flex flex-col justify-between">
            <h1 className="font-amatic text-7xl font-bold text-center pb-5 pt-10"><span className="sm:hidden">Lvl.</span><span className="hidden sm:inline-block">Level</span> 1</h1>
            
            <div className="flex font-josefin font-bold">
                <div className="mx-auto hidden xl:block">
                    <img src="../assets/Calculator.png" alt="Calculator icon"/>
                </div>
                <div className="mx-auto">
                    <div className="pb-5">
                        <label className="block pb-5 text-2xl" htmlFor="numOne">Enter the first number:</label>
                        <input onChange={e => setNumOne(e.target.value)} onKeyDown={handleKeyDownOne} className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]" type="text" id="numOne" maxLength="10" placeholder="Must be a whole integer" required/>
                    </div>
                    <div className="pt-5">
                        <label className="block pb-5 text-2xl" htmlFor="numTwo">Enter the second number:</label>
                        <input onChange={e => setNumTwo(e.target.value)} onKeyDown={handleKeyDownTwo} className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]" type="text" id="numTwo" maxLength="10" placeholder="Must be a whole integer" required/>
                    </div>
                </div>
                <div className="mx-auto hidden xl:block">
                    <img src="../assets/Plus.png" alt="Plus icon"/>
                </div>
            </div>

            <div className="my-10 mx-auto font-josefin font-bold text-4xl">{result}</div>
            
            <button onClick={() => submitClick()} className="text-white font-bold text-2xl font-amatic tracking-widest rounded-lg bg-[#393E46] h-[5vh] w-[230px] min-[375px]:w-[300px] sm:w-[400px] mx-auto">Submit</button>
        </section>
    </main>

    <footer className="w-screen h-[8vh] bg-[#D65A31] columns-3 flex justify-center gap-20">
        <div className="flex">
            <Link to={'/level0'} className="my-auto">
                <img className="sm:hidden" src="../assets/faChevronCircleLeftMobile.png" alt="Back Button"/>
                <img className="hidden sm:block" src="../assets/faChevronCircleLeft.png" alt="Back Button"/>
            </Link>
        </div>
        <div className="flex md:px-48">
            <Link to={'/'} className="my-auto">
                <img className="sm:hidden" src="../assets/faHomeMobile.png" alt="Home Button"/>
                <img className="hidden sm:block" src="../assets/faHome.png" alt="Home Button"/>
            </Link>
        </div>
        <div className="flex">
            <Link to={'/level2'} className="my-auto">
                <img className="sm:hidden" src="../assets/faChevronCircleRightMobile.png" alt="Next Button"/>
                <img className="hidden sm:block" src="../assets/faChevronCircleRight.png" alt="Next Button"/>
            </Link>
        </div>
    </footer>

    </>
  )
}
