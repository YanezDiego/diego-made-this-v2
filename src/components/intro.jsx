const Intro = () => {
    return (
      <div className='flex items-start justify-center min-h-screen py-4 md:py-6 lg:py-16'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <div className='title'>
              <h1 className='text-4xl md:text-6xl lg:text-8xl'>
                Hello! <br/> My name is Diego
              </h1>
            </div>
            <div className='intro text-lg md:text-xl lg:text-2xl'>
              <p>I am a highly experienced Full Stack Software Engineer based in Brooklyn, NY.</p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Intro