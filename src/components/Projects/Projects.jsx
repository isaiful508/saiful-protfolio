import { Link } from "react-router-dom";


const projects = [
    {
        projectName: "Bistro Boss Restaurant",
        description: "This is a Restaurant services website.Users can order food from this website.More in Github",
        image: "https://i.ibb.co/tmBjs9P/Screenshot-2024-06-28-101712.png",
        clientSide: "https://github.com/isaiful508/bistro-restaurant-clinet",
        serverSide: "https://github.com/isaiful508/bistro-boss-server",
        liveLink: "https://bistro-boss-e654b.web.app/"
    },
    {
        projectName: "Story Flow",
        description: "Story Flow is a news article website.Users can read news article,post news article.More in Github",
        image: "https://i.ibb.co/rxqP5N6/Screenshot-2024-06-28-102357.png",
        clientSide: "https://github.com/isaiful508/storyFlow-assignmnet12-client",
        serverSide: "https://github.com/isaiful508/storyFlow-assignment12-server",
        liveLink: "https://storyflow-85a15.web.app/"
    },
    {
        projectName: "Roomly Hotel",
        description: "Roomly Hotel is a hotel management web application.User can book hotel room through this website.More in Github",
        image: "https://i.ibb.co/9tYXr4K/Screenshot-2024-06-28-102142.png",
        clientSide: "https://github.com/isaiful508/roomlyHotel-assignment11-client",
        serverSide: "https://github.com/isaiful508/roomly-hotel-assignmnet11-server",
        liveLink: "https://roomly-assignment11.web.app/"
    }
]

const Projects = () => {
    return (
        <div className="container mx-auto mt-10">
            <h3 className="text-4xl text-white text-center mb-10 poppins-medium">My Projects</h3>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                {
                    projects.map((project) =>
                        <div key={project.projectName} className="card border bg-[#392e6d] border-[#a38cfa]  w-96 shadow-xl">
                            <figure className="px-5 pt-6">
                                <img
                                    src={project.image}
                                    alt="project_image"
                                    className="rounded-md"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title poppins-medium">{project.projectName}</h2>
                                <p className="poppins-regular">{project.description}</p>
                            </div>
                            <div className="flex justify-around mb-4">
                                <a className="btn uppercase bg-[#392e6d] text-white hover:bg-[#a38cfa] border border-[#a38cfa] poppins-regular" href={project.clientSide} target="_blank" rel="noopener noreferrer">Client Side</a>
                                <a className="btn uppercase bg-[#392e6d] text-white hover:bg-[#a38cfa] border border-[#a38cfa] poppins-regular" href={project.serverSide} target="_blank" rel="noopener noreferrer">Server Side</a>
                                <a className="btn uppercase bg-[#392e6d] text-white hover:bg-[#a38cfa] border border-[#a38cfa] poppins-regular" href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center items-center">
            <button className=" mt-6 flex btn uppercase bg-[#392e6d] text-white hover:bg-[#a38cfa] border border-[#a38cfa] poppins-regular">Show More</button>
            </div>
        </div>
    );
};

export default Projects;
