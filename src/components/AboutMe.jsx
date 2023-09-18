import { useMediaQuery } from "react-responsive";

const AboutMe = () => {

const isMobile = useMediaQuery({ query: `(max-width: 760px)` });



  return (
    <>
      <h1 className='title p-4 text-4xl md:text-center md:text-6xl md:py-8 lg:text-6xl'>
        About Me
      </h1>
      {isMobile ? (
        <>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <div className='md:flex'>
              <div className='md:shrink-0'>
                <img
                  className='h-48 w-full object-cover md:h-full md:w-48'
                  src='./protrait.jpg'
                  alt='Portrait photo of Diego in a Museum.'
                />
              </div>
              <div className='p-8'>
                <p className='mt-2 text-base'>
                  With three years of experience as a full-stack software
                  engineer, I have gained expertise in various languages and
                  frameworks such as JavaScript, SQL, Ruby, TypeScript,
                  HTML/HTML5, CSS/SCSS, React, Gatsby, Ruby on Rails, GraphQL,
                  and LINQ.
                  <br />
                  <br />
                  Throughout my career, I have had the opportunity to work on
                  diverse projects, collaborating with cross-functional teams to
                  create user-friendly websites and web applications. I am
                  particularly passionate about accessibility and have utilized
                  tools like screen readers, keyboard navigation, and color
                  contrast checkers to test and improve accessibility in my
                  work.
                  <br />
                  <br />
                  In my previous roles, I have been responsible for tasks such
                  as gathering customer data, automating reporting tools, and
                  developing back-end APIs using technologies like Node.js and
                  MongoDB. I have also led the development of front-end
                  features, utilizing frameworks like React and GraphQL to
                  enhance user experiences. Additionally, I have had the
                  privilege of working as a technical coach, where I provided
                  support to students at all levels of their curriculum. This
                  experience allowed me to further refine my skills and
                  contribute to the development of a comprehensive online
                  curriculum.
                  <br />
                  <br />I am enthusiastic about creating innovative solutions
                  and delivering exceptional results. If you are looking for a
                  friendly and skilled software engineer to contribute to your
                  project, I would love to connect and discuss how I can be of
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-7xl'>
          <div className='flex items-center lg:columns-2 lg:gap-8 lg:p-8'>
            <div className='float-left rounded-full'>
              <img
                className=''
                src='./protrait.jpg'
                alt='Portrait photo of Diego in a Museum.'
              />
            </div>

            <div className='p-4 text-base'>
              <p>
                With three years of experience as a full-stack software
                engineer, I have gained expertise in various languages and
                frameworks such as JavaScript, SQL, Ruby, TypeScript,
                HTML/HTML5, CSS/SCSS, React, Gatsby, Ruby on Rails, GraphQL, and
                LINQ.
                <br />
                <br />
                Throughout my career, I have had the opportunity to work on
                diverse projects, collaborating with cross-functional teams to
                create user-friendly websites and web applications. I am
                particularly passionate about accessibility and have utilized
                tools like screen readers, keyboard navigation, and color
                contrast checkers to test and improve accessibility in my work.
                <br />
                <br />
                In my previous roles, I have been responsible for tasks such as
                gathering customer data, automating reporting tools, and
                developing back-end APIs using technologies like Node.js and
                MongoDB. I have also led the development of front-end features,
                utilizing frameworks like React and GraphQL to enhance user
                experiences. Additionally, I have had the privilege of working
                as a technical coach, where I provided support to students at
                all levels of their curriculum. This experience allowed me to
                further refine my skills and contribute to the development of a
                comprehensive online curriculum.
                <br />
                <br />I am enthusiastic about creating innovative solutions and
                delivering exceptional results. If you are looking for a
                friendly and skilled software engineer to contribute to your
                project, I would love to connect and discuss how I can be of
                assistance.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
