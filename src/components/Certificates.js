import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { certificates } from "../data";

function CurrentCertificate(props) {
  const certificate = props.certificate;
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded">
        <div className="flex">
          <TerminalIcon className="block w-8 text-gray-500 mb-4" />
            <h1 className="title-font font-medium text-white text-3xl mb-4 ml-2">
              {certificate.status}
            </h1>
        </div>
        <div className="inline-flex items-center">
          <img
            alt="certificate"
            src={certificate.image}
            className="w-28 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">
              {certificate.name}
            </span>
            <span className="text-gray-500 text-sm uppercase">
              {certificate.company}
            </span>
          </span>
        </div>
        <p className="leading-relaxed mb-6 text-left">
          &#9679; {certificate.quote}<br />
          <strong>&#9679; {certificate.comment}</strong>
        </p>
      </div>
    </div>
  )
}

function UpcomingCertificate(props) {
  const certificate = props.certificate;
  return (  
    <div className="flex items-center mb-4">
      <img
        alt="certificate"
        src={certificate.image}
        className="w-28 rounded-full flex-shrink-0 object-cover object-center ml-12"
      />
      <span className="flex-grow flex flex-col pl-4 mr-24">
        <span className="title-font font-medium text-white">
          {certificate.name}
        </span>
        <span className="text-gray-500 text-sm uppercase">
          {certificate.company}
        </span>
      </span>
    </div>
)
}

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        <div className="flex flex-wrap m-4">
          {certificates.map((certificate) => 
            certificate.status === 'Current'
              ? <CurrentCertificate certificate={certificate} />
              : (
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded">
                    <div className="flex">
                      <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                        <h1 className="title-font font-medium text-white text-3xl mb-4 ml-2">
                          {certificate.status}
                        </h1>
                    </div>
                    {
                    certificate.list.map((cert) =>
                      <UpcomingCertificate certificate={cert} />
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}