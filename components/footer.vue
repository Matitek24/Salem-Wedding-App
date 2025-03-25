<template>
    <div class="footer-component">
      <hr class="footer-hr" />
      <div class="footer-content">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12 d-flex justify-content-end">
                    <img src="../public/images/Icon/ozdobnik_brown.png" alt="" srcset="" style="width:200px; transform: scaleX(-1);">
                </div>
                <div class="col-lg-2 col-md-12">
                    <h3>Znajdź nas</h3>
                    <p>Zobserwuj</p>
                    <div class="social-icons">
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <img src="../public/images/Icon/iconicon-YT.png" alt="youtube">
                        </a>
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <img src="../public/images/Icon/iconicon-IG.png" alt="instagram">
                        </a>
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <img src="../public/images/Icon/iconicon-FB.png" alt="facebook">
                        </a>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 d-flex justify-content-start ">
                    <img src="../public/images/Icon/ozdobnik_brown.png" alt="" srcset="" style="width:200px;">
                </div>
            </div>
        </div>
    </div> 
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .footer-component {
    text-align: center;
    padding: 3rem 0;
    font-family: 'Zodiak';
  }
  .footer-component h3{
    font-family:'Corinthia';
    font-size: 4rem;
    color: var(--color-first);
  }
  
  .footer-hr {
    border: 1.5px solid var(--color-first);
    margin-top: 4rem;
    margin-bottom:4rem;
    width: 100%;
  }
  
  .footer-content {
    margin-top: 1rem;
  }
  
  .footer-content h3 {
    margin: 0;
    letter-spacing: 0.3rem;
  }
  .footer-content p{
    position: relative;
    top:-20px;
    font-weight: 500;
    font-family: HedvigLettersSerif;
  }
  .social-icons {
    margin-top: 1rem;
    margin-bottom:2rem;
  }
  
  .social-icons img {
    width: 2rem;
    color: inherit;
    text-decoration: none;
    margin: 0.5rem;
    font-size: 1.5rem;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: var(--first_color);
  }
  </style>
  