const images = [
    { src: "images/quilt.jpeg", caption: "Q - for Quilt" },
    { src: "images/waterfall.jpeg", caption: "W - for Waterfall" },
    { src: "images/airplane.jpeg", caption: "A - for Airplane" },
    { src: "images/newspaper.jpeg", caption: "N - for Newspaper" },
    { src: "images/soccer.jpeg", caption: "S - for Soccer Ball" },
    { src: "images/train.jpeg", caption: "T - for Train" },
    { src: "images/eagle.jpeg", caption: "E - for Eagle" },
    { src: "images/rainbow.jpeg", caption: "R - for Rainbow" },
    { src: "images/lighthouse.jpeg", caption: "L - for Lighthouse" },
    { src: "images/icecream.jpeg", caption: "I - for Ice Cream" },
    { src: "images/notebook.jpeg", caption: "N - for Notebook" },
    { src: "images/guitar.jpeg", caption: "G - for Guitar" }
  ];
  
  function showSlide(index) {
    const mainImage = document.getElementById("mainImage");
    const caption = document.getElementById("caption");
  
    mainImage.src = images[index].src;
    caption.textContent = images[index].caption;
  }
  