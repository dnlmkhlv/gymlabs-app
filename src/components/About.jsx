function About() {
    return (
        <section id="about" className="py-10 mt-[-50px]" data-aos="fade-up">
            <div className="container mx-auto text-center px-5">
                <h2 className="text-3xl font-bold">Your success in the gym depends on <span className="underline decoration-wavy decoration-red-400">3 factors</span></h2>
                <p className="mt-4">Only a few people have their exercise, nutrition, and sleep perfectly aligned...</p>
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    {/* Workouts */}
                    <div className="p-4 border rounded-xl flex flex-col items-center w-72 bg-white">
                        <span role="img" aria-label="workout" className="text-7xl mt-2">🏋️</span>
                        <h3 className=" mt-4 font-semibold text-xl">Workouts</h3>
                        <p className="mt-4 text-lg">✅ We will provide you with personalized workout plans designed just for you.</p>
                    </div>
                    {/* Meal Plan */}
                    <div className="p-4 border rounded-md flex flex-col items-center w-72 bg-white">
                        <span role="img" aria-label="food" className="text-7xl mt-2">🍎</span>
                        <h3 className="mt-4 font-semibold text-xl">Nutrition</h3>
                        <p className="mt-4 text-lg">✅ We will provide you with customized meal plans to meet your nutrition needs.</p>
                    </div>
                    {/* Rest Day */}
                    <div className="p-4 border rounded-md flex flex-col items-center w-72 bg-white">
                        <span role="img" aria-label="sleep" className="text-7xl mt-2">😴</span>
                        <h3 className="mt-4 font-semibold text-xl">Rest</h3>
                        <p className="mt-4 text-lg">✅ We will guidance for rest and recovery to optimize your performance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;