// components/Map.jsx
const Map = ({ location }) => {
    const embedUrl = `https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`;
  
    return (
      <div className="h-[200px] w-full">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={embedUrl}
          title="Location Map"
        ></iframe>
      </div>
    );
  };
  
  export default Map;