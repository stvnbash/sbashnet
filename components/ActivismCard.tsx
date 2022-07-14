


export default function Card({ title, description, date, url }: any) {


    return (
        <a href={url} target="_blank" rel="noreferrer" className="w-5xl flex flex-col p-6 rounded-3xl group hover:scale-105 focus-visible:outline-none focus-visible:ring focus:ring-turquoise1 bg-darkpurple1 hover:bg-[#4100A3] transition-all overflow-hidden">            <h4>{date}</h4>
            <h2 className='text-2xl font-bold text-turquoise1'>{title}</h2>
            <h3 className="text-base font-normal">{description}</h3>
        </a>
    )
}