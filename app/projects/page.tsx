const Projects = () => {
    const projects = [
        {
            title: "Pomodoro",
            description: "A timer app built with Kotlin as part of a university project in mobile programming.",
            link: "https://github.com/FatihThaDev/Pomodoro",
        },
        {
            title: "SFC Crew",
            description: "A web application for an automotive club in Sarajevo dedicated to car enthusiasts, made in React, Next.js and Tailwind CSS.",
            link: "https://sfc-crew.vercel.app",
        },
        {
            title: "Cave Slayers",
            description: "A keyboard-based 2d game in Python.",
            link: "https://github.com/FatihTheDev/Cave-Slayers",
        },
        {
            title: "FatihNvim",
            description: "My personal development environment configuration (fork of a Neovim distribution AstroNvim). This is the environment I use to code every time.",
            link: "https://github.com/FatihTheDev/FatihNvim",
        },
        {
            title: "Foodify",
            description: "Food delivery app built with react + Next.js + Tailwind CSS",
            link: "https://github.com/FatihTheDev/foodify-delivery-app"
        },
        {
            title: "WebPush",
            description: "Unfinished concept website for a website builder startup built with HTML and Tailwind CSS",
            link: "https://github.com/FatihTheDev/WebPush"
        }
    ];

    return (
        <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-12">
                    Notable Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between h-full"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                    Made by FatihTheDev
                                </span>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1"
                                >
                                    View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;   
