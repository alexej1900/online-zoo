const map = document.querySelector('.map-block');
const wrapper = document.querySelector('main');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const zoomInButton = document.querySelector('.plus');
const zoomOutButton = document.querySelector('.minus');
const mapImage = document.querySelector('.map');
const points = document.querySelectorAll('.point');
const mapIcons = document.querySelectorAll('.map__icon');

let topIndent = 0;
let leftIndent = 0;

const calculateCoords = (e, elem) => {
  var box = elem.getBoundingClientRect();
  topIndent = e.pageY - (box.top + pageYOffset) + 80;
  leftIndent = e.pageX - (box.left + pageXOffset);
}

const moveAt = (e) => {
  if (map.style.position !== "absolute") {map.style.position = "absolute";}
  map.style.left = e.pageX - leftIndent + 'px';
  if (e.pageX >= wrapper.offsetWidth) {
    stopDrag();
  } else if (e.pageX <= 0) {
    stopDrag();
  }
  map.style.top = e.pageY - pageYOffset - topIndent + 'px';
}

const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  map.removeEventListener('mouseup', stopDrag);
}

map.addEventListener('mousedown', (e) => {

  if (map.width <= wrapper.offsetWidth && map.height <= wrapper.offsetHeight) {
    return;
  }

  calculateCoords(e, map);
  moveAt(e);

  document.addEventListener('mousemove', moveAt);
  map.addEventListener('mouseup', stopDrag);
});

map.ondragstart = function() {
  return false;
};

header.addEventListener('mouseenter', stopDrag);
footer.addEventListener('mouseenter', stopDrag);

zoomInButton.addEventListener('click', () => {
  if (mapImage.width <= wrapper.offsetWidth * 2) {

    const leftPos = map.offsetLeft || 0;
    
    if (mapImage.style.position !== "absolute") {
      mapImage.style.position = "absolute";
      map.style.position = "absolute";
      map.style.left = leftPos;
    }
    const prevWidth = mapImage.width;
    const prevHeight = mapImage.height;
    const topPos = map.offsetTop || 0;
    
    mapImage.style.width = `${mapImage.width * 1.25}px`;
    mapImage.style.height = "auto";
    map.style.width = `${mapImage.width}px`;
    map.style.height = `${mapImage.height}px`;

    points.forEach(point => {
      point.style.width = `${point.offsetWidth * 1.25}px`;
      point.style.height = `${point.offsetHeight * 1.25}px`;
    });

    mapIcons.forEach(mapIcon => {
      mapIcon.style.width = `${mapIcon.width * 1.25}px`;
      mapIcon.style.height = "auto";
    });
    
    const nextWidth = mapImage.width;
    const nextHeight = mapImage.height;

    map.style.left = `${leftPos  - ((nextWidth - prevWidth) / 2)}px`;
    mapImage.style.left = map.style.left + 200;
    map.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;
    console.log(map.style.left);
  }
});

zoomOutButton.addEventListener('click', () => {
  if (mapImage.width >= wrapper.offsetWidth || mapImage.height >= wrapper.offsetHeight) {
    if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
    const prevWidth = mapImage.width;
    const prevHeight = mapImage.height;
    const topPos = map.offsetTop || 0;
    const leftPos = map.offsetLeft || 0;
    mapImage.style.width = `${mapImage.width / 1.25}px`;
    mapImage.style.height = "auto";
    map.style.width = `${mapImage.width}px`;
    map.style.height = `${mapImage.height}px`;

    points.forEach(point => {
      point.style.width = `${point.offsetWidth / 1.25}px`;
      point.style.height = `${point.offsetHeight / 1.25}px`;
    });

    mapIcons.forEach(mapIcon => {
      mapIcon.style.width = `${mapIcon.width / 1.25}px`;
      mapIcon.style.height = "auto";
    });

    const nextWidth = mapImage.width;
    const nextHeight = mapImage.height;

    map.style.left = `${leftPos - ((nextWidth - prevWidth) / 2)}px`;
    // mapImage.style.left = map.style.left - 200;
    map.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;

    if (map.width <= wrapper.offsetWidth && map.height <= wrapper.offsetHeight) {
      mapImage.style.width = `${wrapper.offsetWidth}px`;
      mapImage.style.height = "auto";
      mapImage.style.top = `${(wrapper.offsetHeight - mapImage.height) / 2}px`;
      mapImage.style.left = '0px';
      if (mapImage.height >= wrapper.offsetHeight) {
        mapImage.style.height = `${wrapper.offsetHeight}px`;
        mapImage.style.width = 'auto';
        mapImage.style.top = '0px';
        mapImage.style.left = `${(wrapper.offsetWidth - mapImage.width) / 2}px`;
      }
    }
  }
});