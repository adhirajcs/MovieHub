import { FaLinkedin, FaGithub } from "react-icons/fa";

const ToolTip = () => {
  return (
    <>
      <div className="absolute top-4 right-4 flex space-x-4">
        {/* LinkedIn */}
        {/* <a
            href="https://www.linkedin.com/in/adhirajsaha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaLinkedin size="32"></FaLinkedin>
          </a> */}

        {/* Github */}
        <div className="group relative flex items-center text-zinc-600 text-sm font-bold">
          <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-gray-700 to-gray-800 p-1 rounded-full cursor-pointer duration-300">
            <a
              href="https://github.com/adhirajcs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-gray-500 hover:text-gray-400">
                <FaGithub size="32" />
              </span>
              
              <span className="text-[0px] group-hover:text-sm text-white duration-300 group-hover:mx-1 hover:text-gray-300">
                Visit my GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolTip;
