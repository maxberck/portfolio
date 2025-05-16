import {Link} from '@inertiajs/react';

function Project({projects}) {
  return (
    <>
        <div className="flex justify-evenly align-center flex-wrap">
            {projects.map((project) => (
                <div className="w-[650px] text-[#FCFCFC] mb-10">
                <a href={project.linkGithub}>
                    <img
                    src={`/storage/${project.picture}`}
                    alt={project.title}
                    className="w-full h-[450px] rounded-lg shadow-md"
                    />
                </a>
                <a href={project.linkGithub}>
                    <h1 className="text-3xl font-[900] py-5 px-2">{project.title}</h1>
                </a>
                <p className="text-[#FCFCFC] px-2">{project.description}</p>
                </div>
            ))}
        </div>

    </>
  )
}

export default Project