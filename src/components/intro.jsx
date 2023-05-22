const Intro = () => {
    return (
      <div className='flex items-start justify-center min-h-screen p-4 md:p-6 lg:p-16'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <div className='title p-4'>
              <h1 className='text-4xl md:text-6xl lg:text-8xl'>
                Hello! <br /> My name is Diego
              </h1>
            </div>
            <div className='intro font-light text-gray-600 text-lg md:text-xl lg:text-2xl'>
              <p>
                I am a <span className='underline'> highly experienced Full Stack Software Engineer</span> based in Brooklyn, NY.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Intro