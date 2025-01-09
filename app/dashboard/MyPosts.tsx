'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPosts } from "../types/authPost"
import EditPost from "./editPosts"

const fetchAuthPosts = async () =>{
    const response = await axios.get('/api/posts/authPosts')
    return response.data

}

export default function MyPosts(){
    const {data, isLoading} = useQuery<AuthPosts>({
        queryFn: fetchAuthPosts, 
        queryKey: ["authPosts"],})

        if(isLoading) return <h1>Loading...</h1>
        console.log(data)
    return (        
        <div>
            {data?.Post?.map((post) => 
            <EditPost
                id={post.id} 
                key={post.id} 
                avatar={data.image} 
                name={data.name} 
                title={post.title} 
                comments={post.comments}
            />)}
        </div>
    )
}