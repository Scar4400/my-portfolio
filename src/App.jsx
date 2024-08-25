import React from 'react'; import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';
import Testimonials from './pages/Testimonials';
const App = () => {
  return (
    <>
    <ErrorBoundary>
        <>      <Helmet>        <title>Oscar Ndugbu | Front-End Developer</title>        <meta name="description" content="Oscar Ndugbu's personal portfolio showcasing front-end development, AI projects, and more." />        <meta name="keywords" content="Oscar Ndugbu, Front-End Developer, AI, Portfolio, React, Tailwind CSS" />      </Helmet>      {/* Other Components */}
    <Testimonials/>      
    </ErrorBoundary >
  );
};
export default App;