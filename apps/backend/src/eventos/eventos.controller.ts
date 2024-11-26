import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  complementarConvidado,
  complementarEvento,
  Convidado,
  Data,
  Evento,
  Id,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repository: EventoPrisma) {}

  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = await this.repository.buscarPorAlias(evento.alias);
    if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
      throw new HttpException('Já existe um evento com esse alias', 400);
    }

    const eventoCompleto = complementarEvento(this.deserializar(evento));
    await this.repository.salvar(eventoCompleto);
    return this.serializar(eventoCompleto);
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.repository.buscarPorAlias(alias);
    if (!evento) {
      throw new HttpException('Evento não encontrado.', 400);
    }
    const convidadoCompleto = complementarConvidado(convidado);
    await this.repository.salvarConvidado(evento, convidadoCompleto);
    return { message: 'Convidado criado com sucesso!' };
  }

  @Post('acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = await this.repository.buscarPorId(dados.id, true);

    if (!evento) {
      throw new HttpException('Evento não encontrado.', 400);
    }

    if (evento.senha !== dados.senha) {
      throw new HttpException('Senha não corresponde ao evento.', 400);
    }

    return this.serializar(evento);
  }

  @Get()
  async buscarEventos() {
    const eventos = await this.repository.buscarTodos();
    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    let evento: Evento;
    if (Id.validar(idOuAlias)) {
      evento = await this.repository.buscarPorId(idOuAlias, true);
    } else {
      evento = await this.repository.buscarPorAlias(idOuAlias, true);
    }
    return this.serializar(evento);
  }

  @Get('validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repository.buscarPorAlias(alias);
    return { valido: !evento || evento.id === id };
  }

  private serializar(evento: Evento) {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }

  private deserializar(evento: any): Evento {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
}
