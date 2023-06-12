import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectIsFetching } from 'redux/auth/authSelectors';

// import { ContainerStyled, MainStyled } from './Layout.styled';

export default function Layout() {
  const isFetching = useSelector(selectIsFetching);
  return (
    <div>
      {isFetching ? (
        <div>Please wait. Fetching user information </div>
      ) : (
        <>
          <Header />
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </>
      )}
    </div>
  );
}
