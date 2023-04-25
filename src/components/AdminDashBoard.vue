<template>
     <div class="container dashboard">
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <img :src='usrimage ' class="card-img-top dashboard-img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Total-Users</h5>
                        <p class="card-text text-center">
                            
                        </p>
                        <RouterLink to="/users" class="btn rounded-4 indigo w-100">View Details</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img :src='animalimage' class="card-img-top dashboard-img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Total Animals</h5>
                        <p class="card-text text-center">
                           
                        </p>
                        <a href="animals.php" class="btn rounded-4 indigo w-100">View Details</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img :src="illustration" class="card-img-top dashboard-img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Total Zoo</h5>
                        <p class="card-text text-center">
                           
                        </p>
                        <a href="Zoo.php" class="btn indigo rounded-4 w-100">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import usrimage from '../../public/flower.webp'
import animalimage from '../../public/comedy.jpeg'
import illustration from '../../public/illustration2.avif' 
export default{
 data()
 {
    return{
        usrimage:usrimage,
        animalimage:animalimage,
        illustration:illustration
    }
}
}
</script>