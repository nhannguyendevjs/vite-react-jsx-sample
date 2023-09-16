import { activeRoute } from '../../utils/stores/app-store.mjs';
import Skeleton from '@mui/material/Skeleton';

function About() {
    console.log('About Page activated');

    activeRoute('about');

    return (
        <>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
        </>
    );
}

export default About;
