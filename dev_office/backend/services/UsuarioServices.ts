import { usuarioRepository, type UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

    async escolherPlano(usuarioId: number, planoId: number) {
    return await this.usuarioRepository.escolherPlano(
      usuarioId,
      planoId
    );
  }

  async listarUsuarios() {
    return this.usuarioRepository.listarUsuarios();
  }

  async getUsuarioId(id: number) {
    return this.usuarioRepository.getUsuarioId(id);
  }
  async getUsuarioEmail(email: string){
    return this.usuarioRepository.getUsuarioEmail(email)
  }

  async criarUsuario(dadosUsuario: any) {
    
    return this.usuarioRepository.criarUsuario(dadosUsuario);
  }

  async atualizarUsuario(id: number, data: any) {
    return this.usuarioRepository.atualizarUsuario(id, data);
  }

  async deletarUsuario(id: number) {
    return this.usuarioRepository.deletarUsuario(id);
  }
}

export const usuarioService = new UsuarioService(usuarioRepository);