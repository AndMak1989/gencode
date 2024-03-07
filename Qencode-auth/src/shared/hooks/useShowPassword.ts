import { useCallback, useState } from 'react';

interface UseShowPasswordInterface {
    handleShowState: () => void;
    inputType: 'text' | 'password';
}

export function useShowPassword(initValue: boolean): UseShowPasswordInterface {
    const [showState, setShowState] = useState(initValue);
    const handleShowState = useCallback(() => {
        setShowState((prev) => !prev);
    }, [initValue]);

    const inputType = showState ? 'text' : 'password';
    return {
        handleShowState,
        inputType
    };
}
