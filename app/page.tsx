import Image from 'next/image'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
	  <Header />
      <div className="relative flex place-items-center">
        <Image
          src="/images/milan.jpg"
          alt="@i-am-milan Image"
          width={180}
          height={37}
          priority
        />
      </div>
	  <Footer />
    </main>
  )
}
