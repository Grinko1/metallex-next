
import Link from 'next/link';
import style from './Nav.module.css';

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.container}>
        <ul className={style.navItems}>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/catalog">Каталог услуг</Link>{' '}
          </li>
          <li>
            <Link href="/price">Прайс</Link>{' '}
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
