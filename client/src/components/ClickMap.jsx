
function ClickMap() {
// key = AIzaSyB4wGgBeJ9GkxWpGxjDdipNJK0dX1gGC0M
function initMap() {
    const originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: originalMapCenter,
    });
    const infowindow = new google.maps.InfoWindow({
      content: "Change the zoom level",
      position: originalMapCenter,
    });
  
    infowindow.open(map);
    map.addListener("zoom_changed", () => {
      infowindow.setContent("Zoom: " + map.getZoom());
    });
  }
  
  window.initMap = initMap;
  return (
    <div className="App">

      </div>
  )
}

export default ClickMap
