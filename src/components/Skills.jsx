import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-skills2 bg-cover bg-right-bottom bg-no-repeat flex mx-auto md:flex-row flex-col text-slate-800 my-10 md:p-20 p-10 gap-10  h-full w-full">
      <div className='md:text-white md:order-2 my-auto font-semibold text-lg text-rose-600 text-center uppercase underline decoration-wavy decoration-zinc-900 underline-offset-8 w-auto md:w-4/12'>
        my Skills
      </div>
      <div className='md:order-1 blur-sm opacity-90 text-slate-100 p-5 mx-auto shrink flex rounded-xl bg-zinc-900 w-full h-96'>
        <p className='mx-auto my-auto'>
        HTML5 , CSS3 , JAVASCRIPT , MYSQL
        </p>
      </div>
    </div>
  );
};

export default Skills;
