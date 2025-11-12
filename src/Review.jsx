import React from 'react';

const Review = () => {

    const reviews = [
  {
    name: "Ayesha Rahman",
    role: "College Student, Dhaka",
    image: "https://i.ibb.co/yY7Rzns/student1.jpg", // replace with your own
    review:
      "StudyMate helped me find a study partner who shares my learning pace. We study online twice a week, and my grades have improved a lot. It’s like having a personal study buddy who actually motivates you!",
  },
  {
    name: "Tanvir Hasan",
    role: "Computer Science Student, BRAC University",
    image: "https://i.ibb.co/qFJvYFZ/student2.jpg", // replace with your own
    review:
      "I used to feel stuck studying alone. Through StudyMate, I found a partner who’s great at the topics I struggle with. Now we exchange ideas and solve problems together — learning feels fun again.",
  },
  {
    name: "Nabila Chowdhury",
    role: "High School Senior, Chittagong",
    image: "https://i.ibb.co/gvYhspc/student3.jpg", // replace with your own
    review:
      "What I love about StudyMate is the community vibe. You can connect by subject or learning mode — online, offline, or hybrid. It’s made studying much more engaging and less lonely.",
  },
];
     return (
    <div className="my-12 px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text- mb-10">
        What Students Say About <span className="text-blue-700">StudyMate</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              “{review.review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;