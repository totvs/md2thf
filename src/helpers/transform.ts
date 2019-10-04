export class Transform {
  /**
   * Converte um texto delimitado por `-` (traço) para o formato `kebab-case`.
   *
   * @param text Texto a ser convertido
   * @return Texto convertido.
   */
  public static kebabCase(text: string): string {
    return text
      .split('-')
      .map(word => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
      .join('-');
  }

  /**
   * Converte um texto delimitado por `-` (traço) para o formato `camelCase`.
   *
   * @param text Texto a ser convertido
   * @return Texto convertido.
   */
  public static camelCase(text: string): string {
    return text
      .split('-')
      .map((w, i) => (i === 0 ? w.charAt(0).toLowerCase() : w.charAt(0).toUpperCase()) + w.slice(1).toLowerCase())
      .join('');
  }

  /**
   * Converte um texto delimitado por `-` (traço) para o formato `PascalCase`.
   *
   * @param text Texto a ser convertido
   * @return Texto convertido.
   */
  public static pascalCase(text: string): string {
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
}
