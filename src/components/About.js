import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
    return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <RoughNotationGroup show={true}>
                <h1 className="sm:text-3xl text-2xl mb-4 font-medium text-white">
                Hey, I'm {''}
                <RoughNotation 
                    type='highlight'
                    multiline={true}
                    padding={[0, 2]}
                    iterations={0}
                    animationDuration={700}
                    strokeWidth={2}
                    color="#708090"
                >
                    Tri Nguyen
                </RoughNotation>
                </h1>
                <br className="hidden lg:inline-block" />
                <RoughNotation 
                    type='box'
                    multiline={true}
                    padding={[0, 2]}
                    iterations={1}
                    animationDuration={700}
                    strokeWidth={2}
                    color="#1E90FF"
                >
                    <h1 className="sm:text-5xl text-3xl mb-4 font-semibold font-mono text-white">Web Developer.</h1>
                </RoughNotation>
                {''}
                <RoughNotation 
                    type='box'
                    multiline={true}
                    padding={[0, 2]}
                    iterations={1}
                    animationDuration={700}
                    strokeWidth={2}
                    color="#FF6347"
                >
                    <h1 className="sm:text-5xl text-3xl mb-4 font-semibold font-mono text-white">Cybersecurity Enthusiast.</h1>
                </RoughNotation>
            </RoughNotationGroup> 
            <br className="hidden lg:inline-block" />
          <p className="mb-8 leading-relaxed">
          👨‍💻 I'm experienced with Django / Django Rest Framework<br />
          🕵 I constantly challenge myself with CTFs<br />
          ✍ Sometimes I write blogs<br />
          👨‍🎓 Learning M.E.R.N, Cloud, and more Cybersecurity<br />
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
    )
}