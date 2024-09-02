function Navbar() {
    return (
        <nav className="top-0">
            <div className="container mx-auto flex justify-between items-center p-4 lg:px-40">
                <div className="flex items-center">
                    <img src="src\assets\logo\logo.svg" alt="GymLabs Logo" className="w-[48px] sm:w-[48px] md:w-[56px] lg:w-[64px] max-w-full h-auto" />
                    <h1 className="ml-2 text-2xl font-bold">GymLabs AI</h1>
                </div>
                <div className="flex space-x-4">
                    <button className="btn btn-primary btn-outline">Signup</button>
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;