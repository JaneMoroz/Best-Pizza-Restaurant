import { useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();
  return (
    <div style={{ height: 0, opacity: 0 }} data-testid="location-display">
      {location.pathname}
    </div>
  );
};
