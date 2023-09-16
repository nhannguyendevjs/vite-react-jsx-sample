
import Hello from '../../utils/components/hello/Hello';
import { activeRoute } from '../../utils/stores/app-store.mjs';

function Home() {
    console.log('Home Page activated');

    activeRoute('home');

    return (
        <>
            <Hello color='Red' />
        </>
    );
}

export default Home;
