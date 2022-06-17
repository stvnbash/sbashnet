import Link from "next/link";
import NavLink from "./NavLink";
import Socials from "./Socials";
import { useRouter } from "next/router";


export default function Navbar() {
    const router = useRouter();
    const onIndexPage = router.pathname !== "/" ? false : true;

    return (
        <div className="">
            <div className="absolute w-full z-[-1]">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 38.908176100628936,234.63963497348624 77.81635220125787,269.2792699469725 139,263 C 200.18364779874213,256.7207300530275 283.6427672955975,209.52255518559625 346,207 C 408.3572327044025,204.47744481440375 449.61257861635227,246.63050931064248 489,237 C 528.3874213836477,227.36949068935752 565.9069182389937,165.95540757183377 613,162 C 660.0930817610063,158.04459242816623 716.7597484276729,211.54786040202245 771,232 C 825.2402515723271,252.45213959797755 877.0540880503145,239.85315082007645 942,218 C 1006.9459119496855,196.14684917992355 1085.0238993710693,165.03953631767172 1135,154 C 1184.9761006289307,142.96046368232828 1206.850314465409,151.98870390923665 1253,163 C 1299.149685534591,174.01129609076335 1369.5748427672956,187.0056480453817 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
            </div>
            <div className="flex flex-row max-w-3xl pt-10 px-10 mx-auto">
                <div className='relative z-10 flex-auto'>
                    <NavLink title="Home" url="/" />
                    <NavLink title="Projects" url="/projects" />
                    <NavLink title="Activism" url="/activism" />
                </div>
                {!onIndexPage ? <Socials /> : ''}
            </div>
        </div>
    )
}


{/* <div className="relative z-0">
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 38.908176100628936,234.63963497348624 77.81635220125787,269.2792699469725 139,263 C 200.18364779874213,256.7207300530275 283.6427672955975,209.52255518559625 346,207 C 408.3572327044025,204.47744481440375 449.61257861635227,246.63050931064248 489,237 C 528.3874213836477,227.36949068935752 565.9069182389937,165.95540757183377 613,162 C 660.0930817610063,158.04459242816623 716.7597484276729,211.54786040202245 771,232 C 825.2402515723271,252.45213959797755 877.0540880503145,239.85315082007645 942,218 C 1006.9459119496855,196.14684917992355 1085.0238993710693,165.03953631767172 1135,154 C 1184.9761006289307,142.96046368232828 1206.850314465409,151.98870390923665 1253,163 C 1299.149685534591,174.01129609076335 1369.5748427672956,187.0056480453817 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
    <div className='absolute z-10 p-10 mx-auto text-white text-xl'>
        <NavLink title="Home" url="/" />
        <NavLink title="Projects" url="/projects" />
        <NavLink title="Activism" url="/activism" />
    </div>
</div> */}