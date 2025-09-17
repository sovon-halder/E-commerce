



export default function Blog() {

    const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      date: "September 17, 2025",
      content: "This is my very first blog post. Excited to start blogging!"
    },
    {
      id: 2,
      title: "Learning React",
      date: "September 15, 2025",
      content: "Today I learned how to build components and props in React."
    },
    {
      id: 3,
      title: "Future Goals",
      date: "September 10, 2025",
      content: "My goal is to become a full-stack developer!"
    }
  ];

    return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "20px", paddingBottom: "10px" }}>
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.content}</p>
        </div>
      ))}
    </div>

    );
}

