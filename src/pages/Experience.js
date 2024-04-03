import React from 'react';
import DeveloperProjectCard from '../components/DeveloperProjectCard';
import DesignProjectCard from '../components/DesignProjectCard';
import '../styles.css';

const Experience = () => {
  const developerProjects = [
    {
      id: 1,
      title: 'Web Development Internship at TechJoy',
      date: 'July 2023-Dec 2023',
      imageUrl: '/assets/developerprojects/orff/orff.png',
      techStack: 'Tech Stack: JavaScript, React, Python, Django, Cypress Testing, Git, GitHub, ZenHub',
      link: 'https://offroadfunfinder.com/signin',
      descriptionImage: [
        '/assets/developerprojects/orff/orffsignin.png',
        '/assets/developerprojects/orff/orffmap.png',
        '/assets/developerprojects/orff/orffsearch.png',
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
      imageUrl: '/assets/developerprojects/drata/drata.png',
      techStack: 'Tech Stack: TypeScript, JavaScript, MySQL, React, Jest Testing, JSON, AWS, Jira, Git, GitHub, Notion',
      link: 'https://developers.drata.com/docs/',
      descriptionImage: [
        '/assets/developerprojects/drata/drataapi.png',
        '/assets/developerprojects/drata/dratadoc.png',
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
      title: 'Blurred Limes: Full-Stack Web Dev Project',
      date: 'May 2023',
      imageUrl: '/assets/developerprojects/blurredlimes/blurredlimes.png',
      techStack: 'Tech Stack: Ruby, JavaScript, HTML, SCSS, React in Rails, PostgreSQL, Git, GitHub, Trello',
      link: 'https://github.com/TRFM-Radio/blurred-limes',
      descriptionImage: [
        '/assets/developerprojects/blurredlimes/blurredlimescontroller.png',
        '/assets/developerprojects/blurredlimes/blurredlimeshome.png',
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


  const designProjects = [
    {
      id: 1,
      title: 'Graceful Fleurs Logo',
      imageUrl: '/assets/designprojects/gf/gflogoblack.png',
      techStack: 'Software Used: Illustrator | InDesign | Photoshop',
      descriptionImage: [
        {
          imageUrl: '/assets/designprojects/gf/gflogoblack.png',
          caption: 'Graceful Fleurs logo on black background',
        },
        {
          imageUrl: '/assets/designprojects/gf/gflogowhite.png',
          caption: 'Graceful Fleurs logo on white background',
        },
        {
          imageUrl: '/assets/designprojects/gf/gfamazon.png',
          caption: 'Graceful Fleurs Amazon product page',
        },
        {
          imageUrl: '/assets/designprojects/gf/gfmockup.png',
          caption: 'Product mockup',
        },
        {
          imageUrl: '/assets/designprojects/gf/gfprocess1.png',
          caption: 'Logo design process',
        },
        {
          imageUrl: '/assets/designprojects/gf/gfprocess2.png',
          caption: 'Narrowed-down logo designs',
        },
      ],
      description: (
        <div className='project-description'>
          <p>
            This logo design was a pivotal part of a freelance project for Graceful Fleurs, a company specializing in real, preserved roses on Amazon, renowned for their longevity lasting for years. The primary objective was to craft a logo that evokes feelings of romance and luxury, aligning seamlessly with the brand's identity.
          </p>
          <p>
            My design journey commenced with close collaboration with the client, delving deep into their desired aesthetic and brand essence. I curated a comprehensive mood board, capturing elements that resonated with their vision and setting the tone for the design process. Initial sketches and concept exploration in Illustrator helped distill the style direction, leading to the creation of digital prototypes.
          </p>
          <p>
            Feedback loops and iterative revisions were instrumental in refining the chosen design, ensuring it not only met but exceeded the client's expectations. I presented mockups showcasing how the logo would appear on their product, ensuring a harmonious integration with their brand image.
          </p>
          <p>
            The final logo design elegantly incorporates the company name alongside a rose motif intertwined with vines, symbolizing the product's essence. The choice of a reflective gold color adds a touch of luxury and sophistication, aligning perfectly with the brand's positioning.
          </p>
          <p>
            The success of the logo is reflected in the product's performance on Amazon, boasting an impressive rating of over 4.5/5 stars based on more than 400 ratings, a testament to its appeal and resonance with the target audience.
          </p>
          <p>
            Takeaway<br></br>
            My takeaway from this project underscores the significance of understanding a client's vision and translating it into a compelling visual identity. Collaborating closely with the client allowed me to capture the essence of romance and luxury, key elements of their brand identity, in the logo design. The iterative design process, from mood boards to mockups, emphasized the importance of feedback and refinement in achieving a design that not only met but exceeded the client's expectations.
          </p>
          <p>
            This project also highlighted the impact of effective branding on product success. The logo's seamless integration with the product, coupled with its reflective gold color and elegant motif, resonated strongly with the target audience, as evidenced by the impressive ratings and positive feedback on Amazon.
          </p>
          <p>
            Overall, this experience reaffirmed the power of thoughtful design in creating meaningful connections and driving brand recognition and success.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Genesys MPC Logo',
      imageUrl: '/assets/designprojects/genesys/genesyslogo.png',
      techStack: 'Software Used: InDesign | Illustrator | Photoshop',
      descriptionImage: [
        {
          imageUrl: '/assets/designprojects/genesys/genesyslogo.png',
          caption: 'Genesys final logo',
        },
        {
          imageUrl: '/assets/designprojects/genesys/genesysprocess1.png',
          caption: 'Curated mood board',
        },
        {
          imageUrl: '/assets/designprojects/genesys/genesysprocess2.png',
          caption: 'Logo design process in Illustrator',
        },
        {
          imageUrl: '/assets/designprojects/genesys/genesysprocess3.png',
          caption: 'Final revisions',
        },
        {
          imageUrl: '/assets/designprojects/genesys/genesyscolors.png',
          caption: 'Genesys brand color palette',
        },
      ],
      description: (
        <div className='project-description'>
          <p>
            This logo design was part of a freelance project for Genesys MPC, a sales and marketing company known for its dynamic work environment that fosters teamwork and continuous self-improvement. The objective was to create a logo that embodies progress, growth, and a goal-oriented mindset.
          </p>
          <p>
            The name "Genesys," akin to "genesis," signifies the origin or beginning of something. Drawing inspiration from this concept, I envisioned a logo that symbolizes growth and potential. A sapling, representing the inception of a plant destined for beauty, seemed fitting to encapsulate the company's essence. Integrating the letter "G" into the design not only establishes a visual connection with the company's name but also emphasizes unity and teamwork.
          </p>
          <p>
            My design process involved close collaboration with the client to grasp their desired vibe and aesthetic preferences. I curated a mood board to capture elements that resonated with their vision. Initial sketches helped narrow down the style direction, leading to the creation of digital prototypes in Illustrator. Feedback and revisions were integral to refining the chosen design, ensuring it aligned with the client's expectations.
          </p>
          <p>
            The color palette was meticulously crafted to complement the logo and reflect the brand's identity. Shades of green, mirroring the leaf's evolving hues in the logo, symbolize the company's journey and growth trajectory.
          </p>
          <p>
            Takeaway<br></br>
            My takeaway from this project is the power of collaboration and meaningful symbolism in design. Working closely with the client allowed me to understand their values, goals, and aesthetic preferences, which were crucial in creating a logo that truly represents their brand identity. The process of translating abstract concepts like progress, growth, and unity into visual elements reinforced the importance of thoughtful design and effective communication. This project taught me the art of balancing creativity with functionality, ensuring that the final product not only looks appealing but also conveys a meaningful message that resonates with the audience.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Misc. Freelance Projects',
      imageUrl: '/assets/designprojects/miscfreelance/nhbeer.jpeg',
      techStack: 'Software Used: Illustrator | InDesign',
      descriptionImage: [
        {
          imageUrl: '/assets/designprojects/miscfreelance/nhbeer.jpeg',
          caption: 'Sticker design for a beer content creator on Instagram',
        },
        {
          imageUrl: '/assets/designprojects/miscfreelance/sumo.png',
          caption: 'Illustration for a client’s personal brand',
        },
        {
          imageUrl: '/assets/designprojects/miscfreelance/clssml.png',
          caption: 'Business cards for an Etsy shop owner',
        },
      ],
      description: (
        <div className='project-description'>
          <p>
            A collection of other miscellaneous freelance projects that I’ve worked on.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Misc. Personal Projects',
      imageUrl: '/assets/designprojects/miscpersonal/jbl1.jpg',
      techStack: 'Software Used: Illustrator | InDesign | Photoshop',
      descriptionImage: [
        {
          imageUrl: '/assets/designprojects/miscpersonal/jbl1.jpg',
          caption: 'JBL ad campaign 1/3',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/jbl2.jpg',
          caption: 'JBL ad campaign 2/3',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/jbl3.jpg',
          caption: 'JBL ad campaign 2/3',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/mob1.png',
          caption: 'Concept home page design for Museum of Beer in San Diego',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/mob2.png',
          caption: 'Concept exhibit page design for Museum of Beer in San Diego',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/spacejam.jpg',
          caption: 'Redesigned Space Jam movie poster based on female leads',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/outofbounds.jpg',
          caption: '“Out of Bounds” magazine spread based on “SLAM” magazine',
        },
        {
          imageUrl: '/assets/designprojects/miscpersonal/luckylotus.png',
          caption: 'Concept home page design for Lucky Lotus, a Vietnamese express restaurant',
        },
      ],
      description: (
        <div className='project-description'>
          <p>
            A collection of miscellaneous personal projects that I’ve enjoyed working on.
          </p>
        </div>
      ),
    },
  ];



  const handleSeeMore = (projectId) => {
    // Logic to open modal for the selected project
    console.log('See More clicked for project ID:', projectId);
  };

  return (
    <div id="experience" className="section">
      <div className="experience-container">
        <main className="experience-main">
          <div className="experience-content-wrapper">
            <h1 className="experience-text-title">Experience</h1>
            <div className="experience-subsection">
              <p className="subsection-title">Software Development</p>
              <div className="project-cards-container">
                {developerProjects.map((project) => (
                  <DeveloperProjectCard
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
            
            <div className="experience-subsection">
              <p className="subsection-title">Graphic Design</p>
              <div className="project-cards-container">
                {designProjects.map((project) => (
                  <DesignProjectCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    techStack={project.techStack}
                    descriptionImage={project.descriptionImage}
                    description={project.description}
                    onClick={() => handleSeeMore(project.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Experience;
