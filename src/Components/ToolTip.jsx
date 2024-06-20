import { FaLinkedin, FaGithub } from "react-icons/fa";

const ToolTip = () => {
  return (
    <>
      {/* LinkedIn */}
      <div className="absolute top-4 left-4 flex space-x-4">
        <div className="group relative flex items-center text-zinc-600 text-sm font-bold">
          <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-blue-700 to-blue-800 p-0.5 rounded-md cursor-pointer duration-300">
            <a
              href="https://www.linkedin.com/in/adhirajsaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-gray-300 hover:text-gray-200">
                <FaLinkedin size="32" />
              </span>

              <span className="text-[0px] group-hover:text-sm text-white duration-300 group-hover:mx-1 hover:text-gray-300">
                Visit my LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Source Code Link */}
      <div className="absolute bottom-4 flex space-x-4">
        <div className="group relative flex items-center text-zinc-600 text-sm font-bold">
          <div className="shadow-md flex items-center bg-gradient-to-br from-blue-900 to-gray-900 p-0.5 rounded-md cursor-pointer">
            <a
              href="https://github.com/adhirajcs/MovieHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-gray-100 group-hover:text-gray-300 mx-2">
                View The Source Code!
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Github */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <div className="group relative flex items-center text-zinc-600 text-sm font-bold">
          <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-gray-700 to-gray-800 p-1 rounded-full cursor-pointer duration-300">
            <a
              href="https://github.com/adhirajcs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-gray-300 hover:text-gray-200">
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
