import { Star } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    handle: "@johndoe",
    avatar: "/api/placeholder/50/50",
    review:
      "GymLabs AI has transformed my fitness journey. The personalized workouts are amazing!",
    stars: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    handle: "@janesmith",
    avatar: "/api/placeholder/50/50",
    review:
      "I love how the meal plans are tailored to my preferences. It's made eating healthy so much easier.",
    stars: 4,
  },
  {
    id: 3,
    name: "Mike Johnson",
    handle: "@mikejohnson",
    avatar: "/api/placeholder/50/50",
    review:
      "The sleep guidance has really improved my recovery. I feel more energized than ever!",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say 💯
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.handle}</p>
                </div>
              </div>
              <p className="mb-4">{review.review}</p>
              <div className="flex">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
