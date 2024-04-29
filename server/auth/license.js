import {addedIconsToMenu} from './../integrations/NuevaEnergia/modules/CategoriesMenu/';

const licenses = [
  {
    name: "NUEVA_ENERGIA",
    url: "www.nuevaenergia.cl",
    license: "PREMIUM",
    auth: true,
    resolve: addedIconsToMenu,
  },
];

class License {
  onInit = () => {
    const auth = licenses.find(
      (e) => e.url === window.location.host && e.auth === true
    );

    try {
      auth.resolve();
    } catch (error) {
      console.error(
        `Usted no posee una licencia valida para usar este codigo, [403] acceso denegado.
           Para mas informacion contactese con el desarrollador de esta integracion kevindana99@gmail.com
            by: AION TECHNOLOGIES.  `
      );
    }
  };
}

const integration = new License();

integration.onInit();
