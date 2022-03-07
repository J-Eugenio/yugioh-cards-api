interface ITokenProvider {
  generateToken(id: string, access: number): Promise<string>;
}

export { ITokenProvider };
