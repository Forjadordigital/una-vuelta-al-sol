import { Pause, Play } from "./Player"
import { usePlayStore } from "@/store/playerStore"

export function CardPlayButton ({ id, size = 'small' }) {
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

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-violet-500 p-3 hover:scale-105 transition hover:bg-violet-400">
            {isPlayingPlayList ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
    )
}