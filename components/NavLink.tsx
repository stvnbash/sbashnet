import Link from "next/link";

export default function NavLink({ title, url }: {title: string; url: string}) {
    return (
        <Link href={url} passHref>
            {/* <a className="font-normal text-gray-500 dark:text-gray-400 sm:inline-block rounded-lg hover:text-gray-900 dark:hover:text-gray-50 transition-all text-lg mr-4 sm:mr-7 hidden"> */}
            {/* <a className="font-normal text-text1 inline-block rounded-lg hover:text-yellow1 transition-all text-lg focus:outline-none focus-visible:ring ring-offset-navy1 ring-offset-4 ring-red1"> */}
            <a className="font-normal text-text1 inline-block rounded-lg hover:text-yellow1 transition-all text-lg">
                {title}
            </a>
        </Link>
    )
}