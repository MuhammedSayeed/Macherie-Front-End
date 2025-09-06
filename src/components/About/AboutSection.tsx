import Header from '@/components/About/Header'
import AboutImage from '@/components/About/AboutImage'
import WhoWeAre from '@/components/About/WhoWeAre'

const AboutSection = () => {
    return (
        <main className='px-4 py-10 lg:py-0 lg:px-0 flex items-center lg:justify-center w-full min-h-screen bg-brandBg text-primary-light'>
            <div className="grid grid-cols-1 lg:grid-cols-14 container gap-x-15">
                <div className="lg:col-span-4 ">
                    <div className="w-fit lg:ml-auto">
                        <Header />
                    </div>
                </div>
                <AboutImage />
                <WhoWeAre />
            </div>
        </main>
    )
}

export default AboutSection
