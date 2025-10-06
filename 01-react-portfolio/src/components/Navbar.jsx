import { fragment } from "module";

const Navbar = () => {
    return (
        <>
            <header class="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
                <nav class="max-w-6xl mx-auto dkslaoeyhnmj lg:px-12 py-6 flex items-center place-content-between ">
                    <a href="index.html" class="flex items-center gap-3">
                        <i class="fas fa-code text-green-400 text-2xl led-glow"></i>
                        <span class="text-xl font-bold text-white font-code">sanjay nakum</span>
                    </a>
                    <div class="hidden md:flex items-center gap-10">
                        <a href="#Home"
                            class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 [&.active>span]:w-full transition-colors font-medium relative group">
                            Home
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#about"
                            class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 [&.active>span]:w-full transition-colors font-medium relative group">
                            About
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#skill"
                            class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 [&.active>span]:w-full transition-colors font-medium relative group">
                            Skills
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#projects"
                            class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 [&.active>span]:w-full transition-colors font-medium relative group">
                            Projects
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#contact"
                            class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 [&.active>span]:w-full transition-colors font-medium relative group">
                            Contact
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                        </a>
                    </div>
                    <div class="md:hidden">
                        <button id="mobile-menu-toggle" class="text-gray-300 hover:text-green-400 transition-colors">
                            <i id="menu-bars" class="fas fa-bars text-2xl"></i>
                            <i id="menu-times" class="fas fa-times text-2xl" style="display:none;"></i>
                        </button>
                        <div id="mobile-menu" style="display:none;"
                            class="absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 p-6 flex flex-col shadow-lg">
                            <a href="#Home"
                                class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 transition-colors font-medium relative group">
                                Home
                                <span
                                    class="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#about"
                                class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 transition-colors font-medium relative group">
                                About
                                <span
                                    class="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#projects"
                                class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 transition-colors font-medium relative group">
                                Projects
                                <span
                                    class="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#contact"
                                class="nav-link text-gray-300 hover:text-green-400 [&.active]:text-green-400 transition-colors font-medium relative group">
                                Contact
                                <span
                                    class="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    )
}

export default Navbar