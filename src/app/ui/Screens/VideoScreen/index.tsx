
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, TvMinimalPlay } from "lucide-react";
import { VideoAccordion } from "./VideoAcordion";
import { VideoPlayer } from "../../components/Videoplayer";
import Link from "next/link";


export function VideoScreen({id}:{id:string}){
    return(
        <div className="sm:container pt-10 mx-2">
            <Link href={'/videos'} className="flex text-primaryPalet  gap-2">
                <ArrowLeft/>
            
                voltar para videos
            </Link>
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <TvMinimalPlay/>
                    Exemplo titulo do video
                </CardTitle>
                <CardDescription>
                    Melhores videos para você está por dentro do tudo!
                </CardDescription>
                <div>
                    <VideoPlayer id={id}/>
                </div>
                <CardContent>
                <VideoAccordion id={id} />
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}