import Posts from "./Posts";

export default function SearchResults({searchRes}){
    const results = searchRes.map(post => <Posts key={post._id} post={post}/>)
    const content = results?.length ? results: <p>No Macthing Blogs</p>

    return(
        <main>{content}</main>
    )
}