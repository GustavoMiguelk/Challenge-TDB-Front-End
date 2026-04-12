interface TituloPaginaProps {
  titulo: string
}

export default function TituloPagina({ titulo }: TituloPaginaProps) {
  return (
<h1 className="block text-center text-5xl text-white bg-[#BCC10e] rounded-[5px] w-[700px] max-w-[90%] px-[10px] py-[10px] mx-auto mt-8 mb-6 md:text-4xl">
  {titulo}
</h1>
  )
}