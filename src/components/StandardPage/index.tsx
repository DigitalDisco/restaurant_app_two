import { Outlet } from 'react-router-dom';
import styles from './StandardPage.module.scss';
import stylesTheme from 'styles/_theme.module.scss';

export default function StandardPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
                    食べ物<br/>
                    A Taste 
                    Of
                    Japan
        </div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}
