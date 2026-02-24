import SectionTitle from '../components/SectionTitle';
import Form from '../components/Form';

function Contact() {
  return (
    <section
      id="contact"
      className="group/flou  w-full p-32 pb-10 bg-[#020617]"
    >
      <div className="m-auto max-w-5xl flex flex-col gap-12 items-center ">
        <div className="relative flex items-center">
          <div
            className="z-0 group-hover/flou:opacity-30 transition-all duration-1000 -translate-x-1/4 absolute bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 
          blur-2xl opacity-0 rounded-full
          w-30 h-20 sm:w-40 sm:h-28 md:w-70 md:h-60 pointer-events-none"
          ></div>
          <SectionTitle
            sectionName="05. Contact"
            contenu="Travaillons ensemble"
          />
        </div>
        <Form />

        <ul className="flex gap-8">
          <li>
            <a href="#">
              <i className="fa-brands fa-github"></i>{' '}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>{' '}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-envelope"></i>{' '}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
