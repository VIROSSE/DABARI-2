'use client'

import { NextRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';

interface ExtendedWindow extends Window {
    Weglot: {
        initialize: (config: { api_key: string }) => void;
    };
}

interface TranslationProps {
    router: NextRouter; // Adjust the type if needed
}

const Translation: React.FC<TranslationProps> = ({ router }) => {
    useEffect(() => {
        const loadWeglotScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://cdn.weglot.com/weglot.min.js';
            script.async = true;

            script.onload = () => {
                if ((window as unknown as ExtendedWindow).Weglot) {
                    (window as unknown as ExtendedWindow).Weglot.initialize({
                        api_key: 'wg_09092acdd3b47359cd66527f79920f793',
                    });
                }
            };

            document.head.appendChild(script);
        };

        loadWeglotScript();

        const handleRouteChange = () => {
            if ((window as unknown as ExtendedWindow).Weglot) {
                (window as unknown as ExtendedWindow).Weglot.initialize({ api_key: 'wg_09092acdd3b47359cd66527f79920f793' });
            }
        };

        router?.events.on('routeChangeComplete', handleRouteChange);


        return () => {
            router?.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router?.events]);

    return <></>;
};

export default Translation;
