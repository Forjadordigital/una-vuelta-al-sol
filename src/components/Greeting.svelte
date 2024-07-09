<script lang="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greeting = ""

    if(currentHour < 12){
        greeting = "Buenos días Signorina"
    } else if (currentHour < 18){
        greeting = "Buenas tardes Signorina"
    } else {
        greeting = "Buenas noches Signorina"
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>