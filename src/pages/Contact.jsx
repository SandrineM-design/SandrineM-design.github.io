function Contact() {
  return (
    <div>
      <h1></h1>
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
    </div>
  );
}

export default Contact;
