<script setup>
    import { ref } from 'vue'
</script>


<template>
    <nav class="flex justify-start bg-[#0a0a23] font-montserrat">
            <div class="pr-80 pl-40 pt-6 pb-4">
                <a href="">
                    <img
                        class="h-10"
                        src="../assets/images/TCD_Transparent_logo.png"
                        alt="TheCyberDelta"
                    />
                </a>
            </div>
            <div class="flex justify-start pt-4 pb-4 text-white">
                <div class="flex justify-center pt-2">
                    <div class="pr-20 text-lg">
                        <a href="">Blogs</a>
                    </div>
                    <div class="pr-20 text-lg">
                        <a href="">About</a>
                    </div>
                    <div class="pr-20 text-lg">
                        <a href="">Contact Us</a>
                    </div>
                    <div class="pr-16 text-lg">
                        <a href="">Login</a>
                    </div>
                </div>
                <div class="">
                    <button
                        class="text-white text-lg py-2 px-5 bg-[#27ae60] rounded-lg hover:bg-[#1e8449]"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
</template>