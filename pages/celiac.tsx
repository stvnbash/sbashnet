import PageTransition from 'components/PageTransition'
import Meta from 'components/Meta'
import Card from 'components/ActivismCard'
import { getStaticProps } from './projects'

export default function Index() {
    return (
        <PageTransition>
            <Meta title={"Celiac"} />
            <h1 className='text-5xl mb-10 font-bold'>Celiac Disease</h1>
            <div className=''>
                coming soon!
            </div>

        </PageTransition>
    )
}
