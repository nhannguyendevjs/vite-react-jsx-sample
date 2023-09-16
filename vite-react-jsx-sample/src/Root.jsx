import { Outlet } from 'react-router-dom';
import { appStore$ } from './utils/stores/app-store.mjs';
import NavigationBar from './utils/components/navigation-bar/NavigationBar';

function Root() {
    appStore$.subscribe(value => {
        console.log('App Store updated ::', value);
    });

    return (
        <>
            <NavigationBar />
            <div className='w-full h-4' />
            <Outlet />
        </>
    );
}

export default Root;
