import { fireworks } from "@tsparticles/fireworks";
import { soundExplosion0, soundExplosion1, soundExplosion2 } from "../helpers/assets";
import { Header } from "../components/header.js";
import { sidebar, toggleTheme } from "../helpers/header.js";


const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.addEventListener('DomContentLoaded', sidebar())


if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}

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