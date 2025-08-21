import { useState, useEffect } from 'react';

// garante que o estado da rolagem seja atualizado de forma eficiente a cada X ms
// evita que o componente renderize desnecessariamente enquanto o usuario rola a página
const throttle = (callback: () => void, delay: number) => {
    let isThrottled = false;
    return () => {
        if (!isThrottled) {
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
                callback();
            }, delay);
        }
    }
}

export const useScrollPosition = (delay: number = 100) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const throttleHandleScroll = throttle(handleScroll, delay);

        window.addEventListener('scroll', throttleHandleScroll);

        return () => {
            window.removeEventListener('scroll', throttleHandleScroll);
        };
    }, [delay]);

    return scrollY;
}