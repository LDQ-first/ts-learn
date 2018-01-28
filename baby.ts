export class Baby {
  private _name: string
  constructor(name: string) {
    this._name = name;
    console.log('小宝贝正在哭泣')
  }

  static smile() {
    console.log('(｡◕ˇ∀ˇ◕)')
  }

  public getBabyName(): string {
    return this._name
  }
}

export let baby = new Baby('Mike')
