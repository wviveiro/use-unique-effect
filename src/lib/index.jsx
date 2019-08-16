import {useEffect, useState, useCallback} from 'react';

const useUniqueEffect = (cb) => {
    const [loaded, setLoaded] = useState(false);

    const _cb = useCallback(cb, []);

    return useEffect(() => {
        if (loaded) return;

        setLoaded(true);

        return _cb();
    }, [_cb, loaded]);
}

export default useUniqueEffect;