import {useState, useEffect} from 'react';
import useDebounce from '../hooks/useDebounce';
import useThrottle from '../hooks/useThrottle';

const Gun = ({gunType}) => {

    const [dashes, setDashes] = useState('');
    const [fireCount, setFireCount] = useState(0);
    let debouncedFireCount;
    let throttledFireCount;

    if(gunType === 'debounce')
    {
         debouncedFireCount = useDebounce(fireCount, 500);

        useEffect(() => {
            if(debouncedFireCount > 0) {
                setDashes((prev) => prev + '-');     
            }
        }, [debouncedFireCount]);
    }else if(gunType === 'throttle') {
     throttledFireCount = useThrottle(fireCount, 500);

        useEffect(() => {
            if(throttledFireCount > 0)
            {
                setDashes((prev) => prev+ '-');
            }
        }, [throttledFireCount])
    } else {
        useEffect(() => {
            if (fireCount > 0) {
                setDashes((prev) => prev + '-');
            }
        }, [fireCount]);
    }

    const handleFire = () => {
        setFireCount(fireCount+1);
    }
    
    return (
        <div className='gun'>
            <button onClick={handleFire}>Fire</button>
            <b>{gunType ? gunType === 'debounce' ? debouncedFireCount : throttledFireCount : fireCount}</b>
            <p>{dashes}</p>
        </div>
    )
}

export default Gun;