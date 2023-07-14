import React from "react";
import { BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoBootstrap, BiLogoMongodb, BiLogoFirebase } from "react-icons/bi";

const Skills = () => {
  return (
    <div id="skills" className="bg-skills2 bg-cover bg-right-bottom bg-no-repeat flex mx-auto md:flex-row flex-col text-slate-800 my-10 md:p-20 p-10 gap-10  h-full w-full">
      <div className='md:text-white md:order-2 my-auto font-semibold text-lg text-rose-600 text-center uppercase underline decoration-wavy decoration-zinc-900 underline-offset-8 w-auto md:w-4/12'>
        my Skills
      </div>
      <div className='flex flex-col md:flex-row md:order-1 opacity-90 text-slate-100 p-3 md:p-8 gap-1 lg:p-20 mx-auto shrink flex rounded-xl bg-zinc-900 w-full h-96'>
        <div className="flex md:flex-col flex-wrap mx-auto my-auto text-clip opacity-100 font-bold text-[0.8rem] space-x-2 md:text-[1.3rem]">
          <p className="inline md:block text-green-500 border-4 p-3 rounded-[30px] border-green-700 shadow-md shadow-green-500 mb-5">Experienced</p>
          <p className="inline md:block text-blue-500 border-4 p-3 rounded-[30px] border-blue-700 shadow-md shadow-blue-500 mb-5">Intermediate</p>
          <p className="inline md:block text-orange-500 text-center border-4 p-3 rounded-[30px] border-orange-700 shadow-md shadow-orange-500 mb-5">Basic</p>
        </div>
        <div className='text-center grid grid-cols-3 md:ml-5 md:grid-cols-5 gap-10 md:gap-20 mx-auto my-auto opacity-100 h-auto w-auto overflow-auto text-[1rem]'>
          <div className="flex flex-col text-green-500 md:items-start lg:items-center items-center">            
            <BiLogoHtml5 iLogoHtml5 size={50}/>
            <p className="font-bold">HTML5</p>
          </div>
          <div className="flex flex-col text-green-500 md:items-start lg:items-center items-center">
            <BiLogoCss3 size={50}/>
            <p className="font-bold">CSS3</p>
          </div>
          <div className="flex flex-col text-green-500 md:items-start lg:items-center items-center">
            <BiLogoTailwindCss size={50}/>
            <p className="font-bold">Taildwind CSS</p>
          </div>
          <div className="flex flex-col text-green-500 md:items-start lg:items-center items-center">
            <BiLogoBootstrap size={50}/>
            <p className="font-bold">Bootstrap</p>
          </div>
          <div className="flex flex-col text-blue-500 md:items-start lg:items-center items-center">
            <BiLogoJavascript size={50}/>
            <p className="font-bold">JavaScript</p>
          </div>
          <div className="flex flex-col text-blue-500 md:items-start lg:items-center items-center">
            <BiLogoReact size={50}/>
            <p className="font-bold">ReactJS</p>
          </div>
          <div className="flex flex-col text-orange-500 md:items-start lg:items-center items-center">
            <BiLogoReact size={50}/>
            <p className="font-bold">React Native</p>
          </div>
          <div className="flex flex-col text-orange-500 md:items-start lg:items-center items-center">
            <BiLogoNodejs size={50}/>
            <p className="font-bold">NodeJS</p>
          </div>
          <div className="flex flex-col text-orange-500 md:items-start lg:items-center items-center">
            <BiLogoMongodb size={50}/>
            <p className="font-bold">MongoDB</p>
          </div>
          <div className="flex flex-col text-orange-500 md:items-start lg:items-center items-center">
            <BiLogoFirebase size={50}/>
            <p className="font-bold">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
