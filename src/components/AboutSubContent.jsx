/* eslint-disable import/no-extraneous-dependencies */
import { useParams } from 'react-router-dom';
import {
  BsLinkedin, BsGithub, BsFillFileEarmarkPersonFill, BsYoutube,
} from 'react-icons/bs';
import profilePic from '../Images/profilePic.jpg';

const AboutSubContent = () => {
  const aboutData = [
    {
      slug: 'about-app',
      title: 'About the app',
      description:
        "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
      githubLink: 'https://github.com/batoolfatima2135/react-todo-app.git',
      liveLink: 'https://github.com/batoolfatima2135/react-todo-app.git',
    },
    {
      slug: 'about-developer',
      title: 'About the developer',
      developerName: 'BATOOL FATIMA',
      description:
        'Hello! I am a passionate software developer who loves transforming ideas into digital solutions. I love to think out of the box and love to take challenges. My strong problem-solving skills enable me to analyze complex problems and develop solutions. I believe self-growth and giving up is not an option for me.',
      about1: '🌍  I am based in Pakistan',
      About2: '✉️  You can contact me at Batoolfatima2135@gmail.com',
      About3: '🤝  Currently seeking new opportunities',
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <h1 className="text-center">{title}</h1>
          {slug === 'about-developer' && (
          <>
            <div className="col-6 col-lg-3 col-md-3 align-items-center">
              <img src={profilePic} className="card-img-top img-fluid" alt="profile pic" />
            </div>
            <div className="card col-12 col-lg-8 col-md-8">
              <div className="card-body">
                <h5 className="card-title">{aboutContent.developerName}</h5>
                <p className="card-text">{description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{aboutContent.about1}</li>
                <li className="list-group-item">{aboutContent.About2}</li>
                <li className="list-group-item">{aboutContent.About3}</li>
              </ul>
              <div className="card-body">
                <a href="https://www.linkedin.com/in/batoolfatima2135" className="card-link">
                  <BsLinkedin size={30} />
                </a>
                <a href="https://github.com/batoolfatima2135" className="card-link">
                  <BsGithub size={30} color="black" />
                </a>
                <a href="https://batoolfatima2135.github.io/Portfolio/" className="card-link">
                  <BsFillFileEarmarkPersonFill size={30} color="green" />
                </a>
                <a href="https://www.youtube.com/@batoolfatima2135" className="card-link">
                  <BsYoutube size={30} color="red" />
                </a>
              </div>
            </div>
          </>

          )}
          {slug === 'about-app' && (
          <>
            <div className="card col-12 col-lg-8 col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center">Brief Intro</h5>
                <p className="card-text p-3 text-center">{description}</p>
              </div>
              <div className="card-body text-center">
                <a href={aboutContent.liveLink} className="card-link">
                  Live Link
                </a>
                <a href={aboutContent.githubLink} className="card-link">
                  Github Link
                </a>
              </div>
            </div>
          </>

          )}
        </div>
      </div>

    </>
  );
};
export default AboutSubContent;
