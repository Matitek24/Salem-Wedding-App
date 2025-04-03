<template>
    <div class="full-width-layout photography-layout mb-5 pb-5">
      <div class="row g-0">
        <div class="col-lg-5 col-sm-12 order-lg-2 sidebar">
          <div class="sidebar-content">
            <div class="profile-image">
              <img src="../../public/images/wesele_fot1.jpg" alt="Profile" class="img-fluid">
            </div>
            <div class="text-content">
              <h2>{{ authorName }}</h2>
              <slot name="description"></slot>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-sm-12 order-lg-1 main-image d-flex justify-content-center align-items-center">
          <slot name="mainImage"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoLayout',
    props: {
      authorName: {
        type: String,
        default: 'Film'
      }
    }
  }
  </script>
  
  <style scoped>
  .full-width-layout {
    position: relative;
    margin-right: calc(-50vw + 50%);
    width: 100vw;
    overflow-x: hidden;
}
  .photography-layout {
    padding: 0;
    width: 100%;
  }
  .row{
    margin: 0;
  }
  .sidebar {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;
    position: relative;
    right: 6rem;
  }
  
  .sidebar-content {
    max-width: 400px;
  }
  
  .profile-image img {
    max-width: 260px;
    margin-bottom: 1rem;
  }
  
  .main-image {
    padding: 0;
  }
  .text-content {
    font-family: 'Zodiak', Times, serif;
    background-color: #f8f9fa;
    box-shadow: -23px 22px 19px -21px rgba(42, 42, 42, 0.182);
    padding: 3rem;
    text-align: left;
    width: 150%;
    min-width: 100%;
  }

  .text-content h2{
    text-align: left;
    margin-bottom: 2rem;
    font-family: Corinthia;
    font-size: 6rem;
    color: var(--color-first);
  }
  .profile-image {
    position: relative;
    display: flex;
    justify-content: end;
    top: 8rem;
    left: 7rem;
  }


  @media (max-width: 1400px){
    .text-content{
        width: 120%;
    }
  }
  @media (max-width: 1200px){
    .text-content{
        width: 140%;
    }
  }
  @media (max-width: 992px) {
    .sidebar, .main-image {
      height: auto;
    }
    
    .main-image img {
      height: 50vh;
    }
    .sidebar {
    align-items: center;
    justify-content: center;
    text-align: center;
    right: 4rem;
  }
  .text-content{
        width: 100%;
    }
  }
  </style>