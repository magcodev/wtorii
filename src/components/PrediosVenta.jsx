import loadAllCategories from "@/utilities/loadAllBlogs";
import BlogCard from "./BlogCard";

const PrediosVenta = async () => {
  const blogs = await  loadAllCategories();
  return (
    <div className="px-5">
      <h3 className="text-center text-5xl mb-10 uppercase">Nuevos predios</h3>
      <h4 className="text-center text-5xl mb-10 font-bold">En venta</h4>
      <div className="grid md:grid-cols-3 gap-5 mt-20">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default PrediosVenta;
