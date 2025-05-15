import Scroll from '@/components/portfolio/Scroll';

function Skills({skills}) {
  const items = skills.map((skill) => ({ content: <p>{skill.name}</p> }));;


  return (
    <div className={`bg-[#0A0A0A] text-white`}> 
      <div style={{height: '800px', position: 'relative'}} >
        <Scroll
          items={items}
          isTilted={false}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={0.1}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
    </div>
  )
}

export default Skills