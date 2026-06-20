export default {
  id: 'org.owdproject.dino',
  title: 'Dino',
  category: 'games',
  singleton: true,
  icon: 'mdi:dinosaur-pixel',
  windows: {
    main: {
      component: () => import('./components/Window/WindowDino.vue'),
      resizable: true,
      maximizable: true,
      size: {
        width: 640,
        height: 300,
      },
    },
  },
  entries: {
    dino: {
      command: 'dino',
    },
  },
  terminal: {
    dino: {
      description: 'Open the Dino game',
    },
  },
  commands: {
    dino: (app: IApplicationController) => {
      const existing = app.getFirstWindowByModel('main')
      if (existing) {
        existing.actions.setActive(true)
        existing.actions.bringToFront()
        return existing
      }

      return app.openWindow('main')
    },
  },
}
