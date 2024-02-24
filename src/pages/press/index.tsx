import React from 'react'
import Projects from "./sections/Projects";
const Press = () => {
  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="w-full pt-32">
      <Projects />
    </div>
  );
}

export default Press;