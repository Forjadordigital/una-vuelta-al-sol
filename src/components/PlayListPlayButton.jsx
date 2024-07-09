import { Pause, Play } from "./Player"
import { usePlayStore } from "@/store/playerStore"

export function CardPlayButton ({ id }) {
    const {
        currentMusic,
        isPlaying, 
        setIsPlaying, 
        setCurrentMusic
    } = usePlayStore(state => state)
    
    const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id
    
    const handleClick = () => {
        
        if(isPlayingPlayList){
            setIsPlaying(false)
            return
        }

        // promesa promises
        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const {songs, playlist} = data

                setIsPlaying(true)
                setCurrentMusic({songs, playlist, song: songs[0]})

                console.log({songs, playlist})
            })
        
        // async/await
        // const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
        // const data = await.json()
        // const {songs, playlist} = data
    }


    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-violet-500 p-3">
            {isPlayingPlayList ? <Pause /> : <Play />}
        </button>
    )
}