import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('xeelvoww');

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-slate-900/30 p-5 rounded-xl flex flex-col gap-8 justify-center items-start"
      >
        <div className="w-full flex flex-col gap-2 justify-center">
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" placeholder="Votre nom" />
        </div>

        <div className="w-full flex flex-col gap-2 justify-center">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="votre@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="w-full flex flex-col gap-2 justify-center">
          <label htmlFor="message">Message</label>
          <textarea
            className="resize-none"
            id="message"
            name="message"
            placeholder="Votre message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          className="w-50 self-center transition-all duration-300 hover:scale-105"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
      {state.succeeded && (
        <p className="mt-4 text-slate-400 text-center">
          Merci ! Votre message a bien été envoyé.
        </p>
      )}{' '}
    </>
  );
}

export default Form;
