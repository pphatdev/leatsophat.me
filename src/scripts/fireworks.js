import { fireworks } from "@tsparticles/fireworks";
import { soundExplosion0, soundExplosion1, soundExplosion2 } from "../helpers/assets";

(async () => {
    await fireworks({
        sounds: {
            enable: true,
            events: [
                {
                    event: "particleRemoved",
                    filter: (args) => args.data.particle.options.move.gravity.inverse,
                    audio: [
                        soundExplosion0.replaceAll("dist", '.'),
                        soundExplosion1.replaceAll("dist", '.'),
                        soundExplosion2.replaceAll("dist", '.')
                    ]
                }
            ],
            volume: 50
        }
    });
})();