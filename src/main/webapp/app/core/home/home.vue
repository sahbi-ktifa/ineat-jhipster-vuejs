<template>
    <div class="home row">
        <div class="col-md-6">
            <div style="height:100%">
                <iframe width="720" height="405"
                    src="https://www.youtube.com/embed/dVTzaXmYm_s?autoplay=1" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>
        <div class="col-md-6">
            <div style="height:100%">
                <l-map v-if="marker.lat" :zoom="4" :center="marker">
                    <l-tile-layer :url="'http://{s}.tile.osm.org/{z}/{x}/{y}.png'"></l-tile-layer>
                    <l-marker :lat-lng="marker"></l-marker>
                </l-map>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./home.component.ts">
</script>
