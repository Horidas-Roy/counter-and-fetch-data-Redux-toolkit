import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostSlice";

const PostView = () => {
    const {isLoading,posts,error}=useSelector(state=>state.posts)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

    return (
        <div>
            <h2 className="font-extrabold mb-5">Post: {posts.length}</h2>
            <h5>{isLoading && <span>Loading...</span>}</h5>
            <h5>{error && <span>{error}</span>}</h5>
            <section className="grid grid-cols-4 gap-2">
                {
                    Array.isArray(posts) && posts.map(post=>(
                        <article key={post.id}>
                            <div className="border p-4 bg-slate-300 rounded-lg flex flex-col h-[200px] shadow-lg">
                            <h1 className="font-bold">{post.title}</h1>
                            <p className="text-sm">{post.body}</p>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    );
};

export default PostView;