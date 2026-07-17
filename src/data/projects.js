import liveGpsOutput from '../assets/live-gps.jpg';
import airQualityOutput from '../assets/air-op.jpeg';

export const projects = [
  {
   id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React 19 and Tailwind CSS, featuring smooth scroll navigation and animated transitions.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'React Icons', 'React Scroll'],
    github: 'https://github.com/TEJASSREERR/my-portfolio',
    live: 'https://my-portfolio-beryl-mu-66.vercel.app/#contact',
    type: 'web'
  },
  {
    id: 2,
    title: 'Multi-Tenant SaaS Admin Dashboard',
    description: 'A full-stack SaaS admin panel with user management, subscription tracking, payment analytics, notifications, and system settings. Django REST Framework backend with PostgreSQL, React frontend with Chart.js visualizations and Tailwind CSS styling.',
    tech: ['React', 'Chart.js', 'react-chartjs-2', 'Tailwind CSS', 'JavaScript', 'Django', 'Django REST Framework', 'PostgreSQL', 'Gunicorn'],
    github: 'https://github.com/TEJASSREERR/saas-admin',
    live: 'https://saas-admin-indol.vercel.app',
    type: 'web'
  },
  {
    id: 3,
    title: 'Task Manager App',
    description: 'A full-stack productivity-focused task management application with create, update, delete, and status tracking features. Django REST Framework backend with JWT and Google OAuth authentication, Next.js frontend with a clean, organized UI.',
    tech: ['Next.js', 'React', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Axios', 'Google OAuth', 'CSS3', 'CORS', 'Gunicorn'],
    github: 'https://github.com/TEJASSREERR/TASK_MANAGER',
    live: 'https://task-manager-gold-two.vercel.app/',
    type: 'web'
  },
{
  id: 4,
  title: 'Travel Explorer Website',
  description: 'A travel discovery web application with destination search, filtering, and responsive card-based UI. Django backend manages destination data and serves content via REST APIs.',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
  github: 'https://github.com/TEJASSREERR/travel-explorer',
  live: 'https://tejassreerr.github.io/travel-explorer/',
  type: 'web'
},
{
  id: 5,
  title: 'User Order Product Dashboard',
  description: 'A full-stack product and order management dashboard with a Django REST Framework backend handling user, product, and order data models via dedicated apps, and a vanilla JavaScript frontend for order history, product listings, and user activity.',
  tech: ['Django', 'Django REST Framework', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'CORS'],
  github: 'https://github.com/TEJASSREERR/userproductorder',
  live: 'https://tejassreerr.github.io/userproductorder/',
  type: 'web'
},
  {
    id: 6,
    title: 'Bisnlight Dashboard',
    description: 'A business analytics dashboard with data visualization and interactive components for tracking business metrics and performance.',
    tech: ['FastAPI', 'HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    github: 'https://github.com/TEJASSREERR/BISLNSIGHT-DASHBOARD-',
    live: 'https://tejassreerr.github.io/BISLNSIGHT-DASHBOARD-/',
    type: 'web'
  },
{
  id: 7,
  title: 'Live GPS Vehicle Tracking',
  description: 'A real-time vehicle tracking system using GPS module and Telegram bot. Sends live location updates to your phone via Telegram messages using Arduino UNO.',
  tech: ['C Programming', 'Arduino UNO', 'GPS Module', 'Telegram Bot'],
  github: 'https://github.com/TEJASSREERR/LIVE-GPS-TRACKING',
  live: null,
  image: liveGpsOutput,
  type: 'hardware'
},
{
  id: 8,
  title: 'Air Quality Monitoring',
  description: 'An IoT-based air quality monitoring system that measures pollutants and displays real-time air quality index using Arduino sensors and LCD display.',
  tech: ['C Programming', 'Arduino UNO', 'MQ Sensors', 'LCD Display'],
  github: 'https://github.com/TEJASSREERR/AIR-QUALITY-MONITORING',
  live: null,
  image: airQualityOutput,
  type: 'hardware'
}
]