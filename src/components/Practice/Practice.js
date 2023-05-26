import React from 'react';
import './practice.css';

const practiceAreasData = [
  {
    title: 'Criminal Law',
    description: 'Our experienced criminal defense attorneys provide aggressive representation for clients facing criminal charges. We handle cases related to assault, theft, drug offenses, DUI, and more.',
    image: 'https://media.istockphoto.com/id/1296308185/photo/crime-and-violence-concept-with-handcuffs.jpg?s=612x612&w=0&k=20&c=KnqSP_MgL1iMPemjy4z3egN880_fxx06aXSyenYGdzw=' 
  },
  {
    title: 'Family Law',
    description: 'Our compassionate family law attorneys assist clients in various family-related matters. We handle divorce, child custody, spousal support, adoption, and other family law issues.',
    image: 'https://i.pinimg.com/236x/c3/18/4c/c3184c63813689dfd4aa8fd1dc357974.jpg' 
  },
  {
    title: 'Corporate Law',
    description: 'Our corporate law team provides comprehensive legal services to businesses of all sizes. We offer guidance on contracts, business formation, mergers and acquisitions, intellectual property, and more.',
    image: 'https://i.pinimg.com/236x/2d/74/16/2d7416e624631593adf0d7cabdb914c3.jpg' 
  },
   {
    title: 'Immigration Law',
     description: 'Our immigration attorneys assist individuals and families with immigration-related matters. We handle visa applications, green card petitions, citizenship applications, and provide deportation defense.',
     image: 'https://victormatara.com/wp-content/uploads/2023/02/List-Of-Best-Immigration-Lawyers-In-Kenya-1200x675.jpeg'
   },
  {
    title: 'Real Estate Law',
    description: 'Our real estate lawyers provide expert advice and representation in real estate transactions. We handle property purchases, leases, title examinations, zoning issues, and resolve real estate disputes.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/016/390/581/small/lawyer-and-law-books-free-png.png' 
  },
  {
    title: 'Intellectual Property Law',
    description: 'Our intellectual property attorneys help protect and enforce your intellectual property rights. We handle trademark registrations, copyright protection, patent applications, and assist with IP infringement cases.',
    image: 'https://d2dzik4ii1e1u6.cloudfront.net/images/lexology/static/a85ad073-c0ca-4799-8d57-f34c6fa92723.PNG'
  },
  {
    title: 'Personal Injury Law',
    description: 'Our personal injury attorneys fight for the rights of accident victims. We handle cases related to car accidents, slip and falls, medical malpractice, product liability, and more.',
    image: 'https://swartzlaw.com/wp-content/uploads/2021/12/Personal-Injury-Law-Firm-1.jpg'
  },
  {
    title: 'Employment Law',
    description: 'Our employment lawyers represent both employees and employers in various workplace-related matters. We handle issues such as discrimination, wrongful termination, wage disputes, and employment contracts.',
    image: 'https://fzlaw.com/wp-content/uploads/2021/11/What-Does-an-Employment-Law-Attorney1.jpeg'
  },
  {
    title: 'Bankruptcy Law',
    description: 'Our bankruptcy attorneys assist individuals and businesses in navigating the complex process of bankruptcy. We handle Chapter 7, Chapter 13, and Chapter 11 bankruptcy cases.',
    image: 'https://www.rsnlawaz.com/wp-content/uploads/2021/06/Common-Questions-about-Bankruptcy-Law-in-Arizona-1024x683.jpeg' 
  },
  {
    title: 'Estate Planning',
    description: 'Our estate planning lawyers help clients create comprehensive plans for the distribution of their assets. We assist with wills, trusts, probate, power of attorney, and healthcare directives.',
    image: 'https://freedomlaw.ca/wp-content/uploads/2018/03/estate.jpg' 
  },
  {
    title: 'Tax Law',
    description: 'Our tax attorneys provide guidance and representation in matters related to taxation. We handle tax planning, IRS audits, tax disputes, and offer assistance with tax compliance.',
    image: 'https://blog.ipleaders.in/wp-content/uploads/2019/03/tax-law.jpg' 
  },
  {
    title: 'Environmental Law',
    description: 'Our environmental lawyers specialize in protecting the environment and advocating for environmental issues. We handle matters related to pollution, land use, environmental regulations, and sustainability.',
    image: 'https://www.theforage.com/blog/wp-content/uploads/2022/10/environmental-law-1.jpg' 
  }
];

const Practice = () => {
  return (
    <section className='practice-areas-section'>
      <div className='container'>
        <h2 className='section-title'>Practice Areas</h2>
        <div className='practice-areas-grid'>
          {practiceAreasData.map((practiceArea, index) => (
            <div className='practice-area-card' key={index}>
              <div className='practice-area-image'>
                <img src={practiceArea.image} alt={practiceArea.title} />
              </div>
              <h3 className='practice-area-title'>{practiceArea.title}</h3>
              <p className='practice-area-description'>{practiceArea.description}</p>
              <a href={`/${practiceArea.title.replace(/\s+/g, '-').toLowerCase()}`} className='learn-more-link'>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practice;