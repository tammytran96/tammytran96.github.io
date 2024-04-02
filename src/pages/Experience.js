import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles.css';

const Experience = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Development Internship at TechJoy',
      date: 'July 2023-Dec 2023',
      imageUrl: '/assets/orff/orff.png',
      techStack: 'Tech Stack: JavaScript, React, Python, Django, Cypress Testing, Git, GitHub, ZenHub',
      link: 'https://offroadfunfinder.com/signin',
      descriptionImage: [
        '/assets/orff/orffsignin.png',
        '/assets/orff/orffmap.png',
        '/assets/orff/orffsearch.png',
      ],
      description: (
        <div className='project-description'>
          <p>
            During my internship at TechJoy, I was tasked with working on the Off Road Fun Finder client site, a versatile web and mobile app designed for offroading enthusiasts to discover tracks, access training resources, and stay updated on nationwide events. My focus was primarily on the web version of the app.
          </p>
          <p>
            Upon joining the project, I identified several gaps in developmental best practices within the codebase. To ensure a solid foundation for ongoing development and feature enhancements, I spearheaded efforts to optimize the codebase. This involved implementing essential testing protocols using Cypress, guaranteeing the seamless functionality and reliability of the app.
          </p>
          <p>
            In addition to testing, I took proactive steps to enhance the codebase's organization and readability. By addressing ES lint warnings and restructuring legacy code, I streamlined the development process, making it easier for the team to navigate and maintain the codebase efficiently.
          </p>
          <p>
            Furthermore, I played a pivotal role in improving developer documentation. By crafting detailed and user-friendly instructions, I facilitated clear communication and minimized support requests for clarification, thereby enhancing overall project efficiency and collaboration.
          </p>
          <p>
            Achievements/Impact
            <br></br>
            Successfully restructured the codebase to an organized state, enabling the senior team to seamlessly implement new client-requested features without disruptions. Implemented comprehensive testing protocols to ensure optimal site functionality and user experience.
          </p>
          <p>
            Takeaway<br></br>
            My internship reinforced the critical importance of establishing a solid foundation and structured approach when building a website. Adhering to best practices from the outset is key to scalability and avoiding reactive measures as the site expands. Emphasizing proactivity over reactivity whenever feasible is crucial for long-term success.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Software Engineering Internship at Drata',
      date: 'May 2023-June 2023',
      imageUrl: '/assets/drata/drata.png',
      techStack: 'Tech Stack: TypeScript, JavaScript, MySQL, React, Jest Testing, JSON, AWS, Jira, Git, GitHub, Notion',
      link: 'https://developers.drata.com/docs/',
      descriptionImage: [
        '/assets/drata/drataapi.png',
        '/assets/drata/dratadoc.png',
      ],
      description: (
        <div className='project-description'>
          <p>
            “Drata is a security and compliance automation platform that continuously monitors and collects evidence of a company’s security controls, while streamlining workflows to ensure audit-readiness.” -Drata website
          </p>
          <p>
            During my internship, I undertook a pivotal project involving the implementation of additional endpoints to enhance the functionality of the company's existing API. This expansion not only broadened the API's capabilities but also enriched the user experience by enabling them to access their company data seamlessly, facilitating internal workflows, and empowering users to tailor solutions to their specific needs.
          </p>
          <p>
            As part of this project, I meticulously crafted unit tests for each new endpoint, ensuring the robustness and reliability of the code while proactively identifying and addressing potential bugs. This commitment to thorough testing significantly bolstered the API's performance and stability.
          </p>
          <p>
            Additionally, I played a key role in updating the company's API documentation, a critical task that involved ensuring seamless integration for users importing company-provided files into Postman. By meticulously aligning the documentation with Postman settings, I ensured that users could effortlessly replicate the company's configurations, thereby streamlining their workflows and optimizing their user experience.
          </p>
          <p>
            Throughout the internship, I actively participated in daily code reviews, engaging in collaborative feedback sessions where I not only received valuable insights on improving my code but also contributed to enhancing the overall codebase through thoughtful reviews of my teammates' code. This dedication to maintaining code integrity and fostering a culture of continuous improvement underscores my commitment to delivering high-quality contributions and driving excellence in software development practices.
          </p>
          <p>
            Achievements/Impact
            <br></br>
            Collaborated with a cross-functional team and stakeholders to successfully deliver assigned projects ahead of schedule, and effectively delivered and closed over 38 tickets, with 154 commits made, 118 files modified, and 3,252 lines of code added across 4 repositories, showcasing strong productivity and technical proficiency
          </p>
          <p>
            Takeaway
            <br></br>
            During my internship, I gained invaluable insights into the intricacies of software development within a professional environment. It was a transformative experience where I delved into the end-to-end process of developing new features, from planning stages to coding best practices, including creating, merging, and updating branches. I navigated through merge conflicts, honing my problem-solving skills and deepening my understanding of version control systems.
          </p>
          <p>
            This immersive journey provided me with a solid foundation in industry-standard practices and exposed me to the collaborative dynamics of an engineering team. I emerged from this experience not only with technical expertise but also with a newfound confidence and readiness to contribute effectively to the tech industry.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Blurred Limes: Full-Stack Web Development Project',
      date: 'May 2023',
      imageUrl: '/assets/blurredlimes/blurredlimes.png',
      techStack: 'Tech Stack: Ruby, JavaScript, HTML, SCSS, React in Rails, PostgreSQL, Git, GitHub, Trello',
      link: 'https://github.com/TRFM-Radio/blurred-limes',
      descriptionImage: [
        '/assets/blurredlimes/blurredlimescontroller.png',
        '/assets/blurredlimes/blurredlimeshome.png',
      ],
      description: (
        <div className='project-description'>
          <p>
            Blurred Limes is a user-friendly web application crafted to minimize food waste and empower users to save money. By offering a comprehensive platform for users to manage their food inventory, the app streamlines kitchen organization and enhances efficiency.
          </p>
          <p>
            As the tech lead for this collaborative project, I assumed a pivotal role in providing technical leadership and guidance to the team. I ensured the successful implementation of the app's functionalities and features, aligning closely with user stories to deliver a seamless user experience.
          </p>
          <p>
            I actively engaged with stakeholders to define the project's technical requirements, establish a robust architecture and design, and make strategic decisions regarding technology selection. This collaborative effort ensured that our development approach was aligned with the project's overarching goals and vision.
          </p>
          <p>
            Additionally, I supported team members by overseeing task allocation and planning, conducting thorough code reviews, and addressing technical challenges proactively. This meticulous approach resulted in the delivery of a high-quality product that not only met user expectations but also exceeded them, fulfilling the project's objectives effectively.
          </p>
          <p>
            Achievements/Impact
            <br></br>
            We not only completed the project within the designated timeframe but also enjoyed the collaborative process. I was fortunate to collaborate with a cohesive team that fostered a friendly and supportive work environment, resulting in a group of teammates who became friends.
          </p>
          <p>
            Takeaway
            <br></br>
            This project underscored the paramount importance of constant and clear communication within a team. While we were passionate about the project's mission and eager to add extra features, we remained focused on achieving the MVP (minimal viable product) as the crucial initial milestone. This experience reinforced the value of prioritization and staying aligned with project objectives.
          </p>
        </div>
      ),
    },
  ];

  const handleSeeMore = (projectId) => {
    // Implement logic to open modal for the selected project
    console.log('See More clicked for project ID:', projectId);
  };

  return (
    <div id="experience" className="section">
      <div className="experience-container">
        <main className="experience-main">
          <div className="experience-content-wrapper">
            <h1 className="experience-text-title">Experience</h1>
            <div className="project-cards-container">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  date={project.date}
                  imageUrl={project.imageUrl}
                  techStack={project.techStack}
                  link={project.link}
                  descriptionImage={project.descriptionImage}
                  description={project.description}
                  onClick={() => handleSeeMore(project.id)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Experience;
