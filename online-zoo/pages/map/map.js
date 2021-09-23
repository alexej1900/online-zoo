const map = document.querySelector('.map-block');
const wrapper = document.querySelector('.wrapper__map');
const headerElem = document.getElementById('header');
const footerElem = document.getElementById('footer');
const zoomInButton = document.querySelector('.plus');
const zoomOutButton = document.querySelector('.minus');

const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  map.removeEventListener('mouseup', stopDrag);
}

map.onmousedown = function(e) {

  var coords = getCoords(map);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top + 80;

  map.style.position = 'absolute';
  // document.body.appendChild(map);
  moveAt(e);

  function moveAt(e) {
    map.style.left = e.pageX - shiftX + 'px';
    map.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  document.onmouseup = function() {
    document.onmousemove = null;
    map.onmouseup = null;
  };

}

map.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

// let topIndent = 0;
// let leftIndent = 0;

// const calculateCoords = (e, elem) => {
//   var box = elem.getBoundingClientRect();
// 	console.log(e.pageY, pageYOffset);
//   topIndent = e.pageY - 80 + pageYOffset;
//   leftIndent = e.pageX + pageXOffset;
// 	// topIndent = e.pageY - getCoords(map).top;
//   // leftIndent = e.pageX - getCoords(map).left;
// }

// const moveAt = (e) => {
//   if (map.style.position !== "absolute") {map.style.position = "absolute";}
//   map.style.left = e.pageX - leftIndent + 'px';
//   if (e.pageX >= wrapper.offsetWidth) {
//     stopDrag();
//   } else if (e.pageX <= 0) {
//     stopDrag();
//   }
//   map.style.top = e.pageY - (80 - pageYOffset) - topIndent + 'px';
// }

// const stopDrag = () => {
//   document.removeEventListener('mousemove', moveAt);
//   map.removeEventListener('mouseup', stopDrag);
// }

// map.addEventListener('mousedown', (e) => {

//   if (map.width <= wrapper.offsetWidth && map.height <= wrapper.offsetHeight) {
//     return;
//   }

//   calculateCoords(e, map);
//   moveAt(e);

//   document.addEventListener('mousemove', moveAt);
//   map.addEventListener('mouseup', stopDrag);
// });



// map.ondragstart = function() {
//   return false;
// };

// headerElem.addEventListener('mouseenter', stopDrag);
// footerElem.addEventListener('mouseenter', stopDrag);

// zoomInButton.addEventListener('click', () => {
// 	// console.log('click');
//   if (map.width <= wrapper.offsetWidth * 2) {
//     if (map.style.position !== "absolute") {map.style.position = "absolute";}
//     const prevWidth = map.width;
//     const prevHeight = map.height;
//     map.style.width = `${map.width * 1.25}px`;
//     map.style.height = "auto";
//     const nextWidth = map.width;
//     const nextHeight = map.height;
//     const topPos = map.offsetTop || 0;
//     const leftPos = map.offsetLeft || 0;


//     map.style.left = `${leftPos - ((nextWidth - prevWidth) / 2)}px`;
//     map.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;
//   }
// });

// zoomOutButton.addEventListener('click', () => {
//   if (map.width >= wrapper.offsetWidth || map.height >= wrapper.offsetHeight) {
//     if (map.style.position !== "absolute") {map.style.position = "absolute";}
//     const prevWidth = map.width;
//     const prevHeight = map.height;
//     map.style.width = `${map.width / 1.25}px`;
//     map.style.height = "auto";
//     const nextWidth = map.width;
//     const nextHeight = map.height;
//     const topPos = map.offsetTop || 0;
//     const leftPos = map.offsetLeft || 0;


//     map.style.left = `${leftPos + ((prevWidth - nextWidth) / 2)}px`;
//     map.style.top = `${topPos + ((prevHeight - nextHeight) / 2)}px`;

//     if (map.width <= wrapper.offsetWidth && map.height <= wrapper.offsetHeight) {
//       map.style.width = `${wrapper.offsetWidth}px`;
//       map.style.height = "auto";
//       map.style.top = `${(wrapper.offsetHeight - map.height) / 2}px`;
//       map.style.left = '0px';
//       if (map.height >= wrapper.offsetHeight) {
//         map.style.height = `${wrapper.offsetHeight}px`;
//         map.style.width = 'auto';
//         map.style.top = '0px';
//         map.style.left = `${(wrapper.offsetWidth - map.width) / 2}px`;
//       }
//     }
//   }
// });





