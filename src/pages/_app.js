import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta
      name="description"
      content="Сварочные работы в Краснодарском крае и Адыгее"
    />
    <meta name="keywords" content="Сварочные работы Краснодарский край 
    Сварочные работы Адыгея сварка Кубань сварка Краснодар 
    сварка Адыгея ремонт кузова сварка труб 
    мебель лофт Краснодар Майкоп  Сварные навесы Сварные козырьки
    сварка стали 
    Ремонт и монтаж бортов"/>
    <title>Metallex | Сварочные работы</title>
    </Head>
    <Component {...pageProps} />
    </>
  ) 
}
