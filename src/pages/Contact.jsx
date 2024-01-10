import linkedin from "../assets/Linkedin_icon.png";
import github from "../assets/github.png";

function Contact() {
  return (
    <div>
      <h2 className="mt-10 font-bold text-2xl bg-yellow-50">
        Une question, une proposition d'emploi ou vous souhaitez simplement
        faire connaissance ? Envoyez-moi un message ou contactez-moi sur les
        réseaux !
      </h2>
      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <label>
          Prénom :
          <input type="text" name="firstname" />
        </label>
        <label>
          Votre message :
          <input type="text" name="message" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>

      <ul>
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
