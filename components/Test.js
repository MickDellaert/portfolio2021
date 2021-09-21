import Image from 'next/image'
import kitty from '../public/Delish_Delights.png'

function Test() {
  return (
    <>
      <h1>bla</h1>
      <Image src={kitty} layout="responsive" alt="Picture of the author" width={500} height={500}/>
    </>
  )
}

export default Test

