import { border, padding, textAlign } from "@mui/system"

export default function SearchBar({posts,setSearchRes}){
    const handleSubmit = (e)=> e.preventDefault()

    const handleSearch = (e)=>{
        if(!e.target.value) {
            return setSearchRes(posts)
        }
        // console.log(posts);

        const resArr = posts.filter(post => post.title.toUpperCase().includes(e.target.value.toUpperCase()) || post.description.toUpperCase().includes(e.target.value.toUpperCase()) )

         setSearchRes(resArr)

    }


    const Styles = {
        width:"300px",
        textAlign:"center",
        border:"1px solid gray",
        padding:"10px"
    }
    let SearchS ={
        width:"300px",
        margin : "auto",
        marginTop:"20px"

    }
    return(
        <header>
            <form className="search" style={SearchS}  onSubmit={handleSubmit}>
                <input className="search_input" placeholder="Search Blogs By Title"  style={Styles} type="text" id="search" onChange={handleSearch}/>
            </form>
        </header>
    )
}