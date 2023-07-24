import MainScreen from '../view/screens/MainScreen'
import { Raleway } from 'next/font/google'


const mainFont = Raleway({
  subsets: ['latin-ext'],
  display: 'swap',
})
export default function Home({children}) {

  return (
    <body className={mainFont.className}> {children}
    <MainScreen></MainScreen>
    </body>
  )
}
