import PageTransition from 'components/PageTransition'
import Meta from 'components/Meta'
import Card from 'components/ActivismCard'

export default function Index() {
    return (
        <PageTransition>
            <Meta title={"Activism"} />
            <h1 className='text-5xl mb-10 font-bold'>Activism</h1>
            <div className='grid max-w-5xl gap-5'>
                <Card
                    title="MYCEGV - Mass Shooting Insurance"
                    description="The Actions Speak Louder Than Guns campaign promotes endign gun violence.  This was developed with Mayor Garcetti's Youth Council to End Gun Violence."
                    date="May 22, 2019"
                    url="https://www.dailynews.com/2019/05/22/mass-shooting-insurance-its-not-real-but-la-youths-hope-mad-men-style-ad-campaign-makes-you-think-about-guns-in-our-country/"
                />
                <Card
                    title="We Need #SafeSchoolsNow!"
                    description="On the 19th anniversary of the Columbine massacre, thirteen high schools united to honor the 13 lives lost. We want to send the message to lawmakers that our voices are louder together. Students lives matter, so we will no longer sit idly by waiting for something to happen. We will continue to speak out and when we are old enough, our voices will will be heard through our votes. We will be the change we want to see in the world."
                    date="April 20, 2018"
                    url="https://www.dailynews.com/2018/04/20/as-columbine-massacre-remembered-san-fernando-valley-students-walk-out-with-a-message/"
                />

            </div>

        </PageTransition>
    )
}

