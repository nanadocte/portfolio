import SectionTitle from '../components/SectionTitle';
import Form from '../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 xs:py-32 xs:pb-10 px-5 pb-10 bg-dark"
    >
      <div className="group/flou m-auto max-w-5xl flex flex-col gap-12 items-center ">
        <div className="relative flex items-center">
          <SectionTitle
            sectionName="05. Contact"
            contenu="Travaillons ensemble"
          />
        </div>
        <Form />

        <ul className="flex gap-8">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers mon GitHub"
              href="https://github.com/nanadocte"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers mon Linkedin"
              href="https://www.linkedin.com/in/anne-goulamougaidine/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien pour m'écrire un mail"
              href="mailto:goulamougaidine.anne@outlook.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
