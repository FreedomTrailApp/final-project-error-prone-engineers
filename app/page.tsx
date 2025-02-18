'use client';
import { useEffect, useState } from 'react';
import { FeatureCollection } from 'geojson';
import Map from '../components/FreedomMap';

export default function Home() {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/freedom_path.geojson')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FeatureCollection) => {
        setGeoJsonData(data);
      })
      .catch(err => {
        console.error("Error loading GeoJSON:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!geoJsonData) {
    return <div>Loading map...</div>;
  }

  return (
    <div>
      <Map geoJsonData={geoJsonData} />
    </div>
  );
}
