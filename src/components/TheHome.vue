<template>
    <div class="container-fluid m-0">
         <div class ="row">
            <div class="col-lg-4">
             <h2 class="hero-text">
                Welcome to the <span class="hero-title">Lemon Society</span>
             </h2>
             <p class="text-center font-weight-light hero-paragraph">
                With Over 2500 animals over 80 Acres.
                You are really in for a Wild life in coolest zoo. 
                we provide more intensive care for animals than is possible in nature reserves or sanctuaries
                The primary aim of a lemon society is to ensure that endangered species are maintained, researched and protected. 
             </p>
             <div class="text-center mt-4">
             <button type="button" class="btn indigo btn-lg">Get Your Tour !</button>
             </div>
            </div>
            <div class="col-lg-8 hero-right-section">
              <img :src="illustration" class="hero-right-section-img">
            </div>
        </div>
        <div class="container-fluid m-3">
         <div class="row mt-5">
            <div class="col-lg-4 mt-2">
              <img :src="flower" class="flower-img">
            </div>
            <div class="col-lg-8 mt-2">
                <h2 class="red-colour text-center">Our Mission</h2>
                <p class="mission-paragraph">Lemon Society provide more intensive care for animals than is possible in nature reserves or sanctuaries
                    We specialize in particular groups of animals, while others exhibit general collections 
                    Marine animals are often kept in separate establishments called aquariums.
                    The primary aim of a Lemon Society is to ensure that endangered species are maintained, researched and protected.
                    Lemon Society also play an important role in educating people about animals and their habitats. </p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import illustration from '../../public/zootopia.jpg'
import flower from '../../public/flower.webp'
import zoocharacter from '../../public/comedy.jpeg'
export default{
 data()
 {
    return{
        illustration:illustration,
        flower:flower,
        zoocharacter:zoocharacter
    }
 }
}
</script>