import { Banknote, Group, GroupIcon, LucideGroup, PiggyBank, Users, Users2 } from "lucide-react";
import BusinessManImage2 from '@/app/assets/images/Home/men-bh.webp'

import Image from "next/image";
import { Button } from "./ui/button";

export const Results = () => {
  return (
    <section
      id="sponsors"
      className="container pt-8 sm:py-22 overflow-hidden flex flex-col md:flex-row justify-items-center justify-center content-center items-center my-10"
    >
      <Image src={BusinessManImage2} alt="Bussines Man" height={500} width={500}/>
      <div className=" flex flex-col p-10 rounded-lg  items-center bg-zinc-100 max-w-[600px]">
        <div>
          <p className="text-2xl md:text-4xl font-bold mb-2  text-gray-800">Mais Clientes Qualificados do Jeito Mineiro.</p>
          <p>Com estrategias personalizadas e focadas no público mineiro você pode alcançar resultados como nunca antes.</p>
        </div>
          <InfoIcons/>
          <Button className="justify-self-start md:self-start mt-4 ">Mais Informações</Button>
      </div>
      
    </section>
  );
};

function InfoIcons(){
  return(
    <div className="flex gap-[2rem] align-center mt-10">

        <div>
          <Users2 className="text-black-600" size={40}/>
          <p  className="text-lg md:text-2xl font-bold text-black-600">639K</p>
          <p className="text-md md:text-xl font-regular text-black-600">Novos Leads</p>
        </div>
        <div>
          <PiggyBank className="text-black-600" size={40}/>
          <p className="text-lg md:text-2xl font-bold text-black-600">96%</p>
          <p className="text-md md:text-xl font-regular text-black-600">Menos Custos</p>
        </div>
        <div>
        <Banknote className="text-black-600" size={40} />
          <p className="text-lg md:text-2xl font-bold text-black-600">236% </p>
          <p className="text-md md:text-xl font-regular text-black-600">Mais Vendas</p>
        </div>
      </div>
  )
}