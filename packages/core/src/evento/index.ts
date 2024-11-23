import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarEvento from "./functions/complementarEvento";
import complementarConvidado from "./functions/complementarConvidado";
import validarConvidado from "./functions/validarConvidado";
import validarEvento from "./functions/validarEvento";
import criarEventoVazio from "./functions/criarEventoVazio";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";

export type { Evento, Convidado };
export {
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
  validarConvidado,
  validarEvento,
};
