import React from 'react'
import Projects from "./sections/Projects";
const Publication = () => {
  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="w-full px-5 lg:px-10 pt-12">
      <Projects />
    </div>
  );
}

export default Publication;