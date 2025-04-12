import Express from './src'


class App {
  public loadServer (): void {
    Express.init()
  }
}

export default new App;