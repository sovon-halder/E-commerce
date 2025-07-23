import Blog from './Blog';



export default function Blog() {

    return (
        <>

   [
    {
      title: "Getting Started with React",
      date: "July 22, 2025",
      description: "Learn the basics of React.js, including components, props, and state.",
    },
    {
      title: "Understanding useEffect Hook",
      date: "July 21, 2025",
      description: "A deep dive into how the useEffect hook works and best practices.",
    },
    {
      title: "Tailwind CSS with React",
      date: "July 20, 2025",
      description: "How to style your React app quickly using Tailwind CSS.",
    },
  ];

  
    <div className="min-h-screen bg-gray-800 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>

        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-2xl mb-6 shadow-md hover:bg-gray-600 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-300 text-sm mb-3">{post.date}</p>
            <p className="text-gray-200">{post.description}</p>
          </div>
        ))}
      </div>
    </div> 


        </>
        
    );
}

