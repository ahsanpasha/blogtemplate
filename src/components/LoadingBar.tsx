"use client";
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LoadingBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [pathname, searchParams]);

    return (
        <>
            {loading && (
                <div className="global-loader">
                    <div className="loader-bar"></div>
                </div>
            )}
            <style jsx>{`
                .global-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 9999;
                    height: 3px;
                    background: transparent;
                }
                
                .loader-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #ff5a5f, #ff8a8f);
                    animation: loading 1.5s ease-in-out infinite;
                    transform-origin: left;
                }
                
                @keyframes loading {
                    0% {
                        transform: scaleX(0);
                    }
                    50% {
                        transform: scaleX(0.5);
                    }
                    100% {
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </>
    );
}
