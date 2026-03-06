'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface LocationMarker {
    id: string;
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

        const isDarkTheme = themeMode === 'dark';

        // Load Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(link);

        // Dynamically import Leaflet
        import('leaflet').then((L) => {
            const map = L.map('map', {
                preferCanvas: true
            }).setView([39.8283, -98.5795], 4);

            // Use theme-aware CartoDB tiles.
            L.tileLayer(
                isDarkTheme
                    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    maxZoom: 20
                }).addTo(map);

            const popupBackground = isDarkTheme ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)';
            const popupBorder = isDarkTheme ? '#334155' : '#e2e8f0';
            const popupHeading = isDarkTheme ? '#f8fafc' : '#0f172a';
            const popupMuted = isDarkTheme ? '#94a3b8' : '#64748b';
            const popupCardBackground = isDarkTheme ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.8)';
            const markerCenter = isDarkTheme ? '#0f172a' : 'white';
            const markerBorder = isDarkTheme ? '#0f172a' : 'white';

            // Add markers for each location
            locations.forEach((location) => {
                const isOperational = location.status === 'Operational';
                const statusColor = isOperational ? '#40D1FB' : '#fb923c';

                // Create custom HTML icon with pulse effect
                const iconHTML = `
                    <div style="
                        width: 40px;
                        height: 40px;
                        background: ${statusColor};
                        border: 3px solid ${markerBorder};
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 0 0 2px ${statusColor}, 0 4px 12px rgba(0,0,0,0.25);
                        cursor: pointer;
                    ">
                        <div style="
                            width: 10px;
                            height: 10px;
                            background: ${markerCenter};
                            border-radius: 50%;
                            opacity: 0.9;
                        "></div>
                    </div>
                `;

                const customIcon = L.divIcon({
                    html: iconHTML,
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                    popupAnchor: [0, -20],
                    className: 'us-data-center-marker'
                });

                const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);

                const popupContent = `
                    <div style="min-width: 220px; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;">
                        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                            <div style="width: 8px; height: 8px; border-radius: 50%; background-color: ${statusColor}; box-shadow: 0 0 10px ${statusColor};"></div>
                            <span style="font-size: 9px; font-weight: 900; color: ${popupMuted}; text-transform: uppercase; letter-spacing: 0.4em;">${location.status}</span>
                        </div>
                        <h4 style="margin: 0; font-size: 16px; font-weight: 900; color: ${popupHeading}; text-transform: uppercase; margin-bottom: 8px; line-height: 1.2;">${location.city}</h4>
                        <div style="background-color: ${popupCardBackground}; padding: 10px; border-radius: 12px; border: 1px solid ${popupBorder}; margin-bottom: 8px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 9px; font-weight: 900; color: ${popupHeading}; text-transform: uppercase;">
                                <div>
                                    <div style="color: ${popupMuted}; font-size: 7px; margin-bottom: 2px;">Capacity</div>
                                    ${location.capacity}
                                </div>
                                <div>
                                    <div style="color: ${popupMuted}; font-size: 7px; margin-bottom: 2px;">Status</div>
                                    <span style="color: ${statusColor};">${location.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                marker.bindPopup(popupContent, {
                    className: 'custom-location-popup',
                    maxWidth: 300,
                    closeButton: true
                });

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
                    animation: markerPulse 3s ease-in-out infinite;
                }
                
                @keyframes markerPulse {
                    0%, 100% {
                        filter: drop-shadow(0 0 0 rgba(64, 209, 251, 0.3)) drop-shadow(0 4px 12px rgba(0,0,0,0.25));
                    }
                    50% {
                        filter: drop-shadow(0 0 8px rgba(64, 209, 251, 0.5)) drop-shadow(0 4px 12px rgba(0,0,0,0.25));
                    }
                }
                
                .custom-location-popup .leaflet-popup-content-wrapper {
                    background: ${popupBackground} !important;
                    backdrop-filter: blur(16px) !important;
                    border: 1px solid ${popupBorder} !important;
                    border-radius: 16px !important;
                    padding: 16px !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
                }
                
                .custom-location-popup .leaflet-popup-content {
                    margin: 0 !important;
                    color: ${popupHeading};
                }
                
                .custom-location-popup .leaflet-popup-tip {
                    background: ${popupBackground} !important;
                    border-color: ${popupBorder} !important;
                }
                
                .leaflet-container {
                    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
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
        <div className="relative w-full rounded-[4rem] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-[0_60px_120px_rgba(0,0,0,0.08)]" style={{ height: '600px' }}>
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
            <div className="relative w-full rounded-[4rem] overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 animate-pulse" style={{ height: '600px' }} />
        );
    }

    return <MapContent locations={locations} onLocationSelect={onLocationSelect} themeMode={themeMode} />;
};

export default InteractiveMap;
