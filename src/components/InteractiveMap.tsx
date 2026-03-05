'use client';

import { useEffect, useState } from 'react';

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

const MapContent = ({ locations, onLocationSelect }: InteractiveMapProps) => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

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

            // Add tile layer from CartoDB Light (cleaner look like DigiPowerX)
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

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
                        border: 3px solid white;
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
                            background: white;
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
                            <span style="font-size: 9px; font-weight: 900; color: #64748b; text-transform: uppercase; letter-spacing: 0.4em;">${location.status}</span>
                        </div>
                        <h4 style="margin: 0; font-size: 16px; font-weight: 900; color: #0f172a; text-transform: uppercase; margin-bottom: 8px; line-height: 1.2;">${location.city}</h4>
                        <div style="background-color: rgba(241, 245, 249, 0.8); padding: 10px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 8px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 9px; font-weight: 900; color: #0f172a; text-transform: uppercase;">
                                <div>
                                    <div style="color: #94a3b8; font-size: 7px; margin-bottom: 2px;">Capacity</div>
                                    ${location.capacity}
                                </div>
                                <div>
                                    <div style="color: #94a3b8; font-size: 7px; margin-bottom: 2px;">Status</div>
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
                    background: rgba(255, 255, 255, 0.98) !important;
                    backdrop-filter: blur(16px) !important;
                    border: 1px solid #e2e8f0 !important;
                    border-radius: 16px !important;
                    padding: 16px !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
                }
                
                .custom-location-popup .leaflet-popup-content {
                    margin: 0 !important;
                    color: #0f172a;
                }
                
                .custom-location-popup .leaflet-popup-tip {
                    background: rgba(255, 255, 255, 0.98) !important;
                    border-color: #e2e8f0 !important;
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
    }, [locations, onLocationSelect]);

    return (
        <div className="relative w-full rounded-[4rem] overflow-hidden border border-slate-200 shadow-[0_60px_120px_rgba(0,0,0,0.08)]" style={{ height: '600px' }}>
            <div id="map" className="w-full h-full z-10" />
            {/* Technical Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" style={{ zIndex: 5 }} />
            
            {/* Attribution - Leaflet requirement */}
            <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 pointer-events-none z-20">
                <span>© OpenStreetMap contributors</span>
            </div>
        </div>
    );
};

const InteractiveMap = ({ locations, onLocationSelect }: InteractiveMapProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="relative w-full rounded-[4rem] overflow-hidden border border-slate-200 bg-slate-50 animate-pulse" style={{ height: '600px' }} />
        );
    }

    return <MapContent locations={locations} onLocationSelect={onLocationSelect} />;
};

export default InteractiveMap;
