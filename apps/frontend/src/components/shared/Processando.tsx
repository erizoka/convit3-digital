import Image from "next/image";

export default function Processando() {
    return (
        <div className="flex-1 flex justify-center items-center h-96">
            <Image src="/processando.gif" alt="Processando" width={60} height={60} />
        </div>
    )
}