import React from "react";
import style from "./Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faNodeJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons"; // Asegúrate de utilizar free-brands-svg-icons para iconos de marcas
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const Cards = () => {
  return (
    <div className={` mt-16 ${style.divprincipal} `}>
      <div
        className={`bg-white  ${style.container}  flex justify-around items-center font-mono rounded-3xl`}
      >
        <div>
          <div className="">
            <div className="flex justify-center text-4xl mb-4">
              <h1>WanderLuxe</h1>
            </div>
            <div className=" flex justify-center text-xs">
              <p>Ecommerce for rent houses</p>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className="mt-16 flex justify-center text-2xl ">Tech Used</h1>
            <div className="flex justify-between mt-4">
              <div>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "#48A8C1", height: "40px" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faNodeJs}
                  style={{ color: "#8CC84B", height: "40px" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCss3}
                  style={{ color: "#2196F3", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./Captura de pantalla 2023-10-05 023527.png"
            alt="hola"
            className="w-86 h-52 rounded-3xl hover:scale-110"
          />
          <div className="flex justify-center mt-4">
            <FontAwesomeIcon icon={faGithub} className=" mr-8 h-8" />
            <FontAwesomeIcon icon={faGlobe} className="h-8" />
          </div>
        </div>
      </div>
      <div
        className={`bg-white  ${style.container}  flex justify-around items-center font-mono rounded-3xl mt-16`}
      >
        <div>
          <img
            src="./Captura de pantalla 2023-10-05 023527.png"
            alt="hola"
            className="w-86 h-52 rounded-3xl hover:scale-110"
          />
          <div className="flex justify-center mt-4">
            <FontAwesomeIcon icon={faGithub} className=" mr-8 h-8" />
            <FontAwesomeIcon icon={faGlobe} className="h-8" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex justify-center text-4xl mb-4">
              <h1>Ignite Motors</h1>
            </div>
            <div className=" flex justify-center text-xs">
              <p>Ecommerce for sell and buy Cars</p>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className="mt-16 flex justify-center text-2xl ">Tech Used</h1>
            <div className="flex justify-between mt-4">
              <div>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "#48A8C1", height: "40px" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faNodeJs}
                  style={{ color: "#8CC84B", height: "40px" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCss3}
                  style={{ color: "#2196F3", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-white mt-16 ${style.container}  flex justify-around items-center font-mono rounded-3xl`}
      >
        <div>
          <div className="">
            <div className="flex justify-center text-4xl mb-4">
              <h1>DogsHenry</h1>
            </div>
            <div className=" flex justify-center text-xs">
              <p className="text-center">It's a Simple Web Application that i made <br /> in the bootcamp of Henry</p>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className="mt-16 flex justify-center text-2xl ">Tech Used</h1>
            <div className="flex justify-between mt-4">
              <div>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "#48A8C1", height: "40px" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faNodeJs}
                  style={{ color: "#8CC84B", height: "40px" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCss3}
                  style={{ color: "#2196F3", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./Captura de pantalla 2023-10-05 023527.png"
            alt="hola"
            className="w-86 h-52 rounded-3xl hover:scale-110"
          />
          <div className="flex justify-center mt-4">
            <FontAwesomeIcon icon={faGithub} className=" mr-8 h-8" />
            <FontAwesomeIcon icon={faGlobe} className="h-8" />
          </div>
        </div>
      </div>
     
    </div>
  );
};
