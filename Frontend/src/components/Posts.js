import Blog from "./Blog"

export default function Posts({post}){
    return(
        // <section>
        //     <p>

        //     id={post._id}
        //     </p>
        //     <p>

        //     isUser={localStorage.getItem("userId") === post.user._id}
        //     </p>
        //     <p>

        //     title={post.title}
        //     </p>
        //     <p>

        //     description={post.description}
        //     </p>
        //     <p>

        //     image={post.image}
        //     </p>
        //     <p>

        //     userName={post.user.name}
        //     </p>
        // </section>
        <Blog
        id={post._id}
        isUser={localStorage.getItem("userId") === post.user._id}
        title={post.title}
        description={post.description}
        image={post.image}
        userName={post.user.name}
      />
    )
}