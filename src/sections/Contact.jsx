import SectionTitle from '../components/SectionTitle';
import Form from '../components/Form';

function Contact() {
  return (
    <section id="contact" className="w-full p-32 bg-[#020617]">
      <div className="m-auto max-w-5xl flex flex-col gap-12 items-center">
        <SectionTitle
          sectionName="05. Contact"
          contenu="Travaillons ensemble"
        />
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
