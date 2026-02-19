function Form() {
  return (
    <>
      <div>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" placeholder="Votre nom"></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="votre@email.com"></input>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Votre message"></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </>
  );
}

export default Form;
