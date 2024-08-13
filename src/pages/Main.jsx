import { Outlet, useNavigation, useFetchers  } from "react-router-dom";
import { useEffect } from 'react';
import NProgress from 'nprogress'

export default function Main() {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  useEffect(() => {
    const fetchersIdle = fetchers.every((f) => f.state === 'idle');
    if (navigation.state === 'idle' && fetchersIdle) {
      NProgress.done();
    } else {
      NProgress.start();
    }
  }, [navigation.state, fetchers]);
  
  return(
    <>
    <Outlet />
    </>
  )
}