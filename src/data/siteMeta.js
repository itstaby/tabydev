import logoEducative from '@/images/logos/educative.png'
import logoPolly from '@/images/logos/polly.png'
import logoIntech from '@/images/logos/intech.webp'
import logoBentley from '@/images/logos/bentley-logo.jpeg'

const siteMeta = {
  title: 'Tayyab Anwar',
  description:
    'Tayyab Anwar is a lead engineer with a history of delivering deiverse software.',
  copyright: 'Tayyab Anwar, CC-BY-SA',
  author: {
    name: 'Tayyab Anwar',
    email: 'tayyab.anwar6@gmail.com',
    instagram: 'https://instagram.com/itstaby',
    github: 'https://github.com/itstaby',
    linkedin: 'https://linkedin.com/in/tayyab-anwar',
  },
  siteUrl: 'https://taby.dev',
}
export const resume = [
  {
    company: 'Polly',
    title: 'Lead Software Engineer',
    logo: logoPolly,
    start: '2021',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Educative',
    title: 'Lead Software Engineer',
    logo: logoEducative,
    start: '2019',
    end: '2021',
  },
  {
    company: 'INTECH Automation and Intelligence',
    title: 'Senior Data Engineer',
    logo: logoIntech,
    start: '2019',
    end: '2019',
  },
  {
    company: 'Bentley Systems, Inc.',
    title: 'Software Engineer I',
    logo: logoBentley,
    start: '2017',
    end: '2015',
  },
]

export const projects = [
  {
    name: 'Polly Q&A',
    description: 'Fluid team engagement giving everyone a voice.',
    link: { href: 'https://www.polly.ai/qa', label: 'polly.ai/qa' },
    logo: logoPolly,
  },
  {
    name: 'Polly for the Web',
    description: 'Take engangment beyond your Slack Workspace',
    link: {
      href: 'https://web.polly.ai/piwnkx',
      label: 'web.polly.ai',
    },
    logo: logoPolly,
  },
  {
    name: 'Educative Projects',
    description: 'The Best Way To Learn Is By Doing',
    link: {
      href: 'https://www.educative.io/projects',
      label: 'educative.io/projects',
    },
    logo: logoEducative,
  },
  {
    name: 'Educative Answers',
    description: 'Find the Right Answer Every Time',
    link: {
      href: 'https://www.educative.io/answers',
      label: 'educative.io/answers',
    },
    logo: logoEducative,
  },
]

export default siteMeta
