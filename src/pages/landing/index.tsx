import React from 'react'
import Creator from "./sections/Creator";
const Landing = () => {
  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="w-full px-5 lg:px-40 pt-32">
      <Creator />
      {/* <Projects /> */}
    </div>
  );
}

export default Landing;