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
  topIndent = e.pageY - (box.top + pageYOffset) + 80 - pageYOffset;
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
  document.addEventListener('mouseup', stopDrag);
});

map.ondragstart = function() {
  return false;
};

header.addEventListener('mouseenter', stopDrag);
footer.addEventListener('mouseenter', stopDrag);

// Открытие и закрытие тултипа
function openTooltip(e) {
  points.forEach(point => point.parentNode.children[1].classList.remove('tooltip__active'));
  e.target.parentNode.children[1].classList.toggle('tooltip__active');
}
function closeTooltip(e) {
  if (!e.target.classList.contains('point'))
  points.forEach(point => point.parentNode.children[1].classList.remove('tooltip__active'));
}

points.forEach(point => point.addEventListener('click', openTooltip));
document.addEventListener('click', closeTooltip);

// Увеличение и уменьшение
zoomInButton.addEventListener('click', () => {
  if (mapImage.width <= wrapper.offsetWidth * 2.5) {

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
      map.style.width = `${wrapper.offsetWidth}px`;
      map.style.height = "auto";
      map.style.top = `${(wrapper.offsetHeight - map.height) / 2}px`;
      map.style.left = '0px';
      if (map.height >= wrapper.offsetHeight) {
        map.style.height = `${wrapper.offsetHeight}px`;
        map.style.width = 'auto';
        map.style.top = '0px';
        map.style.left = `${(wrapper.offsetWidth - map.width) / 2}px`;
      }
    }
  }
});