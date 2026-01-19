"use client";

export default function PageLoader() {
    return (
        <div className="page-loader-wrapper">
            <div className="page-loader-content">
                <div className="spinner"></div>
                <h3 className="loader-text">Loading...</h3>
            </div>
            <style jsx>{`
                .page-loader-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: #fff;
                    z-index: 9998;
                }
                
                .page-loader-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 25px;
                }
                
                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(52, 54, 65, 0.1);
                    border-radius: 50%;
                    border-top-color: #343641;
                    animation: spin 1s ease-in-out infinite;
                }
                
                .loader-text {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #343641;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                
                @keyframes spin {
                    to { 
                        transform: rotate(360deg); 
                    }
                }
            `}</style>
        </div>
    );
}
