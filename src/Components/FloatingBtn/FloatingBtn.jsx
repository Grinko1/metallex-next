import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import style from './FloatingBtn.module.css';

const FloatingBtn = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {scroll >= 60 ? (
        <Link href="/contacts" className={style.btn}>
          <span className={style.text}>Связаться c нами</span>
        </Link>
      ) : (
        ''
      )}
    </>
  );
};

export default FloatingBtn;
