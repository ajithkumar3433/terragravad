const Projects = () => {
  return (
    <div className="pt-10 w-full ">
      <div className="text-3xl lg:text-5xl font-bold text-center mt-3 mb-5">Our Rules</div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-3 mb-10">
        TECH G is a community of people committed to bringing creative projects <br />to life.
      </div>
      <div className="text-base font-normal text-[#1E1E1E] text-center mt-10 mb-10">
        We welcome and support projects from a variety of categories: Art,<br /> Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games,<br /> Journalism, Music, Photography, Publishing, Technology, and Theater.<br /> Here are five rules every TECH G project must follow.
      </div>
      <div className='grid grid-cols-3 mt-16 gap-4'>
        <div className='col-span-3 lg:col-span-1'>
          <div className='text-xl font-bold my-3'>Projects must create<br /> something to share with<br /> others.</div>
        </div>
        <div className='col-span-3 lg:col-span-2'>
          <div className='text-xl font-normal leading-loose'>TECH G can be used to create all sorts of things: art and gadgets, events and spaces, ideas and experiences. But every project needs a plan for creating something and sharing it with the world. At some point, the creator should be able to say: “It’s finished. Here’s what we created. Enjoy!”</div>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-16 gap-4'>
        <div className='col-span-3 lg:col-span-1'>
          <div className='text-xl font-bold my-3'>Projects must create<br /> something to share with<br /> others.</div>
        </div>
        <div className='col-span-3 lg:col-span-2'>
          <div className='text-xl font-normal leading-loose'>Our community is built on trust and communication. Projects can’t mislead people or misrepresent facts. Creators should be candid about what they plan to accomplish and how they plan to do it. When a project involves manufacturing and distributing something complex, like a gadget, we require projects to show backers a prototype of what they’re making, and we prohibit the use of misleading imagery. Creators should not misrepresent or artificially inflate the number of backers or amounts pledged to their projects.
          </div>
          <ul className='list-disc list-inside my-10 text-xl '>
            <li className='mb-2 leading-loose'>Prototype demonstration should reflect a product’s current state and should not include any CGI or special effects to demonstrate functionality that does not yet exist. If a project requires software and hardware integration, creators are required to show that functionality and any dependency clearly, or disclose that it has not yet been developed.
            </li>
            <li className='mb-2 leading-loose'>
              Misleading imagery includes photorealistic renderings and heavily edited or manipulated images or videos that could give backers a false impression of a product’s current stage of development.
            </li>
          </ul>
          <div className='text-xl font-normal leading-loose'>Additional context on our rules requiring prototypes and prohibiting misleading imagery can be found here. Further guidance on crafting an honest and clearly presented project can be found here. Additional context on presenting facts about backers can be found here.
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-16 gap-4'>
        <div className='col-span-3 lg:col-span-1'>
          <div className='text-xl font-bold my-3'>Projects can’t fundraise for charity.</div>
        </div>
        <div className='col-span-3 lg:col-span-2'>
          <div className='text-xl font-normal leading-loose'>While nonprofits are welcome to launch projects on TECH G, projects can't promise to raise funds to donate to a charity or cause. Funds raised on TECH G must go towards facilitating the project outlined by the creator on the project page.
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-16 gap-4'>
        <div className='col-span-3 lg:col-span-1'>
          <div className='text-xl font-bold my-3'>Projects can't offer equity.</div>
        </div>
        <div className='col-span-3 lg:col-span-2'>
          <div className='text-xl font-normal leading-loose'>Investment is not permitted on TECH G. Projects can't offer incentives like equity, revenue sharing, or investment opportunities.</div>
        </div>
      </div>
      <div className='grid grid-cols-3 my-16 gap-4'>
        <div className='col-span-3 lg:col-span-1'>
          <div className='text-xl font-bold my-3'>Projects can't involve prohibited items.
          </div>
        </div>
        <div className='col-span-3 lg:col-span-2'>
          <div className='text-xl font-normal leading-loose'>Investment is not permitted on TECH G. Projects can't offer incentives like equity, revenue sharing, or investment opportunities.</div>
        </div>
      </div>
      <div className="flex justify-center w-full mb-16">
        <div className="text-base text-left">
        These rules don't cover every possible use of TECH G, but they explain<br /> our purpose and perspective. Final decisions regarding which projects are<br /> appropriate for TECH G are based on these rules and made at our<br /> discretion. 
        </div>
      </div>
    </div>
  );
}

export default Projects;