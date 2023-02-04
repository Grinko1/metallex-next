import Benefits from '@/Components/Benefits/Benefits'
import FloatingBtn from '@/Components/FloatingBtn/FloatingBtn'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Nav from '@/Components/Nav/Nav'
import OrangeBlock from '@/Components/OrangeBlock/OrangeBlock'
import Slider from '@/Components/Slider/Slider'
import style from '@/styles/Main.module.css'



export default function Home() {
  return (
    <>
    <Header/>
    <Nav />
      <div className={style.banner}>
        <div className={style.headBlock}>
          <h1 className={style.mainHeader}>
            СВАРОЧНЫЕ РАБОТЫ <br /> С ВЫЕЗДОМ НА ОБЪЕКТ
            <br /> В КРАСНОДАРСКОМ КРАЕ И АДЫГЕЕ
          </h1>
        </div>

        <Benefits />
      </div>
      <OrangeBlock/>
      <Slider/>
      <FloatingBtn/>
      <Footer/>
    </>
  )
}
