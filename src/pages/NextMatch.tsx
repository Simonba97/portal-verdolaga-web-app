import NextMatchCard from '../components/NextMatchCard';

const NextMatch = () => {
    return (
        <section className="h-screen bg-[url('../src/assets/bgHome.jpg')] bg-center bg-cover">

            {/* Cover de imágen */}
            <div className='h-full flex justify-center items-center'>

                {/* <div className='w-1/3 uppercase flex justify-center'> */}

                {/* Title + Lema */}
                {/* <div className='text-white py-4 text-center drop-shadow-[-3px_3px_6px_rgba(0,0,0,1)]'>
                    <h1 className='text-4xl font-normal italic'>
                        <span>Partido Anterior</span>
                    </h1>
                </div> */}
                {/*  <PreviousMatch />

                </div> */}

                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase flex justify-center'>

                    {/* Title + Lema */}
                    {/* <div className='text-white py-4 text-center drop-shadow-[-3px_3px_6px_rgba(0,0,0,1)]'>
                    <h1 className='text-5xl font-normal italic'>
                        <span >PRÓXIMO PARTIDO</span>
                    </h1>
                </div> */}

                    <NextMatchCard />

                </div>
            </div>


        </section>
    )
}

export default NextMatch