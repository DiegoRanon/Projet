import React, { useEffect, useRef } from 'react';

function Acceuil() {
  const slideIndexRef = useRef(1);

  useEffect(() => {
    showDivs(slideIndexRef.current);

    const timer = setInterval(() => plusDivs(1), 10000); // Change slide every 2 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  function plusDivs(n) {
    showDivs(slideIndexRef.current += n);
  }

  function currentDiv(n) {
    showDivs(slideIndexRef.current = n);
  }

  function showDivs(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("slider-dot");

    if (n > slides.length) {
      slideIndexRef.current = 1;
    }
    if (n < 1) {
      slideIndexRef.current = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexRef.current - 1].style.display = "block";
    dots[slideIndexRef.current - 1].className += " active";
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="slider-container" style={{ maxWidth: '800px', position: 'relative' }}>
          <img className="mySlides" src="https://www.cmontmorency.qc.ca/wp-content/uploads/images/College-Montmorency-drone.jpg" style={{ width: '100%' }} />
          <img className="mySlides" src="https://m1.quebecormedia.com/emp/emp/afb55433-8104-4b99-9125-ce444394cace_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=76&w=782&h=322&width=1200" style={{ width: '100%' }} />
          <img className="mySlides" src="https://mobile-img.lpcdn.ca/v2/924x/r3996/9b2105e5053031889ebb695f8a98a9aa.jpg" style={{ width: '100%' }} />


          <div className="slider-dots" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <span className="slider-dot" onClick={() => currentDiv(1)}></span>
            <span className="slider-dot" onClick={() => currentDiv(2)}></span>
            <span className="slider-dot" onClick={() => currentDiv(3)}></span>
           
          </div>
        </div>
        <h1>Description du site</h1>
        <p>
          Ce site permet de gérer les inscriptions à des cours au collège Montmorency. Tout d'abord, Il y a une page Professeur qui donne la liste des professeurs enseignant au collège. Ensuite, Il y a une page Cours qui indique la liste des cours donnés à la session actuelle au Collège. Finalement, il y a aussi une page individuelle par cours.
        </p>
      </header>
    </div>
  );
}

export default Acceuil;
