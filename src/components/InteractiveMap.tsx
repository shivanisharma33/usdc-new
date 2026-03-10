'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface LocationMarker {
    id: string;
    title?: string;
    city: string;
    lat: number;
    lng: number;
    status: string;
    capacity: string;
}

interface InteractiveMapProps {
    locations: LocationMarker[];
    onLocationSelect?: (locationId: string) => void;
}

interface MapContentProps extends InteractiveMapProps {
    themeMode: ThemeMode;
}

const MapContent = ({ locations, onLocationSelect, themeMode }: MapContentProps) => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isDarkTheme = false; // Force light theme mapping to match user screenshot

        // Load Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(link);

        // Dynamically import Leaflet
        import('leaflet').then((L) => {
            const map = L.map('map', {
                preferCanvas: true,
                zoomControl: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                keyboard: false,
                dragging: false,
                touchZoom: false
            }).setView([38.8283, -85.5795], 5);

            // Use colored OpenStreetMap tiles
            L.tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 19
                }).addTo(map);

            // Add markers for each location
            locations.forEach((location) => {
                const isOperational = location.status === 'Operational';
                const statusColor = isOperational ? '#40D1FB' : '#fb923c';
                const innerColor = '#1e3a8a';

                // Create custom HTML icon with building shape
                const iconHTML = `
                    <div style="position: relative; width: 44px; height: 44px;">
                        <div style="
                            width: 44px;
                            height: 44px;
                            background: white;
                            border-radius: 50%;
                            border: 3px solid ${statusColor};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 6px 16px rgba(0,0,0,0.2);
                        ">
                            <div style="width: 30px; height: 30px; background: ${innerColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3V21H19V3H5ZM9 7H11V9H9V7ZM9 11H11V13H9V11ZM9 15H11V17H9V15ZM13 7H15V9H13V7ZM13 11H15V13H13V11ZM13 15H15V17H13V15Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                `;

                const customIcon = L.divIcon({
                    html: iconHTML,
                    iconSize: [44, 44],
                    iconAnchor: [22, 22],
                    popupAnchor: [0, -22],
                    className: 'us-data-center-marker'
                });

                const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);

                const popupContent = `
                    <div style="font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center;">
                        <h4 style="margin: 0; font-size: 15px; font-weight: 700; color: #0f172a; line-height: 1.3; text-align: center;">${location.title || location.city}</h4>
                    </div>
                `;

                marker.bindPopup(popupContent, {
                    className: 'custom-location-popup',
                    maxWidth: 300,
                    closeButton: false
                });

                // Auto-open North Carolina development site as in the screenshot
                if (location.id === 'carolina') {
                    setTimeout(() => {
                        marker.openPopup();
                    }, 500);
                }

                marker.on('click', () => {
                    if (onLocationSelect) {
                        onLocationSelect(location.id);
                    }
                });
            });

            // Add animation styles
            const style = document.createElement('style');
            style.setAttribute('data-map-styles', 'true');
            style.textContent = `
                .us-data-center-marker {
                    transition: transform 0.2s ease;
                }
                .us-data-center-marker:hover {
                    transform: scale(1.1);
                    z-index: 1000 !important;
                }
                
                .custom-location-popup .leaflet-popup-content-wrapper {
                    background: white !important;
                    border: 1px solid #e2e8f0 !important;
                    border-radius: 12px !important;
                    padding: 16px !important;
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15) !important;
                }
                
                .custom-location-popup .leaflet-popup-content {
                    margin: 0 !important;
                    color: #0f172a;
                }
                
                .custom-location-popup .leaflet-popup-tip {
                    background: white !important;
                    border-color: #e2e8f0 !important;
                }
                
                .leaflet-container {
                    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
                    background: #e5e7eb !important;
                }
                
                /* Hide Leaflet default zoom controls slightly */
                .leaflet-control-zoom {
                    border: 1px solid #e2e8f0 !important;
                    border-radius: 8px !important;
                    overflow: hidden !important;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
                }
                .leaflet-control-zoom a {
                    color: #0f172a !important;
                    background-color: white !important;
                }
            `;
            document.head.appendChild(style);
        });

        return () => {
            link.remove();
            const styleElement = document.querySelector('style[data-map-styles]');
            if (styleElement) styleElement.remove();
            const mapElement = document.getElementById('map');
            if (mapElement) {
                mapElement.innerHTML = '';
            }
        };
    }, [locations, onLocationSelect, themeMode]);

    const technicalOverlayPattern = themeMode === 'dark'
        ? 'linear-gradient(rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.12)_1px,transparent_1px)'
        : 'linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)';

    return (
        <div className="relative w-full overflow-hidden border border-slate-200 dark:border-slate-700 shadow-[0_60px_120px_rgba(0,0,0,0.08)]" style={{ height: '600px' }}>
            <div id="map" className="w-full h-full z-10" />
            {/* Technical Overlay */}
            <div
                className="absolute inset-0 pointer-events-none bg-[length:50px_50px] opacity-20"
                style={{ zIndex: 5, backgroundImage: technicalOverlayPattern }}
            />

            {/* Attribution - Leaflet requirement */}
            <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 dark:text-slate-400 pointer-events-none z-20">
                <span>© OpenStreetMap contributors</span>
            </div>
        </div>
    );
};

const InteractiveMap = ({ locations, onLocationSelect }: InteractiveMapProps) => {
    const [mounted, setMounted] = useState(false);
    const [themeMode, setThemeMode] = useState<ThemeMode>('light');

    useEffect(() => {
        const getThemeFromDom = (): ThemeMode =>
            document.documentElement.classList.contains('dark') ? 'dark' : 'light';

        setMounted(true);
        setThemeMode(getThemeFromDom());

        const handleThemeChange = (event: Event) => {
            const customEvent = event as CustomEvent<{ theme?: ThemeMode }>;
            setThemeMode(customEvent.detail?.theme ?? getThemeFromDom());
        };

        window.addEventListener('themechange', handleThemeChange as EventListener);

        return () => {
            window.removeEventListener('themechange', handleThemeChange as EventListener);
        };
    }, []);

    if (!mounted) {
        return (
            <div className="relative w-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 animate-pulse" style={{ height: '600px' }} />
        );
    }

    return <MapContent locations={locations} onLocationSelect={onLocationSelect} themeMode={themeMode} />;
};

export default InteractiveMap;
