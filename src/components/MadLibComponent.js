import React from 'react'
import { MadLibEndpoint } from '../services/DataServices.js'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function MadLibComponent() {
    const [noun, setNoun] = useState('');
    const [holiday, setHoliday] = useState('');
    const [pronoun, setProunoun] = useState('');
    const [animal, setAnimal] = useState('');
    const [exclam, setExclam] = useState('');
    const [color, setColor] = useState('');
    const [nounTwo, setNounTwo] = useState('');
    const [verb, setVerb] = useState('');
    const [object, setObject] = useState('');
    const [hours, setHours] = useState('');
    const [result, setResult] = useState('');
    
    const submitClick = async () => {
        if(noun && holiday && pronoun && animal && exclam && color && nounTwo && verb && object && hours){
            const response = await MadLibEndpoint(noun, holiday, pronoun, animal, exclam, color, nounTwo, verb, object, hours);
            setResult(response);
        }
    };

  return (
    <>
      
    <header className="w-screen h-[8vh] bg-[#FFFFFF] flex">
        <h2 className="text-black font-bold font-amatic tracking-wide text-4xl my-auto ps-5 sm:ps-10 md:ps-20">AFO: Mad Lib
        </h2>
    </header>

    <main className="w-[screen] h-[screen] bg-[#228896] text-white px-10 sm:px-20 xl:px-50 py-14">
        <section className="h-full flex flex-col justify-between mx-auto max-w-screen-lg">
            <h1 className="font-amatic text-7xl font-bold text-center pb-16 pt-10"><span className="sm:hidden">Lvl.</span><span
                    className="hidden sm:inline-block">Level</span> 4</h1>

            <div className="flex flex-wrap justify-center font-josefin font-bold">
                <div className="w-full lg:w-1/2 flex">
                    <div className="mx-auto">
                        <div className="pb-5">
                            <label className="block pb-5 text-2xl" htmlFor="noun1">Enter a noun:</label>
                            <input onChange={e => setNoun(e.target.value)}
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="noun1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label onChange={e => setHoliday(e.target.value)} className="block pb-5 text-2xl" htmlFor="holiday1">Enter a holiday:</label>
                            <input
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="holiday1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label onChange={e => setProunoun(e.target.value)} className="block pb-5 text-2xl" htmlFor="pronoun1">Enter a pronoun:</label>
                            <input
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="pronoun1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label onChange={e => setAnimal(e.target.value)} className="block pb-5 text-2xl" htmlFor="animal1">Enter an animal:</label>
                            <input
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="animal1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="pt-5 pb-10">
                            <label onChange={e => setExclam(e.target.value)} className="block pb-5 text-2xl" htmlFor="exclamation1">Enter an exclamation:</label>
                            <input
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="exclamation1" maxLength="10" placeholder="Required field" required/>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex">
                    <div className="mx-auto">
                        <div className="pb-5">
                            <label className="block pb-5 text-2xl" htmlFor="color1">Enter a color:</label>
                            <input onChange={e => setColor(e.target.value)}
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="color1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label className="block pb-5 text-2xl" htmlFor="noun2">Enter a noun:</label>
                            <input onChange={e => setNounTwo(e.target.value)}
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="noun2" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label className="block pb-5 text-2xl" htmlFor="verb1">Enter a verb (-ing):</label>
                            <input onChange={e => setVerb(e.target.value)}
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="verb1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label className="block pb-5 text-2xl" htmlFor="object1">Enter a blunt object:</label>
                            <input onChange={e => setObject(e.target.value)}
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="object1" maxLength="10" placeholder="Required field" required/>
                        </div>
                        <div className="py-5">
                            <label className="block pb-5 text-2xl" htmlFor="hours1">Enter a number:</label>
                            <input onChange={e => setHours(e.target.value)}
                                className="text-black text-lg rounded-lg border-0 h-10 ps-2 w-[230px] min-[375px]:w-[300px] sm:w-[400px]"
                                type="text" id="hours1" maxLength="10" placeholder="Required field" required/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10 mx-auto font-josefin font-bold text-4xl">{result}</div>

            <button onClick={() => submitClick()} className="text-black font-bold text-2xl font-amatic tracking-widest rounded-lg bg-[#D4E589] h-[5vh] w-[230px] min-[375px]:w-[300px] sm:w-[400px] mx-auto">Submit</button>
        </section>
    </main>

    <footer className="w-screen h-[8vh] bg-[#FFFFFF] columns-3 flex justify-center gap-20">
        <div className="flex">
            <Link to={'/level3'} className="my-auto">
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
            <Link to={'/level5'} className="my-auto">
                <img className="sm:hidden" src="../assets/dark-faChevronCircleRightMobile.png" alt="Next Button"/>
                <img className="hidden sm:block" src="../assets/dark-faChevronCircleRight.png" alt="Next Button"/>
            </Link>
        </div>
    </footer>

    </>
  )
}
