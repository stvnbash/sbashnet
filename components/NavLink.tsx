import Link from "next/link";

export default function NavLink({ title, url }: {title: string; url: string}) {
    return (
        <Link href={url} passHref>
            <a className="font-normal text-gray-100 dark:text-gray-400 sm:inline-block rounded-lg hover:text-gray-900 dark:hover:text-gray-50 transition-all text-lg mr-4 sm:mr-7 hidden">
                {title}
            </a>
        </Link>
    )
}