import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Contact() {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col flex-1 place-items-stretch bg-yellow-50">
      <h2 className="flex flex-col flex-1 place-items-center bg-yellow-50 mt-10 font-bold text-2xl bg-yellow-50">
        Contact
      </h2>
      <p className="mt-5 mb-6 vhitespace-norma bg-yellow-50l">
        Une question, une proposition d'emploi ou vous souhaitez simplement
        faire connaissance ? Envoyez-moi un message ou contactez-moi sur les
        réseaux !
      </p>
      <form className="grid justify-self-stretch">
        <div className="grid grid-flow-colmun-dense grid-rows-3 gap-3">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Votre prénom
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Votre nom
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Votre adresse mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Votre message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-smtext-gray-900 bg-gray-50"
            ></textarea>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
      <ul className="grid grid-cols-2 mt-10 place-content-center">
        <li>
          <a href="https://www.linkedin.com/in/sandrine-manson-040925290/">
            <img src={linkedin}></img>
          </a>
        </li>
        <li>
          <a href="https://github.com/SandrineM-design">
            {" "}
            <img src={github}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
