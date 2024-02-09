import React from 'react'
import { RestaurantEndpoint } from '../services/DataServices.js'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function RestaurantComponent() {
    const [category, setCategory] = useState('');
    const [result, setResult] = useState('');
    
    const submitClick = async () => {
        if(category){
            const response = await RestaurantEndpoint(category);
            setResult(response);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCategory(e.target.value);
            submitClick();
        }
    };

  return (
    <>
      
    <header className="w-screen h-[8vh] bg-[#FFFFFF] flex">
        <h2 className="text-black font-bold font-amatic tracking-wide text-4xl my-auto ps-5 sm:ps-10 md:ps-20">AFO: Restaurant Picker</h2>
    </header>

    <main className="w-[screen] h-[84vh] bg-[#228896] text-white px-10 sm:px-20 xl:px-50 py-14">
        <section className="h-full flex flex-col justify-between">
            <h1 className="font-amatic text-7xl font-bold text-center pb-5 pt-10"><span className="sm:hidden">Lvl.</span><span className="hidden sm:inline-block">Level</span> 9</h1>
            
            <div className="flex font-josefin font-bold">
                <div className="mx-auto hidden xl:block">
                    <img src="../assets/ForkKnife.png" alt="Fork icon"/>
                </div>
                <div className="mx-auto">
                    <label className="block pb-5 text-2xl" htmlFor="input">Enter a restaurant category:</label>
                    <input onChange={e => setCategory(e.target.value)} onKeyDown={handleKeyDown} className="text-black text-lg rounded-lg border-0 w-[230px] min-[375px]:w-[300px] sm:w-[400px]" type="text" id="input" maxLength="10" placeholder="Choose: sushi, burgers, or pizza" required/>
                </div>
                <div className="mx-auto hidden xl:block">
                    <img src="../assets/Brandy.png" alt="Drink icon"/>
                </div>
            </div>

            <div className="my-10 mx-auto font-josefin font-bold text-4xl">{result}</div>
            
            <button onClick={() => submitClick()} className="text-black font-bold text-2xl font-amatic tracking-widest rounded-lg bg-[#D4E589] h-[5vh] w-[230px] min-[375px]:w-[300px] sm:w-[400px] mx-auto">Submit</button>
        </section>
    </main>

    <footer className="w-screen h-[8vh] bg-[#FFFFFF] columns-3 flex justify-center gap-20">
        <div className="flex">
            <Link to={'/level8'} className="my-auto">
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
            <Link to={'/'} className="my-auto">
                <img className="sm:hidden" src="../assets/dark-faChevronCircleRightMobile.png" alt="Next Button"/>
                <img className="hidden sm:block" src="../assets/dark-faChevronCircleRight.png" alt="Next Button"/>
            </Link>
        </div>
    </footer>

    </>
  )
}
