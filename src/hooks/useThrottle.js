import {useState, useRef, useEffect} from 'react';

const useThrottle = (value, delay) => {
    const [throttledFunction, setThrottledFunction] = useState();

    const lastExecuted = useRef(Date.now());

    useEffect(() => {

        const timer = setTimeout(() => {
            const timeNow = Date.now();
            const timeElapsed = timeNow-lastExecuted.current;

            if(timeElapsed>=delay)
            {
                setThrottledFunction(value);
                lastExecuted.current = timeNow;
            }
        }, delay-(Date.now()-lastExecuted.current));

        return () => clearTimeout(timer);

    }, [value, delay]);

    return throttledFunction;
}

export default useThrottle;