import loadAllCategories from "@/utilities/loadAllBlogs";
import BlogCard from "./BlogCard";

const PrediosRenta = async () => {
  const blogs = await  loadAllCategories();
  return (
    <div className="px-5 my-10 ">
      <h3 className="text-center text-5xl mb-10 uppercase">Nuevos predios</h3>
      <h4 className="text-center text-5xl mb-10 font-bold">En renta</h4>
      <div className="grid md:grid-cols-3 gap-5 mt-20">
        {blogs.slice(3, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <hr className="ml-6 mr-6 mt-6" height="1" />
    </div>
  );
};

export default PrediosRenta;
