import React from 'react'
import Projects from "./sections/Projects";
const Explore = () => {
  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="w-full px-5 lg:px-40 pt-12">
      <Projects />
    </div>
  );
}

export default Explore;