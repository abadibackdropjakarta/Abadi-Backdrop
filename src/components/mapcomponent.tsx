"use client";
import React from "react";

interface MapProps {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng }) => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6288991580395!2d106.91046969354953!3d-6.3057739970804505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed52ccd34195%3A0xb9f803261cac5fa!2sMasjid%20Nurul%20Iman!5e0!3m2!1sid!2sid!4v1766249125203!5m2!1sid!2sid`;
  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: "6px" }}
      allowFullScreen={true}
      loading="lazy"
      src={embedUrl}
    ></iframe>
  );
};

export default MapComponent;
