export const adjustVolume = (sound, newVolume) => {
    const originalVolume = sound.volume;
    const delta = newVolume + originalVolume;

    console.log(originalVolume,'origin volume')
    console.log('delta', delta)


    const swing = (p) => {
    return 0.5 - Math.cos(p * Math.PI) / 2;
    }

    let duration = 12000;
    let easing = swing;
    let interval = 5;

    if (!delta || !duration || !easing || !interval) {
        sound.volume = newVolume;
        return Promise.resolve();
    }

    const ticks = Math.floor(duration / interval);
    let tick = 1;

    return new Promise(resolve => {
        const timer = setInterval(() => {
            sound.volume = originalVolume + (
                easing(tick / ticks) * delta
            );

            console.log(sound.volume,'volume')

            if (++tick === ticks + 1 || sound.volume > 0.8) {
                clearInterval(timer);
                resolve();
            }
        }, interval);
    });
};