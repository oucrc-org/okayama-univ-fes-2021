import { MoveDirection } from 'tsparticles/browser'

const options = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        area: 800
      }
    },
    shape: {
      type: 'image',
      image: {
        src: '/shodou/momiji.png',
        width: 100,
        height: 128,
        replaceColor: false
      }
    },
    opacity: {
      value: 0.4,
      animation: {
        enable: false,
        speed: 1,
        sync: false
      }
    },
    size: {
      value: {
        min: 0.1,
        max: 20.0
      },
      anim: {
        enable: false,
        speed: 40,
        sync: false
      }
    },
    links: {
      enable: false
    },
    move: {
      enable: true,
      speed: 4,
      direction: MoveDirection.bottomLeft,
      random: false,
      straight: false,
      outModes: 'out',
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: false
      },
      onClick: {
        enable: false
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  retina_detect: true
}

export default options
