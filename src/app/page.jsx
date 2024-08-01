import Image from 'next/image'

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-xl  ">
    {/* IMAGE CONTAINER  */}
    <div className=" h-1/2 lg:h-full lg:w-1/2  relative ">
      <Image src="/hero.png" alt="hero.png" fill="true" className='object-contain' priority="true" />
    </div>

    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* TITLE */}
      <h1 className='text-4xl md:text-6xl font-bold '>Lorem ipsum dolor</h1>

      {/*  DESC*/}
      <p className='md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe temporibus in, aliquam impedit ipsa animi numquam sed dicta sequi aspernatur quisquam laboriosam blanditiis provident at eveniet molestias! Dolore, cum sunt.</p>

      {/* BUTTONS */}
      <div className='w-full flex gap-4'>
        <button className='p-4 rounded-lg ring ring-black bg-black text-white'>View My Work</button>
        <button className='p-4 rounded-lg ring ring-black'>Contact Me</button>
      </div>
    </div>
  </div>;
};

export default Homepage;
