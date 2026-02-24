import { useState } from 'react';

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const handleSbmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.submit();
  };
  return (
    <>
      <form
        action=""
        method="POST"
        onSubmit={handleSbmit}
        className="max-w-2xl w-full bg-slate-900/30 p-5 rounded-xl flex flex-col gap-8 justify-center items-start"
      >
        <div className="w-full flex flex-col gap-2 justify-center">
          <label htmlFor="name">Nom</label>
          <input id="name" type="text" placeholder="Votre nom"></input>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="votre@email.com"></input>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center">
          <label htmlFor="message">Message</label>
          <textarea
            className="resize-none"
            id="message"
            placeholder="Votre message"
          ></textarea>
        </div>
        <button
          className="w-50 self-center transition-all duration-300 hover:scale-105 
        "
          type="submit"
        >
          Envoyer
        </button>
      </form>
      {submitted && <p> Merci ! Votre message a bien été envoyé. </p>}
    </>
  );
}

export default Form;
