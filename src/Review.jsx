import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Ayesha Rahman",
      role: "College Student, Dhaka",
      image: "https://images.unsplash.com/photo-1606877096964-c306a05f4d6f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzbGltJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
      review:
        "StudyMate helped me find a study partner who shares my learning pace. We study online twice a week, and my grades have improved a lot. It’s like having a personal study buddy who actually motivates you!",
    },
    {
      name: "Tanvir Hasan",
      role: "Computer Science Student, BRAC University",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2xpbSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      review:
        "I used to feel stuck studying alone. Through StudyMate, I found a partner who’s great at the topics I struggle with. Now we exchange ideas and solve problems together — learning feels fun again.",
    },
    {
      name: "Nabila Chowdhury",
      role: "High School Senior, Chittagong",
      image: "https://images.unsplash.com/photo-1633279309534-f761427548b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2xpbSUyMHdvbWVufGVufDB8fDB8fHww",
      review:
        "What I love about StudyMate is the community vibe. You can connect by subject or learning mode — online, offline, or hybrid. It’s made studying much more engaging and less lonely.",
    },
  ];

  return (
    <section className="relative my-20 py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          What Students Say About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            StudyMate
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear how StudyMate is transforming the way students learn, connect, and
          grow — together.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-blue-200 text-5xl font-serif select-none group-hover:text-blue-400 transition">
                “
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-400 shadow-sm"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm italic">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
