'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import { BookText, CalendarDays, Download, MessageCircleQuestion, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PostsForumType={
    title:string
    id:string
    message:string
    created_at:string
}
export function ForumScreen(){
    const [postsForum,setPostsForum] = useState<PostsForumType []>([])
async function getforumPosts(){
    const posts = await axiosApi.get("/api/getProductForumPosts")
    setPostsForum(posts.data)
    console.log(posts.data)
}
    useEffect(()=>{
        getforumPosts()
    },[])
    const elemtsBooks = [{
        title:"Como financiar seu primeiro imovel",link:"/video/aoksd",category:"fin"},
        {title:"Documentos para o financiamento",link:"/video/aoksd", category:"fin"},
        {title:"partamento tipo vs Area Privativa",link:"/video/aoksd", category:"con"},
        {title:"Qual melhor posição do apartamento",link:"/video/aoksd", category:"con"},
        {title:"São gabriel coração de BH",link:"/video/aoksd", category:"rai"},
        {title:"Nova pampulha - perto de tudo ",link:"", category:"rai"},
        {title:"Como fazer uma grana extra para o ape",link:"", category:"dic"},
        {title:"Melhores planos de pagamento",link:"", category:"dic"},
  
  
      ]
    return(
        <div className="sm:container pt-10 mx-2">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <MessageCircleQuestion/>
                    Forum
                </CardTitle>
                <CardDescription>
                    Duvidas e resposta.
                </CardDescription>
                <div className="flex sm:flex  w-full flex-wrap gap-2 justify-center m-auto">
                {
                                postsForum.map((element)=>(
                                
                                <Card  key={element.id}  className="w-full ">
                                    <Link href={`/forum/${element.id}`}>
                                    <CardHeader>
                                    <CardTitle>{element.title}</CardTitle>
                                        <CardDescription className="flex gap-10">
                                            <span>@usuario</span>
                                            <span>{element.created_at}</span>
                                            <span>test</span>

                                        </CardDescription>
                                    </CardHeader>
                                    </Link>
                                    <div key={element.id} className="w-full bg-red-200">
                                
                                    
                                        
                                </div>
                                </Card>
                                ))
                            }


    

                    
                </div>
                <CardContent>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}