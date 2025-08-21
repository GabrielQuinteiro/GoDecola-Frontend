import { type RefObject, useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { type ActionCreatorWithPayload } from '@reduxjs/toolkit';

/*
    esse hook recebe:
    - uma ref para o elemento que queremos medir a altura
    - uma action do redux que sera despachada com a nova altura
*/ 
export const useElementHeight = (
    elementRef: RefObject<HTMLElement | null>,
    action: ActionCreatorWithPayload<number>
) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // funcao que mede e despacha a altura
        const measureHeight = () => {
            if (elementRef.current) {
                const height = elementRef.current.clientHeight;
                dispatch(action(height));
            }
        };

        // mede a altura na primeira renderizacao
        measureHeight();

        // listener para mudança no tamanho da janela
        window.addEventListener('resize', measureHeight);

        return () => {
            window.removeEventListener('resize', measureHeight);
        };
    }, [elementRef, action, dispatch]);
}