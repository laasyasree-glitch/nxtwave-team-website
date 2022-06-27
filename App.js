import ReviewsCarousel from './components/ReviewsCarousel'

import './App.css'

const reviewsList = [
  {
    imgUrl:
      'https://res.cloudinary.com/dxlyuzv7w/image/upload/v1630042578/Screenshot_2021-08-27_110224_z0zbvn.png',
    username: 'Rahul Attuluri, Cofounder',
    companyName: 'CEO of NxtWave',
    description:
      "He hold a Bachelor's degree in Computer Science from IIIT-Hyderabad. Before NxtWave, he was the CTO at iB Hubs and he co-founded CyberEye. Prior to them, he worked for Amazon India and Bwin Technologies.",
  },
  {
    imgUrl:
      'https://res.cloudinary.com/dxlyuzv7w/image/upload/v1630042588/Screenshot_2021-08-27_110313_cd9yh0.png',
    username: 'Sashank Gujjula',
    companyName: 'Cofounder at NxtWave',
    description:
      '2017 graduate from IIT Bombay and all India 119th ranker in 2013 JEE.',
  },
  {
    imgUrl:
      'https://media-exp2.licdn.com/dms/image/D4D35AQEGGpj8Noo3xg/profile-framedphoto-shrink_400_400/0/1653412360287?e=1656932400&v=beta&t=ZSPn8y8KEZVLnE9AcA_mRzHIZ68iiYStL3a2MKGSS8Q',
    username: 'Girish Akash',
    companyName: 'Helping companies hire developers NxtWave',
    description:
      'Experienced in Marketing with a background of working with the core team that drove various campaigns of the startups under iB Hubs',
  },
]

const App = () => <ReviewsCarousel reviewsList={reviewsList} />

export default App
