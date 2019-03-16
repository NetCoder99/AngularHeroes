export class Hero {
  id: number;
  name: string;
  race: string = "Uknown";

  protected static SInit = (() => {
    Hero.prototype.race = "Uknown";
  })();

}
