export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHast(payload: string, hashed: string): Promise<boolean>;
}
