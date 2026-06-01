import { usuarioRepository, type UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioService {
  constructor(private userRepository: UsuarioRepository) {}

  async listarUsuarios() {
    return this.userRepository.listarUsuarios();
  }

  async getUsuarioId(id: number) {
    return this.userRepository.getUsuarioId(id);
  }

  async criarUsuario(dadosUsuario: any) {
    return this.userRepository.criarUsuario(dadosUsuario);
  }

  async atualizarUsuario(id: number, data: any) {
    return this.userRepository.atualizarUsuario(id, data);
  }

  async deletarUsuario(id: number) {
    return this.userRepository.deletarUsuario(id);
  }
}

export const usuarioService = new UsuarioService(usuarioRepository);