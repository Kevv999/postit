'use client'

import AddComment from '@/app/components/AddComment'
import Post from '@/app/components/Post'
import { PostType } from '@/app/types/Post'
import {useQuery} from '@tanstack/react-query'
import axios from "axios"
import Image from 'next/image'
import { use } from 'react'

type URL = {
    params: Promise<{
      slug: string;
    }>;
  };

const fetchDetails = async (slug: string) => {
    const response = await axios.get(`/api/posts/${slug}`)
    return response.data    
}   

export default function PostDetail(url: URL){
    const { slug } = use(url.params);
    const {data, isLoading} = useQuery({
        queryKey: ['detail-post', slug],
        queryFn: async () => fetchDetails((await url.params).slug)
    })
    

    if(isLoading) return "Loading..."
    console.log(data)
    return(
        <div>
        <Post 
            id={data?.id}
            name={data.user.name}
            avatar={data.user.image}
            postTitle={data.title}
            comments={data.comments}
        ></Post>

        <AddComment id={data.id}/>
        {data?.Comment?.map((comment: any) => (
            <div key={comment.id} className="my-6 bg-white p-8 rounded-md">
                <div> 
                    <Image
                        width={24}
                        height={24}
                        src={data.user?.image}
                        alt="avatar"    
                    />
                    <h3 className="font-bold">{comment?.user?.name}</h3>
                    <h2 className="text-sm">{comment.createdAt}</h2>                
                </div>
                <div className="py-4"> {comment.message}</div>
            </div>
        ))}
        </div>
    )
}