import React from 'react'
import Projects from "./sections/Projects";
const Info = () => {
  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="w-full px-2 pt-0">
      <Projects />
    </div>
  );
}

export default Info;